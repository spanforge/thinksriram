"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type GuideCatalogItem = {
  badge?: string;
  title: string;
  subtitle: string;
  blurb: string;
  price: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  role: string;
  timeline: string;
  riskScore: string;
  focus: string;
};

type GuidesCatalogProps = {
  guides: GuideCatalogItem[];
  deliveryNote: string;
  bonusNote: string;
};

export default function GuidesCatalog({
  guides,
  deliveryNote,
  bonusNote,
}: GuidesCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeRole, setActiveRole] = useState("All guides");

  const roleOptions = useMemo(() => {
    return [
      "All guides",
      ...Array.from(new Set(guides.map((guide) => guide.role))).sort(),
    ];
  }, [guides]);

  const filteredGuides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return guides.filter((guide) => {
      const matchesRole =
        activeRole === "All guides" || guide.role === activeRole;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          guide.title,
          guide.subtitle,
          guide.blurb,
          guide.role,
          guide.focus,
          guide.timeline,
          guide.riskScore,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesRole && matchesQuery;
    });
  }, [activeRole, guides, query]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div
        style={{
          background: "#f8fbff",
          border: "1px solid rgba(26,79,214,0.12)",
          borderRadius: 20,
          padding: "24px clamp(18px, 3vw, 28px)",
          boxShadow: "0 20px 50px rgba(10,22,40,0.05)",
        }}
      >
        <div className="guides-toolbar-grid">
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1a4fd6",
                marginBottom: 10,
              }}
            >
              Browse Faster
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                lineHeight: 1.05,
                color: "#0a1628",
                marginBottom: 10,
                letterSpacing: "-0.03em",
              }}
            >
              Find the right guide without reading every card
            </h2>
            <p style={{ fontSize: 15, color: "#4f5f7d", lineHeight: 1.7, margin: 0 }}>
              Search by role, filter by category, or jump straight to a guide below.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 12,
              alignContent: "start",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                border: "1px solid rgba(10,22,40,0.1)",
                borderRadius: 14,
                padding: 12,
              }}
            >
              <label
                htmlFor="guide-search"
                style={{
                  display: "block",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#587097",
                  marginBottom: 8,
                }}
              >
                Search guides
              </label>
              <input
                id="guide-search"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try QA, Java, product manager..."
                style={{
                  width: "100%",
                  border: "1px solid rgba(10,22,40,0.12)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  fontSize: 15,
                  color: "#0a1628",
                  background: "#f8fbff",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(10,22,40,0.08)",
                  borderRadius: 14,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 12, color: "#587097", textTransform: "uppercase", fontWeight: 700 }}>
                  Available now
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0a1628", marginTop: 6 }}>
                  {guides.length}
                </div>
              </div>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(10,22,40,0.08)",
                  borderRadius: 14,
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 12, color: "#587097", textTransform: "uppercase", fontWeight: 700 }}>
                  Showing
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0a1628", marginTop: 6 }}>
                  {filteredGuides.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#587097",
              marginBottom: 10,
            }}
          >
            Filter by role
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {roleOptions.map((role) => {
              const isActive = activeRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  style={{
                    borderRadius: 999,
                    padding: "10px 14px",
                    border: isActive ? "1px solid #1a4fd6" : "1px solid rgba(10,22,40,0.1)",
                    background: isActive ? "#1a4fd6" : "#ffffff",
                    color: isActive ? "#ffffff" : "#38506f",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#587097",
              marginBottom: 10,
            }}
          >
            Jump to guide
          </div>
          <div className="guides-jump-grid">
            {filteredGuides.map((guide) => (
              <a
                key={`${guide.href}-jump`}
                href={`#${guide.href.split("/").pop()}`}
                style={{
                  textDecoration: "none",
                  background: "#ffffff",
                  border: "1px solid rgba(10,22,40,0.08)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  color: "#0a1628",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4 }}>{guide.title}</div>
                <div style={{ fontSize: 12, color: guide.accentColor, marginTop: 4 }}>{guide.role}</div>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
            color: "#566883",
          }}
        >
          <span>{deliveryNote}</span>
          <span>{bonusNote}</span>
        </div>
      </div>

      {filteredGuides.length === 0 ? (
        <div
          style={{
            border: "1px dashed rgba(10,22,40,0.14)",
            borderRadius: 18,
            padding: "40px 24px",
            textAlign: "center",
            color: "#4f5f7d",
            background: "#fbfdff",
          }}
        >
          No guides match that search yet. Try a broader role or clear the search.
        </div>
      ) : (
        <div className="guides-catalog-grid">
          {filteredGuides.map((guide) => {
            const sectionId = guide.href.split("/").pop() ?? guide.title;

            return (
              <article
                key={guide.href}
                id={sectionId}
                className="guides-catalog-card"
                style={{
                  background: guide.bgGradient,
                  border: `1.5px solid ${guide.borderColor}`,
                }}
              >
                <div className="guides-card-header" style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                  {guide.badge && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: guide.accentColor,
                        color: "#ffffff",
                        padding: "4px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {guide.badge}
                    </span>
                  )}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#5f7291", textTransform: "uppercase", fontWeight: 700 }}>
                      Price
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: guide.accentColor }}>{guide.price}</div>
                  </div>
                </div>

                <div className="guides-card-copy">
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2.2vw, 24px)",
                      lineHeight: 1.2,
                      color: "#0a1628",
                      marginBottom: 8,
                    }}
                  >
                    {guide.title}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 700, color: guide.accentColor, marginBottom: 12 }}>
                    {guide.subtitle}
                  </p>
                  <Link
                    href={guide.href}
                    className="mobile-card-action"
                    style={{
                      textDecoration: "none",
                      background: guide.accentColor,
                      color: "#ffffff",
                      borderRadius: 10,
                      padding: "12px 16px",
                      fontSize: 14,
                      fontWeight: 800,
                      textAlign: "center",
                    }}
                  >
                    View guide {"->"}
                  </Link>
                  <p style={{ fontSize: 14, color: "#425472", lineHeight: 1.7, margin: 0 }}>{guide.blurb}</p>
                </div>

                <div className="guides-card-tags" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[guide.role, guide.timeline, guide.riskScore, guide.focus].map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#38506f",
                        background: "rgba(255,255,255,0.72)",
                        border: "1px solid rgba(10,22,40,0.08)",
                        borderRadius: 999,
                        padding: "7px 10px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href={guide.href}
                  className="desktop-card-action"
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    textDecoration: "none",
                    background: guide.accentColor,
                    color: "#ffffff",
                    borderRadius: 10,
                    padding: "12px 16px",
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  View guide {"->"}
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
