import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import FreeGuideLeadForm from "@/components/career/FreeGuideLeadForm";

export const metadata: Metadata = {
  title: "Reel Lessons Part 1 | Free Guide | Think Sriram",
  description:
    "Free Sriram Advisory landing page for Reel Lessons Part 1, a compact collection of lessons, reflections, and practical career observations.",
};

const THEME = {
  accent: "#1a4fd6",
  accentSoft: "#a7f3d0",
  accentStrong: "#065f46",
  heroGradient: "linear-gradient(135deg, #061412 0%, #0b2d29 52%, #1a4fd6 100%)",
  heroText: "rgba(209,250,229,0.86)",
  sectionTint: "#ecfdf5",
  sectionBorder: "#86efac",
  panelTint: "#f7fffb",
  finalGradient: "linear-gradient(160deg, #061412 0%, #0b2d29 60%, #065f46 100%)",
};

export default function ReelLessonsPart1Page() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        style={{
          background: THEME.heroGradient,
          paddingTop: 100,
          paddingBottom: 90,
          textAlign: "center",
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

        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(16,185,129,0.18)",
                border: "1px solid rgba(110,231,183,0.42)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
              }}
            >
              Free Report
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
              }}
            >
              Career Lessons Collection
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 66px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 22,
              letterSpacing: "-0.03em",
            }}
          >
            Reel Lessons Part 1
            <br />
            <span style={{ color: THEME.accentSoft }}>Free Release Report</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: THEME.heroText,
              lineHeight: 1.65,
              maxWidth: 740,
              margin: "0 auto 16px",
            }}
          >
            A compact free report built from short lessons, reflections, and sharp observations on work, careers, judgment, and positioning. It is designed to give readers quick clarity they can actually use.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            Not motivational fluff. Not recycled career advice. Just concise, practical thinking collected into one readable resource.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {[
              "Short lessons with practical takeaways",
              "Fast to read, easy to revisit",
              "Free access with simple signup",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#f8fbff",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            className="hero-price-box"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
              <span
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
            >
              Free
            </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentSoft,
                marginBottom: 16,
                display: "block",
              }}
            >
              Delivered to your inbox, typically within 30 minutes
            </span>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              Enter your details below to get access to Reel Lessons Part 1, a short free report for readers who want compact, useful perspective instead of long generic content.
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              It is built for quick reading, quick insight, and easy sharing with professionals who may benefit from the ideas inside it.
            </p>

            <FreeGuideLeadForm
              guideTitle="Reel Lessons Part 1"
              accentColor={THEME.accent}
              buttonLabel="Get this free guide ->"
            />
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "28px 20px 24px" }}>
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            "A free report made from short lessons and reflections that do not waste the reader's time.",
            "Useful for readers who want sharper perspective on work, careers, and positioning in a quick format.",
            "A simple signup flow so readers can request access without going through checkout.",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#f8fafc",
                border: "1px solid #d9e2ec",
                borderRadius: 14,
                padding: "18px 18px",
                fontSize: 14,
                color: "#304159",
                lineHeight: 1.6,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: THEME.sectionTint, padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accent,
                display: "block",
                marginBottom: 12,
              }}
            >
              What This Report Offers
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              Why readers may want this free report
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "Quick lessons, not heavy reading",
                desc: "The report is built from concise lessons and reflections, so readers can take away useful ideas without committing to a long-form guide.",
              },
              {
                title: "Practical career perspective",
                desc: "It focuses on real observations, judgment, and positioning rather than generic productivity advice or empty inspiration.",
              },
              {
                title: "Easy entry into Sriram Advisory",
                desc: "It gives new readers a free way to experience the tone, quality, and usefulness of Sriram Advisory's work before exploring paid reports, guides, or services.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: `1px solid ${THEME.sectionBorder}`,
                  borderRadius: 16,
                  padding: "24px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: THEME.accent,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: THEME.accentStrong,
                display: "block",
                marginBottom: 12,
              }}
            >
              Inside The Report
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              What readers can expect from Reel Lessons Part 1
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                title: "1. Short-form clarity",
                bullets: [
                  "Quick lessons that are easy to consume in one sitting",
                  "Compact writing that respects the reader's time",
                  "A format built for clarity rather than overload",
                ],
              },
              {
                title: "2. Practical reflections",
                bullets: [
                  "Observations on careers, judgment, and professional positioning",
                  "Ideas readers can reflect on and apply immediately",
                  "A sharper alternative to generic free internet advice",
                ],
              },
              {
                title: "3. A strong free starting point",
                bullets: [
                  "A simple way to discover Sriram Advisory's voice and quality",
                  "A useful resource to share with friends or colleagues",
                  "A first step before diving into deeper paid reports and guides",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: THEME.panelTint,
                  border: "1px solid #d9e2ec",
                  borderRadius: 16,
                  padding: "22px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#0a1628",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.6 }}>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "120px 24px",
          background: THEME.finalGradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#f8faff",
              marginBottom: 16,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Get the free report and start with something genuinely useful
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.78)", lineHeight: 1.7, marginBottom: 32 }}>
            Reel Lessons Part 1 is meant to be a clean, practical entry point into Sriram Advisory. If you want short lessons with real signal, request access below.
          </p>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <FreeGuideLeadForm
              guideTitle="Reel Lessons Part 1"
              accentColor={THEME.accent}
              buttonLabel="Get this free guide ->"
            />
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
