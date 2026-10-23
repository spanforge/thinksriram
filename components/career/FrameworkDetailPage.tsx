import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, Hero, Section, Breadcrumbs } from "@/components/career/AdvisoryUI";
import type { FrameworkItem } from "@/lib/career/frameworkCatalog";
export default function FrameworkDetailPage({ framework }: { framework: FrameworkItem | undefined }) {
  if (!framework) notFound();
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Frameworks", href: "/frameworks" }, { label: framework.shortTitle }]} />
    <Hero eyebrow={framework.eyebrow} title={framework.shortTitle} body={framework.summary} primary={{ label: "Explore the framework", href: "#concept" }} secondary={{ label: "Discuss a career question", href: "/contact?interest=career" }} />
    <Section id="concept" title="The question and the approach" intro={framework.problem}><p className="sa-section-intro">{framework.concept}</p></Section>
    <Section title="Questions it helps examine" muted><ul className="sa-resource-prompts">{framework.whatItExplains.map(item => <li key={item}>{item}</li>)}</ul></Section>
    <Section title="An illustrative application" intro={framework.caseStudy}><p className="sa-illustrative">Illustrative example — not a client case study.</p><p>{framework.exampleUse}</p></Section>
    <Section title="Limits and interpretation" muted><ul className="sa-resource-prompts">{framework.limitations.map(item => <li key={item}>{item}</li>)}</ul><p>This is a conceptual aid for discussion. It is not a validated psychometric instrument, a population ranking or a prediction of employment outcomes. Interpret it alongside the actual work and available evidence.</p></Section>
    <Section title="Questions about this framework"><div className="sa-faq-list">{framework.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></Section>
    <Section title="Continue exploring"><div className="sa-actions"><Link className="sa-btn sa-btn-secondary" href={framework.relatedHref}>{framework.relatedLabel}</Link><Link href="/methodology">How I use evidence →</Link><Link href="/frameworks">All frameworks →</Link></div></Section>
  </PageShell>;
}
