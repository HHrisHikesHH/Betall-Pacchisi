import { MOODS, type Mood } from '../scene/moods';
import type { Scene, Story } from './types';

/** Style and character notes that every image prompt is built from. */
export interface ArtNotes {
  style: string;
  composition: string;
  characters: Record<string, string>;
}

/** The named sounds a scene may ask for; also the list of audio still to be made. */
export type SoundPalette = Record<'ambience' | 'music' | 'accent', Record<string, string>>;

export interface SceneLibrary {
  art: ArtNotes;
  sound: SoundPalette;
  /** Scenes reused across tales, by id. */
  shared: Record<string, unknown>;
}

const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const OVERRIDABLE = ['mood', 'ambience', 'music', 'accent', 'alt'];

type Raw = Record<string, unknown>;
const isObject = (value: unknown): value is Raw => typeof value === 'object' && value !== null && !Array.isArray(value);

function slugOf(path: string): string | undefined {
  return /([^/\\]+)\.scenes\.json$/.exec(path)?.[1];
}

/**
 * Parses and validates one story's scene file. A scene starts at the paragraph that begins with its `at` words
 * (so editing other text does not move it) and holds until the next one.
 */
export function parseSceneFile(path: string, source: string, story: Story, library: SceneLibrary): Scene[] {
  const fail = (message: string): never => {
    throw new Error(`Scene file ${path}: ${message}`);
  };
  let data: unknown;
  try {
    data = JSON.parse(source);
  } catch (error) {
    return fail(`not valid JSON (${(error as Error).message})`);
  }
  if (!isObject(data) || !Array.isArray(data.scenes) || data.scenes.length === 0) {
    return fail('must be an object with a non-empty "scenes" list');
  }

  const seen = new Set<string>();
  let previous = -1;
  return data.scenes.map((entry: unknown, n) => {
    if (!isObject(entry)) return fail(`scene ${n + 1} must be an object`);
    const at = typeof entry.at === 'string' ? entry.at : '';
    if (!at) fail(`scene ${n + 1}: "at" (the opening words of its paragraph) is required`);
    const matches = story.paragraphs.flatMap((text, index) => (text.startsWith(at) ? [index] : []));
    if (matches.length !== 1) fail(`scene ${n + 1}: ${matches.length} paragraphs begin with "${at}" (need exactly one)`);
    const start = matches[0];
    if (n === 0 && start !== 0) fail('the first scene must start at the first paragraph');
    if (start <= previous) fail(`scene ${n + 1}: scenes must be listed in reading order`);
    previous = start;

    let raw: Raw = entry;
    let folder = story.slug;
    let id = entry.id;
    if ('use' in entry) {
      const base = library.shared[String(entry.use)];
      if (!isObject(base)) fail(`scene ${n + 1}: unknown shared scene "${String(entry.use)}"`);
      const extra = Object.keys(entry).filter((k) => k !== 'at' && k !== 'use' && !OVERRIDABLE.includes(k));
      if (extra.length) fail(`scene ${n + 1}: a shared scene cannot change ${extra.join(', ')}`);
      raw = { ...(base as Raw), ...entry };
      folder = 'shared';
      id = entry.use;
    }
    if (typeof id !== 'string' || !ID.test(id)) fail(`scene ${n + 1}: "id" must be lowercase letters, digits and hyphens`);
    const key = `${folder}/${id as string}`;
    if (folder !== 'shared') {
      if (seen.has(key)) fail(`scene id "${String(id)}" is used twice`);
      seen.add(key);
    }

    const text = (field: string): string => {
      const value = raw[field];
      if (typeof value !== 'string' || !value.trim()) return fail(`${key}: "${field}" is required`);
      return value.trim();
    };
    const mood = text('mood');
    if (!(MOODS as readonly string[]).includes(mood)) fail(`${key}: "mood" must be one of ${MOODS.join(', ')}`);
    const sound = (field: keyof SoundPalette): string => {
      const value = text(field);
      if (!Object.hasOwn(library.sound[field], value)) fail(`${key}: unknown ${field} "${value}" (add it to content/sound.json)`);
      return value;
    };
    const characters = raw.characters ?? [];
    if (!Array.isArray(characters)) fail(`${key}: "characters" must be a list`);
    const notes = (characters as unknown[]).map((name) => {
      if (!Object.hasOwn(library.art.characters, String(name))) fail(`${key}: unknown character "${String(name)}"`);
      return library.art.characters[String(name)];
    });
    const prompt = text('prompt');

    return {
      key,
      start,
      mood: mood as Mood,
      alt: text('alt'),
      prompt,
      fullPrompt: [library.art.style, library.art.composition, ...notes, `Scene: ${prompt}`].join('\n\n'),
      ambience: sound('ambience'),
      music: sound('music'),
      accent: sound('accent'),
    };
  });
}

/** Builds slug → scenes for every scene file. A scene file must belong to an existing story. */
export function buildScenes(files: Record<string, string>, stories: Story[], library: SceneLibrary): Record<string, Scene[]> {
  const result: Record<string, Scene[]> = {};
  for (const [path, source] of Object.entries(files)) {
    const slug = slugOf(path);
    const story = stories.find((s) => s.slug === slug);
    if (!story) throw new Error(`Scene file ${path}: no story with the slug "${slug}"`);
    result[story.slug] = parseSceneFile(path, source, story, library);
  }
  return result;
}

/** The scene a paragraph belongs to. */
export function sceneAt(scenes: Scene[], paragraph: number): Scene | undefined {
  let found: Scene | undefined;
  for (const scene of scenes) if (scene.start <= paragraph) found = scene;
  return found;
}
