import Link from "next/link";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports | Think Sriram",
  description:
    "India-first intelligence reports on career and workforce risk, market shifts, and role diagnostics for working professionals.",
  alternates: { canonical: "/career-intelligence-report" },
};

const REPORTS = [
  {
    badge: "New - June 2026",
    title: "Why Expertise Becomes a Trap",
    subtitle: "automation pressure. Competency traps. Professional reinvention.",
    blurb:
      "The first Sriram Advisory Intelligence Series report on why skilled professionals can become vulnerable during technological transitions, and why AI is making that pattern faster and broader.",
    price: "Rs 499",
    href: "/products/why-expertise-becomes-a-trap",
    accentColor: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    borderColor: "#d8b4fe",
    bullets: [
      "Explains why expertise alone is not a durable future-of-work moat",
      "Connects historical disruption patterns with current AI pressure",
      "Built for senior professionals, managers, HR/L&D, founders, and consultants",
    ],
  },
  {
    badge: "New",
    title: "AI Futures 2026",
    subtitle: "India-first AI career scenarios. Strategic signals. Practical adaptation lens.",
    blurb:
      "A forward-looking intelligence report for professionals who want a clearer view of how AI may reshape work, careers, and leverage in India over the next phase.",
    price: "Rs 799",
    href: "/products/ai-futures-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f2fbf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
    bullets: [
      "Signals and scenario framing, not recycled hype headlines",
      "Built to help professionals think ahead without panic",
      "A premium report built for strategic clarity",
    ],
  },
  {
    badge: "New",
    title: "State of QA Careers India 2026",
    subtitle: "Testing careers. AI pressure points. Strategic repositioning.",
    blurb:
      "A focused intelligence report for QA professionals who want a clearer reading of how testing roles are changing in India, where the pressure is rising, and what stronger positioning looks like next.",
    price: "Rs 799",
    href: "/products/state-of-qa-careers-india-2026",
    accentColor: "#0f6cbd",
    bgGradient: "linear-gradient(135deg, #f2f8ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bullets: [
      "Built for QA professionals, not general-tech audiences",
      "Maps role shifts, pressure points, and adaptation direction",
      "A premium report for people who want sharper career clarity",
    ],
  },
  {
    badge: "New - May 2026",
    title: "AI Risk Rankings India 2026",
    subtitle: "Top 25 high-risk careers. 4 risk bands. 100+ pages.",
    blurb:
      "A market-intelligence report for professionals who want to understand which careers are under the most AI pressure in India, why, and what adaptation paths look like.",
    price: "Rs 999",
    href: "/products/ai-risk-rankings-india-2026",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
    bullets: [
      "Top 25 careers ranked with role-level context",
      "Task exposure bands instead of hand-wavy predictions",
      "Adaptation direction for professionals who need next steps",
    ],
  },
];

export default function ReportsPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #102346 60%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(59,110,240,0.18)",
              border: "1px solid rgba(59,110,240,0.45)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#3b6ef0",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93b4ff",
              }}
            >
              Data-Driven Career Reports
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Reports for professionals who want evidence, not noise
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(200,220,255,0.84)",
              lineHeight: 1.75,
              maxWidth: 620,
              margin: "0 auto 24px",
            }}
          >
            Structured market-intelligence products built for India-first career decisions. Use them when you want to understand the shift, read the pressure, and decide what to do next.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {[
              "India-specific, not global copy-paste",
              "Built for decision-making, not doomscrolling",
              "Focused on market intelligence and career context",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#f8fbff",
                  padding: "10px 14px",
                  fontSize: 13,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: "0 auto", padding: "64px 20px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {REPORTS.map((report) => (
            <Link key={report.href} href={report.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card guide-card-body"
                style={{
                  background: report.bgGradient,
                  border: `1.5px solid ${report.borderColor}`,
                  borderRadius: 18,
                  cursor: "pointer",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: report.accentColor,
                        color: "#ffffff",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {report.badge}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 800,
                      color: "#0a1628",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {report.title}
                  </h2>
                  <p style={{ fontSize: 14, fontWeight: 700, color: report.accentColor, marginBottom: 12 }}>
                    {report.subtitle}
                  </p>
                  <p style={{ fontSize: 15, color: "#3d4f6e", lineHeight: 1.7, marginBottom: 14 }}>
                    {report.blurb}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {report.bullets.map((bullet) => (
                      <div key={bullet} style={{ fontSize: 13, color: "#4b5d7b", lineHeight: 1.6 }}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="guide-card-price-col">
                  <div style={{ fontSize: 28, fontWeight: 800, color: report.accentColor }}>{report.price}</div>
                  <div
                    style={{
                      marginTop: 16,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: report.accentColor,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "10px 20px",
                      borderRadius: 8,
                      letterSpacing: "0.01em",
                    }}
                  >
                    View report {"->"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
