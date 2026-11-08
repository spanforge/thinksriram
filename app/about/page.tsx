import Link from 'next/link';
import { pillars, publication } from '@/lib/publication';
import { site } from '@/lib/site';
export const metadata = { title: 'About Think Sriram', description: 'Meet the founder behind Think Sriram, an independent publication about change, capabilities, and better decisions.', alternates: { canonical: '/about' } };
export default function About() {
  return <article className="prose"><p className="eyebrow">INDEPENDENT. CURIOUS. GROUNDED.</p><h1>About Think Sriram</h1>
    <p className="about-intro">Think Sriram is an independent publication about understanding change, developing capabilities, and making better decisions.</p>
    <h2>The person behind the publication</h2><p>I’m Sriram. I have spent nearly three decades working across technology, business, and professional capability development. That experience informs the questions I explore here, while leaving room to challenge my own assumptions.</p>
    <p>My aim is to make complex developments easier to understand and share perspectives that help readers think more independently about their futures.</p><p><a href={site.linkedin}>Explore my professional background on LinkedIn →</a></p>
    <h2>How I approach the writing</h2><p>I value evidence, clarity, intellectual curiosity, and practical relevance. Research informs the writing; interpretation and uncertainty are identified. When the evidence changes, the conclusions should be open to revision.</p>
    <p>You can expect accessible analysis and practical ideas, with sources where relevant. Reflective and philosophical essays offer interpretations rather than measured outcomes. <Link href="/editorial-notes">Read the editorial notes</Link>.</p>
    <h2>What you’ll find here</h2><ul>{pillars.slice(0, 4).map(p => <li key={p.slug}><Link href={'/topics/' + p.slug}>{p.label}</Link> — {p.description}</li>)}</ul>
    <p>The <Link href="/topics/ideas-and-perspectives">Ideas &amp; Perspectives archive</Link> preserves older philosophy, history, and reflective writing, including the complete <Link href="/series/bhaja-govindam">Bhaja Govindam series</Link>.</p>
    <h2>Independent by design</h2><p>Think Sriram is a founder-led personal publication. The views are my own and do not represent any employer or organisation. It is not an institutional research team.</p><p>Separately labelled <Link href="/resources">commercial resources</Link> include existing guides, assessments, and reports.</p>
    <h2>Continue the conversation</h2><p>New writing and subscriptions live on Substack. This website is the permanent home of the publication and its curated archive.</p><a className="brand-button" href={publication.subscribeUrl}>Follow Think Sriram on Substack ↗</a>
  </article>;
}
