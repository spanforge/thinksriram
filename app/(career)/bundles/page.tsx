import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import {
  BUNDLE_DELIVERY_NOTE,
  BUNDLE_PAGE_SUBTITLE,
  BUNDLE_ROLE_JUMPS,
  BUNDLE_SECTIONS,
} from "@/lib/career/bundlesCatalog";

export const metadata: Metadata = {
  title: "Bundles | Think Sriram",
  description: BUNDLE_PAGE_SUBTITLE,
  alternates: { canonical: "/bundles" },
};

export default function BundlesPage() {
  return (
    <div className="font-body bg-white text-[#0a1628] min-h-screen">
      <Navbar />
      <div id="main-content" className="sa-legacy">

      <section
        className="bundles-hero"
        style={{
          background: "linear-gradient(135deg, #08111f 0%, #102346 54%, #1a4fd6 100%)",
          paddingTop: 72,
          paddingBottom: 56,
          textAlign: "center",
        }}
      >
        <div className="bundles-hero-inner" style={{ maxWidth: 880, margin: "0 auto", padding: "0 20px" }}>
          <div
            className="bundles-hero-eyebrow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(147,180,255,0.12)",
              border: "1px solid rgba(147,180,255,0.22)",
              borderRadius: 999,
              padding: "6px 14px",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#93b4ff",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#dbeafe",
              }}
            >
              Bundles
            </span>
          </div>

          <h1
            className="bundles-hero-title"
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 18,
            }}
          >
            Complete intelligence stacks
          </h1>

          <p
            className="bundles-hero-subtitle"
            style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "rgba(219,234,254,0.88)",
              lineHeight: 1.7,
              maxWidth: 760,
              margin: "0 auto 20px",
            }}
          >
            {BUNDLE_PAGE_SUBTITLE}
          </p>

          <div
            className="bundles-hero-note"
            style={{
              maxWidth: 760,
              margin: "0 auto",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: "16px 18px",
            }}
          >
            <p style={{ fontSize: 14, color: "#f8fbff", lineHeight: 1.65, margin: 0 }}>
              {BUNDLE_DELIVERY_NOTE} Same delivery process as individual guides and reports.
            </p>
          </div>
        </div>
      </section>

      <section className="bundles-role-nav" style={{ padding: "22px 20px 10px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%)",
              border: "1px solid #d9e2ec",
              borderRadius: 22,
              padding: "18px 18px 16px",
            }}
          >
            <div style={{ marginBottom: 14 }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#1a4fd6",
                  margin: "0 0 8px",
                }}
              >
                Jump to your role
              </p>
              <p style={{ fontSize: 14, color: "#51627f", lineHeight: 1.65, margin: 0 }}>
                Use direct links from posts or jump straight to the bundle that matches your role.
              </p>
            </div>

            <div
              className="bundles-role-nav-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 10,
              }}
            >
              {BUNDLE_ROLE_JUMPS.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minHeight: 46,
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: "1px solid #cfe0ff",
                    background: "#ffffff",
                    color: "#0f274f",
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {BUNDLE_SECTIONS.map((section) => (
        <section
          key={section.id}
          className="bundle-tier-section"
          style={{
            padding: "34px 20px 24px",
            background: section.id === "tier-1" ? "#ffffff" : "#f8fafc",
          }}
        >
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="bundle-tier-header" style={{ textAlign: "center", marginBottom: 24 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: section.accentColor,
                  marginBottom: 10,
                }}
              >
                {section.eyebrow}
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 900,
                  color: "#0a1628",
                  letterSpacing: "-0.03em",
                  marginBottom: 8,
                }}
              >
                {section.title}
              </h2>
              <p style={{ fontSize: 16, color: "#5a6a8a", lineHeight: 1.65, margin: 0 }}>
                {section.tagline}
              </p>
            </div>

            <div
              className="bundle-tier-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {section.bundles.map((bundle) => (
                <article
                  key={bundle.name}
                  id={bundle.slug}
                  className="bundle-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    scrollMarginTop: 104,
                    background: section.tint,
                    border: `1.5px solid ${section.borderColor}`,
                    borderRadius: 24,
                    padding: "22px 18px 18px",
                    boxShadow:
                      bundle.badge === "Best Value"
                        ? "0 22px 60px rgba(180, 83, 9, 0.14)"
                        : bundle.badge === "Most Popular"
                          ? "0 18px 48px rgba(26, 79, 214, 0.12)"
                          : "0 12px 34px rgba(10, 22, 40, 0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="bundle-card-title-wrap" style={{ paddingRight: 0 }}>
                    {bundle.badge && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          minHeight: 28,
                          padding: "5px 10px",
                          marginBottom: 12,
                          borderRadius: 6,
                          background: bundle.badge === "Best Value" ? "#b45309" : "#1a4fd6",
                          color: "#ffffff",
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {bundle.badge}
                      </span>
                    )}
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: section.accentColor,
                        margin: "0 0 10px",
                      }}
                    >
                      {bundle.role}
                    </p>
                    <h3
                      className="bundle-card-title"
                      style={{
                        fontSize: "clamp(22px, 3.2vw, 30px)",
                        fontWeight: 900,
                        color: "#0a1628",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        marginBottom: 12,
                      }}
                    >
                      {bundle.name}
                    </h3>
                  </div>

                  <div className="bundle-card-pricing" style={{ marginBottom: 14 }}>
                    <div
                      className="bundle-card-price"
                      style={{
                        fontSize: 34,
                        fontWeight: 900,
                        color: section.accentColor,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {bundle.priceLabel}
                    </div>
                    <div
                      className="bundle-card-savings"
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#15803d",
                        marginTop: 8,
                      }}
                    >
                      {bundle.savingsLabel}
                    </div>
                  </div>

                  <p
                    className="bundle-card-description"
                    style={{
                      fontSize: 14,
                      color: "#334155",
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {bundle.description}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#0f274f",
                      lineHeight: 1.45,
                      margin: "0 0 16px",
                    }}
                  >
                    {bundle.outcome}
                  </p>

                  <div
                    className="bundle-card-items"
                    style={{
                      flex: 1,
                      background: "rgba(255,255,255,0.68)",
                      border: "1px solid rgba(10,22,40,0.08)",
                      borderRadius: 18,
                      padding: "14px 14px",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: section.accentColor,
                        marginBottom: 10,
                      }}
                    >
                      Included in this bundle
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {bundle.items.map((item) => (
                        <div
                          key={`${bundle.name}-${item.name}`}
                          className="bundle-card-item-row"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 12,
                            alignItems: "baseline",
                            fontSize: 13,
                          }}
                        >
                          <span style={{ color: "#1e293b", lineHeight: 1.55, flex: 1, minWidth: 0 }}>{item.name}</span>
                          <span
                            style={{
                              color: "#475569",
                              whiteSpace: "nowrap",
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {bundle.note && (
                    <p
                      className="bundle-card-note"
                      style={{
                        fontSize: 12,
                        color: "#64748b",
                        lineHeight: 1.6,
                        marginBottom: 14,
                      }}
                    >
                      {bundle.note}
                    </p>
                  )}

                  <div className="bundle-card-cta" style={{ marginTop: "auto", marginBottom: 10 }}>
                    <CashfreeCheckout
                      productName={bundle.name}
                      amount={bundle.price}
                      accentColor={section.accentColor}
                      deliveryNote={BUNDLE_DELIVERY_NOTE}
                      emailNote="Your bundle contents will be delivered to this email."
                      buttonLabel={`Get the Bundle - ${bundle.priceLabel}`}
                      buttonStyle={{
                        width: "100%",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 800,
                        padding: "15px 18px",
                        borderRadius: 12,
                        background: section.accentColor,
                        color: "#ffffff",
                        boxShadow: "0 14px 30px rgba(10, 22, 40, 0.16)",
                      }}
                    />
                  </div>

                  <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.55, margin: 0 }}>
                    {BUNDLE_DELIVERY_NOTE}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bundles-delivery-section" style={{ padding: "40px 20px 80px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "#0a1628",
            borderRadius: 26,
            padding: "26px 22px",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#93b4ff",
                marginBottom: 12,
              }}
            >
              Delivery
            </span>
            <h2
              style={{
                fontSize: "clamp(24px, 3.6vw, 38px)",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              Simple purchase flow, delivery
            </h2>
            <p style={{ fontSize: 15, color: "rgba(219,234,254,0.82)", lineHeight: 1.75, margin: 0 }}>
              All bundle contents are delivered by email after payment confirmation. Guides and
              reports usually land within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .bundles-hero {
            padding-top: 48px !important;
            padding-bottom: 38px !important;
          }

          .bundles-hero-inner {
            padding: 0 16px !important;
          }

          .bundles-hero-eyebrow {
            margin-bottom: 14px !important;
            padding: 6px 12px !important;
          }

          .bundles-hero-title {
            font-size: 38px !important;
            line-height: 1 !important;
            margin-bottom: 12px !important;
          }

          .bundles-hero-subtitle {
            font-size: 14px !important;
            line-height: 1.58 !important;
            margin-bottom: 16px !important;
          }

          .bundles-hero-note {
            padding: 14px 14px !important;
            border-radius: 18px !important;
          }

          .bundles-role-nav {
            padding: 16px 16px 8px !important;
          }

          .bundles-role-nav-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .bundle-tier-section {
            padding: 26px 16px 18px !important;
          }

          .bundle-tier-header {
            margin-bottom: 18px !important;
          }

          .bundle-tier-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .bundle-card {
            border-radius: 20px !important;
            padding: 18px 14px 14px !important;
          }

          .bundle-card-title-wrap {
            padding-right: 0 !important;
          }

          .bundle-card-title {
            font-size: 24px !important;
            line-height: 1.15 !important;
            margin-bottom: 10px !important;
          }

          .bundle-card-price {
            font-size: 30px !important;
          }

          .bundle-card-savings {
            font-size: 13px !important;
            margin-top: 6px !important;
          }

          .bundle-card-description {
            font-size: 13px !important;
            line-height: 1.65 !important;
            margin-bottom: 14px !important;
          }

          .bundle-card-items {
            padding: 12px 12px !important;
            border-radius: 16px !important;
            margin-bottom: 12px !important;
          }

          .bundle-card-item-row {
            flex-wrap: wrap !important;
            gap: 10px !important;
          }

          .bundle-card-note {
            font-size: 11px !important;
            margin-bottom: 12px !important;
          }

          .bundle-card-cta {
            margin-bottom: 8px !important;
          }

          .bundle-card-cta button {
            width: 100% !important;
            font-size: 14px !important;
            padding: 14px 14px !important;
            border-radius: 10px !important;
          }

          .bundles-delivery-section {
            padding: 28px 16px 64px !important;
          }
        }
      `}</style>

      </div>
      <Footer />
    </div>
  );
}
