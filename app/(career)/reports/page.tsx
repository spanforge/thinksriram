import type { Metadata } from "next";
import { Hero, LinkCard, PageShell, Section } from "@/components/career/AdvisoryUI";
import { REPORTS } from "@/lib/career/siteCatalog";

export const metadata: Metadata = {
  title: "Career and Workforce Reports | Think Sriram",
  description: "Published Sriram Advisory reports on careers, skills, AI, automation and workforce change.",
  alternates: { canonical: "/reports" },
};

export default function ReportsPage() {
  return <PageShell>
    <Hero eyebrow="Research library" title="Reports for clearer workforce and career decisions" body="Browse the reports currently published by Sriram Advisory. Each overview explains its audience, method and available edition." primary={{ label: "Browse reports", href: "#report-directory" }} />
    <Section id="report-directory" title="Published reports" intro="Choose a report to review its purpose, method, contents and price.">
      <div className="sa-grid">{REPORTS.map(report => <LinkCard key={report.href} meta={`${report.format} · ${report.price}`} title={report.title} body={report.blurb} href={report.href} cta="Review report" />)}</div>
    </Section>
  </PageShell>;
}
