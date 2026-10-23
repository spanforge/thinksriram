import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import GuidesCatalog from "@/components/career/GuidesCatalog";
import {
  LIFETIME_UPDATES_BODY,
  LIFETIME_UPDATES_TITLE,
} from "@/lib/career/guideSalesContent";

export const metadata: Metadata = {
  title: "IT Sector Guides | Think Sriram",
  description:
    "India-first career intelligence guides for IT professionals navigating AI risk, market shifts, and role repositioning.",
  alternates: { canonical: "/guides/it" },
};

const GUIDE_DELIVERY_NOTE = "Delivered to your inbox, typically within 30 minutes of payment.";
const BONUS_GUIDE_NOTE =
  "Every guide includes the Agentic AI Field Guide bonus at no extra cost.";

const GUIDES = [
  {
    badge: "New",
    title: "Cloud Engineer AI Survival Guide 2026",
    subtitle: "3.8/10 repositioned score. 90-day direction. AI cloud infrastructure path.",
    blurb:
      "For Cloud Engineers who want to move from traditional infrastructure provisioning into AI-native cloud engineering, GPU platform design, model-serving reliability, and stronger AI infrastructure positioning.",
    price: "Rs 499",
    href: "/guides/cloud-engineer-ai-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0fdf9 0%, #d9fbe8 100%)",
    borderColor: "#99f6e4",
    role: "Cloud Engineer",
    timeline: "90-day direction",
    riskScore: "Repositioned score 3.8/10",
    focus: "AI infrastructure",
  },
  {
    badge: "New",
    title: "Data Engineer AI Survival Guide 2026",
    subtitle: "4.0/10 repositioned score. 90-day direction. AI-native data engineering path.",
    blurb:
      "For Data Engineers who want to move from traditional pipeline work into AI-native data engineering, model data reliability, GenAI data systems, and stronger AI team positioning.",
    price: "Rs 499",
    href: "/guides/data-engineer-ai-survival-guide-2026",
    accentColor: "#0891b2",
    bgGradient: "linear-gradient(135deg, #f0fdff 0%, #cffafe 100%)",
    borderColor: "#67e8f9",
    role: "Data Engineer",
    timeline: "90-day direction",
    riskScore: "Repositioned score 4.0/10",
    focus: "AI data reliability",
  },
  {
    badge: "New",
    title: "Project Manager / Delivery Manager Survival Guide 2026",
    subtitle: "5.9/10 risk score. 60-day direction. Higher-leverage project/delivery path.",
    blurb:
      "For Project Managers and Delivery Managers who need to move beyond coordination-heavy work and build stronger positioning around prioritization, execution systems, and business judgment.",
    price: "Rs 499",
    href: "/guides/project-delivery-manager-survival-guide-2026",
    accentColor: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #efe4ff 100%)",
    borderColor: "#d8b4fe",
    role: "Project / Delivery",
    timeline: "60-day direction",
    riskScore: "Risk score 5.9/10",
    focus: "Execution systems",
  },
  {
    badge: "New",
    title: "DevOps Survival Guide 2026",
    subtitle: "6.8/10 risk score. 60-day direction. Platform and reliability path.",
    blurb:
      "For DevOps engineers who want to move beyond pipeline-heavy execution and build stronger platform, reliability, and AI infrastructure positioning.",
    price: "Rs 499",
    href: "/guides/devops-survival-guide-2026",
    accentColor: "#1d4ed8",
    bgGradient: "linear-gradient(135deg, #f8fbff 0%, #e6efff 100%)",
    borderColor: "#bfdbfe",
    role: "DevOps",
    timeline: "60-day direction",
    riskScore: "Risk score 6.8/10",
    focus: "Platform and reliability",
  },
  {
    badge: "New",
    title: "Business Analyst Survival Guide 2026",
    subtitle: "7.1/10 risk score. 60-day direction. GCC and product-side path.",
    blurb:
      "For Business Analysts who need to move beyond documentation-heavy work and reposition around problem framing, business value, and stronger analyst signal.",
    price: "Rs 499",
    href: "/guides/business-analyst-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f4fffd 0%, #dffaf3 100%)",
    borderColor: "#99f6e4",
    role: "Business Analyst",
    timeline: "60-day direction",
    riskScore: "Risk score 7.1/10",
    focus: "Problem framing",
  },
  {
    badge: "New",
    title: "Business Analyst to AI Product Manager Guide 2026",
    subtitle: "3.5/10 repositioned score. 90-day direction. AI PM transition path.",
    blurb:
      "For Business Analysts who want to move from documentation-heavy delivery into AI product ownership, stronger problem framing, and better outcome-led positioning.",
    price: "Rs 499",
    href: "/guides/ba-to-ai-pm-guide-2026",
    accentColor: "#0f4c81",
    bgGradient: "linear-gradient(135deg, #f4faff 0%, #dceeff 100%)",
    borderColor: "#93c5fd",
    role: "Business Analyst",
    timeline: "90-day direction",
    riskScore: "Repositioned score 3.5/10",
    focus: "AI product transition",
  },
  {
    badge: "New",
    title: "FDE Career Transition Guide 2026",
    subtitle: "2.5/10 repositioned score. 90-day direction. Higher-leverage FDE path.",
    blurb:
      "For FDEs who want to move beyond execution-only delivery and build stronger positioning around product judgment, systems thinking, and future-of-work engineering leverage.",
    price: "Rs 499",
    href: "/guides/fde-career-transition-guide-2026",
    accentColor: "#be185d",
    bgGradient: "linear-gradient(135deg, #fff6fb 0%, #ffe3f0 100%)",
    borderColor: "#f9a8d4",
    role: "FDE",
    timeline: "90-day direction",
    riskScore: "Repositioned score 2.5/10",
    focus: "Career transition",
  },
  {
    badge: "New",
    title: "QA Engineer Survival Guide 2026",
    subtitle: "9.5/10 risk score. 90-day direction. Higher-value QA path.",
    blurb:
      "For QA professionals under the sharpest AI pressure who want a clearer path toward stronger quality ownership and more durable relevance.",
    price: "Rs 499",
    href: "/guides/qa-engineer-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f5fff9 0%, #e3faec 100%)",
    borderColor: "#bbf7d0",
    role: "QA",
    timeline: "90-day direction",
    riskScore: "Risk score 9.5/10",
    focus: "Quality ownership",
  },
  {
    badge: "New",
    title: "BPO & Customer Support Career Survival Guide 2026",
    subtitle: "9.2/10 risk score. 30-day direction. future-of-work support paths.",
    blurb:
      "For support professionals who want to understand what AI compresses first and how to reposition toward more durable human-value work.",
    price: "Rs 499",
    href: "/guides/bpo-career-survival-guide-2026",
    accentColor: "#d97706",
    bgGradient: "linear-gradient(135deg, #fffdf4 0%, #fef1c8 100%)",
    borderColor: "#fde68a",
    role: "BPO / Support",
    timeline: "30-day direction",
    riskScore: "Risk score 9.2/10",
    focus: "future-of-work support paths",
  },
  {
    badge: "New",
    title: "Python Developer AI Leverage Guide 2026",
    subtitle: "7.0/10 risk score. 60-day direction. Higher-leverage Python path.",
    blurb:
      "For Python developers who want to use AI to move beyond script-heavy execution and build stronger positioning around automation, backend judgment, data workflows, and AI-assisted engineering leverage.",
    price: "Rs 499",
    href: "/guides/python-developer-ai-leverage-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f2fffb 0%, #d8f5ec 100%)",
    borderColor: "#99f6e4",
    role: "Python Developer",
    timeline: "60-day direction",
    riskScore: "Risk score 7.0/10",
    focus: "AI leverage",
  },
  {
    badge: "New",
    title: "Java Developer AI Leverage Guide 2026",
    subtitle: "7.5/10 risk score. 60-day direction. Higher-leverage Java path.",
    blurb:
      "For Java developers who want to move up the value chain using AI without abandoning the Java ecosystem or drifting into vague upskilling.",
    price: "Rs 499",
    href: "/guides/java-developer-ai-leverage-guide-2026",
    accentColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #fff8f0 0%, #ffe0b8 100%)",
    borderColor: "#fdba74",
    role: "Java Developer",
    timeline: "60-day direction",
    riskScore: "Risk score 7.5/10",
    focus: "AI leverage",
  },
  {
    badge: "New",
    title: "Selenium Engineer Upgrade Guide 2026",
    subtitle: "7.2/10 risk score. 60-day direction. Modern automation path.",
    blurb:
      "For Selenium engineers who want to bridge into more modern automation relevance and avoid getting stuck in legacy comfort.",
    price: "Rs 499",
    href: "/guides/selenium-engineer-upgrade-guide-2026",
    accentColor: "#4f46e5",
    bgGradient: "linear-gradient(135deg, #f8f6ff 0%, #ede9fe 100%)",
    borderColor: "#c7d2fe",
    role: "Selenium / Automation",
    timeline: "60-day direction",
    riskScore: "Risk score 7.2/10",
    focus: "Modern automation",
  },
  {
    badge: "New",
    title: "Data Analyst Career Guide 2026",
    subtitle: "7.8/10 risk score. 90-day direction. Higher-value analyst path.",
    blurb:
      "For analysts who want to move beyond dashboard dependence and build stronger positioning around insight, context, and business value.",
    price: "Rs 499",
    href: "/guides/data-analyst-career-guide-2026",
    accentColor: "#2563eb",
    bgGradient: "linear-gradient(135deg, #f7faff 0%, #e2eeff 100%)",
    borderColor: "#bfdbfe",
    role: "Data Analyst",
    timeline: "90-day direction",
    riskScore: "Risk score 7.8/10",
    focus: "Insight and business value",
  },
];

export default function ITGuidesPage() {
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
              IT Sector
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
            Guides for IT Professionals
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
            Role-specific guides on AI risk, repositioning, and salary upside. Each guide is built to help you understand what is changing, what to do next, and how to present yourself more strongly.
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
              "Role-specific, not generic",
              "Built for India-first market realities",
              "Delivered to your inbox, typically within 30 minutes",
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

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 20px 80px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)",
            border: "1px solid #c7d7ff",
            borderRadius: 24,
            padding: "28px 24px",
            marginBottom: 28,
            boxShadow: "0 20px 50px rgba(10, 22, 40, 0.06)",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1a4fd6",
                display: "block",
                marginBottom: 10,
              }}
            >
              Public Commitment
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 900,
                color: "#0a1628",
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              {LIFETIME_UPDATES_TITLE}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#40526b",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {LIFETIME_UPDATES_BODY}
            </p>
          </div>
        </div>
        <GuidesCatalog
          guides={GUIDES}
          deliveryNote={GUIDE_DELIVERY_NOTE}
          bonusNote={BONUS_GUIDE_NOTE}
        />
      </section>

      </div>
      <Footer />
    </div>
  );
}
