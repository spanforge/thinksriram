import { Fragment } from "react";
import { renderMarkdown } from "@/lib/content";

function Inline({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|\x60[^\x60]+\x60)/g).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    return link ? <a key={index} href={link[2]} rel="noopener noreferrer">{link[1]}</a> : <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

export function Markdown({ body }: { body: string }) {
  return <>{renderMarkdown(body).map((block, index) => {
    const text = <Inline text={block.text} />;
    if (block.type === "h2") return <h2 key={index}>{text}</h2>;
    if (block.type === "h3") return <h3 key={index}>{text}</h3>;
    if (block.type === "quote") return <blockquote key={index}>{text}</blockquote>;
    if (block.type === "verse") return <div className="verse-block" key={index}>{block.text}</div>;
    if (block.type === "ol" || block.type === "ul") {
      const items = block.text.split("\n").map((line, itemIndex) => <li key={itemIndex}><Inline text={line.replace(/^(?:\d+\.|[-*])\s+/, "")} /></li>);
      return block.type === "ol" ? <ol key={index} start={Number(block.text.match(/^\d+/)![0])}>{items}</ol> : <ul key={index}>{items}</ul>;
    }
    return <p key={index}>{text}</p>;
  })}</>;
}
