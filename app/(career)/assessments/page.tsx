import type { Metadata } from "next";
import { Hero, LinkCard, PageShell, Section } from "@/components/career/AdvisoryUI";

export const metadata: Metadata = {
  title: "Career Assessments | Think Sriram",
  description: "Compare the career assessments currently available from Sriram Advisory.",
  alternates: { canonical: "/assessments" },
};

export default function AssessmentsPage() {
  return <PageShell>
    <Hero eyebrow="Career assessments" title="Use a structured starting point for your career decision" body="Assessments organise evidence and questions around your role. They support judgment and do not predict job loss or guarantee an outcome." primary={{ label: "Compare assessments", href: "#assessment-options" }} secondary={{ label: "Take the free AI exposure check", href: "/tools/free-ai-exposure-check" }} />
    <Section id="assessment-options" title="Available assessments">
      <div className="sa-grid sa-grid-2">
        <LinkCard meta="Individual · ₹1,999" title="SA-AIRS Career Risk Audit" body="An independent interpretation of role exposure, market pressure and practical next moves." href="/products/airs-assessment" cta="Review the Career Risk Audit" />
        <LinkCard meta="Individual · Scope shown on service page" title="Career Positioning Audit" body="A structured review of how clearly a resume and LinkedIn profile communicate value and direction." href="/services/career-positioning-audit" cta="Review the Positioning Audit" />
      </div>
    </Section>
    <Section muted title="How to use an assessment" intro="Treat the result as one input into a decision. Compare it with your actual work, responsibilities, market context and available choices."><p>No assessment score is a probability of job loss or a substitute for financial, legal or employment advice.</p></Section>
  </PageShell>;
}
