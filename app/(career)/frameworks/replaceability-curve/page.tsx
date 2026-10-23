import FrameworkDetailPage from "@/components/career/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/career/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/frameworks/replaceability-curve" },
  title: "Replaceability Curve | Think Sriram",
  description:
    "Public overview of the Replaceability Curve, Sriram Advisory's framework for explaining quiet value erosion in professional work.",
};

export default function ReplaceabilityCurvePage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("replaceability-curve")} />;
}
