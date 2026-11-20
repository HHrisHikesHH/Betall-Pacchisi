export const STORY_STATUSES = ['placeholder', 'draft', 'approved'] as const;
export type StoryStatus = (typeof STORY_STATUSES)[number];

export interface Story {
  order: number;
  slug: string;
  title: string;
  summary: string;
  status: StoryStatus;
  paragraphs: string[];
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
