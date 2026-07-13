import { HomePage } from "@/components/home/HomePage";
import { getAllContent } from "@/lib/content";

export default function Page() {
  return <HomePage items={getAllContent()} />;
}
