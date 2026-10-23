"use client";

import Link from "next/link";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import StructuredData from "@/components/career/StructuredData";
import { Breadcrumbs, Hero, PageShell, Section } from "@/components/career/AdvisoryUI";
import { siteConfig } from "@/lib/career/advisoryContent";

const deliverables = [
  "A concise interpretation of your current role context",
  "A clear read on exposure, market pressure and confidence level",
  "Short-term and medium-term watch areas",
  "Practical next moves for learning, positioning and career narrative",
  "Email delivery after your intake is reviewed",
];

const process = [
  ["Order the assessment", "Complete secure payment and receive the intake instructions."],
  ["Share your context", "Provide your role, industry, experience, current responsibilities and questions."],
  ["Receive the report", "Get a structured career intelligence note with interpretation and next-step direction."],
];

export default function AIRSPage() {
  const productUrl = `${siteConfig.canonicalOrigin}/products/airs-assessment`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SA-AIRS Career Risk Audit",
    description: "A structured career-risk assessment covering role exposure, market pressure, defensibility and practical next moves.",
    url: productUrl,
    brand: { "@id": `${siteConfig.canonicalOrigin}/#organization` },
    offers: { "@type": "Offer", priceCurrency: "INR", price: "1999", availability: "https://schema.org/InStock", url: productUrl },
  };
  return <PageShell>
    <StructuredData data={schema} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Assessments", href: "/assessments" }, { label: "SA-AIRS Career Risk Audit" }]} />
    <Hero eyebrow="SA-AIRS Career Risk Audit · ₹1,999" title="Get an independent read on your role" body="A structured assessment for professionals who want to understand how their role is changing and what to examine next." primary={{ label: "Order the Assessment", href: "#order-form" }} secondary={{ label: "Compare Assessments", href: "/assessments" }} />
    <Section title="A practical interpretation, not a black-box prediction" intro="The assessment is designed to help you think more clearly about work change, role durability and positioning choices.">
      <ul className="sa-list sa-checklist">{deliverables.map(item => <li key={item}>{item}</li>)}</ul>
    </Section>
    <Section muted title="How it works">
      <ol className="sa-process">{process.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}</ol>
    </Section>
    <Section title="How to interpret the result" intro="The assessment organises role and market signals. It is decision support, not a probability of job loss, a guarantee or a substitute for employment or financial advice.">
      <div className="sa-card"><h3>Your context remains essential</h3><p>The interpretation depends on the role information you provide. Use the report alongside your responsibilities, constraints and available choices.</p></div>
    </Section>
    <Section id="order-form" muted title="Order the assessment" intro="After payment, intake instructions will be sent to the email address you provide.">
      <div className="sa-checkout-panel">
        <CashfreeCheckout productName="SA-AIRS Career Risk Audit" amount={1999} accentColor="#0a3d91" deliveryNote="Intake instructions and delivery details will be sent to your email." emailNote="Use the email where you want to receive the assessment instructions." buttonLabel="Pay ₹1,999" buttonStyle={{ background: "#0a3d91", color: "#ffffff", fontWeight: 800, fontSize: 16, padding: "15px 30px", borderRadius: 8, border: "1px solid #0a3d91" }} />
      </div>
      <div className="sa-actions"><Link className="sa-arrow" href="/assessments">← See all assessments</Link></div>
    </Section>
  </PageShell>;
}
