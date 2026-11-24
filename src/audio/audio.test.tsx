import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { scenes } from '../content';
import { parseSceneFile } from '../content/scenes';
import { MOODS } from '../scenes/artIds';
import { SceneContext } from '../scenes/SceneContext';
import { BED_NAMES, bedFor } from './beds';
import { createEngine, MASTER_CAP } from './engine';
import { loadPrefs, savePrefs } from './prefs';
import { SoundControl } from './SoundControl';

// ---- a minimal Web Audio double -------------------------------------------------------------------------------
class FakeParam {
  value = 0;
  cancelScheduledValues = vi.fn();
  setValueAtTime = vi.fn();
  linearRampToValueAtTime = vi.fn();
  exponentialRampToValueAtTime = vi.fn();
}
class FakeNode {
  gain = new FakeParam();
  frequency = new FakeParam();
  detune = new FakeParam();
  Q = new FakeParam();
  threshold = new FakeParam();
  knee = new FakeParam();
  ratio = new FakeParam();
  attack = new FakeParam();
  release = new FakeParam();
  type = '';
  buffer: unknown = null;
  loop = false;
  stopped = 0;
  disconnected = 0;
  connect(n: unknown) {
    return n;
  }
  disconnect() {
    this.disconnected++;
  }
  start() {}
  stop() {
    this.stopped++;
  }
}
const contexts: FakeContext[] = [];
class FakeContext {
  state = 'suspended';
  currentTime = 0;
  sampleRate = 8000;
  destination = new FakeNode();
  nodes: FakeNode[] = [];
  closed = false;
  constructor() {
    contexts.push(this);
  }
  private node() {
    const n = new FakeNode();
    this.nodes.push(n);
    return n;
  }
  createGain = () => this.node();
  createOscillator = () => this.node();
  createBiquadFilter = () => this.node();
  createBufferSource = () => this.node();
  createDynamicsCompressor = () => this.node();
  createBuffer(_c: number, length: number) {
    return { getChannelData: () => new Float32Array(length) };
  }
  resume = vi.fn(async () => {
    this.state = 'running';
  });
  suspend = vi.fn(async () => {
    this.state = 'suspended';
  });
  close = vi.fn(async () => {
    this.closed = true;
  });
}
const asAudio = () => new FakeContext() as unknown as AudioContext;

