import { describe, expect, it } from 'vitest';
import { parseMotion, resolveMotion } from './motion';

const ok = {
  cycle: 20,
  effects: [
    { type: 'glint', x: 45.9, y: 46.7, r: 1.9, window: [48, 64] },
    { type: 'breeze', box: [0, 7, 59, 34], window: [8, 40] },
  ],
  layers: [{ src: 'tail.webp', box: [1, 55, 6, 30], motion: 'sway', window: [10, 30] }],
};

describe('parseMotion', () => {
  it('reads a valid file and fills defaults', () => {
    const motion = parseMotion('m.json', ok);
    expect(motion.cycle).toBe(20);
    expect(motion.ratio).toBeCloseTo(1860 / 845);
    expect(motion.layers[0]).toMatchObject({ origin: [50, 100], amount: 3 });
  });

  it.each([
    [{ ...ok, cycle: 2 }, 'cycle'],
    [{ effects: [{ type: 'glint', x: 120, y: 1, r: 1, window: [0, 10] }] }, 'effects[0].x'],
    [{ effects: [{ type: 'glow', x: 1, y: 1, r: 1, window: [50, 40] }] }, 'start before it ends'],
    [{ effects: [{ type: 'breeze', box: [60, 0, 50, 10], window: [0, 10] }] }, 'inside the painting'],
    [{ effects: [{ type: 'spin', window: [0, 10] }] }, 'type must be'],
    [{ layers: [{ src: '../x.webp', box: [0, 0, 1, 1], motion: 'sway', window: [0, 1] }] }, 'src'],
    [{ layers: [{ src: 'a.webp', box: [0, 0, 1, 1], motion: 'fly', window: [0, 1] }] }, 'motion must be'],
    [{ plate: 'plate.jpg' }, 'plate'],
  ])('rejects %j naming the file and the field', (data, field) => {
    expect(() => parseMotion('content/images/x/y.motion.json', data)).toThrow(/content\/images\/x\/y\.motion\.json.*/);
    expect(() => parseMotion('f', data)).toThrow(field);
  });
});

describe('resolveMotion', () => {
  const motion = parseMotion('m.json', { ...ok, plate: 'plate.webp' });

  it('resolves layers and plate when every file exists', () => {
    const resolved = resolveMotion('s/scene', motion, { 's/scene/tail.webp': '/t.webp', 's/scene/plate.webp': '/p.webp' });
    expect(resolved?.layers[0].url).toBe('/t.webp');
    expect(resolved?.plate).toBe('/p.webp');
  });

  it('drops all layers and the plate when any file is missing, keeping the effects', () => {
    const resolved = resolveMotion('s/scene', motion, { 's/scene/tail.webp': '/t.webp' });
    expect(resolved?.layers).toEqual([]);
    expect(resolved?.plate).toBeUndefined();
    expect(resolved?.effects).toHaveLength(2);
  });

  it('is undefined for a picture without motion', () => {
    expect(resolveMotion('none/here', undefined, {})).toBeUndefined();
  });

  it('loads the committed motion files (they parse at import)', () => {
    const resolved = resolveMotion('katha-ka-aarambh/daily-fruit');
    expect(resolved?.effects.length).toBeGreaterThan(0);
    // all drawn effects stay left of the text area (x below about 59%)
    for (const effect of resolved!.effects) {
      const right = 'box' in effect ? effect.box[0] + effect.box[2] : effect.x + (effect.type === 'glint' ? effect.r : 0);
      expect(right).toBeLessThanOrEqual(59.5);
    }
  });
});
