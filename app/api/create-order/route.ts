import { randomBytes, randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getPaymentProduct } from "@/lib/career/paymentCatalog";

const CASHFREE_BASE_URL = process.env.CASHFREE_ENV === "production"
  ? "https://api.cashfree.com/pg/orders"
  : "https://sandbox.cashfree.com/pg/orders";
const attempts = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }
  if (Number(req.headers.get("content-length") || 0) > 8192) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }
  const origin = req.headers.get("origin");
  if (origin && origin !== req.nextUrl.origin) {
    return NextResponse.json({ error: "Request rejected" }, { status: 403 });
  }
  const identity = (req.headers.get("x-forwarded-for") || "local").split(",")[0].trim();
  const now = Date.now();
  const recent = (attempts.get(identity) || []).filter(time => now - time < 900000);
  if (recent.length >= 10) {
    return NextResponse.json({ error: "Too many checkout attempts" }, { status: 429, headers: { "Retry-After": "900" } });
  }
  attempts.set(identity, [...recent, now]);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const product = getPaymentProduct(body.productName);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone : "";
  if (!product || Number(body.amount) !== product.amount) {
    return NextResponse.json({ error: "Invalid product or price" }, { status: 400 });
  }
  if (name.length < 2 || name.length > 100 || email.length > 200 || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid name and email" }, { status: 400 });
  }
  const rawPhone = phone.replace(/\D/g, "");
  if (rawPhone.length < 10) {
    return NextResponse.json({ error: "Enter a valid mobile number" }, { status: 400 });
  }
  if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
  }

  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!configuredBaseUrl) return NextResponse.json({ error: "Site URL not configured" }, { status: 500 });
  let baseUrl: URL;
  try {
    baseUrl = new URL(configuredBaseUrl);
  } catch {
    return NextResponse.json({ error: "Site URL is invalid" }, { status: 500 });
  }
  if (process.env.CASHFREE_ENV === "production" && baseUrl.protocol !== "https:") {
    return NextResponse.json({ error: "Production site URL must use HTTPS" }, { status: 500 });
  }

  const orderId = `SA_${Date.now()}_${randomBytes(5).toString("hex")}`;
  try {
    const response = await fetch(CASHFREE_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        "x-api-version": "2025-01-01",
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: product.amount,
        order_currency: "INR",
        customer_details: {
          customer_id: `cust_${randomUUID()}`,
          customer_name: name,
          customer_email: email,
          customer_phone: rawPhone.slice(-10),
        },
        order_meta: {
          return_url: `${baseUrl.origin}/payment-status?order_id={order_id}&product=${encodeURIComponent(product.name)}`,
        },
        order_note: product.name.slice(0, 450),
      }),
    });

    if (!(response.headers.get("content-type") ?? "").includes("application/json")) {
      console.error("Cashfree returned a non-JSON response.");
      return NextResponse.json({ error: "Unexpected response from payment gateway" }, { status: 502 });
    }
    const data = await response.json() as Record<string, unknown>;
    if (!response.ok) {
      console.error("Cashfree order creation failed", data);
      return NextResponse.json({ error: "Payment order could not be created" }, { status: 502 });
    }
    return NextResponse.json({ payment_session_id: data.payment_session_id, order_id: orderId });
  } catch (error) {
    console.error("Cashfree request failed", error);
    return NextResponse.json({ error: "Could not reach payment gateway" }, { status: 503 });
  }
}
