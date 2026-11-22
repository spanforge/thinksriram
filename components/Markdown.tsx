import { Fragment } from "react";
import { renderMarkdown } from "@/lib/markdown";

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\x60[^\x60]+\x60)/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    return link ? <a key={index} href={link[2]} rel="noopener noreferrer">{link[1]}</a> : <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

export function articleBlocks(body: string) {
  const used = new Set<string>();
  return renderMarkdown(body).map(block => {
    if (block.type !== 'h2' && block.type !== 'h3') return { ...block, id: undefined, label: undefined };
    const label = block.text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[\x60*_]/g, '');
    const slug = label.toLowerCase().normalize('NFKC').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
    const prefix = `section-${slug || 'heading'}`;
    let id = prefix;
    for (let suffix = 2; used.has(id); suffix++) id = `${prefix}-${suffix}`;
    used.add(id);
    return { ...block, id, label };
  });
}

export function Markdown({ blocks }: { blocks: ReturnType<typeof articleBlocks> }) {
  return <>{blocks.map((block, index) => {
    const text = <Inline text={block.text} />;
    if (block.type === "hr") return <hr key={index} />;
    if (block.type === "h2") return <h2 key={index} id={block.id}>{text}</h2>;
    if (block.type === "h3") return <h3 key={index} id={block.id}>{text}</h3>;
    if (block.type === "quote") return <blockquote key={index}>{text}</blockquote>;
    if (block.type === "verse") return <div className="verse-block" key={index}>{block.text}</div>;
    if (block.type === "ol" || block.type === "ul") {
      const items = block.text.split("\n").map((line, itemIndex) => <li key={itemIndex}><Inline text={line.replace(/^(?:\d+\.|[-*])\s+/, "")} /></li>);
      return block.type === "ol" ? <ol key={index} start={Number(block.text.match(/^\d+/)![0])}>{items}</ol> : <ul key={index}>{items}</ul>;
    }
    return <p key={index}>{text}</p>;
  })}</>;
}
