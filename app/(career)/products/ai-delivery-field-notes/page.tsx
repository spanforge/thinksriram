import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import ProductRecommendations from "@/components/career/ProductRecommendations";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import ProductStructuredData from "@/components/career/ProductStructuredData";

export const metadata: Metadata = {
  title: "AI Delivery Field Notes | Think Sriram",
  description:
    "A practical field guide for the person carrying an AI initiative from pilot to production. Includes field notes, templates, scorecards, war stories, and maturity model guidance. Rs 499.",
  alternates: { canonical: "/products/ai-delivery-field-notes" },
};

const INCLUDED_RESOURCES = [
  {
    title: "7 field notes",
    desc: "The recurring patterns behind enterprise AI initiatives that stall between pilot and production.",
  },
  {
    title: "4 working templates",
    desc: "Model Card, Risk Register, Incident Log, and Production Readiness Checklist.",
  },
  {
    title: "3 decision frameworks",
    desc: "Stakeholder mapping, business case translation, and coalition building.",
  },
  {
    title: "3 war stories",
    desc: "Enterprise deployment patterns covering governance delay, infosec surprise, and business case failure.",
  },
  {
    title: "1 maturity model",
    desc: "A practical Level 1 to Level 5 map for growing from tool user to trusted AI delivery leader.",
  },
];

const PREVIEW_SIGNALS = [
  "Why governance is usually a documentation and trust problem, not a model problem",
  "How invisible stakeholders can stop an AI project without attending a single meeting",
  "Why a successful pilot is often the most dangerous moment in the initiative",
];

const CONTENTS = [
  "The Governance Gap Is Where AI Goes to Die",
  "Sample Model Card",
  "The Stakeholder Map Nobody Draws",
  "Why Your Pilot Worked and Production Will Not",
  "Production Readiness Checklist and Scorecard",
  "AI Risk Register Template",
  "The Infosec Conversation You Are Avoiding",
  "Making the Business Case When Nobody Speaks Model",
  "The Lone Advocate Problem",
  "When AI Goes Wrong in Production",
  "AI Incident Log Template",
  "Field Patterns: Three War Stories",
  "AI Delivery Maturity Model",
];

const FOR_YOU = [
  "You own an AI initiative but do not control every budget, policy, data, or security decision around it.",
  "Your pilot worked and you now need to move toward production without losing governance trust.",
  "You need practical documents, language, and review artifacts before the next stakeholder meeting.",
  "You are operating at Level 2 or early Level 3 and want to become trusted for AI delivery outcomes.",
];

const NOT_FOR_YOU = [
  "You want a prompt library, tool tutorial, or model-building course.",
  "You are looking for a broad AI trend report instead of delivery intelligence.",
  "You already run enterprise-wide AI governance and need board-level transformation strategy.",
];

const READINESS_ITEMS = [
  "Model performance owner",
  "Human escalation path",
  "Rollback procedure",
  "Support team readiness",
  "Business metric alignment",
  "Data drift monitoring",
  "Infosec sign-off",
  "Incident contacts",
];

const primaryButtonStyle = {
  background: "#1a4fd6",
  color: "#ffffff",
  fontWeight: 800,
  fontSize: 16,
  padding: "15px 28px",
  borderRadius: 10,
  border: "1px solid #3b6ef0",
  width: "100%",
  justifyContent: "center",
  boxShadow: "0 14px 34px rgba(26,79,214,0.24)",
} as const;

