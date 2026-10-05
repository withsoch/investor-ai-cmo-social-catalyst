"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icons";
import { NAV_PRIMARY as NAV, CTA } from "@/lib/product";
import { SoundToggle } from "@/components/pivot/SoundToggle";
import { play } from "@/lib/sound";
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change - adjusted during render, not in an
  // effect, so it doesn't trigger a cascading-render lint warning.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/95 shadow-[0_6px_20px_-14px_rgba(20,30,25,0.35)] backdrop-blur-md"
          : "border-b border-line bg-white"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <Logo imgClassName="h-11 w-auto" />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.9rem] font-medium transition-colors lg:px-4 lg:text-[0.95rem] ${
                  active
                    ? "bg-[#1a1a1a] text-white"
                    : "text-slate hover:bg-mist hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <SoundToggle />
          <Link href={CTA.login.href} className="hidden whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-medium text-slate hover:text-ink lg:inline-flex">
            {CTA.login.label}
          </Link>
          <Link href={CTA.sales.href} className="hidden whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-medium text-slate hover:text-ink xl:inline-flex">
            {CTA.sales.label}
          </Link>
          <Link href={CTA.start.href} onClick={() => play("tap")} className="ml-2 whitespace-nowrap rounded-lg bg-brand px-4 py-2.5 lg:px-5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-brand-light">
            {CTA.start.label}
          </Link>
        </div>

        {/* mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <SoundToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink ring-1 ring-line"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[30rem]" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  active
                    ? "bg-[#1a1a1a] text-white"
                    : "text-ink hover:bg-mist"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-2 flex flex-col gap-2.5">
            <Link href={CTA.start.href} onClick={() => play("tap")} className="w-full rounded-lg bg-brand px-6 py-3 text-center text-base font-semibold text-ink">
              {CTA.start.label}
            </Link>
            <Link href={CTA.sales.href} className="w-full rounded-lg px-6 py-3 text-center text-base font-semibold text-ink ring-1 ring-line">
              {CTA.sales.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
