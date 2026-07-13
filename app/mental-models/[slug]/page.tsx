import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getContentBySlug } from "@/lib/content";

export default async function MentalModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getContentBySlug("mental-models", slug);
  if (!item) notFound();
  return <ArticlePage item={item} />;
}
