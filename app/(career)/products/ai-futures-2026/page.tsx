import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import ProductRecommendations from "@/components/career/ProductRecommendations";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import MobileStickyCheckoutBar from "@/components/career/MobileStickyCheckoutBar";
import ProductStructuredData from "@/components/career/ProductStructuredData";

export const metadata: Metadata = {
  title: "AI Futures 2026 | Think Sriram",
  description:
    "A premium India-first AI futures report for professionals who want a clearer view of coming career shifts, strategic signals, and adaptation paths. Rs 799 launch price.",
  alternates: { canonical: "/products/ai-futures-2026" },
};

const WHAT_YOU_GET = [
  {
    title: "AI futures lens for Indian professionals",
    desc: "A structured way to read where leverage, pressure, and career asymmetry may emerge next across the Indian market.",
  },
  {
    title: "Scenario framing, not vague futurism",
    desc: "Multiple plausible directions, clearly explained, instead of one overconfident prediction pretending to be certainty.",
  },
  {
    title: "Decision support for career positioning",
    desc: "Built for professionals who want to think ahead about exposure, leverage, positioning, and optionality.",
  },
  {
    title: "Signals worth watching",
    desc: "The report highlights the categories of shifts that matter in a structured, premium format.",
  },
];

const FOR_WHOM = [
  "Professionals trying to understand the next 12-24 months, not just today's headlines",
  "Managers and leads who need a sharper future-of-work reading of role change and value migration",
  "People who want strategic clarity before making upskilling or career-direction decisions",
];

const NOT_FOR = [
  "People looking for a free summary of the report's full reasoning",
  "Readers who want sensational predictions with no explanation behind them",
  "Anyone expecting a generic global AI roundup repackaged for India",
];

const PREVIEW_SIGNALS = [
  "Where leverage may concentrate as AI becomes normal infrastructure",
  "Which kinds of professionals may gain disproportionate advantage",
  "How career moats may shift from execution volume toward judgment, systems, and trust",
];

export default function AIFutures2026Page() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <ProductStructuredData name="AI Futures 2026" description="An India-first report on coming career shifts, strategic signals and adaptation paths." path="/products/ai-futures-2026" price={799} />

      <section
        style={{
          background: "linear-gradient(135deg, #031b16 0%, #0a3b2f 58%, #1a4fd6 100%)",
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
            opacity: 0.06,
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
                color: "#baf7e3",
              }}
            >
              Premium Report
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(13,146,104,0.22)",
                border: "1px solid rgba(186,247,227,0.28)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#d7fff3",
              }}
            >
              India 2026 Edition
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
                AI Futures 2026
                <br />
                <span style={{ color: "#9ef0cf" }}>A sharper map of what may come next</span>
              </h1>
              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.75,
                  color: "rgba(235,255,248,0.9)",
                  maxWidth: 680,
                  marginBottom: 16,
                }}
              >
                A premium intelligence report for professionals who want a clearer view of where AI may shift leverage, pressure, and career advantage in India over the next phase.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(215,255,243,0.74)",
                  maxWidth: 650,
                  marginBottom: 30,
                }}
              >
                Built for professionals who want strategic clarity without recycled AI commentary.
              </p>
              <div style={{ maxWidth: 360, marginBottom: 28 }}>
                <CashfreeCheckout
                  productName="AI Futures 2026 - Premium Report"
                  amount={799}
                  accentColor="#1a4fd6"
                  deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
                  emailNote="Your AI Futures 2026 report will be delivered to this email."
                  buttonLabel="Get the Report - Rs 799"
                  buttonStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    background: "#1a4fd6",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 17,
                    padding: "16px 20px",
                    borderRadius: 10,
                    border: "1px solid #34d399",
                    boxShadow: "0 14px 32px rgba(3, 27, 22, 0.22)",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  "Premium paid report",
                  "Designed for strategic clarity",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 999,
                      padding: "10px 16px",
                      fontSize: 13,
                      color: "#effff8",
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
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#baf7e3", marginBottom: 10 }}>
                Launch Price
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 26, color: "rgba(215,255,243,0.55)", textDecoration: "line-through", fontWeight: 700 }}>
                  Rs 999
                </span>
                <span style={{ fontSize: 46, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                  Rs 799
                </span>
              </div>
              <p style={{ fontSize: 13, color: "rgba(235,255,248,0.78)", lineHeight: 1.6, margin: "0 0 18px" }}>
                Limited launch pricing for the first release.
              </p>
              <CashfreeCheckout
                productName="AI Futures 2026 - Premium Report"
                amount={799}
                accentColor="#1a4fd6"
                deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
                emailNote="Your AI Futures 2026 report will be delivered to this email."
                buttonLabel="Get AI Futures 2026 ->"
                buttonStyle={{
                  background: "#1a4fd6",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 32px",
                  borderRadius: 10,
                  border: "1px solid #34d399",
                  width: "100%",
                  justifyContent: "center",
                }}
              />
              <p style={{ marginTop: 14, fontSize: 12, color: "rgba(215,255,243,0.6)", lineHeight: 1.6 }}>
                One-time purchase via Cashfree. No subscription. No public download preview.
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
                background: "#f2fbf8",
                border: "1px solid #bbf7d0",
                borderRadius: 14,
                padding: "18px 18px",
                fontSize: 14,
                color: "#27443c",
                lineHeight: 1.65,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f7fffb", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4fd6" }}>
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
                  border: "1px solid rgba(13,146,104,0.16)",
                  borderRadius: 16,
                  padding: "24px 22px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: "#1a4fd6", marginBottom: 10 }}>{item.title}</div>
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ef0cf", marginBottom: 12 }}>
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
          background: "linear-gradient(160deg, #031b16 0%, #0a3b2f 62%, #1a4fd6 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Buy it if you want a better map before the market gets louder
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(235,255,248,0.84)", marginBottom: 32 }}>
            A premium report for professionals who want a better map before the market gets louder.
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <span style={{ fontSize: 24, color: "rgba(215,255,243,0.55)", textDecoration: "line-through", fontWeight: 700 }}>
                Rs 999
              </span>
              <span style={{ fontSize: 42, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                Rs 799
              </span>
            </div>
            <CashfreeCheckout
              productName="AI Futures 2026 - Premium Report"
              amount={799}
              accentColor="#1a4fd6"
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your AI Futures 2026 report will be delivered to this email."
              buttonLabel="Secure My Copy ->"
              buttonStyle={{
                background: "#1a4fd6",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 40px",
                borderRadius: 10,
                border: "1px solid #34d399",
                minWidth: 260,
                justifyContent: "center",
              }}
            />
            <p style={{ marginTop: 12, fontSize: 12, color: "rgba(215,255,243,0.62)" }}>
              Secure payment via Cashfree. One-time payment. Delivered to your inbox, typically within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      <MobileStickyCheckoutBar
        productName="AI Futures 2026 - Premium Report"
        amount={799}
        accentColor="#1a4fd6"
        deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
        emailNote="Your AI Futures 2026 report will be delivered to this email."
                  buttonLabel="Get the Report - Rs 799"
      />

      <ProductRecommendations />
      </div>
      <Footer />
    </div>
  );
}
