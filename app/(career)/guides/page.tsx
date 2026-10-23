import type { Metadata } from "next";
import Link from "next/link";
import { Hero, PageShell, Section } from "@/components/career/AdvisoryUI";
import GuidesCatalog from "@/components/career/GuidesCatalog";
import { GUIDES } from "@/lib/career/siteCatalog";
import { LIFETIME_UPDATES_BODY, LIFETIME_UPDATES_TITLE } from "@/lib/career/guideSalesContent";

export const metadata: Metadata = {
  title: "Career Guides | Think Sriram",
  description: "Role-specific career guides with practical direction for professionals responding to changes in work.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return <PageShell>
    <Hero eyebrow="Career resources" title="Role-specific guidance for a changing market" body="Compare the career guides currently available from Sriram Advisory and choose the one that fits your role and decision." primary={{ label: "Browse guides", href: "#guide-directory" }} secondary={{ label: "View career bundles", href: "/bundles" }} />
    <Section muted eyebrow="Published commitment" title={LIFETIME_UPDATES_TITLE} intro={LIFETIME_UPDATES_BODY}>
      <p className="sa-section-intro">If you need a guide together with wider market context, the bundles page combines selected guides and reports.</p>
      <Link className="sa-arrow" href="/bundles">Browse career bundles →</Link>
    </Section>
    <Section id="guide-directory" title="Find the guide for your role" intro="Search the published catalogue and review the scope before purchasing.">
      <GuidesCatalog guides={GUIDES} deliveryNote="Delivered to your inbox, typically within 30 minutes of payment." bonusNote="Every guide includes the Agentic AI Field Guide bonus at no extra cost." />
    </Section>
  </PageShell>;
}
