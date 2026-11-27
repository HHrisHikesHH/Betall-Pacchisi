import artNotes from '../../content/art.json';
import collectionHi from '../../content/collection.hi.json';
import sharedScenesHi from '../../content/scenes.shared.hi.json';
import soundPalette from '../../content/sound.json';
import { buildScenes } from './scenes';
import { buildStories } from './stories';
import type { Collection, Scene, Story } from './types';

// Story files live in /content (outside the app code, D-015). Adding a .md file there adds a story.
const storyFilesHi = import.meta.glob<string>('/content/stories/hi/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// `<slug>.scenes.json`: where each picture, mood and sound begins in a story.
const sceneFilesHi = import.meta.glob<string>('/content/stories/hi/*.scenes.json', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const collection: Collection = collectionHi;
export const stories: Story[] = buildStories(storyFilesHi);
export const scenes: Record<string, Scene[]> = buildScenes(sceneFilesHi, stories, {
  art: artNotes,
  sound: soundPalette,
  shared: sharedScenesHi,
});

export { sceneAt } from './scenes';
export { findNeighbours, findStory } from './stories';
export type { Collection, Neighbours, Scene, Story, StoryStatus } from './types';
