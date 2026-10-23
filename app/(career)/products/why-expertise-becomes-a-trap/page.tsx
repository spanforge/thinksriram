import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import ProductRecommendations from "@/components/career/ProductRecommendations";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import MobileStickyCheckoutBar from "@/components/career/MobileStickyCheckoutBar";
import ProductStructuredData from "@/components/career/ProductStructuredData";

export const metadata: Metadata = {
  title: "Why Expertise Becomes a Trap | Think Sriram",
  description:
    "A Sriram Advisory Intelligence Series report on why expertise can become a trap during AI-driven change, automation, and professional reinvention. Rs 499.",
  alternates: { canonical: "/products/why-expertise-becomes-a-trap" },
};

const WHAT_YOU_GET = [
  {
    title: "The hidden displacement pattern",
    desc: "A clear explanation of why skilled, specialised, and experienced professionals can become vulnerable when the market changes the problem itself.",
  },
  {
    title: "Competency trap lens",
    desc: "A systems view of how accumulated expertise can become too tightly tied to yesterday's questions, workflows, and assumptions.",
  },
  {
    title: "Psychology of missed disruption",
    desc: "Why smart people often read change too late, defend the old model too long, and mistake past competence for future safety.",
  },
  {
    title: "future-of-work interpretation",
    desc: "How AI changes the equation by compressing knowledge work, documentation, analysis, testing, coordination, and repeatable expert routines.",
  },
  {
    title: "SA-AIRS foundation",
    desc: "The intellectual foundation behind Sriram Advisory's AI risk framework across task repetition, automation feasibility, saturation, decision complexity, and human dependency.",
  },
  {
    title: "Practical takeaways",
    desc: "A sharper way to think about reinvention, role durability, and the difference between protecting expertise and repositioning it.",
  },
];

const PREVIEW_SIGNALS = [
  "Why the best people are not automatically safe during technological transitions",
  "How experts can be bypassed when the market stops valuing the task they mastered",
  "Why expertise survives only when it stays attached to problems, judgment, and human dependency",
];

const FOR_WHOM = [
  "Senior IT professionals with 8+ years of experience navigating AI-driven change",
  "Managers and team leads responsible for workforce decisions",
  "HR and L&D professionals designing reskilling programmes",
  "Founders and consultants advising on organizational transformation",
  "Professionals who suspect expertise alone is no longer enough",
];

const NOT_FOR = [
  "Readers looking for a tool tutorial, certification path, or step-by-step career guide",
  "People who want simple reassurance that seniority alone protects them",
  "Anyone expecting a broad AI news summary instead of a structural intelligence report",
];

export default function WhyExpertiseBecomesATrapPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <ProductStructuredData name="Why Expertise Becomes a Trap" description="An intelligence report on expertise, AI-driven change and professional reinvention." path="/products/why-expertise-becomes-a-trap" price={499} />

      <section
        style={{
          background: "linear-gradient(135deg, #160820 0%, #2e1065 58%, #7c3aed 100%)",
          paddingTop: 100,
          paddingBottom: 84,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 80% 30%, #ffffff 0, transparent 24%), linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#e9d5ff",
              }}
            >
              Intelligence Report Series 01
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(124,58,237,0.24)",
                border: "1px solid rgba(216,180,254,0.32)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#f3e8ff",
              }}
            >
              Published June 2026
            </span>
          </div>

          <div
            className="home-two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.05fr) minmax(320px,0.95fr)",
              gap: 28,
              alignItems: "center",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 62px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.06,
                  marginBottom: 18,
                  letterSpacing: "-0.03em",
                }}
              >
                Why Expertise Becomes a Trap
                <br />
                <span style={{ color: "#d8b4fe" }}>The hidden pattern behind automation pressure</span>
              </h1>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.75,
                  color: "rgba(250,245,255,0.9)",
                  maxWidth: 700,
                  marginBottom: 16,
                }}
              >
                A Sriram Advisory intelligence report on why skilled professionals become vulnerable during technological transitions, and why that pattern is playing out again with AI.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(243,232,255,0.76)",
                  maxWidth: 660,
                  marginBottom: 30,
                }}
              >
                This is not a career guide or tool roadmap. It explains the structural pattern behind automation, expertise, and professional reinvention.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  "Premium paid report",
                  "SA-AIRS framework foundation",
                  "Built for strategic clarity",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 999,
                      padding: "10px 16px",
                      fontSize: 13,
                      color: "#faf5ff",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 24,
                padding: "28px 24px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#e9d5ff", marginBottom: 10 }}>
                Report Price
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 46, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                  Rs 499
                </span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(250,245,255,0.78)", lineHeight: 1.6, margin: "0 0 18px" }}>
                Delivered to your inbox, typically within 30 minutes of payment.
              </p>
              <CashfreeCheckout
                productName="Why Expertise Becomes a Trap - SA Intelligence Report"
                amount={499}
                accentColor="#7c3aed"
                deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
                emailNote="Your Why Expertise Becomes a Trap report will be delivered to this email."
                buttonLabel="Get the report ->"
                buttonStyle={{
                  background: "#7c3aed",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 32px",
                  borderRadius: 10,
                  border: "1px solid #a78bfa",
                  width: "100%",
                  justifyContent: "center",
                }}
              />
              <p style={{ marginTop: 14, fontSize: 12, color: "rgba(243,232,255,0.62)", lineHeight: 1.6 }}>
                One-time purchase via Cashfree. No subscription. Delivered to your inbox, typically within 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "28px 20px 16px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {PREVIEW_SIGNALS.map((item) => (
            <div
              key={item}
              style={{
                background: "#faf5ff",
                border: "1px solid #d8b4fe",
                borderRadius: 14,
                padding: "18px 18px",
                fontSize: 14,
                color: "#3f2a5f",
                lineHeight: 1.65,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fbf8ff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>
              What You Get
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 12, letterSpacing: "-0.02em" }}>
              Enough clarity to justify the purchase, not enough to replace it
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(124,58,237,0.16)",
                  borderRadius: 16,
                  padding: "24px 22px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: "#7c3aed", marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div className="home-two-col" style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 24 }}>
          <div
            style={{
              background: "#0a1628",
              borderRadius: 18,
              padding: "28px 26px",
              color: "#f8fbff",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d8b4fe", marginBottom: 12 }}>
              For Whom
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FOR_WHOM.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "#d7e4f2" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid rgba(10,22,40,0.08)",
              borderRadius: 18,
              padding: "28px 26px",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5a6a8a", marginBottom: 12 }}>
              Not For
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NOT_FOR.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "#40516d" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "104px 24px",
          background: "linear-gradient(160deg, #160820 0%, #2e1065 62%, #7c3aed 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Buy it if you want to understand why expertise alone is not enough
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(250,245,255,0.84)", marginBottom: 32 }}>
            A premium report for professionals and leaders who want a better mental model before AI changes the rules around their work.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 42, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
              Rs 499
            </span>
            <CashfreeCheckout
              productName="Why Expertise Becomes a Trap - SA Intelligence Report"
              amount={499}
              accentColor="#7c3aed"
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your Why Expertise Becomes a Trap report will be delivered to this email."
              buttonLabel="Secure My Copy ->"
              buttonStyle={{
                background: "#7c3aed",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 10,
                border: "1px solid #a78bfa",
                minWidth: 260,
                justifyContent: "center",
              }}
            />
            <p style={{ marginTop: 12, fontSize: 12, color: "rgba(243,232,255,0.62)" }}>
              Secure payment via Cashfree. One-time payment. Delivered to your inbox, typically within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      <MobileStickyCheckoutBar
        productName="Why Expertise Becomes a Trap - SA Intelligence Report"
        amount={499}
        accentColor="#7c3aed"
        deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
        emailNote="Your Why Expertise Becomes a Trap report will be delivered to this email."
        buttonLabel="Get the Report - Rs 499"
      />

      <ProductRecommendations />
      </div>
      <Footer />
    </div>
  );
}
