import FrameworkDetailPage from "@/components/career/FrameworkDetailPage";
import { getFrameworkBySlug } from "@/lib/career/frameworkCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/frameworks/sa-airs" },
  title: "SA-AIRS | Think Sriram",
  description:
    "Public overview of SA-AIRS, Sriram Advisory's role exposure framework for understanding AI, automation, market pressure, and career durability.",
};

export default function SaAirsPage() {
  return <FrameworkDetailPage framework={getFrameworkBySlug("sa-airs")} />;
}
