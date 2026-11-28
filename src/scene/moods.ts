// Page-tint moods (D-026: the story leads; readers do not pick these).
export const MOODS = ['day', 'dusk', 'night', 'fire', 'forest', 'neutral'] as const;
export type Mood = (typeof MOODS)[number];
