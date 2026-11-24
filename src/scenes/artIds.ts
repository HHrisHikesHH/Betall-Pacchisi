// Ids of the launch illustrations. Kept free of React so the content loader can validate cue files cheaply.
export const ART_IDS = ['cover', 'lake', 'workshop', 'window', 'cremation', 'king', 'gate'] as const;
export type ArtId = (typeof ART_IDS)[number];

// Page-tint moods (D-026: the story leads; readers do not pick these).
export const MOODS = ['day', 'dusk', 'night', 'fire', 'forest', 'neutral'] as const;
export type Mood = (typeof MOODS)[number];
