import Link from "next/link";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import type { Metadata } from "next";
import ProductStructuredData from "@/components/career/ProductStructuredData";

export const metadata: Metadata = {
  title: "Career Intelligence Report - Pro Edition | Think Sriram",
  description:
    "A career intelligence report for Indian professionals who want structured research on role change, industry signals, and practical next steps.",
  alternates: { canonical: "/products/pro-edition" },
};

const INCLUDES = [
  "Role and industry outlooks for Indian professionals",
  "Workforce signals across technology, skills, and organizations",
  "Practical interpretation of AI and automation pressure",
  "90-day learning and positioning direction",
  "Resume and LinkedIn positioning prompts",
  "Two update editions included through December 2026",
];

const FIT = [
  "You want a broader map before making a career decision",
  "You prefer India-specific research over generic global commentary",
  "You want practical guidance without being pushed into a course",
];

export default function ProEditionPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <ProductStructuredData name="Career Intelligence Report - Pro Edition" description="India-specific career intelligence on role change, industry signals and practical next steps." path="/products/pro-edition" price={999} />

      <section style={{ background: "linear-gradient(135deg, #0a1628 0%, #102346 62%, #1a4fd6 100%)", paddingTop: 104, paddingBottom: 84, textAlign: "center" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <span style={{ display: "inline-flex", marginBottom: 24, color: "#93b4ff", fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Career Intelligence Report
          </span>
          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 64px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            A structured read on where careers are moving.
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#c8dcff", lineHeight: 1.75, maxWidth: 660, margin: "0 auto 34px" }}>
            The Pro Edition translates Future of Work research into practical career intelligence for Indian professionals.
          </p>
          <CashfreeCheckout
            productName="Career Intelligence Report - Pro Edition"
            amount={999}
            accentColor="#1a4fd6"
            deliveryNote="Delivered to your inbox after payment."
            emailNote="Your report will be delivered to this email."
            buttonLabel="Buy Report - Rs 999"
            buttonStyle={{
              background: "#1a4fd6",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: 16,
              padding: "15px 30px",
              borderRadius: 8,
              border: "1px solid #3b6ef0",
            }}
          />
          <p style={{ marginTop: 18, fontSize: 13, color: "rgba(200,220,255,0.82)" }}>
            One-time payment. Digital delivery. Educational and analytical commentary.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)", gap: 34 }} className="home-two-col">
          <div>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a4fd6" }}>
              What Is Included
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#0a1628", lineHeight: 1.12, margin: "16px 0" }}>
              Research you can turn into a next decision.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#5a6a8a", margin: 0 }}>
              Built for professionals who want to understand work change without relying on hype, fear, or generic upskilling advice.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {INCLUDES.map((item) => (
              <div key={item} style={{ background: "#f8fbff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "16px 18px", color: "#304159", fontSize: 15, fontWeight: 800 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "0 0 24px", textAlign: "center" }}>
            Best fit
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {FIT.map((item) => (
              <div key={item} style={{ background: "#ffffff", border: "1px solid #dbe5f5", borderRadius: 8, padding: "20px", color: "#425472", lineHeight: 1.7, fontWeight: 700 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", background: "#ffffff", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0a1628", margin: "0 0 18px" }}>
            Want the broader research shelf first?
          </h2>
          <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.8, margin: "0 0 28px" }}>
            Browse the research library before choosing a paid report.
          </p>
          <Link href="/reports" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "14px 26px", borderRadius: 8, color: "#1a4fd6", border: "1px solid rgba(26,79,214,0.22)", textDecoration: "none", fontWeight: 800 }}>
            View Research Library
          </Link>
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
