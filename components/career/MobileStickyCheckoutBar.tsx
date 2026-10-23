"use client";

import CashfreeCheckout from "@/components/career/CashfreeCheckout";

type MobileStickyCheckoutBarProps = {
  productName: string;
  amount: number;
  accentColor: string;
  buttonLabel: string;
  deliveryNote?: string;
  emailNote?: string;
  footerNote?: string;
};

export default function MobileStickyCheckoutBar({
  productName,
  amount,
  accentColor,
  buttonLabel,
  deliveryNote,
  emailNote,
  footerNote,
}: MobileStickyCheckoutBarProps) {
  return (
    <div
      className="mobile-sticky-checkout"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        padding: "12px 14px calc(12px + env(safe-area-inset-bottom, 0px))",
        background: "rgba(255,255,255,0.96)",
        borderTop: "1px solid rgba(10,22,40,0.08)",
        boxShadow: "0 -14px 32px rgba(10,22,40,0.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CashfreeCheckout
        productName={productName}
        amount={amount}
        accentColor={accentColor}
        deliveryNote={deliveryNote}
        emailNote={emailNote}
        footerNote={footerNote}
        buttonLabel={buttonLabel}
        buttonStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          background: accentColor,
          color: "#ffffff",
          fontWeight: 700,
          fontSize: 16,
          padding: "15px 18px",
          borderRadius: 12,
          border: "none",
          letterSpacing: "0.01em",
          boxShadow: "0 10px 22px rgba(10,22,40,0.14)",
        }}
      />
      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-checkout {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
