// Which sound bed a scene gets. Pure and free of Web Audio, so it is cheap to test and costs nothing to load.
import type { Mood } from '../scene/moods';

export const BED_NAMES = ['day', 'dusk', 'night', 'fire', 'forest'] as const;
export type BedName = (typeof BED_NAMES)[number];

/** Mood → bed. `neutral` is deliberately absent: it is silence (D-027). */
const MOOD_BED: Partial<Record<Mood, BedName>> = {
  day: 'day',
  dusk: 'dusk',
  night: 'night',
  fire: 'fire',
  forest: 'forest',
};

/** The bed for a scene, or null for silence. A cue's `sound: "silence"` beats its mood (D-026, D-027). */
export function bedFor(scene: { mood: Mood; sound?: 'silence' }): BedName | null {
  if (scene.sound === 'silence') return null;
  return MOOD_BED[scene.mood] ?? null;
}
