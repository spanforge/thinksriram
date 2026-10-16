import Link from "next/link";
import { site } from "@/lib/site";
export function NewsletterSignup({ id = "newsletter-email" }: { id?: string }) {
  const username = site.newsletterUsername.trim();
  const enabled = /^[A-Za-z0-9_-]+$/.test(username);
  return <section className="newsletter" aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`}>Occasional email notes</h2>
    {enabled ? <>
      <p>A way to hear about new writing. Confirm your email before receiving updates, and unsubscribe whenever you like.</p>
      <form action={`https://buttondown.com/api/emails/embed-subscribe/${username}`} method="post" className="signup-form">
        <label htmlFor={id}>Email address<input id={id} type="email" name="email" autoComplete="email" required /></label>
        <input type="hidden" name="embed" value="1" /><button type="submit">Subscribe</button>
      </form>
      <p className="form-note">Signup and confirmation are handled by Buttondown. <Link href="/privacy">Privacy</Link>.</p>
    </> : <>
      <p>Email signup is being set up. No email addresses are collected here yet.</p>
      <p><Link href="/rss.xml">Follow new writing with RSS</Link>, or <Link href="/contact">get in touch</Link>.</p>
      <fieldset disabled className="signup-form"><legend className="visually-hidden">Email signup is not yet available</legend><label htmlFor={id}>Email address<input id={id} type="email" placeholder="Available when email signup opens" /></label><button type="button">Signup coming soon</button></fieldset>
    </>}
  </section>;
}
