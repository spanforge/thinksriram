import { CopyText } from "@/components/CopyText";
export function ArticleActions({ url }: { url: string }) {
  return <div className="article-actions" aria-label="Share this article"><CopyText text={url} label="Copy article link" /><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} rel="noopener noreferrer">Share on LinkedIn</a></div>;
}
