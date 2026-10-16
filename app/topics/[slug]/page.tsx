import { notFound } from "next/navigation";
import Link from "next/link";
import { topics, topicFor } from "@/lib/site";
import { getAllContent } from "@/lib/content";
import { WritingList } from "@/components/WritingList";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topics.find(topic => topic.slug === slug);
  if (!topic) return {};
  const hasArticles = getAllContent().some(post => topicFor(post).slug === slug);
  return {
    title: topic.label,
    description: topic.description,
    alternates: { canonical: `/topics/${slug}` },
    robots: { index: hasArticles, follow: true }
  };
}

export default async function Topic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topics.find(topic => topic.slug === slug);
  if (!topic) notFound();
  const posts = getAllContent().filter(post => topicFor(post).slug === slug);
  return <div className="shell page-content">
    <header className="page-heading">
      <Link href="/topics">Back to all topics</Link>
      <h1>{topic.label}</h1>
      <p>{topic.description}</p>
    </header>
    {posts.length ? <WritingList headingLevel={2} items={posts} /> : <div className="empty-note">
      <p>There are no published articles on this topic yet.</p>
      <Link href="/writing">Browse all writing</Link>
    </div>}
  </div>;
}
