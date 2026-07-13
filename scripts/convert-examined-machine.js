const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const xmlPath = path.join(root, "tmp-docx-extract", "word", "document.xml");
const xml = fs.readFileSync(xmlPath, "utf8");

function decodeXml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function fixMojibake(text) {
  return text
    .replace(/Ã¢â‚¬â€/g, "--")
    .replace(/Ã¢â‚¬â€œ/g, "--")
    .replace(/Ã¢â‚¬Ëœ/g, "'")
    .replace(/Ã¢â‚¬â„¢/g, "'")
    .replace(/Ã¢â‚¬Å“/g, '"')
    .replace(/Ã¢â‚¬Â/g, '"')
    .replace(/Ã©/g, "e")
    .replace(/Ã¨/g, "e")
    .replace(/Ã¶/g, "o")
    .replace(/Ã¼/g, "u")
    .replace(/Ã¡/g, "a")
    .replace(/Ã­/g, "i")
    .replace(/Â©/g, "(c)")
    .replace(/Â®/g, "(R)")
    .replace(/Â™/g, "(TM)")
    .replace(/â€”/g, "--")
    .replace(/â€“/g, "--")
    .replace(/â€˜|â€™/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/[\u2013\u2014]/g, "--")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u00A9/g, "(c)")
    .replace(/\u00AE/g, "(R)")
    .replace(/\u2122/g, "(TM)")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/Â/g, "");
}

const paragraphXml = xml.match(/<w:p[\s\S]*?<\/w:p>/g) ?? [];
const lines = paragraphXml
  .map((paragraph) => {
    const texts = [...paragraph.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map((match) => decodeXml(match[1]));
    return fixMojibake(texts.join("")).trim();
  })
  .filter(Boolean);

const chapters = [
  {
    chapter: 1,
    slug: "socrates-and-the-art-of-the-right-question",
    type: "mental-model",
    folder: "mental-models",
    needs: ["think-clearly", "make-better-decisions"],
    themes: ["questions", "ai", "judgment"],
    image: "/images/examined-machine/ch01-socrates.png"
  },
  {
    chapter: 2,
    slug: "aristotle-and-the-judgment-that-cannot-be-automated",
    type: "mental-model",
    folder: "mental-models",
    needs: ["make-better-decisions", "think-clearly"],
    themes: ["judgment", "ai", "practical-wisdom"],
    image: "/images/examined-machine/ch02-aristotle.png"
  },
  {
    chapter: 3,
    slug: "platos-cave-and-the-reality-we-are-building",
    type: "idea",
    folder: "ideas",
    needs: ["think-clearly", "find-perspective"],
    themes: ["truth", "ai", "reality"],
    image: "/images/examined-machine/ch03-plato.png"
  },
  {
    chapter: 4,
    slug: "epictetus-and-the-control-problem",
    type: "mental-model",
    folder: "mental-models",
    needs: ["build-inner-strength", "find-perspective"],
    themes: ["control", "ai", "resilience"],
    image: "/images/examined-machine/ch04-epictetus.png"
  },
  {
    chapter: 5,
    slug: "heraclitus-and-the-nature-of-change",
    type: "idea",
    folder: "ideas",
    needs: ["find-perspective", "build-inner-strength"],
    themes: ["change", "ai", "adaptation"],
    image: "/images/examined-machine/ch05-heraclitus.png"
  },
  {
    chapter: 6,
    slug: "aristotles-ethics-and-the-alignment-problem",
    type: "idea",
    folder: "ideas",
    needs: ["make-better-decisions", "live-with-purpose"],
    themes: ["ethics", "ai", "alignment"],
    image: "/images/examined-machine/ch06-alignment.png"
  },
  {
    chapter: 7,
    slug: "can-machines-learn-phronesis",
    type: "idea",
    folder: "ideas",
    needs: ["think-clearly", "make-better-decisions"],
    themes: ["judgment", "ai", "phronesis"],
    image: "/images/examined-machine/ch07-phronesis.png"
  },
  {
    chapter: 8,
    slug: "the-examined-machine",
    type: "idea",
    folder: "ideas",
    needs: ["think-clearly", "live-with-purpose"],
    themes: ["wisdom", "ai", "responsibility"],
    image: "/images/examined-machine/ch08-examined-machine.png",
    classic: true
  },
  {
    chapter: 9,
    slug: "from-athens-to-now",
    type: "idea",
    folder: "ideas",
    needs: ["find-perspective", "think-clearly"],
    themes: ["philosophy", "ai", "modern-thought"],
    image: "/images/examined-machine/ch09-modern-philosophers.png"
  }
];

function yamlArray(items) {
  return `[${items.map((item) => `"${item}"`).join(", ")}]`;
}

function isSectionHeading(line) {
  if (/^\d+\.\s/.test(line)) return false;
  if (line.length > 82) return false;
  if (/[.!?]$/.test(line)) return false;
  if (/^Chapter \d+:/.test(line)) return false;
  return /[A-Z]/.test(line);
}

function mdxBody(paragraphs) {
  return paragraphs
    .map((line) => {
      if (isSectionHeading(line)) return `## ${line}`;
      return line;
    })
    .join("\n\n");
}

for (const config of chapters) {
  const start = lines.findIndex((line) => line.startsWith(`Chapter ${config.chapter}:`));
  const nextChapter = lines.findIndex((line, index) => index > start && (/^Chapter \d+:/.test(line) || /^Conclusion:/.test(line)));
  if (start === -1 || nextChapter === -1) {
    throw new Error(`Could not find chapter ${config.chapter}`);
  }

  const rawTitle = lines[start];
  const title = rawTitle.replace(/^Chapter \d+:\s*/, "");
  const subtitle = lines[start + 1] || "";
  const paragraphs = lines.slice(start + 2, nextChapter);
  const excerpt = paragraphs.find((line) => line.length > 80)?.replace(/"/g, "'") ?? subtitle;
  const description = subtitle ? `${subtitle}.` : excerpt;
  const publishedAt = `2026-07-${String(13 - config.chapter).padStart(2, "0")}`;
  const outDir = path.join(root, "content", config.folder);
  const outPath = path.join(outDir, `${config.slug}.mdx`);
  const mdx = `---\n` +
    `title: "${title.replace(/"/g, '\\"')}"\n` +
    `slug: "${config.slug}"\n` +
    `contentType: "${config.type}"\n` +
    `status: "published"\n` +
    `publishedAt: "${publishedAt}"\n` +
    `excerpt: "${excerpt.slice(0, 150).replace(/"/g, '\\"')}"\n` +
    `description: "${description.replace(/"/g, '\\"')}"\n` +
    `heroImage: "${config.image}"\n` +
    `cardImage: "${config.image}"\n` +
    `readingTime: 1\n` +
    `readerNeeds: ${yamlArray(config.needs)}\n` +
    `themes: ${yamlArray(config.themes)}\n` +
    `featured: ${config.chapter <= 5 ? "true" : "false"}\n` +
    `classic: ${config.classic ? "true" : "false"}\n` +
    `startHere: ${config.chapter <= 3 ? "true" : "false"}\n` +
    `---\n` +
    `${subtitle}\n\n` +
    mdxBody(paragraphs) +
    `\n`;

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, mdx, "utf8");
}

console.log(`Wrote ${chapters.length} chapter articles.`);
