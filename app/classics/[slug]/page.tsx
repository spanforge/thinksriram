import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getContentBySlug } from "@/lib/content";

export default async function ClassicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getContentBySlug("classics", slug);
  if (!item) notFound();
  return <ArticlePage item={item} />;
}
