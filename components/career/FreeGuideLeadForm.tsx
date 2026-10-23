"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojzewly";

type FreeGuideLeadFormProps = {
  guideTitle: string;
  accentColor: string;
  buttonLabel?: string;
};

export default function FreeGuideLeadForm({
  guideTitle,
  accentColor,
  buttonLabel = "Get this free guide ->",
}: FreeGuideLeadFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        style={{
          fontSize: 17,
          fontWeight: 700,
          padding: "16px 24px",
          borderRadius: 10,
          background: accentColor,
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.01em",
          width: "100%",
        }}
      >
        {isOpen ? "Hide form" : hasSubmitted ? "Details submitted" : buttonLabel}
      </button>

      {isOpen && (
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={async (event) => {
            event.preventDefault();
            setIsSubmitting(true);
            setErrorMessage("");
            setHasSubmitted(false);

            const form = event.currentTarget;
            const formData = new FormData(form);

            try {
              const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              });

              if (!response.ok) {
                const payload = (await response.json().catch(() => null)) as
                  | { errors?: { message?: string }[] }
                  | null;
                const message =
                  payload?.errors?.[0]?.message ?? "Something went wrong while sending the form. Please try again.";
                throw new Error(message);
              }

              form.reset();
              setHasSubmitted(true);
              setIsOpen(false);
            } catch (error) {
              setErrorMessage(
                error instanceof Error
                  ? error.message
                  : "Something went wrong while sending the form. Please try again."
              );
            } finally {
              setIsSubmitting(false);
            }
          }}
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 16,
            padding: "18px 16px",
            display: "grid",
            gap: 14,
            textAlign: "left",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c7d2fe",
                marginBottom: 6,
              }}
            >
              Free Access Form
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.76)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Leave your details to request access to {guideTitle}.
            </p>
          </div>

          <input type="hidden" name="guide" value={guideTitle} />
          <input type="hidden" name="_subject" value={`${guideTitle} free guide request`} />

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>
              Phone <span style={{ color: "rgba(255,255,255,0.62)", fontWeight: 500 }}>(optional)</span>
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="+91"
              style={inputStyle}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              fontSize: 15,
              fontWeight: 700,
              padding: "14px 18px",
              borderRadius: 10,
              background: isSubmitting ? "rgba(255,255,255,0.7)" : "#ffffff",
              color: "#0a1628",
              border: "none",
              cursor: isSubmitting ? "wait" : "pointer",
            }}
          >
            {isSubmitting ? "Submitting..." : "Submit details"}
          </button>

          {errorMessage && (
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#fee2e2",
                lineHeight: 1.6,
              }}
            >
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 15,
  color: "#0a1628",
  background: "#ffffff",
} satisfies React.CSSProperties;
