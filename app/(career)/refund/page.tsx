import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import type { Metadata } from "next";
import { proRefundPromise } from "@/lib/career/commercialCopy";

export const metadata: Metadata = {
  title: "Refund Policy | Think Sriram",
  description: "Refund policy for Sriram Advisory digital products, assessments and advisory engagements.",
  alternates: { canonical: "/refund" },
};

const LAST_UPDATED = "12 October 2026";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <section className="px-5 md:px-10" style={{ paddingTop: 120, paddingBottom: 80, background: "#0a1628" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-dm-mono, 'DM Mono', monospace)",
            fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#4fc3f7", marginBottom: 20,
          }}>Legal</div>
          <h1 style={{
            fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
            fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1,
            letterSpacing: "0.02em", color: "#f8faff", margin: "0 0 20px",
          }}>Refund Policy</h1>
          <p style={{ fontSize: 14, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {/* Summary box */}
          <div style={{
            padding: "24px 28px", marginBottom: 48,
            background: "rgba(26,79,214,0.05)",
            border: "1px solid rgba(26,79,214,0.15)",
            borderRadius: 12,
          }}>
            <div style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 13, color: "#1a4fd6", letterSpacing: "0.1em", marginBottom: 10,
            }}>THE SHORT VERSION</div>
            <p style={{ fontSize: 15, color: "#0a1628", lineHeight: 1.75, margin: 0 }}>
              If a delivered product or service is materially incomplete or does not match its published description, email us within 7 days of delivery.
              We will review the issue and, where appropriate, replace the file, correct or re-do the work, or issue a refund.
            </p>
          </div>

          {[
            {
              heading: "Career Intelligence Report – Pro: specific refund promise",
              body: `${proRefundPromise} This product-specific promise applies in addition to the general policy below. Earlier purchases retain the offer confirmed at the time of purchase.`,
            },
            {
              heading: "1. Digital Guides, Reports, and Bundles",
              body: `Because digital files cannot be returned, a completed and accessible digital delivery is normally final. If a file was not delivered, cannot be opened, is materially incomplete, or does not match the product description, email sriram@sriramadvisory.com within 7 days of delivery. We will replace or correct the file, or issue a refund where the issue cannot be resolved.`,
            },
            {
              heading: "2. Personalised Assessments and Audits",
              body: `If a personalised assessment or audit was not delivered, was materially incomplete, or did not reflect the information you submitted, email us within 7 days of delivery. We will review the issue and either correct or re-do the work at no charge, or issue a refund where the issue cannot be resolved.`,
            },
            {
              heading: "3. Product and Market Review and Other Advisory Engagements",
              body: `Cancellation, rescheduling, and refund terms for a Product and Market Review, Business and Delivery Health Check or other agreed advisory work are stated in the written proposal. If the delivered work is materially incomplete against that proposal, contact us within 7 days so the issue can be reviewed and resolved.`,
            },
            {
              heading: "4. Legacy Purchases",
              body: `A product or service purchased under an earlier written offer remains subject to the terms confirmed at the time of purchase. Email sriram@sriramadvisory.com with the order reference if you need help with a previous purchase.`,
            },
            {
              heading: "5. How to Request a Refund",
              body: `Email sriram@sriramadvisory.com with:
- Subject line: "Refund Request - [your name]"
- Brief description of the issue
- Your order confirmation or payment reference

We will respond within 2 business days. Approved refunds are returned to the original payment method through the payment provider. Processing time after approval depends on that provider and your bank.`,
            },
            {
              heading: "6. Our Commitment",
              body: `If the work was not what was described, we will review the issue fairly and work to correct it. Nothing in this policy limits rights available under applicable law.`,
            },
          ].map((section) => (
            <div key={section.heading} style={{ marginBottom: 40 }}>
              <h2 style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)",
                fontSize: 22, letterSpacing: "0.04em", color: "#0a1628",
                margin: "0 0 12px",
              }}>{section.heading}</h2>
              <p style={{
                fontSize: 15, color: "#3a4a6a", lineHeight: 1.8,
                margin: 0, whiteSpace: "pre-line",
              }}>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

