import { Section, LinkCard } from "@/components/career/AdvisoryUI";

const RECOMMENDATIONS = [
  { title: "Career Positioning Audit", body: "Turn career clarity into a stronger resume and LinkedIn story.", href: "/services/career-positioning-audit", price: "Rs 999" },
  { title: "AI Risk Rankings India 2026", body: "See wider role-level pressure across the Indian market.", href: "/products/ai-risk-rankings-india-2026", price: "Rs 999" },
  { title: "State of QA Careers India 2026", body: "A deeper market read for QA professionals and leaders.", href: "/products/state-of-qa-careers-india-2026", price: "Rs 799" },
];

export default function ProductRecommendations({ currentPath }: { currentPath?: string }) {
  return <Section title="Continue exploring" intro="Choose a resource that fits the question you are working through." muted><div className="sa-grid">{RECOMMENDATIONS.filter(item => item.href !== currentPath).map(item => <LinkCard key={item.href} title={item.title} body={item.body} href={item.href} meta={item.price} cta="View the resource" />)}</div></Section>;
}
