import { DEMO } from "@/lib/product";

/**
 * The hero visual: a still of the product itself — sidebar, a week of
 * scheduled posts across channels, the approval queue and the autopilot
 * switch. Replaces the illustrated scene: buyers see what they'd be paying
 * for, not a mood.
 *
 * Everything shown belongs to the fictional example company. Motion is CSS
 * only (no JS gating), so the hero's main visual paints with the HTML.
 */

type Slot = { day: number; row: number; ch: "in" | "pg" | "ig" | "gb"; label: string };

const CH = {
  in: { name: "LinkedIn", dot: "#0A66C2", bg: "#E8F1FB" },
  pg: { name: "Page", dot: "#0A66C2", bg: "#EEF2F7" },
  ig: { name: "Instagram", dot: "#C23FC2", bg: "#F8EAF8" },
  gb: { name: "Google", dot: "#1F8A66", bg: "#E7F4EE" },
} as const;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const SLOTS: Slot[] = [
  { day: 0, row: 0, ch: "in", label: "A spreadsheet is not a finance system" },
  { day: 0, row: 1, ch: "gb", label: "Close checklist, free download" },
  { day: 1, row: 0, ch: "in", label: "Our first finance hire quit on day 9" },
  { day: 1, row: 1, ch: "ig", label: "3 places your close leaks time" },
  { day: 2, row: 0, ch: "pg", label: "Lumen Health closed March in 1.8 days" },
  { day: 3, row: 0, ch: "in", label: "If your close takes more than 5 days" },
  { day: 3, row: 1, ch: "pg", label: "We're hiring: Solutions Engineer" },
  { day: 4, row: 0, ch: "in", label: "Board decks make finance look like reporting" },
  { day: 4, row: 1, ch: "ig", label: "Month-end, before and after" },
];

const NAV = ["Suggestions", "Calendar", "Brand kit", "Analytics", "Channels"];

export function AppMock() {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* soft brand glow behind the window */}
      <div className="absolute inset-x-10 -top-6 bottom-10 rounded-[40px] bg-gradient-to-b from-brand/25 via-sun/20 to-transparent blur-3xl" aria-hidden />

      <div
        style={{ animationDelay: "0.15s" }}
        className="mock-in panel relative overflow-hidden bg-white text-left shadow-[0_40px_90px_-40px_rgba(20,30,25,0.45)] ring-1 ring-ink/10"
      >
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-line bg-cream px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="mx-auto rounded-md bg-white px-3 py-1 text-xs text-muted ring-1 ring-line">
            app.withsocialcatalyst.com/calendar
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] lg:grid-cols-[11rem_1fr_17rem]">
          {/* sidebar */}
          <aside className="hidden border-r border-line bg-cream/60 p-4 md:block">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-[0.65rem] font-bold text-white" style={{ background: DEMO.brand.colors[0] }}>
                NL
              </span>
              <span className="truncate text-sm font-semibold text-ink">{DEMO.brand.name}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-1 text-sm">
              {NAV.map((n) => (
                <li
                  key={n}
                  className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 ${n === "Calendar" ? "bg-white font-semibold text-ink ring-1 ring-line" : "text-slate"}`}
                >
                  {n}
                  {n === "Suggestions" && <span className="rounded-full bg-brand px-1.5 text-[0.65rem] font-bold text-ink">12</span>}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-white p-3 ring-1 ring-line">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">This month</p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-ink">52</p>
              <p className="text-xs text-slate">posts drafted</p>
            </div>
          </aside>

          {/* calendar */}
          <section className="p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">Week of 12 October</p>
                <p className="font-[family-name:var(--font-display)] text-lg text-ink">Calendar</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5BE49B] opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5BE49B]" />
                </span>
                Autopilot on
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {DAYS.map((d, di) => (
                <div key={d} className={`min-w-0 ${di > 2 ? "hidden sm:block" : ""}`}>
                  <p className="pb-2 text-center text-[0.7rem] font-semibold text-muted">{d}</p>
                  <div className="flex min-h-[9.5rem] flex-col gap-2 rounded-xl bg-mist/60 p-1.5">
                    {SLOTS.filter((s) => s.day === di).map((s, i) => (
                      <div
                        key={s.label}
                        className="mock-in rounded-lg p-2 ring-1 ring-black/5"
                        style={{ background: CH[s.ch].bg, animationDelay: `${0.5 + (di * 2 + i) * 0.08}s` }}
                      >
                        <p className="flex items-center gap-1 text-[0.62rem] font-semibold text-ink-soft">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: CH[s.ch].dot }} />
                          {CH[s.ch].name}
                        </p>
                        <p className="mt-1 line-clamp-3 text-[0.68rem] leading-snug text-ink">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* approval queue */}
          <aside className="hidden border-l border-line bg-cream/40 p-4 lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Up for approval</p>
            <div className="mt-3 rounded-xl bg-white p-3.5 ring-1 ring-line">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">LinkedIn · Founder</span>
                <span className="rounded-full bg-mist px-2 py-0.5 text-[0.62rem] font-semibold text-ink-soft">{DEMO.posts[4].style}</span>
              </div>
              <p className="mt-2 line-clamp-5 whitespace-pre-line text-[0.74rem] leading-relaxed text-ink-soft">{DEMO.posts[4].text}</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <span className="rounded-lg py-1.5 text-center text-xs font-semibold text-ink ring-1 ring-line">Skip</span>
                <span className="rounded-lg bg-forest py-1.5 text-center text-xs font-semibold text-white">Approve</span>
              </div>
            </div>
            <div className="mt-3 rounded-xl bg-white p-3.5 ring-1 ring-line">
              <p className="text-xs font-semibold text-ink">Last 30 days</p>
              <div className="mt-2 flex h-12 items-end gap-1" aria-hidden>
                {[28, 36, 30, 44, 40, 52, 48, 61, 58, 70, 66, 78].map((h, i) => (
                  <span
                    key={i}
                    className="mock-bar block flex-1 origin-bottom rounded-sm bg-brand/80"
                    style={{ height: h * 0.6, animationDelay: `${0.8 + i * 0.04}s` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[0.68rem] text-muted">Profile views, example data</p>
            </div>
          </aside>
        </div>
      </div>

      {/* floating chips */}
      <div
        style={{ animationDelay: "1.1s" }}
        className="mock-in absolute -top-4 right-10 z-10 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-ink shadow-[0_18px_40px_-20px_rgba(20,30,25,0.5)] ring-1 ring-line xl:flex"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-[0.6rem] text-white">✓</span>
        Approved · Tue 08:40
      </div>
      <div
        style={{ animationDelay: "1.3s" }}
        className="mock-in absolute -top-4 left-10 z-10 hidden items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-ink shadow-[0_18px_40px_-20px_rgba(20,30,25,0.5)] ring-1 ring-line xl:flex"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sun text-[0.6rem]">✦</span>
        12 new suggestions in your voice
      </div>
    </div>
  );
}
