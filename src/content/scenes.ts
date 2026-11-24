import { MOODS, type Mood } from '../scenes/artIds';
import type { SceneCue, Story } from './types';

/** `<slug>.scenes.json` → slug. Returns undefined if the path is not a scene file. */
function slugOf(path: string): string | undefined {
  return /([^/\\]+)\.scenes\.json$/.exec(path)?.[1];
}

/** Parses and validates one cue file against its story. Cues are keyed by 0-based paragraph index. */
export function parseSceneFile(
  path: string,
  source: string,
  paragraphCount: number,
  artIds: readonly string[],
): SceneCue[] {
  const fail = (message: string): never => {
    throw new Error(`Scene file ${path}: ${message}`);
  };
  let data: unknown;
  try {
    data = JSON.parse(source);
  } catch (error) {
    return fail(`not valid JSON (${(error as Error).message})`);
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    return fail('must be an object keyed by paragraph index');
  }
  const cues: SceneCue[] = [];
  for (const [key, raw] of Object.entries(data)) {
    if (!/^\d+$/.test(key)) fail(`key "${key}" is not a paragraph index (a whole number from 0)`);
    const index = Number(key);
    if (index >= paragraphCount) {
      fail(
        `index ${index} is beyond the story (it has ${paragraphCount} paragraphs, indices 0 to ${paragraphCount - 1})`,
      );
    }
    if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) fail(`cue ${index} must be an object`);
    const cue = raw as Record<string, unknown>;
    if (!('art' in cue) || (cue.art !== null && typeof cue.art !== 'string')) {
      fail(`cue ${index}: "art" must be an art id or null`);
    }
    if (cue.art !== null && !artIds.includes(cue.art as string)) {
      fail(`cue ${index}: unknown art id "${String(cue.art)}" (known: ${artIds.join(', ')})`);
    }
    if (typeof cue.mood !== 'string' || !(MOODS as readonly string[]).includes(cue.mood)) {
      fail(`cue ${index}: "mood" must be one of ${MOODS.join(', ')}`);
    }
    const alt = typeof cue.alt === 'string' ? cue.alt.trim() : '';
    if (cue.art !== null && !alt) fail(`cue ${index}: "alt" text is required when "art" is set`);
    if ('sound' in cue && cue.sound !== 'silence') {
      fail(`cue ${index}: "sound" must be "silence" when present (omit it to use the mood's sound)`);
    }
    cues.push({
      index,
      art: cue.art as string | null,
      mood: cue.mood as Mood,
      alt,
      ...(cue.sound === 'silence' ? { sound: 'silence' as const } : {}),
    });
  }
  return cues.sort((a, b) => a.index - b.index);
}

/** Builds slug → cues for every scene file. A scene file must belong to an existing story. */
export function buildScenes(
  files: Record<string, string>,
  stories: Story[],
  artIds: readonly string[],
): Record<string, SceneCue[]> {
  const result: Record<string, SceneCue[]> = {};
  for (const [path, source] of Object.entries(files)) {
    const slug = slugOf(path);
    const story = stories.find((s) => s.slug === slug);
    if (!story) throw new Error(`Scene file ${path}: no story with the slug "${slug}"`);
    result[story.slug] = parseSceneFile(path, source, story.paragraphs.length, artIds);
  }
  return result;
}