beforeEach(() => {
  contexts.length = 0;
  window.localStorage.clear();
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ---- mood to bed ----------------------------------------------------------------------------------------------
describe('bedFor', () => {
  it('maps each mood to its own bed and neutral to silence', () => {
    expect(bedFor({ mood: 'day' })).toBe('day');
    expect(bedFor({ mood: 'dusk' })).toBe('dusk');
    expect(bedFor({ mood: 'night' })).toBe('night');
    expect(bedFor({ mood: 'fire' })).toBe('fire');
    expect(bedFor({ mood: 'forest' })).toBe('forest');
    expect(bedFor({ mood: 'neutral' })).toBeNull();
    expect(MOODS.filter((m) => bedFor({ mood: m }) === null)).toEqual(['neutral']);
    expect(new Set(BED_NAMES).size).toBe(5);
  });
  it('lets "silence" beat any mood', () => {
    for (const mood of MOODS) expect(bedFor({ mood, sound: 'silence' })).toBeNull();
  });
});

describe('launch cues: deliberate silence (D-027)', () => {
  const cues = scenes['kamal-ke-teen-ishare'];
  /** The scene holding at a paragraph index, as the reader computes it. */
  const holding = (i: number) => [...cues].reverse().find((c) => c.index <= i)!;
  const bedAt = (i: number) => bedFor(holding(i));

  it('has sound "silence" on cues 0, 34 and 58', () => {
    for (const i of [0, 34, 58]) expect(cues.find((c) => c.index === i)?.sound).toBe('silence');
  });
  it('plays no bed at the cover, the marking night (34 to 39) or the verdict (58 to 65)', () => {
    for (const i of [0, 34, 35, 36, 37, 38, 39, 58, 59, 60, 61, 62, 63, 64, 65]) {
      expect(bedAt(i), `paragraph ${i}`).toBeNull();
    }
  });
  it('plays the beds of the story between', () => {
    const expected: [number, string][] = [
      [1, 'day'], [7, 'day'], [8, 'day'], [16, 'day'], [17, 'dusk'], [33, 'dusk'],
      [40, 'fire'], [45, 'fire'], [46, 'day'], [49, 'day'], [50, 'dusk'], [51, 'dusk'], [52, 'forest'], [57, 'forest'],
    ];
    for (const [i, bed] of expected) expect(bedAt(i), `paragraph ${i}`).toBe(bed);
  });
});

describe('scene cue "sound" field', () => {
  const base = { art: null, mood: 'night', alt: '' };
  it('accepts "silence" and keeps it', () => {
    const [cue] = parseSceneFile('a.scenes.json', JSON.stringify({ 0: { ...base, sound: 'silence' } }), 2, []);
    expect(cue.sound).toBe('silence');
  });
  it('is absent when not given', () => {
    const [cue] = parseSceneFile('a.scenes.json', JSON.stringify({ 0: base }), 2, []);
    expect('sound' in cue).toBe(false);
  });
  it.each(['loud', '', null, true])('rejects %j and names the file', (bad) => {
    const src = JSON.stringify({ 0: { ...base, sound: bad } });
    expect(() => parseSceneFile('a.scenes.json', src, 2, [])).toThrow(/a\.scenes\.json.*"sound" must be "silence"/);
  });
});

// ---- preferences ------------------------------------------------------------------------------------------------
describe('prefs', () => {
  it('defaults to off, volume 2', () => {
    expect(loadPrefs()).toEqual({ on: false, volume: 2 });
  });
  it('round-trips and clamps', () => {
    savePrefs({ on: true, volume: 3 });
    expect(loadPrefs()).toEqual({ on: true, volume: 3 });
    window.localStorage.setItem('betal-pachisi:sound', JSON.stringify({ on: 'yes', volume: 99 }));
    expect(loadPrefs()).toEqual({ on: false, volume: 3 });
  });
  it('survives unreadable and blocked storage', () => {
    window.localStorage.setItem('betal-pachisi:sound', '{oops');
    expect(loadPrefs()).toEqual({ on: false, volume: 2 });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('full');
    });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(() => savePrefs({ on: true, volume: 1 })).not.toThrow();
    expect(loadPrefs()).toEqual({ on: false, volume: 2 });
    vi.restoreAllMocks();
  });
});

// ---- engine -----------------------------------------------------------------------------------------------------
describe('engine', () => {
  it('creates no AudioContext until start() (no audio before a user gesture)', () => {
    const create = vi.fn(asAudio);
    const engine = createEngine({ createContext: create });
    engine.setBed('day');
    engine.setVolume(1);
    expect(create).not.toHaveBeenCalled();
    expect(engine.running).toBe(false);
  });

  it('starts the requested bed, caps master gain, crossfades, and fades to silence', async () => {
    vi.useFakeTimers();
    const engine = createEngine({ createContext: asAudio, random: () => 0.5 });
    engine.setBed('day');
    await engine.start();
    const ctx = contexts[0];
    expect(ctx.resume).toHaveBeenCalled();
    expect(engine.running).toBe(true);
    const master = ctx.nodes[0];
    const limiter = ctx.nodes[1];
    expect(limiter.ratio.value).toBeGreaterThan(4);
    const last = master.gain.linearRampToValueAtTime.mock.calls.at(-1)!;
    expect(last[0]).toBeLessThanOrEqual(MASTER_CAP);
    engine.setVolume(5);
    expect(master.gain.linearRampToValueAtTime.mock.calls.at(-1)![0]).toBeLessThanOrEqual(MASTER_CAP);

    const before = ctx.nodes.length;
    engine.setBed('fire');
    expect(ctx.nodes.length).toBeGreaterThan(before); // the new bed is built
    engine.setBed(null);
    expect(engine.bed).toBeNull();
    const built = ctx.nodes.length;
    engine.setBed(null);
    expect(ctx.nodes.length).toBe(built);
    await vi.advanceTimersByTimeAsync(4000);
    engine.dispose();
  });

  it('builds every bed without throwing', async () => {
    for (const name of BED_NAMES) {
      const engine = createEngine({ createContext: asAudio });
      engine.setBed(name);
      await engine.start();
      expect(engine.bed).toBe(name);
      engine.dispose();
    }
  });

  it('suspends when the tab is hidden and resumes when visible', async () => {
    const engine = createEngine({ createContext: asAudio });
    await engine.start();
    const ctx = contexts[0];
    let hidden = true;
    vi.spyOn(document, 'hidden', 'get').mockImplementation(() => hidden);
    document.dispatchEvent(new Event('visibilitychange'));
    expect(ctx.suspend).toHaveBeenCalledTimes(1);
    hidden = false;
    ctx.resume.mockClear();
    document.dispatchEvent(new Event('visibilitychange'));
    expect(ctx.resume).toHaveBeenCalledTimes(1);
    engine.dispose();
    vi.restoreAllMocks();
  });

  it('stays suspended on becoming visible if the reader turned sound off', async () => {
    vi.useFakeTimers();
    const engine = createEngine({ createContext: asAudio });
    await engine.start();
    const ctx = contexts[0];
    const stopping = engine.stop();
    await vi.advanceTimersByTimeAsync(500);
    await stopping;
    expect(ctx.suspend).toHaveBeenCalled();
    ctx.resume.mockClear();
    document.dispatchEvent(new Event('visibilitychange'));
    expect(ctx.resume).not.toHaveBeenCalled();
    engine.dispose();
  });

  it('dispose closes the context, stops sources and ignores later calls', async () => {
    const engine = createEngine({ createContext: asAudio });
    engine.setBed('night');
    await engine.start();
    const ctx = contexts[0];
    engine.dispose();
    expect(ctx.close).toHaveBeenCalled();
    expect(ctx.nodes.some((n) => n.stopped > 0)).toBe(true);
    await engine.start();
    expect(contexts.length).toBe(1);
  });
});

