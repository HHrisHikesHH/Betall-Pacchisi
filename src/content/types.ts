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

export interface SceneCue {
  /** 0-based paragraph index where this scene starts; it holds until the next cue. */
  index: number;
  art: string | null;
  mood: import('../scenes/artIds').Mood;
  alt: string;
  /** Optional sound override. "silence" holds the scene in deliberate silence whatever its mood (D-027). Absent: the mood's bed. */
  sound?: 'silence';
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
