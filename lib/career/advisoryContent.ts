import { AI_LITERACY_PRODUCTS, FREE_RESOURCES, GUIDES, REPORTS } from "@/lib/career/siteCatalog";
import { INSIGHTS } from "@/lib/career/insights";

export const siteConfig = {
  brandName: "Think Sriram",
  descriptor: "Clear thinking. Practical progress.",
  canonicalOrigin: "https://thinksriram.com",
  email: "sriram@sriramadvisory.com",
  whatsapp: "https://wa.me/919342229420",
} as const;

export type PillarId = "career" | "business" | "technology-digital-safety" | "education";
export type Interest = "career" | "business" | "capability" | "other";

export const pillars = [
  { id: "business", label: "Business Performance Advisory", href: "/contact", summary: "Improve delivery, quality, operations and the connection between sales promises and execution.", cta: "Explore Business Advisory" },
  { id: "career", label: "Career Intelligence", href: "/careers", summary: "Understand how technology and market change affect your role, positioning and next career decision.", cta: "Explore Career Intelligence" },
] as const;

export const offers = [
  { id: "career-risk-audit", pillar: "career", audience: "Individuals", title: "SA-AIRS Career Risk Audit", summary: "A structured view of role exposure, defensibility and practical next moves.", commercial: "₹1,999", href: "/products/airs-assessment", cta: "Explore the Career Risk Audit" },
  { id: "business-delivery-health-check", pillar: "business", audience: "Growing businesses and teams", title: "Business and Delivery Health Check", summary: "A prioritised view of delivery and operating problems, followed by a practical action plan.", commercial: "Scope agreed after an initial discussion", href: "/contact", cta: "Explore the Health Check" },
] as const;

export type ResourceRecord = {
  id: string; title: string; summary: string; topic: PillarId; format: "tool" | "guide" | "template" | "report" | "bundle"; access: "free" | "paid"; href: string; price?: string; role: string; featuredRank: number; publishedAt: string;
};

const slugId = (href: string) => href.split("/").filter(Boolean).join("-");

export const resources: ResourceRecord[] = [
  { id: "free-ai-exposure", title: "Free AI Exposure Check", summary: "A six-question educational check to explore how AI may affect parts of your role.", topic: "career", format: "tool", access: "free", href: "/tools/free-ai-exposure-check", role: "All professionals", featuredRank: 1, publishedAt: "2026-09-01" },
  ...GUIDES.map((guide, index): ResourceRecord => ({ id: slugId(guide.href), title: guide.title, summary: guide.blurb, topic: "career", format: "guide", access: "paid", price: guide.price, href: guide.href, role: guide.role, featuredRank: 10 + index, publishedAt: "2026-06-01" })),
  ...REPORTS.map((report, index): ResourceRecord => ({ id: slugId(report.href), title: report.title, summary: report.blurb, topic: "career", format: "report", access: "paid", price: report.price, href: report.href, role: "Professionals and leaders", featuredRank: 40 + index, publishedAt: "2026-06-01" })),
  ...AI_LITERACY_PRODUCTS.map((product, index): ResourceRecord => ({ id: slugId(product.href), title: product.title, summary: product.description, topic: "career", format: "guide", access: product.price ? "paid" : "free", price: product.price ?? undefined, href: product.href, role: "AI beginners", featuredRank: 50 + index, publishedAt: "2026-06-01" })),
  ...FREE_RESOURCES.map((resource, index): ResourceRecord => ({ id: slugId(resource.href), title: resource.title, summary: resource.blurb, topic: "career", format: "guide", access: "free", href: resource.href, role: "General readers", featuredRank: 60 + index, publishedAt: "2026-05-01" })),
  { id: "career-bundles", title: "Career Resource Bundles", summary: "Existing combinations of Sriram Advisory guides, reports and assessments grouped by role and need.", topic: "career", format: "bundle", access: "paid", href: "/bundles", role: "Professionals", featuredRank: 70, publishedAt: "2026-06-01" },
];

export const relatedInsights = INSIGHTS.map(({ slug, title, summary, topic, date }) => ({ slug, title, summary, topic: topic as PillarId, date }));

export const interestLabels: Record<Interest, string> = {
  career: "Career intelligence for individuals", business: "Business performance advisory", capability: "Team capability within IT services", other: "Other",
};

export const offerInterest: Record<string, Interest> = {
  "business-delivery-health-check": "business",
};
