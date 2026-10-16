import fs from "node:fs";
import path from "node:path";

export type ContentType = "story" | "idea" | "mental-model" | "classic";

export type ContentItem = {
  title: string;
  slug: string;
  contentType: ContentType;
  status: "published" | "draft" | "scheduled";
  topic?: string;
  subtopic?: string;
  tags?: string[];
  updatedAt?: string;
  correction?: string;
  sources?: string[];
  publishedAt: string;
  excerpt: string;
  description: string;
  readingTime: number;
  genre?: "Essay" | "Reflection" | "Story";
  editorialNote?: string;
  readerNeeds: string[];
  themes: string[];
  featured: boolean;
  classic: boolean;
  startHere: boolean;
  series?: string;
  seriesOrder?: number;
  heroImage?: string;
  imageAlt?: string;
  cardImage?: string;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

function parseValue(value: string): string | boolean | number | string[] {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try { return JSON.parse(trimmed) as string; } catch { return trimmed.slice(1, -1); }
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) return trimmed.slice(1, -1).replace(/''/g, "'");
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);
  }
  return trimmed.replace(/^"|"$/g, "");
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Content file is missing frontmatter.");
  }

  const data: Record<string, unknown> = {};
  const lines = match[1].split(/\r?\n/);
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const splitAt = line.indexOf(":");
    if (splitAt === -1) continue;
    const key = line.slice(0, splitAt).trim();
    const value = line.slice(splitAt + 1);
    const continuation: string[] = [];
    while (index + 1 < lines.length && /^\s+\S/.test(lines[index + 1])) continuation.push(lines[++index]);
    if (continuation.length && continuation.every(entry => /^\s+-\s/.test(entry))) {
      data[key] = continuation.map(entry => String(parseValue(entry.replace(/^\s+-\s*/, ""))));
    } else if (continuation.length || /^[>|][-+]?\s*$/.test(value.trim())) {
      const text = [value.replace(/^\s*[>|][-+]?\s*$/, "").trim(), ...continuation.map(entry => entry.trim())].filter(Boolean);
      data[key] = text.join(value.trim().startsWith("|") ? "\n" : " ");
    } else {
      data[key] = parseValue(value);
    }
  }

  return { data, body: match[2].trim() };
}

function readContentFile(filePath: string): ContentItem | undefined {
  const source = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  if (!source.startsWith("---\n")) return readTextFile(filePath, source);
  const parsed = parseFrontmatter(source);
  const data = parsed.data;
  const body = cleanImportedText(parsed.body);
  const defaults = readTextFile(filePath, typeof data.title === "string" ? `${data.title}\n\n${body}` : body);
  if (!defaults) return undefined;
  return {
    ...defaults,
    title: typeof data.title === "string" ? data.title : defaults.title,
    slug: typeof data.slug === "string" ? data.slug : defaults.slug,
    contentType: (data.contentType || "idea") as ContentType,
    topic: typeof data.topic === "string" ? data.topic : undefined,
    subtopic: typeof data.subtopic === "string" ? data.subtopic : undefined,
    tags: Array.isArray(data.tags) ? data.tags as string[] : [],
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : undefined,
    correction: typeof data.correction === "string" ? data.correction : undefined,
    sources: Array.isArray(data.sources) ? data.sources as string[] : [],
    status: (data.status || "published") as ContentItem["status"],
    publishedAt: typeof data.publishedAt === "string" ? data.publishedAt : defaults.publishedAt,
    excerpt: typeof data.excerpt === "string" ? data.excerpt : defaults.excerpt,
    description: String(data.description || data.excerpt || defaults.description),
    readingTime: Math.max(1, Math.ceil(body.split(/\s+/).length / 200)),
    genre: typeof data.genre === "string" ? data.genre as ContentItem["genre"] : undefined,
    editorialNote: typeof data.editorialNote === "string" ? data.editorialNote : undefined,
    readerNeeds: Array.isArray(data.readerNeeds) ? (data.readerNeeds as string[]) : [],
    themes: Array.isArray(data.themes) ? (data.themes as string[]) : [],
    featured: data.featured === true,
    classic: data.classic === true,
    startHere: data.startHere === true,
    series: typeof data.series === "string" ? data.series : undefined,
    seriesOrder: typeof data.seriesOrder === "number" ? data.seriesOrder : undefined,
    imageAlt: typeof data.imageAlt === "string" ? data.imageAlt : undefined,
    heroImage: typeof data.heroImage === "string" ? data.heroImage : undefined,
    cardImage: typeof data.cardImage === "string" ? data.cardImage : undefined,
    body
  };
}

// A plain text post needs only a title on the first line and the writing below it.
// Metadata remains supported for the existing archive, but is never required for .txt.
function readTextFile(filePath: string, suppliedSource?: string): ContentItem | undefined {
  const source = cleanImportedText((suppliedSource ?? fs.readFileSync(filePath, "utf8")).replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n")).trim();
  if (!source) return undefined;
  const [firstLine, ...remaining] = source.split("\n");
  const title = firstLine.replace(/^#\s+/, "").trim();
  const body = remaining.join("\n").trim();
  if (!body) return undefined;
  const filename = path.basename(filePath, path.extname(filePath));
  const slug = filename.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
  if (!slug) throw new Error(`Please give this article a filename containing letters or numbers: ${filePath}`);
  const datePrefix = filename.match(/^(\d{4}-\d{2}-\d{2})(?:[ _-]|$)/)?.[1];
  const publishedAt = datePrefix ? `${datePrefix}T00:00:00+05:30` : fs.statSync(filePath).mtime.toISOString();
  if (!Number.isFinite(+new Date(publishedAt))) throw new Error(`Invalid date in article filename: ${filePath}`);
  const firstParagraph = body.split(/\n\s*\n/).find(p => !/^\s*(?:#{1,6}\s|[-*]\s|\d+\.\s|>)/.test(p)) || body;
  const summary = firstParagraph.replace(/\s+/g, " ").trim();
  const excerpt = summary.length > 200 ? summary.slice(0, 197).replace(/\s+\S*$/, "") + "…" : summary;
  return { title, slug, body, publishedAt, excerpt, description: excerpt,
    contentType: "idea", status: "published", readingTime: Math.max(1, Math.ceil(body.split(/\s+/).length / 200)),
    readerNeeds: [], themes: [], featured: false, classic: false, startHere: false };
}

function articleFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) return [];
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) return articleFiles(filePath);
    return entry.isFile() && /\.(txt|mdx)$/i.test(entry.name) ? [filePath] : [];
  });
}

