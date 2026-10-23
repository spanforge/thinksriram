import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";

export const metadata: Metadata = {
  title: "Career Positioning Audit | Think Sriram",
  description:
    "A structured audit of your resume and LinkedIn positioning for tech professionals who want sharper market signal in 2026. Rs 999 introductory price.",
  alternates: { canonical: "/services/career-positioning-audit" },
};

const WHAT_YOU_RECEIVE = [
  "Resume review for clarity, positioning gaps, and weak signals",
  "LinkedIn review across headline, about section, and experience framing",
  "Positioning score with your top 3 gaps identified",
  "Top 3 actionable improvements",
  "Suggested headline rewrite",
  "Suggested professional summary rewrite",
  "1-page findings report delivered as PDF",
];

const WHO_THIS_IS_FOR = [
  "Tech professionals with 3+ years of experience",
  "Java, QA, Data, and adjacent-role professionals",
  "People who want an honest outside view of how their career reads today",
];

const HOW_IT_WORKS = [
  "Express interest and complete payment through this page",
  "Submit your resume and LinkedIn URL after purchase",
  "Receive your audit report within 48 to 72 hours",
];

export default function CareerPositioningAuditPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        style={{
          background: "linear-gradient(135deg, #1c1205 0%, #4a2a09 58%, #b45309 100%)",
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
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 82% 30%, #ffffff 0, transparent 24%), linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px", position: "relative" }}>
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
              <div
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
                  color: "#fde68a",
                  marginBottom: 22,
                }}
              >
                Career Service
              </div>
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
                Career Positioning Audit
                <br />
                <span style={{ color: "#fdba74" }}>Your experience is real. Does your profile reflect it?</span>
              </h1>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.75,
                  color: "rgba(255,244,230,0.9)",
                  maxWidth: 680,
                  marginBottom: 16,
                }}
              >
                Most tech professionals underestimate how poorly their resume and LinkedIn represent their actual depth. In 2026, your profile is not just read by recruiters. It is filtered by AI screening systems before a human ever sees it.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(255,237,213,0.82)",
                  maxWidth: 670,
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                This is not a resume writing service. It is a structured audit of how your career is positioned in the current market, delivered as a concise intelligence report.
              </p>
              <div style={{ maxWidth: 360, marginBottom: 28 }}>
                <CashfreeCheckout
                  productName="Career Positioning Audit - Service"
                  amount={999}
                  accentColor="#b45309"
                  deliveryNote="Use your best email. We will use it to coordinate your resume and LinkedIn submission after payment."
                  emailNote="Your audit coordination and delivery updates will go to this email."
                  footerNote="Secured by Cashfree Payments. One-time payment for a manual audit service."
                  buttonLabel="Book the Audit - Rs 999"
                  buttonStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    background: "#b45309",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 17,
                    padding: "16px 20px",
                    borderRadius: 10,
                    border: "1px solid #f59e0b",
                    boxShadow: "0 14px 32px rgba(28, 18, 5, 0.22)",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  "Resume + LinkedIn review",
                  "48 to 72 hour turnaround",
                  "1-page PDF findings report",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 999,
                      padding: "10px 16px",
                      fontSize: 13,
                      color: "#fff7ed",
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
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fde68a", marginBottom: 10 }}>
                Introductory Rate
              </div>
              <div style={{ fontSize: 46, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: 8 }}>
                Rs 999
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,244,230,0.8)", lineHeight: 1.6, margin: "0 0 18px" }}>
                Introductory rate for the first 20 audits only.
              </p>
              <CashfreeCheckout
                productName="Career Positioning Audit - Service"
                amount={999}
                accentColor="#b45309"
                deliveryNote="Use your best email. We will use it to coordinate your resume and LinkedIn submission after payment."
                emailNote="Your audit coordination and delivery updates will go to this email."
                footerNote="Secured by Cashfree Payments. One-time payment for a manual audit service."
                buttonLabel="Book the Audit - Rs 999"
                buttonStyle={{
                  background: "#b45309",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 32px",
                  borderRadius: 10,
                  border: "1px solid #f59e0b",
                  width: "100%",
                  justifyContent: "center",
                }}
              />
              <p style={{ marginTop: 14, fontSize: 12, color: "rgba(255,237,213,0.65)", lineHeight: 1.6 }}>
                One-time purchase via Cashfree. Delivery turnaround: 48 to 72 hours after submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fffaf5", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309" }}>
              What You Receive
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "#0a1628", marginTop: 12, letterSpacing: "-0.02em" }}>
              A concise audit of how your profile reads in the market
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {WHAT_YOU_RECEIVE.map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(180,83,9,0.16)",
                  borderRadius: 16,
                  padding: "22px 20px",
                  fontSize: 14,
                  color: "#4d3a26",
                  lineHeight: 1.7,
                }}
              >
                {item}
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fdba74", marginBottom: 12 }}>
              Who This Is For
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {WHO_THIS_IS_FOR.map((item) => (
                <div key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "#d7e4f2" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fff7ed",
              border: "1px solid rgba(180,83,9,0.14)",
              borderRadius: 18,
              padding: "28px 26px",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>
              How It Works
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {HOW_IT_WORKS.map((item, index) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#b45309",
                      color: "#ffffff",
                      fontSize: 12,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {index + 1}
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.7, color: "#5b4223" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "96px 24px",
          background: "linear-gradient(160deg, #1c1205 0%, #4a2a09 62%, #b45309 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Weak positioning makes strong candidates go invisible
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,244,230,0.86)", marginBottom: 20 }}>
            If your profile undersells your depth, the market may never see your actual value. This audit shows you where that is happening and what to fix first.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,237,213,0.78)", marginBottom: 32 }}>
            Sriram Advisory. Depth beats tools. Direction beats degrees.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
              Rs 999
            </div>
            <CashfreeCheckout
              productName="Career Positioning Audit - Service"
              amount={999}
              accentColor="#b45309"
              deliveryNote="Use your best email. We will use it to coordinate your resume and LinkedIn submission after payment."
              emailNote="Your audit coordination and delivery updates will go to this email."
              footerNote="Secured by Cashfree Payments. One-time payment for a manual audit service."
              buttonLabel="Book the Audit - Rs 999"
              buttonStyle={{
                background: "#b45309",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 10,
                border: "1px solid #f59e0b",
                minWidth: 260,
                justifyContent: "center",
              }}
            />
            <p style={{ marginTop: 12, fontSize: 12, color: "rgba(255,237,213,0.64)" }}>
              Secure payment via Cashfree. Introductory rate. Manual audit delivery.
            </p>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
