import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Highlight";
import { Icon } from "@/components/Icons";
import { PlatformMark } from "@/components/PlatformIcons";
import { Photo } from "@/components/ui/Photo";

type Mock = "search" | "post" | "inbox";

const PILLARS: { mock: Mock; tint: string; title: string; body: string }[] = [
  {
    mock: "search",
    tint: "bg-peach",
    title: "Someone searches for what you do, and a competitor shows up first",
    body: "Meanwhile your Google listing is half-filled and hasn't been touched in months. We claim it, fill it out properly, and answer every review within 24 hours, so the next person searching actually finds you.",
  },
  {
    mock: "post",
    tint: "bg-lilac-soft",
    title: "You posted an update. Six people liked it.",
    body: "Out of 340 followers. A feed that goes quiet for a week reads as a business that's gone quiet too. We keep Instagram, LinkedIn and Facebook posting on a real schedule, so it doesn't.",
  },
  {
    mock: "inbox",
    tint: "bg-sun-soft",
    title: "Your last ten clients all came from referrals, and this month nobody referred you",
    body: "Your LinkedIn hasn't posted in two months and nobody's sending messages on your behalf. We build the presence and the outreach, so new conversations start even when referrals don't.",
  },
];

function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`flex gap-[1px] ${className}`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/** Small CSS-drawn picture of each problem. Illustrative, not a real account. */
function ProblemMock({ mock }: { mock: Mock }) {
  if (mock === "search") {
    return (
      <div className="rounded-2xl bg-white p-3.5 shadow-[var(--shadow-card)] ring-1 ring-ink/5">
        <div className="flex items-center gap-2 rounded-full bg-mist px-3 py-1.5">
          <PlatformMark id="google" size="sm" className="!h-5 !w-5 !rounded-full" />
          <span className="text-[0.72rem] text-slate">consultant near me</span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center justify-between rounded-lg bg-leaf/10 px-2.5 py-2">
            <span className="text-[0.72rem] font-semibold text-ink">A competitor</span>
            <span className="flex items-center gap-1 text-[0.66rem] text-slate">
              4.9 <Stars className="text-sun" /> (86)
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg px-2.5 py-2">
            <span className="text-[0.72rem] font-medium text-ink-soft">Another competitor</span>
            <span className="flex items-center gap-1 text-[0.66rem] text-slate">
              4.7 <Stars className="text-sun" /> (41)
            </span>
          </div>
          <div className="relative flex items-center justify-between rounded-lg border border-dashed border-brand/40 px-2.5 py-2 opacity-80">
            <span className="text-[0.72rem] font-medium text-muted">Your business</span>
            <span className="text-[0.66rem] text-muted">No reviews · Hours missing</span>
            <span className="absolute -right-2 -top-2.5 rounded-full bg-brand px-2 py-[0.15rem] text-[0.58rem] font-bold uppercase tracking-wide text-white">
              You&apos;re here
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (mock === "post") {
    return (
      <div className="mx-auto max-w-[15rem] rounded-2xl bg-white p-3 shadow-[var(--shadow-card)] ring-1 ring-ink/5">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-[conic-gradient(from_200deg,var(--color-sun),var(--color-brand),var(--color-channel-instagram),var(--color-sun))] p-[2px]">
            <span className="block h-full w-full rounded-full bg-white" />
          </span>
          <span className="text-[0.7rem] font-semibold text-ink">copperlane.coffee</span>
          <span className="ml-auto text-[0.62rem] text-muted">340 followers</span>
        </div>
        <Photo
          src="/Service Images/Tea-cup-on-the-table.png"
          alt="A latte on a café counter, posted by a hypothetical coffee shop"
          ratio="16/9"
          sizes="240px"
          className="mt-2.5 rounded-lg bg-peach"
        />
        <div className="mt-2.5 flex items-center gap-2 text-[0.7rem] text-ink-soft">
          <svg viewBox="0 0 24 24" className="h-4 w-4 animate-pulse text-brand" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 5 6.4 5c2 0 3.3 1.1 4.1 2.3h3C14.3 6.1 15.6 5 17.6 5 21 5 23.1 8.5 21.6 11.8 19.5 16.4 12 21 12 21z" />
          </svg>
          <span className="font-semibold">6 likes</span>
          <span className="text-muted">· 0 comments</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-3.5 shadow-[var(--shadow-card)] ring-1 ring-ink/5">
      <div className="flex items-center gap-2">
        <PlatformMark id="linkedin" size="sm" />
        <span className="text-[0.75rem] font-semibold text-ink">Messaging</span>
        <span className="ml-auto rounded-full bg-mist px-2 py-[0.15rem] text-[0.6rem] font-semibold text-muted">
          0 new
        </span>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center rounded-xl border border-dashed border-line py-4">
        <Icon name="chat" className="h-6 w-6 text-muted/70" strokeWidth={1.5} />
        <p className="mt-1.5 text-[0.72rem] font-medium text-slate">No new messages</p>
        <p className="mt-0.5 text-[0.62rem] text-muted">Last post: 2 months ago</p>
      </div>
    </div>
  );
}

export function Positioning() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Sound familiar?</span>
          <h2 className="text-h2 mt-5">
            Your buyers already decided who to trust, and{" "}
            <Highlight>it&apos;s not always you!</Highlight>
          </h2>
          <p className="lead mt-5">
            They decided on Google, on Instagram, on LinkedIn, before they
            ever spoke to you. We run the profile, the content and the
            outreach on those channels, so your business looks active,
            credible and worth choosing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <article
                className={`group flex h-full flex-col rounded-3xl ${p.tint} p-5 transition-transform duration-300 hover:-translate-y-1.5 sm:p-6`}
              >
                <div className="transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <ProblemMock mock={p.mock} />
                </div>
                <h3 className="text-h3 mt-6">{p.title}</h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href="#channels"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Here&apos;s what we do about it
            <Icon
              name="arrow"
              className="h-4 w-4 rotate-90 text-sun transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
