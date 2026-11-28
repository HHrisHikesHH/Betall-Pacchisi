export const STORY_STATUSES = ['placeholder', 'draft', 'approved'] as const;
export type StoryStatus = (typeof STORY_STATUSES)[number];

export const STORY_KINDS = ['tale', 'frame'] as const;
export type StoryKind = (typeof STORY_KINDS)[number];

export interface Story {
  /** Sort key only; gaps are fine. */
  order: number;
  /** `frame` pages (the Vikram–Betal frame) carry no tale number. Default `tale`. */
  kind: StoryKind;
  /** Tale number shown to readers: 1, 2, 3… counted over tales in order. Undefined for frame pages. */
  number?: number;
  slug: string;
  title: string;
  summary: string;
  status: StoryStatus;
  paragraphs: string[];
}

export interface Scene {
  /** "<story slug or shared>/<scene id>": names the picture file. */
  key: string;
  /** 0-based paragraph index where this scene starts; it holds until the next scene. */
  start: number;
  mood: import('../scene/moods').Mood;
  /** Short Hindi description for readers who cannot see the picture. */
  alt: string;
  /** English image prompt for this scene alone. */
  prompt: string;
  /** Style, composition, characters and the scene: what is pasted into an image tool. */
  fullPrompt: string;
  ambience: string;
  music: string;
  accent: string;
}

export interface Collection {
  title: string;
  subtitle: string;
  intro: string;
}

export interface Neighbours {
  previous?: Story;
  next?: Story;
}
