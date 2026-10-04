"use client";

import { useEffect, useState } from "react";
import { isMuted, onMutedChange, play, setMuted } from "@/lib/sound";

/** Speaker icon in the header. Server renders "on"; the stored choice applies after mount. */
export function SoundToggle({ className = "" }: { className?: string }) {
  const [muted, setLocal] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocal(isMuted());
    return onMutedChange(setLocal);
  }, []);

  function toggle() {
    const next = !muted;
    setMuted(next);
    if (!next) play("tick");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={!muted}
      aria-label={muted ? "Turn interface sounds on" : "Turn interface sounds off"}
      title={muted ? "Sounds off" : "Sounds on"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-slate transition-colors hover:bg-mist hover:text-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
        {muted ? (
          <path d="M16 9.5l5 5M21 9.5l-5 5" />
        ) : (
          <>
            <path d="M15.5 9a4 4 0 0 1 0 6" />
            <path d="M18 6.5a7.5 7.5 0 0 1 0 11" />
          </>
        )}
      </svg>
    </button>
  );
}
