// The sound engine: Web Audio only, no React. Loaded lazily the first time a reader turns sound on (D-028).
// Everything is generated from code (D-029). Master level is capped low and runs through a limiter.
import type { BedName } from './beds';
import { buildBed, type Bed } from './synth';

export interface SoundEngine {
  /** The bed currently asked for (null: silence). */
  readonly bed: BedName | null;
  /** True between start() and stop(). */
  readonly running: boolean;
  /** Must be called from a user gesture. Creates the AudioContext and begins the current bed. */
  start(): Promise<void>;
  setBed(name: BedName | null): void;
  /** 0 to 1 of the capped master level. */
  setVolume(volume: number): void;
  /** Fade out and suspend; start() resumes. */
  stop(): Promise<void>;
  /** Release everything. The engine cannot be used afterwards. */
  dispose(): void;
}

export interface EngineOptions {
  createContext?: () => AudioContext;
  random?: () => number;
  /** For tests: where visibility is read from. */
  doc?: Document;
}

/** Hard ceiling on the master gain (D-027: sound is felt, not heard first). */
export const MASTER_CAP = 0.25;
export const CROSSFADE_S = 3;
export const SILENCE_FADE_S = 2;
const SCHEDULE_EVERY_MS = 400;
const LOOKAHEAD_S = 1.5;

interface Live {
  name: BedName;
  bed: Bed;
}

function ramp(param: AudioParam, from: number, to: number, now: number, seconds: number): void {
  param.cancelScheduledValues(now);
  param.setValueAtTime(from, now);
  param.linearRampToValueAtTime(to, now + seconds);
}

export function createEngine(options: EngineOptions = {}): SoundEngine {
  const doc = options.doc ?? document;
  const random = options.random ?? Math.random;
  const make =
    options.createContext ??
    (() => {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) throw new Error('Web Audio is not available');
      return new Ctor();
    });

  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let wanted: BedName | null = null;
  let volume = 0.7;
  let running = false;
  let disposed = false;
  let current: Live | null = null;
  const retiring = new Set<Live>();
  const retireTimers = new Set<ReturnType<typeof setTimeout>>();
  let tick: ReturnType<typeof setInterval> | null = null;

  const level = () => MASTER_CAP * volume;

  function applyBed() {
    if (!ctx || !master || !running) return;
    if (current && current.name === wanted) return;
    const now = ctx.currentTime;
    if (current) {
      const old = current;
      current = null;
      const secs = wanted === null ? SILENCE_FADE_S : CROSSFADE_S;
      ramp(old.bed.out.gain, old.bed.out.gain.value, 0, now, secs);
      retiring.add(old);
      const timer = setTimeout(
        () => {
          retireTimers.delete(timer);
          retiring.delete(old);
          old.bed.stop();
        },
        (secs + 0.3) * 1000,
      );
      retireTimers.add(timer);
    }
    if (wanted) {
      const bed = buildBed(ctx, wanted, random);
      bed.out.gain.value = 0;
      bed.out.connect(master);
      ramp(bed.out.gain, 0, 1, now, CROSSFADE_S);
      bed.schedule(now + LOOKAHEAD_S);
      current = { name: wanted, bed };
    }
  }

  function onVisibility() {
    if (!ctx || disposed) return;
    if (doc.hidden) void ctx.suspend();
    else if (running) void ctx.resume();
  }

  const engine: SoundEngine = {
    get bed() {
      return wanted;
    },
    get running() {
      return running;
    },
    async start() {
      if (disposed) return;
      if (!ctx) {
        ctx = make();
        master = ctx.createGain();
        master.gain.value = 0;
        const limiter = ctx.createDynamicsCompressor();
        limiter.threshold.value = -14;
        limiter.knee.value = 12;
        limiter.ratio.value = 12;
        limiter.attack.value = 0.003;
        limiter.release.value = 0.25;
        master.connect(limiter).connect(ctx.destination);
      }
      running = true;
      await ctx.resume();
      if (disposed || !running || !master) return;
      ramp(master.gain, master.gain.value, level(), ctx.currentTime, 0.4);
      applyBed();
      doc.addEventListener('visibilitychange', onVisibility);
      if (!tick) {
        tick = setInterval(() => {
          if (!ctx || doc.hidden) return;
          current?.bed.schedule(ctx.currentTime + LOOKAHEAD_S);
        }, SCHEDULE_EVERY_MS);
      }
    },
    setBed(name) {
      wanted = name;
      applyBed();
    },
    setVolume(v) {
      volume = Math.min(1, Math.max(0, v));
      if (ctx && master && running) ramp(master.gain, master.gain.value, level(), ctx.currentTime, 0.2);
    },
    async stop() {
      if (!running || !ctx || !master) return;
      running = false;
      const c = ctx;
      ramp(master.gain, master.gain.value, 0, c.currentTime, 0.4);
      // let the fade finish, then free the bed and suspend; start() builds the bed again
      await new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, 450);
        retireTimers.add(timer);
      });
      if (disposed || running) return;
      current?.bed.stop();
      current = null;
      if (tick) clearInterval(tick);
      tick = null;
      doc.removeEventListener('visibilitychange', onVisibility);
      await c.suspend();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      running = false;
      if (tick) clearInterval(tick);
      tick = null;
      retireTimers.forEach(clearTimeout);
      retireTimers.clear();
      doc.removeEventListener('visibilitychange', onVisibility);
      current?.bed.stop();
      retiring.forEach((l) => l.bed.stop());
      retiring.clear();
      current = null;
      const c = ctx;
      ctx = null;
      master = null;
      void c?.close().catch(() => {});
    },
  };
  return engine;
}
