import { createContext, useContext } from 'react';
import type { Mood } from './artIds';

/** What the reader is showing right now. The sound control reads this; nothing here plays audio. */
export interface SceneState {
  /** Paragraph index of the active cue, or null before the first cue. */
  cueIndex: number | null;
  art: string | null;
  mood: Mood;
  /** "silence": this scene is deliberately silent whatever its mood. */
  sound?: 'silence';
}

export const NEUTRAL_SCENE: SceneState = {
  cueIndex: null,
  art: null,
  mood: 'neutral',
};

export const SceneContext = createContext<SceneState>(NEUTRAL_SCENE);

/** Current scene (art id and mood) of the story being read; neutral outside a reader. */
export function useScene(): SceneState {
  return useContext(SceneContext);
}
