import { createContext, useContext } from 'react';
import type { Mood } from './moods';

/** What the reader is showing right now. The sound control reads this; nothing here plays audio. */
export interface SceneState {
  mood: Mood;
  /** "silence": this scene is deliberately silent whatever its mood. */
  sound?: 'silence';
}

export const NEUTRAL_SCENE: SceneState = { mood: 'neutral' };

export const SceneContext = createContext<SceneState>(NEUTRAL_SCENE);

/** The mood of the scene being read; neutral outside a reader. */
export function useScene(): SceneState {
  return useContext(SceneContext);
}
