import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sriram Advisory",
  description: "Terms of service for the Product and Market Review and existing Sriram Advisory products.",
  alternates: { canonical: "/purchase-terms" },
};

const LAST_UPDATED = "12 October 2026";

export default function TermsPage() {
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
          }}>Terms of Service</h1>
          <p style={{ fontSize: 14, color: "#8898b8", fontFamily: "var(--font-dm-mono), monospace" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10" style={{ background: "#ffffff", paddingTop: 64, paddingBottom: 80 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {[
            {
              heading: "1. Acceptance of Terms",
              body: `By accessing this website or purchasing any service from Sriram Advisory, you agree to these Terms of Service. If you do not agree, do not use this website or purchase any service.`,
            },
            {
              heading: "2. Services Offered",
              body: `Sriram Advisory currently offers:
- Product and Market Review: a paid advisory engagement focused on one agreed question about an idea, market, distribution or adoption
- Digital career guides, research reports, and report bundles shown in the Resources catalogue
- SA-AIRS assessments and the Career Positioning Audit shown on the Assessments pages
- Business and Delivery Health Check engagements agreed through a written proposal

The product page or written proposal shown before purchase defines the scope, price, deliverables, and any applicable delivery timing. Sending a review enquiry is free and does not create a paid booking. A review starts only after the written scope, timetable, evidence requirements and fee are agreed.`,
            },
            {
              heading: "3. Nature of the Service",
              body: `The Product and Market Review provides advisory judgement based on available evidence. It may recommend proceeding, revising, pausing or gathering more evidence. It does not guarantee demand, customer adoption, revenue or product success. Development, advertising, creative production, sales execution, interviews, surveys, participant recruitment and paid data are included only where explicitly agreed in the written scope.

SA-AIRS(TM) assessments are structured analytical opinions based on the information you provide and Sriram Advisory's proprietary methodology. They are not financial advice, legal advice, or a guarantee of any employment outcome.

The accuracy of the assessment depends on the accuracy and completeness of the information you provide. Providing false or incomplete information will affect the quality of your results.`,
            },
            {
              heading: "4. Delivery",
              body: `Digital products are delivered to the email address provided at checkout according to the timing stated on the relevant product page. Personalised assessments and audits are delivered according to the timing stated on their service page. Product and Market Review and other advisory scope, schedule, outputs, and fees are confirmed in a written proposal before work begins.

If an exceptional delay affects an order, you will be notified using the contact information supplied with the purchase.`,
            },
            {
              heading: "5. Payment",
              body: `Online payments are processed by the payment provider shown at checkout. Sriram Advisory does not store payment card details. Prices are shown in Indian Rupees (INR) unless otherwise stated and include applicable taxes where required.`,
            },
            {
              heading: "6. Intellectual Property",
              body: `The SA-AIRS(TM) methodology, scoring rubrics, dimension weights, and all content on this website are the intellectual property of Sriram Advisory. You may not reproduce, redistribute, or create derivative works from any assessment output without explicit written permission.

You may share your own personal assessment results for your personal career purposes.`,
            },
            {
              heading: "7. Limitation of Liability",
              body: `Sriram Advisory's liability in connection with any service is limited to the amount paid for that specific service. We are not liable for indirect, consequential, or incidental damages arising from use of our services or reliance on assessment results.

Career decisions are yours to make. The assessment is a tool - not a directive.`,
            },
            {
              heading: "8. Governing Law",
              body: `These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.`,
            },
            {
              heading: "9. Changes to Terms",
              body: `We may update these terms at any time. The current version is always published at thinksriram.com/purchase-terms. Continued use of the service after a material change constitutes acceptance of the updated terms.`,
            },
            {
              heading: "10. Contact",
              body: `For any questions about these terms, email sriram@sriramadvisory.com.`,
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