export default function AIChampionFieldNotesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <ProductStructuredData name="AI Delivery Field Notes" description="A practical guide to carrying an AI initiative from pilot to trusted production rollout." path="/products/ai-delivery-field-notes" price={499} />

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 58%, #1a4fd6 100%)",
          padding: "100px 20px 84px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 48px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 30,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
              <span
                style={{
                  display: "inline-flex",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#93b4ff",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                AI Delivery Intelligence Series
              </span>
              <span
                style={{
                  display: "inline-flex",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fbbf24",
                  background: "rgba(217,119,6,0.16)",
                }}
              >
                2026 Edition
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(38px, 5.5vw, 66px)",
                fontWeight: 850,
                color: "#ffffff",
                lineHeight: 1.05,
                marginBottom: 20,
                letterSpacing: "-0.03em",
              }}
            >
              AI Delivery Field Notes
              <br />
              <span style={{ color: "#fbbf24" }}>From pilot to production</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 2.2vw, 21px)",
                lineHeight: 1.7,
                color: "rgba(231,239,255,0.9)",
                maxWidth: 700,
                marginBottom: 14,
              }}
            >
              A practical guide to the hidden work between a successful AI pilot and a trusted production rollout.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(231,239,255,0.72)", maxWidth: 660, marginBottom: 28 }}>
              Built for the person coordinating governance, stakeholder confidence, operational readiness, and delivery momentum across the organisation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["22 pages", "Templates included", "Email delivery"].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 999,
                    color: "#f8fbff",
                    padding: "10px 15px",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "28px 24px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93b4ff", marginBottom: 8 }}>
              Field Guide
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: 8 }}>
              Rs 499
            </div>
            <p style={{ fontSize: 13, color: "rgba(231,239,255,0.74)", lineHeight: 1.6, marginBottom: 18 }}>
              One-time purchase. Email delivery usually lands within 30 minutes.
            </p>
            <CashfreeCheckout
              productName="AI Delivery Field Notes"
              amount={499}
              accentColor="#1a4fd6"
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your AI Delivery Field Notes guide will be delivered to this email."
              footerNote="Secured by Cashfree Payments. One-time payment. Delivered to your inbox, typically within 30 minutes."
              buttonLabel="Continue to secure payment ->"
              buttonStyle={primaryButtonStyle}
            />
            <p style={{ marginTop: 14, fontSize: 12, color: "rgba(231,239,255,0.58)", lineHeight: 1.6 }}>
              Individual use. Free updates included for this edition.
            </p>
          </aside>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "28px 20px 20px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {PREVIEW_SIGNALS.map((item) => (
            <div
              key={item}
              style={{
                background: "#f8fbff",
                border: "1px solid #dbe5f5",
                borderRadius: 14,
                padding: "18px",
                color: "#31435f",
                lineHeight: 1.65,
                fontSize: 14,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f4f7fc", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>
              What Is Inside
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 850, color: "#0a1628", marginTop: 12, letterSpacing: "-0.02em" }}>
              Practical resources for moving AI from pilot to production
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {INCLUDED_RESOURCES.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbe5f5",
                  borderRadius: 16,
                  padding: "24px 22px",
                }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 850, color: "#1a4fd6", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#52627e", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 28 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Preview
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.12, marginTop: 12, marginBottom: 16 }}>
              Built around the work that decides whether AI reaches production
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#425472" }}>
              The guide helps AI Delivery practitioners prepare for governance reviews, stakeholder questions, production readiness, and incident planning before those issues slow the initiative down.
            </p>
          </div>

          <div style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 16, padding: "24px" }}>
            <h3 style={{ fontSize: 18, fontWeight: 850, color: "#0a1628", marginBottom: 14 }}>
              Production readiness signals covered
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
              {READINESS_ITEMS.map((item) => (
                <div key={item} style={{ background: "#ffffff", border: "1px solid #e1e8f4", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: "#425472" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>
              Inside The Guide
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.8vw, 38px)", marginTop: 12 }}>
              A clear map of the field notes, templates, and frameworks included
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {CONTENTS.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "grid",
                  gridTemplateColumns: "42px 1fr",
                  gap: 12,
                  alignItems: "center",
                  background: "#ffffff",
                  border: "1px solid #dbe5f5",
                  borderRadius: 10,
                  padding: "14px",
                }}
              >
                <span style={{ color: "#1a4fd6", fontWeight: 900, fontSize: 13 }}>{String(index + 1).padStart(2, "0")}</span>
                <span style={{ color: "#344766", lineHeight: 1.45, fontSize: 14 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
          <div style={{ background: "#0a1628", borderRadius: 16, padding: "28px 26px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#93b4ff", marginBottom: 14 }}>
              This Is For You If
            </div>
            <div style={{ display: "grid", gap: 13 }}>
              {FOR_YOU.map((item) => (
                <p key={item} style={{ color: "#d7e4f2", lineHeight: 1.7, margin: 0, fontSize: 15 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 16, padding: "28px 26px" }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 14 }}>
              Not For You If
            </div>
            <div style={{ display: "grid", gap: 13 }}>
              {NOT_FOR_YOU.map((item) => (
                <p key={item} style={{ color: "#425472", lineHeight: 1.7, margin: 0, fontSize: 15 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 58%, #1a4fd6 100%)",
          padding: "96px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", color: "#ffffff", lineHeight: 1.12, marginBottom: 16 }}>
            Get the field guide for moving AI from pilot to production
          </h2>
          <p style={{ fontSize: 17, color: "rgba(231,239,255,0.82)", lineHeight: 1.75, marginBottom: 28 }}>
            The goal is not to become a better AI user. The goal is to become someone trusted to deliver AI outcomes.
          </p>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <div style={{ fontSize: 42, fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>Rs 499</div>
            <CashfreeCheckout
              productName="AI Delivery Field Notes"
              amount={499}
              accentColor="#1a4fd6"
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your AI Delivery Field Notes guide will be delivered to this email."
              footerNote="Secured by Cashfree Payments. One-time payment. Delivered to your inbox, typically within 30 minutes."
              buttonLabel="Buy now ->"
              buttonStyle={primaryButtonStyle}
            />
            <p style={{ fontSize: 13, color: "rgba(231,239,255,0.58)", marginTop: 14 }}>
              Secure payment via Cashfree. Email delivery usually lands within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      <ProductRecommendations />
      </div>
      <Footer />
    </div>
  );
}
