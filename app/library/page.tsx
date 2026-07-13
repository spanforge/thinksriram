import { ContentCollection } from "@/components/ContentCollection";
import { getAllContent } from "@/lib/content";

export default async function LibraryPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; need?: string }>;
}) {
  const { q = "", need = "" } = await searchParams;
  return (
    <ContentCollection
      title="Library"
      intro="A growing archive of stories, ideas, mental models, and classics for whatever kind of clarity today asks for."
      items={getAllContent()}
      query={q}
      need={need}
    />
  );
}
