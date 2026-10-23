import Link from "next/link";
import type { Metadata } from "next";
import { PageShell, Hero, Section, Breadcrumbs } from "@/components/career/AdvisoryUI";
import CashfreeCheckout from "@/components/career/CashfreeCheckout";
import MobileStickyCheckoutBar from "@/components/career/MobileStickyCheckoutBar";
import { proRefundPromise } from "@/lib/career/commercialCopy";
export const metadata: Metadata = { title: "Career Intelligence Report – Pro | Think Sriram", description: "A structured interpretation of self-reported career context, with thinking prompts, directional scores and a 90-day reassessment. ₹999.", alternates: { canonical: "/career-intelligence-report/sa-airs-pro" } };
const parts = [
  ["Career thinking assessment", "Five thinking frames help examine patterns suggested by your answers. Ratings are prompts for reflection, rather than measurements of your ability or personality."],
  ["SA-AIRS interpretation", "Explore task repetition, automation feasibility, market pressure, decision complexity and human dependency. Directional scores organise the interpretation; they are not probabilities of job loss."],
  ["Connections to your work", "Discuss how the patterns in your answers may relate to exposure and positioning. These are working explanations, rather than proven causal relationships."],
  ["AI leverage level", "An L1–L5 conceptual placement helps discuss tool use, workflow ownership and decision contribution. It is not a percentile or a ranking against a measured population."],
  ["Dimension context", "Consider each dimension alongside your responsibilities and the role context described. This is a qualitative comparison, rather than a claim of representative industry averages."],
  ["90-day reassessment", "Review your inputs and interpretation again at 90 days. The included reassessment helps discuss what changed, without promising a particular score improvement."],
];
export default function ProReport() {
  return <PageShell><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Career resources", href: "/careers" }, { label: "Pro report" }]} />
    <Hero eyebrow="Career Intelligence Report – Pro – ₹999" title="Examine your role with a structured outside perspective" body="I use your self-reported context to organise questions about changing work, responsibility and career positioning. The report is a starting point for reflection and your own decisions." primary={{ label: "Order the Pro report", href: "#order-report" }} secondary={{ label: "Read the methodology", href: "/methodology" }} />
    <Section title="What the report covers"><div className="sa-grid sa-grid-2">{parts.map(([title, body]) => <article className="sa-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></Section>
    <Section title="A useful fit when" intro="You want to examine how your tasks and responsibilities are changing, with a structured interpretation of the information you provide." muted><ul className="sa-resource-prompts"><li>You have a concrete role or career question to reflect on.</li><li>You want the reasoning and uncertainty made clear.</li><li>You understand that an analytical report supports your judgment rather than choosing a career for you.</li></ul></Section>
    <Section title="How to read the result" intro="The interpretation depends on the accuracy and completeness of your inputs. Ratings are directional and model-based."><p>Thinking frames are not validated psychological instruments. Levels are not population percentiles; comparisons do not establish a representative benchmark. The report does not predict job loss, prove causation or guarantee a career outcome.</p><p>Use it alongside your actual responsibilities, constraints and current evidence. Ask questions where the interpretation does not fit your work.</p><Link href="/disclaimer">Read the full limitations →</Link></Section>
    <Section id="order-report" title="Order and delivery" intro="₹999, one-time purchase. Delivery within 24 hours and a 90-day reassessment included." muted><CashfreeCheckout productName="Career Intelligence Report - Pro" amount={999} accentColor="#174d4a" buttonLabel="Order the Pro report – ₹999" deliveryNote="Report intake and delivery details will be sent to your email. The offer includes a 90-day reassessment." buttonStyle={{ background: "#174d4a", color: "#fff", padding: "14px 24px", borderRadius: 2 }} /><h3 className="sa-subheading">The Pro refund promise</h3><p>{proRefundPromise}</p><Link href="/refund">Read the refund policy →</Link></Section>
    <MobileStickyCheckoutBar productName="Career Intelligence Report - Pro" amount={999} accentColor="#174d4a" buttonLabel="Order Pro – ₹999" />
  </PageShell>;
}
