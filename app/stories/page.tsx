import { ContentCollection } from "@/components/ContentCollection";
import { getContentByType } from "@/lib/content";

export default function StoriesPage() {
  return (
    <ContentCollection
      title="Stories"
      intro="Narrative-led lessons about judgment, doubt, courage, patience, and the quiet work of living wisely."
      items={getContentByType("story")}
    />
  );
}
