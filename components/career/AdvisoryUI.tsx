import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig, type ResourceRecord } from "@/lib/career/advisoryContent";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import StructuredData from "@/components/career/StructuredData";
import TrackedLink from "@/components/career/TrackedLink";

export function PageShell({ children }: { children: ReactNode }) {
  return <><Navbar /><div id="main-content">{children}</div><Footer /></>;
}

export function Hero({ eyebrow, title, body, tagline, primary, secondary }: { eyebrow?: string; title: string; body: string; tagline?: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return <section className="sa-hero"><div className="sa-wrap sa-prose">
    {eyebrow && <p className="sa-eyebrow">{eyebrow}</p>}<h1>{title}</h1>{tagline && <p className="sa-service-tagline">{tagline}</p>}<p className="sa-lede">{body}</p>
    <div className="sa-actions">{primary.href.startsWith("/contact") ? <TrackedLink className="sa-btn sa-btn-primary" href={primary.href} eventName="review_cta_click" eventProperties={{ placement: "hero" }}>{primary.label}</TrackedLink> : <Link className="sa-btn sa-btn-primary" href={primary.href}>{primary.label}</Link>}{secondary && <Link className="sa-btn sa-btn-secondary" href={secondary.href}>{secondary.label}</Link>}</div>
  </div></section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: item.href ? `${siteConfig.canonicalOrigin}${item.href}` : undefined })) };
  return <><StructuredData data={schema} /><nav className="sa-breadcrumbs sa-wrap" aria-label="Breadcrumb"><ol>{items.map((item, i) => <li key={item.label}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}{i < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}</ol></nav></>;
}

export function Section({ eyebrow, title, intro, children, muted = false, id }: { eyebrow?: string; title: string; intro?: string; children: ReactNode; muted?: boolean; id?: string }) {
  return <section id={id} className={`sa-section${muted ? " sa-muted" : ""}`}><div className="sa-wrap">{eyebrow && <p className="sa-eyebrow">{eyebrow}</p>}<h2>{title}</h2>{intro && <p className="sa-section-intro">{intro}</p>}{children}</div></section>;
}

export function LinkCard({ title, body, href, cta, meta }: { title: string; body: string; href: string; cta: string; meta?: string }) {
  return <article className="sa-card">{meta && <p className="sa-card-meta">{meta}</p>}<h3>{title}</h3><p>{body}</p><Link className="sa-arrow" href={href}>{cta} <span aria-hidden="true">→</span></Link></article>;
}

export function ResourceCard({ resource }: { resource: ResourceRecord }) {
  return <LinkCard title={resource.title} body={resource.summary} href={resource.href} cta={resource.access === "free" ? "Open resource" : "View details"} meta={`${resource.topic.replaceAll("-", " ")} · ${resource.format} · ${resource.price ?? "Free"}`} />;
}

export function ClosingCTA({ title = "What would you like to improve?", body = "Tell me where you are facing a challenge. I will help you establish whether my experience fits the question.", href = "/contact", label = "Discuss Your Challenge" }: { title?: string; body?: string; href?: string; label?: string }) {
  return <section className="sa-closing"><div className="sa-wrap sa-prose"><h2>{title}</h2><p>{body}</p><TrackedLink className="sa-btn sa-btn-primary" href={href} eventName="review_cta_click" eventProperties={{ placement: "closing" }}>{label}</TrackedLink></div></section>;
}
