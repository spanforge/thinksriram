import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Think Sriram",
  description: "Full legal disclaimer for Sriram Advisory. Educational and analytical commentary only - not career counselling, legal advice, or employment guidance.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div style={{ background: "#ffffff", color: "#0a1628", minHeight: "100vh" }}>
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section style={{ background: "linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)", paddingTop: 120, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#dc2626", display: "block", marginBottom: 20 }}>Legal</span>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: "#0a1628", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Disclaimer
          </h1>
          <p style={{ fontSize: 16, color: "#6a7a9a", lineHeight: 1.7 }}>
            Last updated: 29 September 2026  -  Sriram Advisory, India
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px 120px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* ALERT BOX */}
          <div style={{ background: "rgba(255,80,80,0.07)", border: "1px solid rgba(255,80,80,0.25)", borderRadius: 14, padding: "32px 36px", marginBottom: 56 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#dc2626", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Important - Read Before Purchasing</div>
            <p style={{ fontSize: 16, color: "#1a2030", lineHeight: 1.75, marginBottom: 20 }}>
              The Career Intelligence Report and all associated services provided by Sriram Advisory are{" "}
              <strong style={{ color: "#0a3d91" }}>educational and analytical commentary only</strong>.
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>
              This is NOT and does NOT constitute:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Legal advice of any kind",
                "Financial advice or investment guidance",
                "Psychological diagnosis or mental health support",
                "A guarantee of job security or career outcomes",
                "Professional career counselling",
                "A recruitment recommendation or endorsement",
                "Employment advice regulated under any professional standard",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12 }}>
                  <span style={{ color: "#dc2626", flexShrink: 0 }}>!</span>
                  <span style={{ fontSize: 15, color: "#4a5a7a" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {[
            {
              title: "1. Nature of the Service",
              content: [
                "Sriram Advisory provides analytical commentary, thinking frameworks, and structured self-reflection tools for professionals seeking to understand their career positioning in an AI-influenced market.",
                "All content, reports, scores, and frameworks are for informational and educational purposes only. They are intended to support independent reflection and decision-making - not to replace professional advice.",
                "The Career Intelligence Report is a personal diagnostic tool based on self-reported inputs. It does not constitute a formal assessment, clinical evaluation, or professional opinion.",
              ],
            },
            {
              title: "2. SA-AIRS(TM) Score Limitations",
              content: [
                "The SA-AIRS(TM) score is based exclusively on your self-reported inputs. It reflects patterns you have described - not an objective audit of your actual role, skills, or market position.",
                "All scores are directional guidance - not precise measurements, clinical assessments, or statistical predictions.",
                "Confidence levels indicate our internal estimate of score reliability given your inputs. They are not formal measurements of statistical confidence.",
                "A score does not predict whether you will be displaced by AI. Many factors beyond thinking patterns influence career outcomes: market conditions, sector-specific dynamics, organisational decisions, geography, timing, and factors outside individual control.",
              ],
            },
            {
              title: "3. Thinking Frame Assessments",
              content: [
                "The 5 Thinking Frames are conceptual frameworks for structured self-reflection. They are not psychological instruments, validated psychometric tools, or peer-reviewed assessment methodologies.",
                "Frame scores indicate patterns suggested by your answers - not clinical diagnoses of your cognitive patterns or personality.",
                "Disagreeing with your frame score is normal and encouraged. Use it as a starting point for reflection, not as a definitive label.",
              ],
            },
            {
              title: "4. No Outcome Guarantee",
              content: [
                "Sriram Advisory makes no warranty, express or implied, that following any recommendation, practice challenge, or thinking shift described in any report will result in improved career outcomes, job security, salary improvement, promotion, or any other specific result.",
                "Career outcomes depend on many factors outside any individual's thinking patterns: economic conditions, industry trends, organisational decisions, skills, experience, market demand, and others.",
                "The 30-day re-assessment tracks changes in your self-reported thinking patterns only - not your actual career trajectory or market position.",
              ],
            },
            {
              title: "5. Data & Inputs",
              content: [
                "All assessments are based on data you provide. The accuracy and usefulness of any report depends on the accuracy and honesty of your inputs.",
                "Sriram Advisory does not independently verify any information you provide.",
                "Benchmark comparisons (where used) are illustrative and based on a small sample. They are directional, not statistically representative.",
              ],
            },
            {
              title: "6. Professional Advice",
              content: [
                "If you require legal advice - consult a qualified lawyer.",
                "If you require financial or investment advice - consult a SEBI-registered financial advisor.",
                "If you are experiencing career distress, anxiety, or mental health challenges - consult a qualified mental health professional.",
                "If you require formal career counselling - consult a registered career counsellor.",
                "Nothing in any Sriram Advisory report substitutes for professional advice appropriate to your specific situation.",
              ],
            },
            {
              title: "7. Limitation of Liability",
              content: [
                "To the fullest extent permitted by applicable law, Sriram Advisory and its founder shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this service, including but not limited to: career decisions made based on report content, financial loss, or outcomes of any kind.",
                "In all cases, Sriram Advisory's maximum liability is limited to the amount paid for the specific report or service.",
              ],
            },
            {
              title: "8. Acknowledgement",
              content: [
                "By purchasing and using any Sriram Advisory product or service, you acknowledge that you have read and understood this disclaimer, and that you are using the service for personal educational and reflective purposes only.",
              ],
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0a1628", marginBottom: 16, letterSpacing: "-0.01em" }}>{section.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {section.content.map((para, i) => (
                  <p key={i} style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.8 }}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid rgba(26,79,214,0.2)", display: "flex", flexWrap: "wrap", gap: 24 }}>
            <Link href="/privacy" style={{ color: "#1a4fd6", fontSize: 14, textDecoration: "underline" }}>Privacy Policy</Link>
            <Link href="/purchase-terms" style={{ color: "#1a4fd6", fontSize: 14, textDecoration: "underline" }}>Terms of Service</Link>
            <Link href="/refund" style={{ color: "#1a4fd6", fontSize: 14, textDecoration: "underline" }}>Refund Policy</Link>
            <Link href="/contact" style={{ color: "#1a4fd6", fontSize: 14, textDecoration: "underline" }}>Contact</Link>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
