import FrameworkDetailPage from "@/components/career/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/career/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/frameworks/career-positioning-audit" },
  title: "Career Positioning Audit Framework | Think Sriram",
  description:
    "Public overview of the Career Positioning Audit, Sriram Advisory's framework for evaluating professional signal, clarity, and market relevance.",
};

export default function CareerPositioningAuditFrameworkPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("career-positioning-audit")} />;
}
