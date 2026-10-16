"use client";
import { useState } from "react";
export function CopyText({ text, label }: { text: string; label: string }) {
  const [message, setMessage] = useState("");
  const [fallback, setFallback] = useState(false);
  return <span className="copy-control"><button type="button" className="text-button" onClick={async () => {
    try { await navigator.clipboard.writeText(text); setMessage("Copied."); setFallback(false); }
    catch { setMessage("Select and copy the text below."); setFallback(true); }
  }}>{label}</button><span role="status" className="control-status">{message}</span>
    {fallback && <input aria-label="Text to copy" readOnly value={text} onFocus={event => event.currentTarget.select()} />}
  </span>;
}
