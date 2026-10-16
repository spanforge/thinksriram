import Link from "next/link";
import { topics, topicFor } from "@/lib/site";
import { getAllContent, contentHref } from "@/lib/content";
export const metadata = { title: "Topics", description: "Explore essays and reflections by subject.", alternates: { canonical: "/topics" } };
export default function Topics() {
  const posts = getAllContent();
  return <div className="shell page-content"><header className="page-heading"><h1>Topics</h1><p>Choose a subject to read all my articles on it.</p></header>
    <ul className="topic-directory">{topics.map(topic => {
      const articles = posts.filter(post => topicFor(post).slug === topic.slug);
      return <li className="topic-section" id={topic.slug} key={topic.slug}>
        <h2><Link href={`/topics/${topic.slug}`}>{topic.label}</Link></h2><p>{topic.description}</p>
        <p className="topic-count">{articles.length} {articles.length === 1 ? "article" : "articles"}</p>
        {articles.length > 0 && <ul className="topic-previews" aria-label={`Recent writing on ${topic.label}`}>{articles.slice(0, 3).map(post => <li key={post.slug}><Link href={contentHref(post)}>{post.title}</Link></li>)}</ul>}
      </li>;
    })}</ul>
  </div>;
}
