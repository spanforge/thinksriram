import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllContent, contentHref } from "@/lib/content";
import { seriesFor, seriesSlug } from "@/lib/discovery";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getAllContent().find(post => post.series && seriesSlug(post.series) === slug);
  return post ? { title: `${post.series}: introduction and index`, alternates: { canonical: `/series/${slug}` } } : {};
}
export default async function SeriesIndex({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params, posts = getAllContent();
  const name = posts.find(post => post.series && seriesSlug(post.series) === slug)?.series;
  if (!name) notFound();
  const items = seriesFor(posts, name);
  return <div className="prose series-index"><Link href="/series">All series</Link><h1>{name}</h1>
    {name === "Bhaja Govindam" && <>
      <p>Bhaja Govindam is a devotional Sanskrit text traditionally associated with Adi Shankara, a philosopher and teacher. Govinda is a name for Krishna. Its verses invite reflection on devotion, desire, impermanence and self-knowledge.</p>
      <p>This completed 31-part collection offers reflective readings and illustrative everyday examples. It is not a critical edition or a research study. The numbering and English renderings follow the source collection used for this website; other editions may differ.</p>
      <p>The verse appears once in Roman transliteration, followed by an English rendering and commentary.</p>
      <p><a href="https://www.kamakoti.org/bhaja/bhaja.html" rel="noopener noreferrer">Read a traditional introduction from Kanchi Kamakoti Peetham</a>.</p>
    </>}
    <p><Link href={contentHref(items[0])}>Begin with Part 1: {items[0].title} →</Link></p>
    <h2>Read in order</h2>
    <ol className="series-parts">{items.map(item => <li key={item.slug}><Link href={contentHref(item)}>{item.title}</Link><p>{item.description}</p></li>)}</ol>
    <h2>What’s next?</h2><p>Return to a verse that stayed with you, or try an essay on AI, learning or working life.</p><Link href="/writing?series=standalone">Explore writing beyond this series →</Link>
  </div>;
}
