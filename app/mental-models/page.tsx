import { ContentCollection } from "@/components/ContentCollection";
import { getContentByType } from "@/lib/content";

export default function MentalModelsPage() {
  return (
    <ContentCollection
      title="Mental Models"
      intro="Named ways of thinking you can carry into decisions, relationships, work, and reflection."
      items={getContentByType("mental-model")}
    />
  );
}
