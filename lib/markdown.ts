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
