import Link from "next/link";
import pages from "@/content/pages.json";
import { site } from "@/lib/site";
export const metadata = { title: "About me", alternates: { canonical: "/about" } };
export default function About() {
  const page = pages.about;
  return <div className="prose"><h1>{page.title}</h1><p>{page.intro}</p>
    <h2>The experience I bring</h2><p>{page.background}</p>
    <p>My work has crossed technology, business and capability development over nearly three decades. This site brings those interests together through essays on AI and judgment, practical thinking exercises, and a separate strand of philosophical and devotional reflection.</p>
    {site.linkedin && <p><a href={site.linkedin} rel="noopener noreferrer">See my professional background and current roles on LinkedIn</a>.</p>}
    <h2>Things I believe—and keep questioning</h2><ul>{page.beliefs.map(belief => <li key={belief}>{belief}</li>)}</ul>
    <h2>A note on my writing</h2><p>Posts are labelled Essay, Reflection or Story. The philosophy-to-work pieces are interpretations, not claims to have measured outcomes. Illustrative examples are identified as such.</p>
    <p>The completed 31-part Bhaja Govindam collection is a devotional and philosophical strand of the archive. It sits alongside the work and learning essays, with an introduction for readers new to the text.</p>
    <p>{page.independence} I use my sriramadvisory.com email address for correspondence about this personal website.</p>
    <p><Link href="/editorial-notes">Sources, revisions and the use of AI tools →</Link></p><p><Link href="/contact">Get in touch →</Link></p>
  </div>;
}
