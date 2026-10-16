import Link from "next/link";
import { topics } from "@/lib/site";

export const metadata = {
  title: "Topics",
  description: "Browse Sriram's writing by topic: careers, AI and people, education and learning, professional life, and other reflections.",
  alternates: { canonical: "/topics" }
};

export default function Topics() {
  return <div className="shell page-content">
    <header className="page-heading">
      <h1>Topics</h1>
      <p>Choose a subject to read all my articles on it.</p>
    </header>
    <ul className="topic-directory">
      {topics.map(topic => <li className="topic-section" id={topic.slug} key={topic.slug}>
        <h2><Link href={`/topics/${topic.slug}`}>{topic.label}</Link></h2>
        <p>{topic.description}</p>
      </li>)}
    </ul>
  </div>;
}
