import Link from "next/link";
import { getAllContent, contentHref, formatDate } from "@/lib/content";
import { site, topics } from "@/lib/site";
import { homeWriting } from "@/lib/discovery";
import { WritingList } from "@/components/WritingList";

export const metadata = { description: "Essays and reflections by Sriram on AI, careers, learning and the life around work, with a separate collection on Bhaja Govindam.", alternates: { canonical: "/" } };
export default function Home() {
  const posts = getAllContent();
  const picks = site.featured.map(slug => posts.find(post => post.slug === slug)).filter(post => !!post);
  const start = picks[0];
  return <div className="shell">
    <section className="welcome">
      <h1>Hello, I’m Sriram<span className="teal">.</span></h1>
      <p className="welcome-deck">Ideas for people navigating AI, learning and a changing working life.</p>
      <div className="welcome-copy"><p>{site.welcome}</p>
        <div className="inline-links">
          <Link href={start ? contentHref(start) : "/writing"}>Start here: asking better questions <span aria-hidden="true">→</span></Link>
          <Link href="/about">Get to know me <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
    <section className="home-section">
      <div className="section-heading"><h2>A few pieces to begin with</h2><Link href="/writing">All writing →</Link></div>
      <div className="selected-grid">{picks.map(post => <article key={post.slug}>
        <h3><Link href={contentHref(post)}>{post.title}</Link></h3><p>{post.description}</p>
        <Link href={contentHref(post)}>Read the essay →</Link>
      </article>)}</div>
    </section>
    <section className="home-section">
      <div className="section-heading"><div><h2>Explore the writing</h2><p>A selection across work, learning, technology and life.</p></div></div>
      <WritingList items={homeWriting(posts)} />
    </section>
    <section className="home-section exploring">
      <div><h2>Browse by topic</h2><p>Follow a question or find a subject that matters to you.</p></div>
      <div className="topic-links">{topics.map(topic => <Link key={topic.slug} href={`/topics/${topic.slug}`}>{topic.label}<span aria-hidden="true">→</span></Link>)}</div>
    </section>
    <aside className="collection-note" aria-label="About this collection">
      <h2>A completed series, an open archive</h2>
      <p>The 31-part Bhaja Govindam series is complete. You can read it from the beginning or explore the essays alongside it.</p>
      <p>{posts[0] && <>Most recent original publication: <time dateTime={posts[0].publishedAt}>{formatDate(posts[0].publishedAt)}</time>. </>}This edition was reviewed on {formatDate(site.reviewedAt)}; original publication dates are retained.</p>
      <Link href="/series/bhaja-govindam">Read the series introduction and index →</Link>
    </aside>
  </div>;
}
