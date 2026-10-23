"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { track } from "@/lib/career/analytics";

interface Props {
  productName: string;
  amount: number;
  buttonLabel: string;
  buttonStyle?: React.CSSProperties;
  accentColor: string;
  deliveryNote?: string;
  emailNote?: string;
  footerNote?: string;
}

export default function CashfreeCheckout({
  productName,
  amount,
  buttonLabel,
  buttonStyle,
  accentColor,
  deliveryNote = "Delivery details will be sent to your email after payment.",
  emailNote = "Your purchase details will be sent to this email.",
  footerNote = "Secured by Cashfree Payments. Your data is encrypted. One-time payment.",
}: Props) {
  const checkoutId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => firstInputRef.current?.focus(), 0);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  async function handlePay(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    track("Checkout Submit", { product: productName, amount });

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName,
          amount,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.payment_session_id) {
        setError(data.error ?? "Could not create order. Please try again.");
        setLoading(false);
        return;
      }

      const env = (process.env.NEXT_PUBLIC_CASHFREE_ENV ?? "sandbox") as
        | "sandbox"
        | "production";
      const { load } = await import("@cashfreepayments/cashfree-js");
      const cashfree = await load({ mode: env });

      await cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_self",
      });
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        data-checkout-product={productName}
        data-checkout-amount={amount}
        aria-haspopup="dialog"
        onClick={() => {
          track("Checkout Start", { product: productName, amount });
          setOpen(true);
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          border: "none",
          fontFamily: "inherit",
          ...buttonStyle,
        }}
      >
        {buttonLabel}
      </button>

      {open && createPortal(
        <div
          className="career-checkout-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10,22,40,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            style={{
              maxHeight: "calc(100dvh - 40px)",
              overflowY: "auto",
              overscrollBehavior: "contain",
              background: "#fff",
              borderRadius: 16,
              padding: "36px 32px",
              maxWidth: 440,
              width: "100%",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              position: "relative",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${checkoutId}-title`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                color: "#8898b8",
                lineHeight: 1,
              }}
            >
              x
            </button>

            <div style={{ marginBottom: 24 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#5a6a8a",
                  marginBottom: 6,
                }}
              >
                Secure Checkout
              </p>
              <h2
                id={`${checkoutId}-title`}
                style={{ fontSize: 20, fontWeight: 800, color: "#0a1628", marginBottom: 4 }}
              >
                {productName}
              </h2>
              <p style={{ fontSize: 28, fontWeight: 800, color: accentColor }}>Rs {amount}</p>
              <p style={{ fontSize: 12, color: "#6b7a96", marginTop: 8, lineHeight: 1.5 }}>
                {deliveryNote}
              </p>
            </div>

            <form onSubmit={handlePay} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label
                  htmlFor={`${checkoutId}-name`}
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#5a6a8a",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Full Name
                </label>
                <input
                  ref={firstInputRef}
                  id={`${checkoutId}-name`}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  maxLength={100}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1.5px solid #dde3f0",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor={`${checkoutId}-email`}
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#5a6a8a",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Email Address
                </label>
                <input
                  id={`${checkoutId}-email`}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  maxLength={200}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1.5px solid #dde3f0",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
                <p style={{ fontSize: 11, color: "#8898b8", marginTop: 5 }}>
                  {emailNote}
                </p>
              </div>

              <div>
                <label
                  htmlFor={`${checkoutId}-phone`}
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#5a6a8a",
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Mobile Number
                </label>
                <input
                  id={`${checkoutId}-phone`}
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={15}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1.5px solid #dde3f0",
                    fontSize: 15,
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "inherit",
                  }}
                />
                <p style={{ fontSize: 11, color: "#8898b8", marginTop: 5 }}>
                  Required by the payment provider for transaction support.
                </p>
              </div>

              {error && (
                <p role="alert"
                  style={{
                    fontSize: 13,
                    color: "#c0392b",
                    background: "#fff0f0",
                    padding: "8px 12px",
                    borderRadius: 6,
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: accentColor,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "13px 24px",
                  borderRadius: 10,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  fontFamily: "inherit",
                  transition: "opacity 0.15s",
                  marginTop: 4,
                }}
              >
                {loading ? "Opening payment..." : `Pay Rs ${amount} ->`}
              </button>
            </form>

            <p style={{ fontSize: 13, color: "#8898b8", marginTop: 16, lineHeight: 1.5, textAlign: "center" }}>
              {footerNote}
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
