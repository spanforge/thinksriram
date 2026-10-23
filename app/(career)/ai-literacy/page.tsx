import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import { AI_LITERACY_PRODUCTS } from "@/lib/career/siteCatalog";

export const metadata: Metadata = {
  title: "AI Literacy for Professionals | Think Sriram",
  description:
    "Plain-language AI education for HR, finance, sales, legal, and operations professionals. No coding, no jargon, no hype - just practical AI literacy.",
};

export default function AiLiteracyPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        style={{
          background: "linear-gradient(135deg, #071713 0%, #0f2f4d 55%, #1a4fd6 100%)",
          paddingTop: 96,
          paddingBottom: 72,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(13,146,104,0.2)",
              border: "1px solid rgba(134,239,172,0.45)",
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
                background: "#86efac",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#bbf7d0",
              }}
            >
              AI Literacy
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(38px, 5vw, 62px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.08,
              marginBottom: 18,
            }}
          >
            AI Literacy
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 22px)",
              color: "rgba(222,247,239,0.9)",
              lineHeight: 1.65,
              maxWidth: 700,
              margin: "0 auto 8px",
            }}
          >
            Practical AI education for working professionals.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: 640,
            }}
          >
            Learn AI without coding, jargon, or hype.
          </p>
          <Link
            href="/ai-literacy/absolute-beginners"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "13px 24px",
              borderRadius: 10,
              background: "#ffffff",
              color: "#0f2f4d",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 900,
            }}
          >
            Start with the Beginners Handbook
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 20px 80px" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto 34px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#304159", margin: "0 0 14px" }}>
            Most AI content is written for engineers, or written to scare you. This is neither.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4f5f7d", margin: 0 }}>
            AI Literacy is Sriram Advisory&apos;s growing collection of plain-language guides for people in HR, finance, sales, legal, and operations - no coding, no jargon, no hype. Start here if you simply want to understand AI before deciding what to do about it.
          </p>
        </div>

        <div
          className="guides-catalog-grid"
          style={{ maxWidth: 620, margin: "0 auto", gridTemplateColumns: "1fr" }}
        >
          {AI_LITERACY_PRODUCTS.map((product) => (
              <article
                key={product.title}
                className="guides-catalog-card"
                style={{
                  background: "linear-gradient(135deg, #f3fffb 0%, #dcfce7 100%)",
                  border: "1.5px solid #86efac",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  {product.badge ? (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: "#1a4fd6",
                        color: "#ffffff",
                        padding: "4px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {product.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#5f7291", textTransform: "uppercase", fontWeight: 700 }}>
                      Price
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#1a4fd6" }}>
                      {product.price}
                    </div>
                  </div>
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 24px)",
                      lineHeight: 1.2,
                      color: "#0a1628",
                      marginBottom: 12,
                    }}
                  >
                    {product.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "#425472", lineHeight: 1.7, margin: 0 }}>
                    {product.description}
                  </p>
                </div>

                <Link
                  href={product.href}
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    background: "#1a4fd6",
                    color: "#ffffff",
                    borderRadius: 10,
                    padding: "12px 16px",
                    fontSize: 14,
                    fontWeight: 900,
                  }}
                >
                  {product.ctaLabel} {"->"}
                </Link>
              </article>
          ))}
        </div>
      </section>

      </div>
      <Footer />
    </div>
  );
}
