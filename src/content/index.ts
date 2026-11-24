import collectionHi from '../../content/collection.hi.json';
import { ART_IDS } from '../scenes/artIds';
import { buildScenes } from './scenes';
import { buildStories } from './stories';
import type { Collection, SceneCue, Story } from './types';

// Story files live in /content (outside the app code, D-015). Adding a .md file there adds a story.
const storyFilesHi = import.meta.glob<string>('/content/stories/hi/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Optional scene cues (`<slug>.scenes.json`): which illustration and mood a story paragraph begins.
const sceneFilesHi = import.meta.glob<string>('/content/stories/hi/*.scenes.json', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const collection: Collection = collectionHi;
export const stories: Story[] = buildStories(storyFilesHi);
export const scenes: Record<string, SceneCue[]> = buildScenes(sceneFilesHi, stories, ART_IDS);

export { findNeighbours, findStory } from './stories';
export type { Collection, Neighbours, SceneCue, Story, StoryStatus } from './types';
