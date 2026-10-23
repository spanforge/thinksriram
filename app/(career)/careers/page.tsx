import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCTA, Hero, LinkCard, PageShell, Section } from "@/components/career/AdvisoryUI";
import { copy } from "@/lib/career/positioning";
import { relatedInsights, resources } from "@/lib/career/advisoryContent";

export const metadata: Metadata = {
  title: "Career Intelligence for IT Professionals | Think Sriram",
  description: "Career intelligence for professionals across IT services, GCCs and adjacent digital roles navigating AI, role change and career positioning.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const guides = resources.filter(resource => resource.format === "guide").slice(0, 6);
  const careerInsights: typeof relatedInsights = [];

  return <PageShell>
    <Hero
      eyebrow="Career Intelligence"
      title={copy.careers.title}
      body={copy.careers.summary}
      primary={{ label: "Explore Career Assessments", href: "/assessments" }}
      secondary={{ label: "Take the Free AI Exposure Check", href: "/tools/free-ai-exposure-check" }}
    />

    <Section title="Explore the collection"><div className="sa-grid"><LinkCard title="All career products" body="Compare assessments, guides, reports and bundles in one place." href="/products" cta="Browse products" /><LinkCard title="Career resource bundles" body="Choose a collection that matches your role and next move." href="/bundles" cta="Compare bundles" /><LinkCard title="Free resources" body="Start with a free guide or explore the career frameworks." href="/free" cta="Explore free resources" /></div><div className="sa-actions"><Link href="/topics/careers">Read my writing on careers</Link><Link href="/frameworks">Explore the career frameworks</Link></div></Section><Section title="Three questions to clarify your next move">
      <div className="sa-grid">
        <div className="sa-card"><h3>What is changing?</h3><p>Understand which tasks, expectations and market signals are moving around your role.</p></div>
        <div className="sa-card"><h3>Where is your value strongest?</h3><p>Examine the judgment, context, capability and evidence that make your contribution more defensible.</p></div>
        <div className="sa-card"><h3>What should you do next?</h3><p>Choose a practical learning, positioning or transition move instead of reacting to broad predictions.</p></div>
      </div>
    </Section>

    <Section muted eyebrow="AI-enabled · Human-reviewed" title="Use AI signals without letting an algorithm define your future" intro="AI-assisted analysis helps examine how tasks, roles and market expectations are changing. Experience and professional judgment turn those signals into useful questions and practical options.">
      <div className="sa-grid sa-grid-2">
        <div className="sa-card"><h3>What AI can support</h3><p>Comparing role and task patterns, organising market signals and exploring how technology may change expectations.</p></div>
        <div className="sa-card"><h3>What it cannot decide</h3><p>Your potential, the value of your experience or the right career move. Assessments support your judgment; they do not predict or guarantee an outcome.</p></div>
      </div>
    </Section>

    <Section eyebrow="Structured starting points" title="Assess your role and positioning" intro="Use each assessment as decision support rather than a prediction or guarantee.">
      <div className="sa-grid">
        <LinkCard title="SA-AIRS Career Risk Audit" body="Understand role exposure, defensibility and practical next moves." href="/products/airs-assessment" cta="Explore the audit" />
        <LinkCard title="Career Positioning Audit" body="Review how clearly your resume and LinkedIn profile communicate value and direction." href="/services/career-positioning-audit" cta="Explore the audit" />
        <LinkCard title="Compare assessments" body="Choose the starting point that matches the career decision you need to make." href="/assessments" cta="Browse assessments" />
      </div>
    </Section>

    <Section eyebrow="Role-specific intelligence" title="Guides for the work you do now" intro="Each guide focuses on one role, the changes around it and a practical direction for stronger positioning.">
      <div className="sa-grid">{guides.map(guide => <LinkCard key={guide.id} title={guide.title} body={guide.summary} href={guide.href} cta="View guide" meta={guide.price} />)}</div>
      <div className="sa-actions"><Link className="sa-btn sa-btn-secondary" href="/guides">Browse All Guides</Link><Link className="sa-btn sa-btn-secondary" href="/reports">Browse Research Reports</Link></div>
    </Section>

    <Section muted title="Career capability in an IT services context" intro="Management readiness, communication, professional judgment and technology fluency matter because they shape the work you can own and the value others can see.">
      <LinkCard title="Discuss an individual career question" body="Use the contact route when your decision does not fit an existing assessment, guide or report." href="/contact?interest=career" cta="Discuss your career question" />
    </Section>

    {careerInsights.length > 0 && <Section title="Career intelligence insights"><div className="sa-grid">{careerInsights.slice(0, 3).map(article => <LinkCard key={article.slug} title={article.title} body={article.summary} href={`/insights/${article.slug}`} cta="Read insight" />)}</div></Section>}

    <ClosingCTA title="What career decision are you working through?" body="Share your role, context and the decision you need to make. I will help identify the most relevant current resource or next step." href="/contact?interest=career" label="Discuss Your Career Question" />
  </PageShell>;
}
