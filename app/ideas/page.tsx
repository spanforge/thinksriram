import { ContentCollection } from "@/components/ContentCollection";
import { getContentByType } from "@/lib/content";

export default function IdeasPage() {
  return (
    <ContentCollection
      title="Ideas"
      intro="Long-form essays on AI, philosophy, judgment, ethics, and the human questions that do not expire."
      items={getContentByType("idea")}
    />
  );
}
