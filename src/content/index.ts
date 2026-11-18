import collectionHi from '../../content/collection.hi.json';
import { buildStories } from './stories';
import type { Collection, Story } from './types';

// Story files live in /content (outside the app code, D-015). Adding a .md file there adds a story.
const storyFilesHi = import.meta.glob<string>('/content/stories/hi/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const collection: Collection = collectionHi;
export const stories: Story[] = buildStories(storyFilesHi);

export { findNeighbours, findStory } from './stories';
export type { Collection, Neighbours, Story, StoryStatus } from './types';
