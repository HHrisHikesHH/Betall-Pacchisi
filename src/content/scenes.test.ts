import { describe, expect, it } from 'vitest';
import { scenes, stories } from '.';
import { sceneAt, parseSceneFile, type SceneLibrary } from './scenes';
import { buildStories } from './stories';

const [story] = buildStories({
  'a.md': '---\norder: 1\nslug: a\ntitle: क\nsummary: सार\nstatus: draft\n---\nपहला अनुच्छेद\n\nदूसरा अनुच्छेद\n\nतीसरा अनुच्छेद\n',
});
const walk = { id: 'x', mood: 'night', prompt: 'A walk', alt: 'रात', ambience: 'night', music: 'none', accent: 'none' };
const library: SceneLibrary = {
  art: { style: 'STYLE', composition: 'COMPOSITION', characters: { king: 'KING' } },
  sound: { ambience: { night: 'n' }, music: { none: '-', damru: 'd' }, accent: { none: '-' } },
  shared: { walk: { ...walk, id: undefined, characters: ['king'] } },
};
const parse = (list: object[]) => parseSceneFile('a.scenes.json', JSON.stringify({ scenes: list }), story, library);

describe('parseSceneFile', () => {
  it('finds each scene by the opening words of its paragraph and builds the full prompt', () => {
    const [first, second] = parse([
      { at: 'पहला', use: 'walk', music: 'damru' },
      { ...walk, at: 'तीसरा' },
    ]);
    expect([first.key, first.start, first.music]).toEqual(['shared/walk', 0, 'damru']);
    expect(first.fullPrompt).toBe('STYLE\n\nCOMPOSITION\n\nKING\n\nScene: A walk');
    expect([second.key, second.start]).toEqual(['a/x', 2]);
    expect(sceneAt([first, second], 1)).toBe(first);
    expect(sceneAt([first, second], 2)).toBe(second);
  });

  it.each([
    [[{ ...walk, at: 'चौथा' }], /0 paragraphs begin/],
    [[{ ...walk, at: 'दूसरा' }], /first scene must start/],
    [[{ ...walk, at: 'पहला' }, { ...walk, id: 'y', at: 'पहला' }], /reading order/],
    [[{ ...walk, at: 'पहला' }, { ...walk, at: 'दूसरा' }], /used twice/],
    [[{ at: 'पहला', use: 'nowhere' }], /unknown shared scene/],
    [[{ at: 'पहला', use: 'walk', prompt: 'new' }], /cannot change prompt/],
    [[{ ...walk, at: 'पहला', mood: 'blue' }], /"mood" must be/],
    [[{ ...walk, at: 'पहला', music: 'drums' }], /unknown music/],
    [[{ ...walk, at: 'पहला', characters: ['queen'] }], /unknown character/],
    [[{ ...walk, at: 'पहला', alt: '' }], /"alt" is required/],
  ])('rejects a broken file', (list, message) => {
    expect(() => parse(list)).toThrow(message);
  });
});

describe('the real scene files', () => {
  /** A reader should meet a new picture at least this often (about 2.5 minutes; the user's rule of 2026-11-28). */
  const MOST_WORDS = 400;

  it.each(stories.map((s) => [s.slug, s] as const))('%s has a new picture at least every 400 words', (slug, tale) => {
    const list = scenes[slug];
    expect(list, `${slug}.scenes.json is missing`).toBeDefined();
    list.forEach((scene, i) => {
      const words = tale.paragraphs.slice(scene.start, list[i + 1]?.start).join(' ').split(/\s+/).length;
      expect(words, `${scene.key} holds ${words} words`).toBeLessThanOrEqual(MOST_WORDS);
    });
  });
});
