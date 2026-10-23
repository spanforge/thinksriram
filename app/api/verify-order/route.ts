import { NextRequest, NextResponse } from "next/server";

const CASHFREE_BASE_URL = process.env.CASHFREE_ENV === "production"
  ? "https://api.cashfree.com/pg/orders"
  : "https://sandbox.cashfree.com/pg/orders";

export async function GET(req: NextRequest) {
  const orderId = req.nextUrl.searchParams.get("order_id");
  if (!orderId || !/^SA_\d{13}_[a-z0-9]{5,10}$/i.test(orderId)) {
    return NextResponse.json({ error: "Invalid order_id" }, { status: 400 });
  }
  if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
  }

  try {
    const response = await fetch(`${CASHFREE_BASE_URL}/${encodeURIComponent(orderId)}/payments`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
        "x-api-version": "2025-01-01",
      },
    });
    const data = await response.json() as Array<{ payment_status?: string }>;
    if (!response.ok) return NextResponse.json({ error: "Failed to verify order" }, { status: 502 });
    const statuses = Array.isArray(data) ? data.map(payment => payment.payment_status?.toUpperCase()) : [];
    const orderStatus = statuses.includes("SUCCESS")
      ? "PAID"
      : statuses.includes("PENDING")
        ? "ACTIVE"
        : statuses.some(status => status === "FAILED" || status === "USER_DROPPED" || status === "CANCELLED") ? "FAILED" : "ACTIVE";
    return NextResponse.json({ order_status: orderStatus }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Could not reach payment gateway" }, { status: 503 });
  }
}
