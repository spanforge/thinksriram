import fs from "node:fs";
import path from "node:path";

export type ContentType = "story" | "idea" | "mental-model" | "classic";

export type ContentItem = {
  title: string;
  slug: string;
  contentType: ContentType;
  status: "published" | "draft";
  publishedAt: string;
  excerpt: string;
  description: string;
  readingTime: number;
  readerNeeds: string[];
  themes: string[];
  featured: boolean;
  classic: boolean;
  startHere: boolean;
  series?: string;
  seriesOrder?: number;
  heroImage?: string;
  cardImage?: string;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");
const folders = ["stories", "ideas", "mental-models", "classics"] as const;

function parseValue(value: string): string | boolean | number | string[] {
  const trimmed = value.trim();
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
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const splitAt = line.indexOf(":");
    if (splitAt === -1) continue;
    const key = line.slice(0, splitAt).trim();
    const value = line.slice(splitAt + 1);
    data[key] = parseValue(value);
  }

  return { data, body: match[2].trim() };
}

function requireString(data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (typeof value !== "string" || !value) {
    throw new Error(`Missing required string frontmatter: ${key}`);
  }
  return value;
}

function requireNumber(data: Record<string, unknown>, key: string) {
  const value = data[key];
  if (typeof value !== "number") {
    throw new Error(`Missing required number frontmatter: ${key}`);
  }
  return value;
}

function readContentFile(filePath: string): ContentItem {
  const { data, body } = parseFrontmatter(fs.readFileSync(filePath, "utf8"));
  return {
    title: requireString(data, "title"),
    slug: requireString(data, "slug"),
    contentType: requireString(data, "contentType") as ContentType,
    status: requireString(data, "status") as "published" | "draft",
    publishedAt: requireString(data, "publishedAt"),
    excerpt: requireString(data, "excerpt"),
    description: requireString(data, "description"),
    readingTime: requireNumber(data, "readingTime"),
    readerNeeds: Array.isArray(data.readerNeeds) ? (data.readerNeeds as string[]) : [],
    themes: Array.isArray(data.themes) ? (data.themes as string[]) : [],
    featured: data.featured === true,
    classic: data.classic === true,
    startHere: data.startHere === true,
    series: typeof data.series === "string" ? data.series : undefined,
    seriesOrder: typeof data.seriesOrder === "number" ? data.seriesOrder : undefined,
    heroImage: typeof data.heroImage === "string" ? data.heroImage : undefined,
    cardImage: typeof data.cardImage === "string" ? data.cardImage : undefined,
    body
  };
}

export function getAllContent() {
  return folders
    .flatMap((folder) => {
      const dir = path.join(contentRoot, folder);
      if (!fs.existsSync(dir)) return [];
      return fs
        .readdirSync(dir)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => readContentFile(path.join(dir, file)));
    })
    .filter((item) => item.status === "published")
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
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
  }).format(new Date(date));
}

export function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}

export function contentHref(item: ContentItem) {
  if (item.contentType === "classic") return `/classics/${item.slug}`;
  const folder =
    item.contentType === "mental-model"
      ? "mental-models"
      : item.contentType === "story"
        ? "stories"
        : "ideas";
  return `/${folder}/${item.slug}`;
}

export function renderMarkdown(body: string) {
  return body.split(/\n{2,}/).map((block) => {
    const text = block.trim();
    if (text.startsWith("::verse")) {
      return {
        type: "verse",
        text: text.replace(/^::verse\r?\n?/, "").replace(/\r?\n?::$/, "").trim()
      };
    }
    if (text.startsWith("## ")) {
      return { type: "h2", text: text.replace(/^## /, "") };
    }
    if (text.startsWith("### ")) {
      return { type: "h3", text: text.replace(/^### /, "") };
    }
    if (text.startsWith("> ")) {
      return { type: "quote", text: text.replace(/^> /, "") };
    }
    return { type: "p", text };
  });
}

export const readerNeeds = [
  { slug: "think-clearly", label: "Think Clearly", icon: "♧", tint: "#dcefb4" },
  { slug: "make-better-decisions", label: "Make Better Decisions", icon: "⌖", tint: "#cdecf7" },
  { slug: "build-inner-strength", label: "Build Inner Strength", icon: "✥", tint: "#d9d2f3" },
  { slug: "understand-people", label: "Understand People", icon: "☷", tint: "#f6c89e" },
  { slug: "live-with-purpose", label: "Live With Purpose", icon: "☼", tint: "#ffe899" },
  { slug: "find-perspective", label: "Find Perspective", icon: "◉", tint: "#c8ead8" }
];
