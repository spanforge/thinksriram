"use client";
import { useState } from "react";
import { CopyText } from "@/components/CopyText";
export function ContactComposer({ email }: { email: string }) {
  const [name, setName] = useState(""), [subject, setSubject] = useState(""), [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const body = `${name ? `From: ${name}\n\n` : ""}${message}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return <form className="contact-composer" onSubmit={event => { event.preventDefault(); setReady(true); }}>
    <h2>Compose a note</h2><p>You can prepare a message here, then open it in your browser email or copy it into any email service. Nothing is sent until you send it there.</p>
    <label htmlFor="contact-name">Name (optional)<input id="contact-name" autoComplete="name" value={name} maxLength={100} onChange={event => { setName(event.target.value); setReady(false); }} /></label>
    <label htmlFor="contact-subject">Subject<input id="contact-subject" required maxLength={160} value={subject} onChange={event => { setSubject(event.target.value); setReady(false); }} /></label>
    <label htmlFor="contact-message">Your message<textarea id="contact-message" required rows={7} maxLength={5000} value={message} onChange={event => { setMessage(event.target.value); setReady(false); }} /></label>
    <button type="submit">Prepare message</button>
    {ready && <section className="prepared-message" aria-label="Prepared message"><p role="status">Your message is ready. Choose how to send it:</p><div className="inline-links"><a href={gmail} rel="noopener noreferrer">Open Gmail in browser</a><a href={outlook} rel="noopener noreferrer">Open Outlook in browser</a><CopyText label="Copy message" text={`To: ${email}\nSubject: ${subject}\n\n${body}`} /></div><p>If your browser email is not signed in, copy the message first so you can paste it after signing in.</p></section>}
  </form>;
}
