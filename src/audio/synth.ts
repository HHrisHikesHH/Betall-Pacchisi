// Sound beds generated from code (D-029: no audio files). Each bed is filtered noise and slow modulation, with a few
// sparse events (chirps, crickets, crackle, hoots) scheduled ahead of the clock. No melody, no voice, nothing loud.
import type { BedName } from './beds';

export interface Bed {
  /** Connect this to the destination. Its gain is the crossfade control; the bed's own level is set inside. */
  out: GainNode;
  /** Schedule sparse events up to this audio-clock time. Called repeatedly; safe to call with an earlier time. */
  schedule(until: number): void;
  /** Stop every source and disconnect. */
  stop(): void;
}

type Rng = () => number;

const noiseCache = new WeakMap<BaseAudioContext, AudioBuffer>();

/** Four seconds of pink-ish noise (Kellet filter), scaled to a peak of about 0.5. Looped, so it has no seam. */
function noiseBuffer(ctx: BaseAudioContext): AudioBuffer {
  const cached = noiseCache.get(ctx);
  if (cached) return cached;
  const length = Math.floor(ctx.sampleRate * 4);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  let peak = 0;
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    data[i] = pink;
    peak = Math.max(peak, Math.abs(pink));
  }
  const scale = peak > 0 ? 0.5 / peak : 1;
  for (let i = 0; i < length; i++) data[i] *= scale;
  noiseCache.set(ctx, buffer);
  return buffer;
}

class Builder {
  readonly out: GainNode;
  readonly bus: GainNode;
  private sources: AudioScheduledSourceNode[] = [];
  constructor(
    readonly ctx: BaseAudioContext,
    readonly rng: Rng,
  ) {
    this.out = ctx.createGain();
    this.bus = ctx.createGain();
    this.bus.connect(this.out);
  }
  gain(value: number): GainNode {
    const node = this.ctx.createGain();
    node.gain.value = value;
    return node;
  }
  filter(type: BiquadFilterType, frequency: number, q = 0.7): BiquadFilterNode {
    const node = this.ctx.createBiquadFilter();
    node.type = type;
    node.frequency.value = frequency;
    node.Q.value = q;
    return node;
  }
  /** A looping noise source, started at a random point so repeated beds do not line up. */
  noise(): AudioBufferSourceNode {
    const src = this.ctx.createBufferSource();
    src.buffer = noiseBuffer(this.ctx);
    src.loop = true;
    src.start(this.ctx.currentTime, this.rng() * 3.5);
    this.sources.push(src);
    return src;
  }
  osc(type: OscillatorType, frequency: number, detuneCents = 0): OscillatorNode {
    const node = this.ctx.createOscillator();
    node.type = type;
    node.frequency.value = frequency;
    node.detune.value = detuneCents;
    node.start(this.ctx.currentTime + this.rng() * 0.5);
    this.sources.push(node);
    return node;
  }
  /** Slow sine modulation of `param`, ± `depth` around its current value. */
  lfo(rate: number, depth: number, param: AudioParam): void {
    const node = this.osc('sine', rate);
    const amount = this.gain(depth);
    node.connect(amount).connect(param);
  }
  between(lo: number, hi: number): number {
    return lo + this.rng() * (hi - lo);
  }
  finish(schedule: (until: number) => void): Bed {
    return {
      out: this.out,
      schedule,
      stop: () => {
        const now = this.ctx.currentTime;
        for (const s of this.sources) {
          try {
            s.stop(now);
          } catch {
            /* already stopped */
          }
        }
        this.bus.disconnect();
        this.out.disconnect();
      },
    };
  }
}

/** Very soft tanpura-like drone: Sa and Pa partials, slightly detuned, slowly breathing. */
function addDrone(b: Builder, level: number): void {
  const mix = b.gain(0);
  mix.gain.value = level;
  const tone = b.filter('lowpass', 800, 0.5);
  mix.connect(tone).connect(b.bus);
  b.lfo(0.07, level * 0.4, mix.gain);
  const partials: [OscillatorType, number, number][] = [
    ['triangle', 130.81, 1],
    ['triangle', 196.0, 0.55],
    ['sine', 261.63, 0.4],
    ['sine', 392.0, 0.22],
  ];
  for (const [type, freq, amp] of partials) {
    for (const cents of [-4, 4]) {
      b.osc(type, freq, cents).connect(b.gain(amp * 0.5)).connect(mix);
    }
  }
}

/** Wind: band-passed noise whose centre and loudness drift slowly. */
function addWind(b: Builder, centre: number, level: number, q = 0.8): void {
  const filter = b.filter('bandpass', centre, q);
  const amp = b.gain(level);
  b.noise().connect(filter).connect(amp).connect(b.bus);
  b.lfo(0.06 + b.rng() * 0.03, centre * 0.35, filter.frequency);
  b.lfo(0.09 + b.rng() * 0.04, level * 0.45, amp.gain);
}

/** Soft low band-passed rumble (water, fire body). */
function addRumble(b: Builder, cutoff: number, level: number, lfoRate: number): void {
  const filter = b.filter('lowpass', cutoff, 0.6);
  const amp = b.gain(level);
  b.noise().connect(filter).connect(amp).connect(b.bus);
  b.lfo(lfoRate, level * 0.5, amp.gain);
}

