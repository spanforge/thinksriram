import type { Metadata } from "next";
import GuideSalesPage from "@/components/career/GuideSalesPage";
import { guideSalesContent } from "@/lib/career/guideSalesContent";

export const metadata: Metadata = {
  title: "AI Literacy for Absolute Beginners | Think Sriram",
  description:
    "Plain-language AI foundations handbook for working professionals. Includes 37 pages, 100 prompts, 6 tool tutorials, and 7 role playbooks. Rs 499.",
};

export default function AiLiteracyAbsoluteBeginnersPage() {
  return (
    <GuideSalesPage content={guideSalesContent["ai-literacy-absolute-beginners"]} />
  );
}
