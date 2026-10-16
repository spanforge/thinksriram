import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { seriesSlug, seriesFor } from "@/lib/discovery";
export const metadata = { title: "Series", alternates: { canonical: "/series" } };
export default function Series() {
  const posts = getAllContent();
  const names = [...new Set(posts.map(post => post.series).filter((name): name is string => !!name))];
  return <div className="prose"><h1>Series</h1><p>Collections to read from the beginning, at your own pace.</p>
    {names.map(name => <section className="topic-section" key={name}><h2><Link href={`/series/${seriesSlug(name)}`}>{name}</Link></h2><p>{seriesFor(posts, name).length} parts in reading order.</p></section>)}
    <Link href="/writing?series=standalone">Read essays outside a series →</Link>
  </div>;
}
