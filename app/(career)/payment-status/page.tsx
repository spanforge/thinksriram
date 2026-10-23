"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/career/Footer";
import Navbar from "@/components/career/Navbar";

function PaymentStatusContent() {
  const params = useSearchParams();
  const orderId = params.get("order_id");
  const product = params.get("product");
  const normalizedProduct = product?.toLowerCase() ?? "";
  const isGuidePurchase = normalizedProduct.includes("guide");
  const isServicePurchase =
    normalizedProduct.includes("service") || normalizedProduct.includes("audit");
  const homeLink = isGuidePurchase ? "/guides" : isServicePurchase ? "/assessments" : "/reports";
  const successMessage = isGuidePurchase
    ? "Your guide will be emailed to the address you provided after payment confirmation. Please check your spam folder as well."
    : isServicePurchase
      ? "We will email the intake instructions for your assessment. Delivery timing follows the offer you purchased."
      : "Your purchase will be delivered to the email you provided according to the delivery timing on the product page. Check your spam folder and keep your order ID for support.";
  const pendingMessage = isGuidePurchase
    ? "Your payment is being processed. If it was successful, your guide should reach your email within 30 minutes. If you were charged and do not hear from us after that, please contact us."
    : isServicePurchase
      ? "Your payment is being processed. If it was successful, we will contact you on your email with next steps for submitting your resume and LinkedIn profile."
      : "Your payment is being processed. If it was successful, you will receive your report by email shortly. If you were charged and do not receive it within 30 minutes, please contact us.";

  const [status, setStatus] = useState<"loading" | "success" | "pending" | "failed">(
    orderId ? "loading" : "failed"
  );

  useEffect(() => {
    if (!orderId) {
      return;
    }

    fetch(`/api/verify-order?order_id=${encodeURIComponent(orderId)}`)
      .then(async (r) => { if (!r.ok) throw new Error("Verification unavailable"); return r.json(); })
      .then((data) => {
        const orderStatus = data.order_status?.toUpperCase();
        if (orderStatus === "PAID") {
          setStatus("success");
          return;
        }
        if (orderStatus === "ACTIVE" || orderStatus === "CREATED") {
          setStatus("pending");
          return;
        }
        setStatus("failed");
      })
      .catch(() => setStatus("pending"));
  }, [orderId]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        {status === "loading" && (
          <>
            <div style={{ fontSize: 48, marginBottom: 20 }}>...</div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0a1628", marginBottom: 12 }}>
              Checking payment...
            </h1>
            <p style={{ color: "#5a6a8a", fontSize: 16 }}>Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div style={{ fontSize: 64, marginBottom: 20 }}>OK</div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1e6b3a", marginBottom: 16 }}>
              Payment Successful!
            </h1>
            {product && (
              <p style={{ fontSize: 18, color: "#0a1628", marginBottom: 12 }}>
                Thank you for purchasing <strong>{product}</strong>.
              </p>
            )}
            <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 32 }}>
              {successMessage}
            </p>
            <p style={{ fontSize: 15, color: "#5a6a8a", marginBottom: 8 }}>Order ID: {orderId}</p>
            <Link
              href={homeLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#1e6b3a",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 28px",
                borderRadius: 10,
                textDecoration: "none",
                marginTop: 16,
              }}
            >
              {isGuidePurchase
                ? "Back to Guides ->"
                : isServicePurchase
                  ? "Back to Services ->"
                  : "Back to Products ->"}
            </Link>
          </>
        )}

        {status === "pending" && (
          <>
            <div style={{ fontSize: 56, marginBottom: 20 }}>...</div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: "#0a1628", marginBottom: 16 }}>
              Payment Processing
            </h1>
            <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 32 }}>
              {pendingMessage}
            </p>
            <p style={{ fontSize: 13, color: "#8898b8", marginBottom: 24 }}>Order ID: {orderId}</p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#1a4fd6",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 28px",
                borderRadius: 10,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </>
        )}

        {status === "failed" && (
          <>
            <div style={{ fontSize: 56, marginBottom: 20 }}>X</div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: "#c0392b", marginBottom: 16 }}>
              Payment Not Completed
            </h1>
            <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.7, marginBottom: 32 }}>
              Payment could not be confirmed. If your account was debited, contact us with your order ID before trying again.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href={homeLink}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#1a4fd6",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Try Again
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#1a4fd6",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid #1a4fd6",
                }}
              >
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentStatusPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "#5a6a8a" }}>Loading...</p>
          </div>
        }
      >
        <PaymentStatusContent />
      </Suspense>
      </div>
      <Footer />
    </div>
  );
}