export function getAllContent() {
  const items = articleFiles(contentRoot)
    .map(file => /\.txt$/i.test(file) ? readTextFile(file) : readContentFile(file))
    .filter((item): item is ContentItem => Boolean(item))
    .filter((item) => item.status === "published" && Number.isFinite(+new Date(item.publishedAt)) && +new Date(item.publishedAt) <= Date.now())
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const slugs = new Set<string>();
  for (const item of items) {
    if (slugs.has(item.slug)) throw new Error(`Two articles have the same URL: ${item.slug}. Please rename one file.`);
    slugs.add(item.slug);
  }
  return items;
}

export function getContentByType(type: ContentType) {
  if (type === "classic") {
    return getAllContent()
      .filter((item) => item.classic || item.contentType === "classic")
      .sort((a, b) => {
        if (a.series && a.series === b.series && a.seriesOrder && b.seriesOrder) {
          return a.seriesOrder - b.seriesOrder;
        }
        if (a.series && !b.series) return -1;
        if (!a.series && b.series) return 1;
        return +new Date(b.publishedAt) - +new Date(a.publishedAt);
      });
  }
  return getAllContent().filter((item) => item.contentType === type);
}

export function getContentBySlug(type: string, slug: string) {
  const normalized =
    type === "mental-models"
      ? "mental-model"
      : type === "stories"
        ? "story"
        : type === "classics"
          ? "classic"
          : "idea";
  if (normalized === "classic") {
    return getAllContent().find(
      (item) => (item.contentType === "classic" || item.classic) && item.slug === slug
    );
  }
  return getAllContent().find(
    (item) => item.contentType === normalized && item.slug === slug
  );
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
    ,timeZone: "Asia/Kolkata"
  }).format(new Date(date));
}

export function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}

export function contentHref(item: ContentItem) {
  return `/writing/${item.slug}`;
}

export function cleanImportedText(body: string) {
  return body.replace(/<\/?(?:w|w14|wp|a|v|o):[^>]*>/g, "")
    .replace(/^Practical Exercises\s*$/gm, "## Practical exercises")
    .replace(/^Closing Reflection\s*$/gm, "## Closing reflection")
    .replace(/ -- /g, " — ");
}

export function renderMarkdown(body: string) {
  const lines = cleanImportedText(body).replace(/\r\n?/g, "\n").split("\n");
  const blocks: { type: string; text: string }[] = [];
  const special = (line: string) => /^(?:#{1,6}\s|>\s|[-*]\s|\d+\.\s|::verse)/.test(line.trim());
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line === "::verse") {
      const verse: string[] = [];
      while (++i < lines.length && lines[i].trim() !== "::") verse.push(lines[i]);
      blocks.push({ type: "verse", text: verse.join("\n").trim() });
    } else if (/^(?:-{3,}|\*{3,}|_{3,})$/.test(line)) {
      blocks.push({ type: "hr", text: "" });
    } else if (/^#{1,6}\s/.test(line)) {
      blocks.push({ type: line.startsWith("###") ? "h3" : "h2", text: line.replace(/^#{1,6}\s+/, "") });
    } else if (/^>\s/.test(line)) {
      const quotes = [line.replace(/^>\s*/, "")];
      while (i + 1 < lines.length && /^>\s/.test(lines[i + 1].trim())) quotes.push(lines[++i].trim().replace(/^>\s*/, ""));
      blocks.push({ type: "quote", text: quotes.join(" ") });
    } else if (/^(?:[-*]\s|\d+\.\s)/.test(line)) {
      const ordered = /^\d+\.\s/.test(line);
      const pattern = ordered ? /^\d+\.\s/ : /^[-*]\s/;
      const items = [line];
      while (i + 1 < lines.length && pattern.test(lines[i + 1].trim())) items.push(lines[++i].trim());
      blocks.push({ type: ordered ? "ol" : "ul", text: items.join("\n") });
    } else {
      const paragraph = [line];
      while (i + 1 < lines.length && lines[i + 1].trim() && !special(lines[i + 1])) paragraph.push(lines[++i].trim());
      blocks.push({ type: "p", text: paragraph.join(" ") });
    }
  }
  return blocks;
}

export const readerNeeds = [
  { slug: "think-clearly", label: "Think Clearly", icon: "♧", tint: "#dcefb4" },
  { slug: "make-better-decisions", label: "Make Better Decisions", icon: "⌖", tint: "#cdecf7" },
  { slug: "build-inner-strength", label: "Build Inner Strength", icon: "✥", tint: "#d9d2f3" },
  { slug: "understand-people", label: "Understand People", icon: "☷", tint: "#f6c89e" },
  { slug: "live-with-purpose", label: "Live With Purpose", icon: "☼", tint: "#ffe899" },
  { slug: "find-perspective", label: "Find Perspective", icon: "◉", tint: "#c8ead8" }
];
