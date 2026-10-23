import Link from "next/link";
import type { Metadata } from "next";
import { PageShell, Hero, Section, LinkCard } from "@/components/career/AdvisoryUI";
import { FRAMEWORK_ITEMS } from "@/lib/career/frameworkCatalog";
export const metadata: Metadata = { title: "Career Decision Frameworks | Think Sriram", description: "Explore the purpose, practical examples and limits of Sriram's career decision frameworks.", alternates: { canonical: "/frameworks" } };
export default function Frameworks() {
  return <PageShell><Hero eyebrow="Career resources" title="Useful questions before a career decision" body="I use these conceptual frameworks to examine role exposure, changing work and professional positioning. Each page explains a distinct approach, an illustrative application and its limits." primary={{ label: "Explore the frameworks", href: "#frameworks" }} secondary={{ label: "Read the methodology", href: "/methodology" }} />
    <Section id="frameworks" title="Choose the question you are working through"><div className="sa-grid sa-grid-2">{FRAMEWORK_ITEMS.map(item => <LinkCard key={item.slug} title={item.shortTitle} body={item.summary} href={`/frameworks/${item.slug}`} cta="Read the framework" />)}</div></Section>
    <Section title="Use a framework to open the discussion" intro="A model helps organise questions; its name does not establish that it is scientifically validated. Compare its interpretation with your actual tasks, responsibilities and market context." muted><p>These frameworks support career reflection. For a business delivery or technology decision, start with the <Link href="/contact">consulting engagements</Link>.</p></Section>
  </PageShell>;
}
