import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import {
  LIFETIME_UPDATES_BODY,
  LIFETIME_UPDATES_TITLE,
} from "@/lib/career/guideSalesContent";

export const metadata: Metadata = {
  title: "HR Sector Guides | Think Sriram",
  description:
    "India-first HR career intelligence guides for HR professionals navigating AI automation, role compression, and repositioning into higher-leverage work.",
  alternates: { canonical: "/guides/hr" },
};

const HR_GUIDE = {
  badge: "New",
  title: "HR Recruiter Survival Guide 2026",
  subtitle: "8.6/10 SA-AIRS score. 18-month repositioning path. Higher-leverage recruiting future.",
  blurb:
    "HR is being asked to manage AI's impact on the workforce while being disrupted by AI itself. This guide helps recruiters move beyond repeatable execution and reposition toward judgment, business context, stakeholder influence, and higher-leverage HR value over the next 18 months.",
  price: "Rs 499",
  href: "/guides/hr-recruiter-survival-guide-2026",
  accentColor: "#be185d",
  bgGradient: "linear-gradient(135deg, #fff6fb 0%, #ffe4f0 100%)",
  borderColor: "#f9a8d4",
  role: "HR / Talent",
  timeline: "18-month repositioning path",
  riskScore: "SA-AIRS score 8.6/10",
  focus: "future-of-work HR leverage",
};

export default function HRGuidesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        style={{
          background: "linear-gradient(135deg, #260918 0%, #5e1132 58%, #be185d 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
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
                background: "#f9a8d4",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fbcfe8",
              }}
            >
              HR Sector
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
            Guides for HR Professionals
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,232,242,0.86)",
              lineHeight: 1.75,
              maxWidth: 660,
              margin: "0 auto 24px",
            }}
          >
            HR is being asked to manage AI&apos;s impact on the workforce while being disrupted by AI itself. These guides help HR professionals understand what is already being automated, where judgment starts compounding, and how to reposition toward more defensible, higher-value work.
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
              "Built for India-first HR realities",
              "For recruiters, HRBPs, L&D, and talent teams",
              "Focus on judgment, not generic upskilling",
              "Delivered to your inbox, typically within 30 minutes",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#fff7fb",
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
            background: "linear-gradient(135deg, #fff7fb 0%, #fff0f6 100%)",
            border: "1px solid #fbcfe8",
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
                color: "#be185d",
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

        <article
          style={{
            background: HR_GUIDE.bgGradient,
            border: `1.5px solid ${HR_GUIDE.borderColor}`,
            borderRadius: 28,
            padding: "32px clamp(20px, 4vw, 34px)",
            boxShadow: "0 24px 60px rgba(10, 22, 40, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: HR_GUIDE.accentColor,
                color: "#ffffff",
                padding: "6px 10px",
                borderRadius: 999,
              }}
            >
              {HR_GUIDE.badge}
            </span>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#7a5066", textTransform: "uppercase", fontWeight: 700 }}>
                Price
              </div>
              <div style={{ fontSize: 26, fontWeight: 800, color: HR_GUIDE.accentColor }}>{HR_GUIDE.price}</div>
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.12,
              color: "#0a1628",
              marginBottom: 10,
              letterSpacing: "-0.03em",
            }}
          >
            {HR_GUIDE.title}
          </h2>
          <p style={{ fontSize: 15, fontWeight: 700, color: HR_GUIDE.accentColor, marginBottom: 14 }}>
            {HR_GUIDE.subtitle}
          </p>
          <p style={{ fontSize: 15, color: "#425472", lineHeight: 1.8, margin: "0 0 18px" }}>{HR_GUIDE.blurb}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {[HR_GUIDE.role, HR_GUIDE.timeline, HR_GUIDE.riskScore, HR_GUIDE.focus].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#5e3347",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(10,22,40,0.08)",
                  borderRadius: 999,
                  padding: "8px 11px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            href={HR_GUIDE.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              background: HR_GUIDE.accentColor,
              color: "#ffffff",
              borderRadius: 10,
              padding: "13px 18px",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            View guide {"->"}
          </Link>
        </article>
      </section>

      </div>
      <Footer />
    </div>
  );
}
