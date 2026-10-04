"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/content";
import { ONBOARDING, PLANS } from "@/lib/product";
import { play } from "@/lib/sound";

// Posts to the same webhook as the free audit form when it's configured;
// otherwise opens a prefilled email. There is no product signup behind this
// yet — it collects early-access interest.
const WEBHOOK = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL;

export function GetStartedForm() {
  const params = useSearchParams();
  const [site, setSite] = useState(params.get("site") ?? "");
  const [linkedin, setLinkedin] = useState(params.get("linkedin") ?? "");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(params.get("plan") ?? "pro");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    play("success");
    const payload = { source: "get-started", website: site, linkedin, email, plan };
    if (WEBHOOK) {
      setState("sending");
      try {
        await fetch(WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } catch {
        /* still show the confirmation; the email fallback is below */
      }
      setState("done");
      return;
    }
    const body = `Website: ${site}\nLinkedIn: ${linkedin}\nEmail: ${email}\nPlan: ${plan}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Social Catalyst early access")}&body=${encodeURIComponent(body)}`;
    setState("done");
  }

  if (state === "done") {
    return (
      <div className="card-r mx-auto mt-10 max-w-md bg-white p-8 text-left ring-1 ring-line">
        <Progress step={2} />
        <p className="mt-6 text-h3">Links in. One step left.</p>
        <p className="mt-2 text-slate">
          We&apos;ll email {email || "you"} the link to your 10-minute interview. Take it whenever suits you; your first posts arrive once it&apos;s done.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card-r mx-auto mt-10 flex max-w-md flex-col gap-4 bg-white p-6 text-left ring-1 ring-line sm:p-8">
      <Progress step={1} />
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
        Website
        <input required value={site} onChange={(e) => setSite(e.target.value)} placeholder="yourcompany.com" className="rounded-xl bg-cream px-4 py-3 font-normal ring-1 ring-line outline-none focus:ring-ink/40" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
        Your LinkedIn profile
        <input required value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/you" className="rounded-xl bg-cream px-4 py-3 font-normal ring-1 ring-line outline-none focus:ring-ink/40" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
        Work email
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="rounded-xl bg-cream px-4 py-3 font-normal ring-1 ring-line outline-none focus:ring-ink/40" />
      </label>
      <fieldset className="flex flex-col gap-1.5">
        <legend className="text-sm font-semibold text-ink">Plan</legend>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          {PLANS.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => {
                play("tick");
                setPlan(p.key);
              }}
              aria-pressed={plan === p.key}
              className={`rounded-xl px-3 py-2.5 text-sm font-semibold ring-1 transition ${plan === p.key ? "bg-ink text-white ring-ink" : "bg-white text-ink ring-line hover:ring-ink/40"}`}
            >
              {p.name}
              <span className="block text-xs font-normal opacity-70">{p.monthly === null ? "Custom" : `$${p.monthly}/mo`}</span>
            </button>
          ))}
        </div>
      </fieldset>
      <button type="submit" disabled={state === "sending"} className="mt-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-ink hover:bg-brand-light disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Continue to the interview"}
      </button>
      <p className="text-center text-xs text-muted">No card. Cancel anytime.</p>
    </form>
  );
}

/** The three onboarding inputs as a progress row: links (step 1), interview (step 2). */
function Progress({ step }: { step: 1 | 2 }) {
  // Website and LinkedIn are entered together, so they share step 1.
  const stateOf = (i: number) => (i < 2 ? (step > 1 ? "done" : "now") : step === 2 ? "now" : "next");
  return (
    <ol className="grid grid-cols-3 gap-2" aria-label="Setup steps">
      {ONBOARDING.map((o, i) => {
        const st = stateOf(i);
        return (
          <li key={o.k} className="flex flex-col gap-1.5">
            <span className={`h-1 rounded-full ${st === "done" ? "bg-leaf" : st === "now" ? "bg-brand" : "bg-line"}`} />
            <span className={`text-[0.72rem] font-semibold ${st === "next" ? "text-muted" : "text-ink"}`}>
              {st === "done" ? "✓ " : ""}
              {o.k}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