/** One sine glide with a soft envelope, into the bus. */
function note(b: Builder, t: number, f0: number, f1: number, dur: number, peak: number, attack: number): void {
  const osc = b.ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(f0, t);
  osc.frequency.linearRampToValueAtTime(f1, t + dur);
  const env = b.gain(0);
  env.gain.setValueAtTime(0, t);
  env.gain.linearRampToValueAtTime(peak, t + attack);
  env.gain.linearRampToValueAtTime(0, t + dur);
  osc.connect(env).connect(b.bus);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

/** A cricket: a steady high sine, chirped in short pulsed bursts at random, with long rests. */
function addCricket(b: Builder, freq: number, peak: number, restLo: number, restHi: number): (until: number) => void {
  const osc = b.osc('sine', freq);
  const amp = b.gain(0);
  osc.connect(amp).connect(b.bus);
  let next = b.ctx.currentTime + b.between(0.5, restHi);
  return (until) => {
    while (next < until) {
      const bursts = 2 + Math.floor(b.rng() * 5);
      let t = next;
      for (let i = 0; i < bursts; i++) {
        for (let p = 0; p < 4; p++) {
          const s = t + p * 0.035;
          amp.gain.setValueAtTime(0, s);
          amp.gain.linearRampToValueAtTime(peak, s + 0.012);
          amp.gain.linearRampToValueAtTime(0, s + 0.03);
        }
        t += 0.62;
      }
      next = t + b.between(restLo, restHi);
    }
  };
}

function day(b: Builder): Bed {
  addRumble(b, 520, 0.42, 0.17); // soft water lap
  addRumble(b, 900, 0.18, 0.11);
  addDrone(b, 0.05);
  let next = b.ctx.currentTime + b.between(3, 8);
  return b.finish((until) => {
    while (next < until) {
      // a very sparse bird-like phrase: a few short rising sine glides
      const count = 2 + Math.floor(b.rng() * 3);
      const base = b.between(2800, 4200);
      for (let i = 0; i < count; i++) {
        note(b, next + i * 0.13, base, base * b.between(1.15, 1.35), 0.07, 0.014, 0.012);
      }
      next += b.between(9, 22);
    }
  });
}

function dusk(b: Builder): Bed {
  addWind(b, 240, 0.45);
  addDrone(b, 0.05);
  const crickets = [addCricket(b, 4300, 0.014, 4, 11), addCricket(b, 4650, 0.011, 7, 16)];
  return b.finish((until) => crickets.forEach((c) => c(until)));
}

function night(b: Builder): Bed {
  addWind(b, 170, 0.5, 0.7);
  addDrone(b, 0.055);
  const crickets = [
    addCricket(b, 4250, 0.016, 1.5, 5),
    addCricket(b, 4600, 0.014, 2, 6),
    addCricket(b, 5000, 0.011, 2.5, 8),
  ];
  return b.finish((until) => crickets.forEach((c) => c(until)));
}

function fire(b: Builder): Bed {
  addRumble(b, 170, 0.55, 0.13); // warm low body
  const hiss = b.filter('bandpass', 1100, 0.6);
  b.noise().connect(hiss).connect(b.gain(0.05)).connect(b.bus);
  let next = b.ctx.currentTime + 0.1;
  return b.finish((until) => {
    while (next < until) {
      // a crackle: a tiny band-passed noise burst; now and then a few close together
      const src = b.ctx.createBufferSource();
      src.buffer = noiseBuffer(b.ctx);
      const band = b.filter('bandpass', b.between(1300, 4800), 1.4);
      const env = b.gain(0);
      const dur = b.between(0.012, 0.06);
      const peak = b.between(0.04, 0.2) * (b.rng() < 0.12 ? 1 : 0.6);
      env.gain.setValueAtTime(0, next);
      env.gain.linearRampToValueAtTime(peak, next + 0.002);
      env.gain.exponentialRampToValueAtTime(0.0005, next + dur);
      src.connect(band).connect(env).connect(b.bus);
      src.start(next, b.rng() * 3.5, dur + 0.02);
      next += b.rng() < 0.2 ? b.between(0.02, 0.07) : b.between(0.1, 0.55);
    }
  });
}

function forest(b: Builder): Bed {
  addWind(b, 520, 0.4, 0.5); // wind through leaves
  addWind(b, 190, 0.38, 0.6); // the deeper body of it
  let next = b.ctx.currentTime + b.between(8, 16);
  return b.finish((until) => {
    while (next < until) {
      // an owl-like low two-note hoot, not often
      const f = b.between(300, 340);
      note(b, next, f * 1.06, f, 0.42, 0.045, 0.1);
      note(b, next + 0.62, f, f * 0.88, 0.62, 0.04, 0.12);
      next += b.between(22, 45);
    }
  });
}

const BUILDERS: Record<BedName, (b: Builder) => Bed> = { day, dusk, night, fire, forest };

export function buildBed(ctx: BaseAudioContext, name: BedName, rng: Rng = Math.random): Bed {
  return BUILDERS[name](new Builder(ctx, rng));
}
