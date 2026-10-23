import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import ProductRecommendations from "@/components/career/ProductRecommendations";
import StructuredData from "@/components/career/StructuredData";
import Link from "next/link";
import {
  BONUS_GUIDE_NOTE,
  BONUS_GUIDE_TITLE,
  DELIVERY_NOTE,
  FOUNDER_TRUST_NOTE,
  LIFETIME_UPDATES_BODY,
  LIFETIME_UPDATES_SHORT_NOTE,
  LIFETIME_UPDATES_TITLE,
  SHARED_FAQ,
  type GuidePageContent,
  guideSalesContent,
} from "@/lib/career/guideSalesContent";
import { siteConfig } from "@/lib/career/advisoryContent";

type GuideSalesPageProps = {
  content: GuidePageContent;
};

export default function GuideSalesPage({ content }: GuideSalesPageProps) {
  const slug = Object.entries(guideSalesContent).find(([, value]) => value === content)?.[0];
  const canonicalUrl = slug ? `${siteConfig.canonicalOrigin}/guides/${slug}` : `${siteConfig.canonicalOrigin}/guides`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.productName,
    description: content.heroSummary,
    url: canonicalUrl,
    brand: { "@id": `${siteConfig.canonicalOrigin}/#organization` },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "499",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };
  const theme = {
    ...content.theme,
    accent: "#1a4fd6",
    accentSoft: "#1a4fd6",
    accentStrong: "#0a3d91",
    heroGradient: "linear-gradient(135deg, #ffffff 0%, #f2f7ff 100%)",
    heroText: "#526b8a",
    sectionTint: "#f8fbff",
    sectionBorder: "#dbe5f5",
    panelTint: "#ffffff",
    finalGradient: "linear-gradient(135deg, #ffffff 0%, #f2f7ff 100%)",
  };
  const testimonials: NonNullable<GuidePageContent["testimonials"]> = [];
  const isAiLiteracy = content.category === "ai-literacy";

  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">
      <StructuredData data={productSchema} />

      <section
        style={{
          background: theme.heroGradient,
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

        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 28,
              flexWrap: "wrap",
            }}
          >
            {!isAiLiteracy && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#f2f7ff",
                  border: "1px solid #b8caea",
                  borderRadius: 20,
                  padding: "6px 16px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0a3d91",
                }}
              >
                Role context · SA-AIRS {content.score}
              </span>
            )}
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
                color: theme.accentSoft,
              }}
            >
              {content.editionLabel}
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
            {content.title}
            <br />
            <span style={{ color: theme.accentSoft }}>{content.accentTitle}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: theme.heroText,
              lineHeight: 1.65,
              maxWidth: 740,
              margin: "0 auto 16px",
            }}
          >
            {content.heroSummary}
          </p>

          <p
            style={{
              fontSize: 15,
              color: "#526b8a",
              fontStyle: "italic",
              marginBottom: 28,
            }}
          >
            {content.heroNote}
          </p>

          {!isAiLiteracy && (
            <p style={{ fontSize: 13, color: "#526b8a", margin: "-12px auto 28px", maxWidth: 700 }}>
              The score is a structured decision-support signal, not a prediction of an individual employment outcome.
            </p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {content.outcomeBullets.map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fbff",
                  border: "1px solid #dbe5f5",
                  borderRadius: 999,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#526b8a",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            className="hero-price-box"
            style={{
              background: "#ffffff",
              border: "1px solid #dbe5f5",
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
                  color: "#1a4fd6",
                  letterSpacing: "-0.03em",
                }}
              >
                Rs 499
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.accentSoft,
                marginBottom: 16,
                display: "block",
              }}
            >
              {DELIVERY_NOTE}
            </span>
            <p
              style={{
                fontSize: 13,
                color: "#526b8a",
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#526b8a",
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              {FOUNDER_TRUST_NOTE}
            </p>
            <div
              style={{
                background: "#f8fbff",
                border: "1px solid #dbe5f5",
                borderRadius: 14,
                padding: "14px 16px",
                margin: "0 0 20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: theme.accentSoft,
                  marginBottom: 8,
                }}
              >
                {LIFETIME_UPDATES_TITLE}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.84)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {LIFETIME_UPDATES_SHORT_NOTE}
              </p>
            </div>

            <CashfreeCheckout
              productName={content.productName}
              amount={499}
              accentColor={theme.accent}
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your guide will be delivered to this email."
              buttonLabel="Continue to secure payment ->"
              buttonStyle={{
                fontSize: 17,
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: 10,
                background: theme.accent,
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                width: "100%",
                minWidth: 280,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                marginTop: 12,
              }}
            >
              Secure payment via Cashfree. Checkout takes about 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section
          style={{
            background: `linear-gradient(180deg, ${theme.sectionTint} 0%, #ffffff 100%)`,
            padding: "42px 20px 36px",
            borderBottom: `1px solid ${content.theme.sectionBorder}`,
          }}
        >
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  display: "block",
                  marginBottom: 10,
                }}
              >
                Customer Feedback
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 900,
                  color: "#0a1628",
                  letterSpacing: "-0.03em",
                  marginBottom: 0,
                }}
              >
                What readers said after using it
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.quote}
                  style={{
                    background: index === 0 ? "#ffffff" : "#f8fafc",
                    border: `1px solid ${content.theme.sectionBorder}`,
                    boxShadow:
                      index === 0
                        ? "0 24px 60px rgba(10, 22, 40, 0.12)"
                        : "0 14px 32px rgba(10, 22, 40, 0.08)",
                    borderRadius: 22,
                    padding: "28px 28px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: theme.accent,
                      color: "#ffffff",
                      borderRadius: 999,
                      padding: "7px 14px",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 18,
                    }}
                  >
                    Reader Feedback
                  </div>
                  <p
                    style={{
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: "#24364d",
                      margin: 0,
                    }}
                  >
                    &quot;{testimonial.quote}&quot;
                  </p>
                  {testimonial.source && (
                    <div style={{ marginTop: 18, fontSize: 14, fontWeight: 700, color: theme.accent }}>
                      {testimonial.source}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
          {content.promiseBullets.map((item) => (
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

      <section style={{ background: content.theme.sectionTint, padding: "72px 20px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.accent,
                display: "block",
                marginBottom: 12,
              }}
            >
              What You Walk Away With
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              A clearer next move, not more noise
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {content.whatYouGet.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: `1px solid ${content.theme.sectionBorder}`,
                  borderRadius: 16,
                  padding: "24px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: theme.accent,
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
          <p
            style={{
              margin: "32px auto 0",
              maxWidth: 680,
              textAlign: "center",
              fontSize: 16,
              fontWeight: 700,
              color: "#304159",
              lineHeight: 1.7,
            }}
          >
            If none of those describe you, this guide was written for your next move.
          </p>
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
                color: theme.accentStrong,
                display: "block",
                marginBottom: 12,
              }}
            >
              Preview
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              What this guide helps you do
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {content.preview.map((item) => (
              <div
                key={item.title}
                style={{
                  background: content.theme.panelTint,
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

      <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 46 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.accent,
                display: "block",
                marginBottom: 12,
              }}
            >
              The Shift
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              What better positioning looks like
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {content.stages.map((item) => (
              <div
                key={item.stage + item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #d9e2ec",
                  borderRadius: 16,
                  padding: "22px 22px",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: item.color,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {item.stage}
                </div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#0a1628", marginBottom: 10 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: theme.accent,
                  display: "block",
                  marginBottom: 24,
                }}
              >
                This Is For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {content.forYou.map((item) => (
                  <div key={item} style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.6 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#dc2626",
                  display: "block",
                  marginBottom: 24,
                }}
              >
                Not For You If
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {content.notForYou.map((item) => (
                  <div key={item} style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.6 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d9e2ec",
              borderRadius: 18,
              padding: "28px 28px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: 10,
              }}
            >
              Why Buy From Sriram Advisory
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Practical guidance with a clear purpose
            </h2>
            <p style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.75, marginBottom: 14 }}>
              {FOUNDER_TRUST_NOTE}
            </p>
            <p style={{ fontSize: 15, color: "#5a6a8a", lineHeight: 1.75 }}>
              I explain the audience, contents and limits of each guide so you can decide whether it fits your question. Use it to connect your experience to a practical next step.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "72px 20px",
          background: `linear-gradient(180deg, ${theme.sectionTint} 0%, #ffffff 100%)`,
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              background: "#ffffff",
              border: `1px solid ${theme.sectionBorder}`,
              borderRadius: 20,
              padding: "30px 28px",
              boxShadow: "0 18px 40px rgba(10, 22, 40, 0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: theme.accent,
                marginBottom: 10,
              }}
            >
              Public Commitment
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3.4vw, 34px)",
                fontWeight: 900,
                color: "#0a1628",
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              {LIFETIME_UPDATES_TITLE}
            </h2>
            <p style={{ fontSize: 15, color: "#4a5a7a", lineHeight: 1.8, margin: 0 }}>
              {LIFETIME_UPDATES_BODY}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.accentStrong,
                display: "block",
                marginBottom: 12,
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#0a1628",
                letterSpacing: "-0.02em",
              }}
            >
              Before you buy
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {SHARED_FAQ.map((item) => (
              <div
                key={item.question}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #d9e2ec",
                  borderRadius: 16,
                  padding: "20px 22px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0a1628", marginBottom: 8 }}>
                  {item.question}
                </div>
                <div style={{ fontSize: 14, color: "#5a6a8a", lineHeight: 1.7 }}>
                  {item.question === "When do I receive the guide?" ? content.faqDelivery : item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "120px 24px",
          background: theme.finalGradient,
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
            {content.ctaTitle}
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,250,255,0.78)", lineHeight: 1.7, marginBottom: 40 }}>
            {content.ctaBody}
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em" }}>
                Rs 499
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.accentSoft,
                marginBottom: 20,
              }}
            >
              {DELIVERY_NOTE}
            </span>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                margin: "0 0 12px",
                maxWidth: 560,
              }}
            >
              <strong>{BONUS_GUIDE_TITLE}</strong> {BONUS_GUIDE_NOTE}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
                margin: "0 0 18px",
                maxWidth: 560,
              }}
            >
              <strong>{LIFETIME_UPDATES_TITLE}</strong> {LIFETIME_UPDATES_SHORT_NOTE}
            </p>
            <CashfreeCheckout
              productName={content.productName}
              amount={499}
              accentColor={theme.accent}
              deliveryNote="Delivered to your inbox, typically within 30 minutes of payment."
              emailNote="Your guide will be delivered to this email."
              buttonLabel="Buy now ->"
              buttonStyle={{
                fontSize: 16,
                fontWeight: 700,
                padding: "16px 40px",
                borderRadius: 10,
                background: theme.accent,
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.01em",
                minWidth: 260,
              }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.56)", marginTop: 14 }}>
              Secure payment via Cashfree. Delivered to your inbox, typically within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {!isAiLiteracy && (
        <section style={{ padding: "36px 20px", background: "#ffffff" }}>
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              background: "#f7fffb",
              border: "1px solid #bbf7d0",
              borderRadius: 18,
              padding: "24px 26px",
              display: "flex",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#1a4fd6",
                  marginBottom: 8,
                }}
              >
                New to AI?
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "#304159" }}>
                Start with AI Literacy for Absolute Beginners before choosing a role guide.
              </p>
            </div>
            <Link
              href="/ai-literacy/absolute-beginners"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                background: "#1a4fd6",
                color: "#ffffff",
                borderRadius: 10,
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Start with AI Literacy {"->"}
            </Link>
          </div>
        </section>
      )}

      <ProductRecommendations />

      </div>
      <Footer />
    </div>
  );
}
