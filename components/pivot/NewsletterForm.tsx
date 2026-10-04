"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";
import { play } from "@/lib/sound";

// Same delivery as the get-started form: the configured webhook if there is
// one, otherwise a prefilled email.
const WEBHOOK = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    play("success");
    if (WEBHOOK) {
      try {
        await fetch(WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ source: "newsletter", email }) });
      } catch {
        /* confirmation still shows */
      }
    } else {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Newsletter signup")}&body=${encodeURIComponent(email)}`;
    }
    setDone(true);
  }

  if (done) return <p className="text-sm font-semibold text-white">You&apos;re in. One useful email a week, nothing else.</p>;

  return (
    <form onSubmit={submit} className="flex w-full max-w-md gap-2">
      <label htmlFor="nl-email" className="sr-only">Email</label>
      <input
        id="nl-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="min-w-0 flex-1 rounded-xl bg-white/10 px-4 py-3 text-sm text-white outline-none ring-1 ring-white/15 placeholder:text-white/40 focus:ring-white/40"
      />
      <button type="submit" className="shrink-0 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-cream">
        Subscribe
      </button>
    </form>
  );
}
