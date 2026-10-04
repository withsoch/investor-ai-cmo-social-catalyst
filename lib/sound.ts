"use client";

/**
 * Small, quiet UI sounds, synthesised with Web Audio — no audio files.
 *
 * Rules so they stay non-intrusive:
 * - Only ever played from a user action (click, drag, submit) or as the
 *   direct result of one (the preview finishing). Never on scroll or load.
 * - Short (under ~350ms), low volume, soft attack, no harsh square waves.
 * - One mute switch for the whole site, remembered per browser.
 */

export type SoundName =
  | "approve" // two-note rising chime
  | "skip" // soft low swish
  | "revise" // quick sparkle
  | "tap" // primary button press
  | "tick" // toggles, accordions
  | "generate" // start of a generation
  | "success"; // something finished well

const STORAGE_KEY = "sc-sound-muted";
const MASTER = 0.18;

let ctx: AudioContext | null = null;
let muted: boolean | null = null;
const listeners = new Set<(m: boolean) => void>();

export function isMuted(): boolean {
  if (muted === null) {
    try {
      muted = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      muted = false;
    }
  }
  return muted;
}

export function setMuted(m: boolean) {
  muted = m;
  try {
    window.localStorage.setItem(STORAGE_KEY, m ? "1" : "0");
  } catch {
    /* private mode: the choice just won't persist */
  }
  listeners.forEach((fn) => fn(m));
}

export function onMutedChange(fn: (m: boolean) => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** One soft enveloped tone. */
function tone(
  ac: AudioContext,
  { freq, start = 0, dur = 0.18, type = "sine", gain = 1, glideTo }: {
    freq: number; start?: number; dur?: number; type?: OscillatorType; gain?: number; glideTo?: number;
  },
) {
  const t0 = ac.currentTime + start;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(MASTER * gain, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

/** Filtered noise burst — the "air" in a swish. */
function swish(ac: AudioContext, { dur = 0.22, from = 1800, to = 400, gain = 0.5 } = {}) {
  const t0 = ac.currentTime;
  const len = Math.floor(ac.sampleRate * dur);
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = ac.createBufferSource();
  src.buffer = buf;
  const filter = ac.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 0.9;
  filter.frequency.setValueAtTime(from, t0);
  filter.frequency.exponentialRampToValueAtTime(to, t0 + dur);
  const g = ac.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(MASTER * gain, t0 + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(filter).connect(g).connect(ac.destination);
  src.start(t0);
}

export function play(name: SoundName) {
  if (typeof window === "undefined" || isMuted()) return;
  const ac = audio();
  if (!ac) return;

  switch (name) {
    case "approve": // C6 → G6, bright but soft
      tone(ac, { freq: 1046.5, dur: 0.14, gain: 0.8 });
      tone(ac, { freq: 1568, start: 0.08, dur: 0.24, gain: 0.7 });
      break;
    case "skip":
      swish(ac, { dur: 0.2, from: 1400, to: 300, gain: 0.45 });
      tone(ac, { freq: 330, dur: 0.12, gain: 0.25, glideTo: 220 });
      break;
    case "revise": // three quick rising notes
      [1318.5, 1568, 2093].forEach((f, i) => tone(ac, { freq: f, start: i * 0.055, dur: 0.16, gain: 0.45, type: "triangle" }));
      break;
    case "tap":
      tone(ac, { freq: 660, dur: 0.07, gain: 0.45, glideTo: 520 });
      break;
    case "tick":
      tone(ac, { freq: 1800, dur: 0.035, gain: 0.3, type: "triangle" });
      break;
    case "generate":
      swish(ac, { dur: 0.35, from: 300, to: 2200, gain: 0.35 });
      break;
    case "success": // soft major arpeggio
      [784, 987.8, 1174.7].forEach((f, i) => tone(ac, { freq: f, start: i * 0.07, dur: 0.3, gain: 0.5 }));
      break;
  }
}
