import FrameworkDetailPage from "@/components/career/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/career/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/frameworks/ai-leverage-ladder" },
  title: "AI Leverage Ladder | Think Sriram",
  description:
    "Public overview of the AI Leverage Ladder, Sriram Advisory's framework for moving from tool use to stronger professional leverage.",
};

export default function AiLeverageLadderPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("ai-leverage-ladder")} />;
}
