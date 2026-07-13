import { ContentCollection } from "@/components/ContentCollection";
import { getAllContent } from "@/lib/content";

export default function StartHerePage() {
  return (
    <ContentCollection
      title="Start Here"
      intro="Begin with a few essential pieces: three stories, three practical models, and a gentler way to think."
      items={getAllContent().filter((item) => item.startHere)}
    />
  );
}
