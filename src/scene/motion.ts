/**
 * Optional life for a finished painting: content/images/<slug>/<scene-id>.motion.json.
 *
 * The painting itself is never changed. Motion is drawn over it in two ways:
 * - effects: light, glint and dust drawn in CSS (no image files);
 * - layers: transparent cut-outs made from the artwork, at content/images/<slug>/<scene-id>/<file>.
 *   A layer that moves a part already painted in the base needs a `plate` (the painting with that part removed)
 *   in the same folder, or the part would show twice.
 *
 * Every element moves only inside its own window of one shared cycle, so the scene breathes in turns rather
 * than everything moving at once. All positions are percentages of the whole painting.
 */

export type Box = [x: number, y: number, w: number, h: number];
export type Window = [start: number, end: number];

export type Effect =
  | { type: 'breeze'; box: Box; window: Window }
  | { type: 'glow'; x: number; y: number; r: number; window: Window }
  | { type: 'glint'; x: number; y: number; r: number; window: Window }
  | { type: 'motes'; box: Box; count: number; window: Window };

export const LAYER_MOTIONS = ['sway', 'breathe', 'bob', 'blink'] as const;
export type LayerMotion = (typeof LAYER_MOTIONS)[number];

export interface Layer {
  src: string;
  box: Box;
  motion: LayerMotion;
  /** Pivot inside the layer, in % of the layer (sway, breathe). */
  origin: [number, number];
  /** Degrees for sway, % for breathe and bob. */
  amount: number;
  window: Window;
}

export interface Motion {
  /** Seconds for one full cycle. */
  cycle: number;
  /** Width / height of the painting. */
  ratio: number;
  effects: Effect[];
  layers: Layer[];
  plate?: string;
}

type Raw = Record<string, unknown>;
const isObject = (value: unknown): value is Raw => typeof value === 'object' && value !== null && !Array.isArray(value);
const FILE = /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:webp|png)$/;

export function parseMotion(path: string, data: unknown): Motion {
  const fail = (message: string): never => {
    throw new Error(`Motion file ${path}: ${message}`);
  };
  const pct = (value: unknown, what: string, min = 0): number =>
    typeof value === 'number' && value >= min && value <= 100 ? value : fail(`${what} must be a number from ${min} to 100`);
  const box = (value: unknown, what: string): Box => {
    if (!Array.isArray(value) || value.length !== 4) return fail(`${what}.box must be [x, y, w, h]`);
    const [x, y, w, h] = value.map((v, i) => pct(v, `${what}.box[${i}]`));
    if (w <= 0 || h <= 0 || x + w > 100.001 || y + h > 100.001) fail(`${what}.box must lie inside the painting`);
    return [x, y, w, h];
  };
  const window = (value: unknown, what: string): Window => {
    if (!Array.isArray(value) || value.length !== 2) return fail(`${what}.window must be [start, end]`);
    const [a, b] = [pct(value[0], `${what}.window[0]`), pct(value[1], `${what}.window[1]`)];
    if (a >= b) fail(`${what}.window must start before it ends`);
    return [a, b];
  };

  if (!isObject(data)) return fail('must be an object');
  const cycle = data.cycle ?? 20;
  if (typeof cycle !== 'number' || cycle < 6 || cycle > 90) fail('"cycle" must be 6 to 90 seconds');
  const ratio = data.ratio ?? 1860 / 845;
  if (typeof ratio !== 'number' || ratio <= 0) fail('"ratio" must be a positive number');

  const effects = (Array.isArray(data.effects) ? data.effects : []).map((entry: unknown, n): Effect => {
    const what = `effects[${n}]`;
    if (!isObject(entry)) return fail(`${what} must be an object`);
    const w = window(entry.window, what);
    switch (entry.type) {
      case 'breeze':
        return { type: 'breeze', box: box(entry.box, what), window: w };
      case 'motes': {
        const count = entry.count ?? 6;
        if (typeof count !== 'number' || !Number.isInteger(count) || count < 1 || count > 16) fail(`${what}.count must be 1 to 16`);
        return { type: 'motes', box: box(entry.box, what), count: count as number, window: w };
      }
      case 'glow':
      case 'glint':
        return { type: entry.type, x: pct(entry.x, `${what}.x`), y: pct(entry.y, `${what}.y`), r: pct(entry.r, `${what}.r`, 0.1), window: w };
      default:
        return fail(`${what}.type must be breeze, glow, glint or motes`);
    }
  });

  const layers = (Array.isArray(data.layers) ? data.layers : []).map((entry: unknown, n): Layer => {
    const what = `layers[${n}]`;
    if (!isObject(entry)) return fail(`${what} must be an object`);
    if (typeof entry.src !== 'string' || !FILE.test(entry.src)) fail(`${what}.src must be a file name like "tail.webp"`);
    const motion = entry.motion as LayerMotion;
    if (!LAYER_MOTIONS.includes(motion)) fail(`${what}.motion must be one of ${LAYER_MOTIONS.join(', ')}`);
    const origin = entry.origin ?? [50, 100];
    if (!Array.isArray(origin) || origin.length !== 2) fail(`${what}.origin must be [x, y]`);
    const amount = entry.amount ?? (motion === 'sway' ? 3 : 1.5);
    if (typeof amount !== 'number' || amount <= 0 || amount > 20) fail(`${what}.amount must be above 0 and at most 20`);
    return {
      src: entry.src as string,
      box: box(entry.box, what),
      motion,
      origin: [pct((origin as unknown[])[0], `${what}.origin[0]`), pct((origin as unknown[])[1], `${what}.origin[1]`)],
      amount: amount as number,
      window: window(entry.window, what),
    };
  });

  const plate = data.plate;
  if (plate !== undefined && (typeof plate !== 'string' || !FILE.test(plate))) fail('"plate" must be a file name like "plate.webp"');
  return { cycle: cycle as number, ratio: ratio as number, effects, layers, plate: plate as string | undefined };
}

const motionFiles = import.meta.glob<unknown>('/content/images/*/*.motion.json', { import: 'default', eager: true });
const layerFiles = import.meta.glob<string>('/content/images/*/*/*.{webp,png}', {
  query: '?url',
  import: 'default',
  eager: true,
});

const motions: Record<string, Motion> = {};
for (const [path, data] of Object.entries(motionFiles)) {
  const key = /([^/]+\/[^/]+)\.motion\.json$/.exec(path)?.[1];
  if (key) motions[key] = parseMotion(path, data);
}
const layerUrls: Record<string, string> = {};
for (const [path, url] of Object.entries(layerFiles)) {
  const key = /([^/]+\/[^/]+\/[^/]+)$/.exec(path)?.[1];
  if (key) layerUrls[key] = url;
}

/** What to draw for a scene: its motion, with layer and plate files resolved. Layers are dropped together
 * when any of their files is missing, so a half-delivered set never shows. */
export interface ResolvedMotion extends Omit<Motion, 'layers' | 'plate'> {
  layers: (Layer & { url: string })[];
  plate?: string;
}

export function resolveMotion(
  key: string,
  motion: Motion | undefined = motions[key],
  urls: Record<string, string> = layerUrls,
): ResolvedMotion | undefined {
  if (!motion) return undefined;
  const url = (file: string) => urls[`${key}/${file}`];
  const complete = motion.layers.every((layer) => url(layer.src)) && (!motion.plate || url(motion.plate));
  return {
    ...motion,
    layers: complete ? motion.layers.map((layer) => ({ ...layer, url: url(layer.src) })) : [],
    plate: complete && motion.plate ? url(motion.plate) : undefined,
  };
}
