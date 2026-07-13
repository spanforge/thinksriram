const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = process.cwd();
const sourceDoc = path.join(root, "Bhaja_Govindam_Timeless (2).docx");
const tempDir = path.join(root, ".tmp-bhaja-govindam");
const outputDir = path.join(root, "content", "classics");

const titles = [
  "Seek What Can Save You",
  "The Discipline of Enough",
  "Seeing Desire Clearly",
  "The Drop on the Lotus Leaf",
  "Relationships Beyond Usefulness",
  "The Breath That Makes the Body Beloved",
  "The Question Life Keeps Postponing",
  "Who Are You Beneath Your Roles?",
  "The Company That Shapes Freedom",
  "Build on What Does Not Depend on Conditions",
  "What Time Cannot Take",
  "Stop Waiting for Next Year",
  "The Pause Before the Pull",
  "Desire Has No Finish Line",
  "The Fragile Shelter of the Body",
  "The Wandering Mind and the Still Center",
  "Freedom Is Simpler Than Accumulation",
  "Where Renunciation Really Begins",
  "The Body Is Not the Self",
  "Learning Before Life Ends",
  "The Futility of Endless Argument",
  "The Discipline of a Clear Mind",
  "The Thread That Holds the Garland",
  "Seeing the One in All",
  "Becoming Free from the Inside",
  "The Way Out of Desire and Anger",
  "The Gita, the Ganga, and the Moment of Surrender",
  "The Loneliness of Wealth Without Wisdom",
  "Breath, Discipline, and Inner Mastery",
  "The Hollow Pride of Possession",
  "Return to Govinda"
];

function decodeXml(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function normalizeText(value) {
  return value
    .replace(/â€”/g, "--")
    .replace(/â€“/g, "-")
    .replace(/â€˜/g, "'")
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€�/g, '"')
    .replace(/â€¦/g, "...")
    .replace(/Â/g, "");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function yamlString(value) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function escapeBody(value) {
  return value.replace(/\r/g, "").trim();
}

function firstSentence(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  const match = normalized.match(/^(.+?[.!?])\s/);
  return match ? match[1] : normalized;
}

function paragraphText(paragraphXml) {
  const runs = [...paragraphXml.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)];
  return normalizeText(runs.map((match) => decodeXml(match[1])).join("")).trim();
}

function extractParagraphs(documentXml) {
  return [...documentXml.matchAll(/<w:p(?:\s[^>]*)?>[\s\S]*?<\/w:p>/g)]
    .map((match) => paragraphText(match[0]))
    .filter(Boolean);
}

function cleanTemp() {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

function extractDocx() {
  cleanTemp();
  fs.mkdirSync(tempDir, { recursive: true });
  const zipPath = path.join(tempDir, "source.zip");
  fs.copyFileSync(sourceDoc, zipPath);
  const quotedZip = zipPath.replace(/'/g, "''");
  const quotedTemp = tempDir.replace(/'/g, "''");
  execFileSync("powershell.exe", [
    "-NoProfile",
    "-Command",
    `Expand-Archive -LiteralPath '${quotedZip}' -DestinationPath '${quotedTemp}'`
  ]);
  return fs.readFileSync(path.join(tempDir, "word", "document.xml"), "utf8");
}

function sectionAfter(lines, label) {
  const index = lines.indexOf(label);
  return index === -1 ? -1 : index;
}

function buildArticle(order, lines) {
  const title = titles[order - 1];
  const slug = `bhaja-govindam-${slugify(title)}`;
  const translationIndex = sectionAfter(lines, "Translation");
  const teachingIndex = sectionAfter(lines, "The Teaching");
  const livingIndex = sectionAfter(lines, "Living This Today");

  if (translationIndex === -1 || teachingIndex === -1 || livingIndex === -1) {
    throw new Error(`Verse ${order} is missing a required section.`);
  }

  const verseLines = lines.slice(0, translationIndex);
  const transliteration = verseLines.at(-1) ?? "";
  const sanskrit = verseLines.slice(0, -1);
  const translation = lines.slice(translationIndex + 1, teachingIndex).join("\n\n");
  const teaching = lines.slice(teachingIndex + 1, livingIndex).join("\n\n");
  let livingLines = lines.slice(livingIndex + 1);
  const journeyIndex = livingLines.indexOf("Continue the Journey");
  if (journeyIndex !== -1) {
    livingLines = livingLines.slice(0, journeyIndex);
  }
  const living = livingLines.join("\n\n");
  const description = firstSentence(translation);
  const excerpt = firstSentence(living || teaching);
  const publishedAt = `2026-07-${String(order).padStart(2, "0")}`;

  const body = [
    "## The verse",
    `::verse\n${sanskrit.join("\n")}\n::`,
    "## Transliteration",
    escapeBody(transliteration),
    "## Translation",
    escapeBody(translation),
    "## The teaching",
    escapeBody(teaching),
    "## Living this today",
    escapeBody(living)
  ].join("\n\n");

  const frontmatter = [
    "---",
    `title: ${yamlString(title)}`,
    `slug: ${yamlString(slug)}`,
    `contentType: classic`,
    `status: published`,
    `publishedAt: ${yamlString(publishedAt)}`,
    `excerpt: ${yamlString(excerpt)}`,
    `description: ${yamlString(description)}`,
    `readingTime: 1`,
    `readerNeeds: ["live-with-purpose", "find-perspective"]`,
    `themes: ["bhaja-govindam", "vedanta", "inner-freedom"]`,
    `series: ${yamlString("Bhaja Govindam")}`,
    `seriesOrder: ${order}`,
    `featured: ${order === 1 ? "true" : "false"}`,
    `classic: true`,
    `startHere: ${order === 1 ? "true" : "false"}`,
    "---",
    body
  ].join("\n");

  return { slug, frontmatter };
}

function main() {
  if (!fs.existsSync(sourceDoc)) {
    throw new Error(`Missing source document: ${sourceDoc}`);
  }

  const documentXml = extractDocx();
  const paragraphs = extractParagraphs(documentXml);
  const verseIndexes = paragraphs
    .map((text, index) => (/^VERSE\s+\d+$/.test(text) ? index : -1))
    .filter((index) => index !== -1);

  if (verseIndexes.length !== 31) {
    throw new Error(`Expected 31 verses, found ${verseIndexes.length}.`);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const created = [];

  verseIndexes.forEach((start, index) => {
    const end = verseIndexes[index + 1] ?? paragraphs.length;
    const marker = paragraphs[start];
    const order = Number(marker.match(/\d+/)?.[0]);
    const lines = paragraphs.slice(start + 1, end);
    const article = buildArticle(order, lines);
    fs.writeFileSync(path.join(outputDir, `${article.slug}.mdx`), article.frontmatter, "utf8");
    created.push(article.slug);
  });

  cleanTemp();
  console.log(`Created ${created.length} Bhaja Govindam articles in ${path.relative(root, outputDir)}.`);
}

main();
