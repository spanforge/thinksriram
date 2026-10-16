import { ContentItem } from "@/lib/content";
import { topicFor } from "@/lib/site";

export function seriesSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
export function articleKind(item: ContentItem) {
  return item.genre || (item.series ? "Reflection" : item.contentType === "story" ? "Story" : "Essay");
}
export function seriesEntryLabel(item: ContentItem) {
  return articleKind(item) === "Essay" ? `Essay ${String(item.seriesOrder || 1).padStart(2, "0")}` : `Part ${item.seriesOrder}`;
}
export function seriesFor(items: ContentItem[], name: string) {
  return items.filter(item => item.series === name).sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));
}
export function relatedWriting(items: ContentItem[], item: ContentItem) {
  return items.filter(candidate => candidate.slug !== item.slug && (item.series ? candidate.series === item.series : !candidate.series && topicFor(candidate).slug === topicFor(item).slug))
    .sort((a, b) => {
      const score = (candidate: ContentItem) => candidate.themes.filter(theme => item.themes.includes(theme)).length;
      return score(b) - score(a) || +new Date(b.publishedAt) - +new Date(a.publishedAt);
    }).slice(0, 3);
}
export function matchesSearch(item: ContentItem, query: string) {
  const haystack = [item.title, item.excerpt, item.description, item.body, ...item.themes, ...(item.tags || []), item.subtopic || "", topicFor(item).label, item.series || ""].join(" ").normalize("NFKC").toLocaleLowerCase();
  return query.trim().normalize("NFKC").toLocaleLowerCase().split(/\s+/).filter(Boolean).every(word => haystack.includes(word));
}
export function homeWriting(items: ContentItem[]) {
  const chosen: ContentItem[] = [];
  const eligible = items.filter(item => item.series !== "Bhaja Govindam");
  const topics = new Set<string>();
  for (const item of eligible) {
    const topic = topicFor(item).slug;
    if (!topics.has(topic)) { chosen.push(item); topics.add(topic); }
    if (chosen.length === 4) break;
  }
  for (const item of eligible) if (chosen.length < 5 && !chosen.some(p => p.slug === item.slug)) chosen.push(item);
  const firstSeriesPart = items.find(item => item.series === "Bhaja Govindam" && item.seriesOrder === 1);
  if (firstSeriesPart) chosen.push(firstSeriesPart);
  return chosen;
}