// ---- the control ------------------------------------------------------------------------------------------------
function withScene(mood: 'day' | 'neutral' | 'fire', sound?: 'silence') {
  return (
    <SceneContext.Provider value={{ cueIndex: 1, art: null, mood, sound }}>
      <SoundControl />
    </SceneContext.Provider>
  );
}

describe('SoundControl', () => {
  it('is off by default, makes no AudioContext, and has an accessible name and aria-pressed', () => {
    const ctor = vi.fn(function () {
      return new FakeContext();
    });
    vi.stubGlobal('AudioContext', ctor);
    render(withScene('day'));
    const button = screen.getByRole('button', { name: 'ध्वनि चालू / बंद' });
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button).toHaveAttribute('data-sound-bed', 'off');
    expect(screen.queryByRole('slider')).toBeNull();
    expect(ctor).not.toHaveBeenCalled();
  });

  it('starts only on a tap, follows the scene, remembers choices, and tears down on unmount', async () => {
    vi.stubGlobal('AudioContext', function () {
      return new FakeContext();
    });
    const { rerender, unmount } = render(withScene('day'));
    const button = screen.getByRole('button', { name: 'ध्वनि चालू / बंद' });
    fireEvent.click(button);
    await waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
    expect(contexts.length).toBe(1);
    expect(contexts[0].state).toBe('running');
    expect(button).toHaveAttribute('data-sound-bed', 'day');
    expect(loadPrefs().on).toBe(true);

    rerender(withScene('fire'));
    expect(button).toHaveAttribute('data-sound-bed', 'fire');
    rerender(withScene('fire', 'silence'));
    expect(button).toHaveAttribute('data-sound-bed', 'silence');
    rerender(withScene('neutral'));
    expect(button).toHaveAttribute('data-sound-bed', 'silence');

    fireEvent.change(screen.getByRole('slider'), { target: { value: '3' } });
    expect(loadPrefs().volume).toBe(3);

    unmount();
    expect(contexts[0].close).toHaveBeenCalled();
  });

  it('does not start sound at load even if "on" was saved', () => {
    savePrefs({ on: true, volume: 3 });
    const ctor = vi.fn();
    vi.stubGlobal('AudioContext', ctor);
    render(withScene('day'));
    expect(screen.getByRole('button', { name: 'ध्वनि चालू / बंद' })).toHaveAttribute('aria-pressed', 'false');
    expect(ctor).not.toHaveBeenCalled();
  });

  it('stays quietly off when Web Audio is unavailable', async () => {
    vi.stubGlobal('AudioContext', undefined);
    render(withScene('day'));
    const button = screen.getByRole('button', { name: 'ध्वनि चालू / बंद' });
    await act(async () => {
      fireEvent.click(button);
    });
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });
});

