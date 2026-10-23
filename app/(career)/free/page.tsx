import type { Metadata } from "next";
import { PageShell, Hero, Section, ResourceCard } from "@/components/career/AdvisoryUI";
import { resources } from "@/lib/career/advisoryContent";

export const metadata: Metadata = { title: "Free Resources | Think Sriram", description: "Use the free tools and guides currently published by Sriram Advisory.", alternates: { canonical: "/free" } };

export default function FreePage() {
  const freeResources = resources.filter(resource => resource.access === "free");
  return <PageShell>
    <Hero eyebrow="Free resources" title="Useful resources you can open now" body="Every item on this page is published and available. Choose a resource and start using it." primary={{ label: "Browse free resources", href: "#free-resources" }} />
    <Section id="free-resources" title="Available now">
      <div className="sa-grid">{freeResources.map(resource => <ResourceCard key={resource.id} resource={resource} />)}</div>
    </Section>
  </PageShell>;
}
