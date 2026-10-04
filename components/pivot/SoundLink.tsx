"use client";

import Link from "next/link";
import { play, type SoundName } from "@/lib/sound";

/** A next/link that makes a soft sound on press. For calls to action. */
export function SoundLink({
  sound = "tap",
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & { sound?: SoundName }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        play(sound);
        onClick?.(e);
      }}
    />
  );
}
