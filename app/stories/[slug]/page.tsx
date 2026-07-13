import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getContentBySlug } from "@/lib/content";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getContentBySlug("stories", slug);
  if (!item) notFound();
  return <ArticlePage item={item} />;
}
