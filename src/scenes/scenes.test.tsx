import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { scenes, stories } from '../content';
import { buildScenes, parseSceneFile } from '../content/scenes';
import type { Story } from '../content/types';
import StoryPage from '../pages/StoryPage';
import { ART_IDS } from './artIds';
import { SceneContext, useScene } from './SceneContext';

const IDS = ['lake', 'king'];
const cue = (over: object = {}) => ({
  art: 'lake',
  mood: 'day',
  alt: 'झील',
  ...over,
});
const file = (obj: object) => JSON.stringify(obj);

describe('parseSceneFile', () => {
  it('parses cues sorted by index', () => {
    const cues = parseSceneFile(
      'x.scenes.json',
      file({
        3: cue({ art: 'king' }),
        0: cue({ art: null, mood: 'neutral', alt: '' }),
      }),
      5,
      IDS,
    );
    expect(cues.map((c) => [c.index, c.art])).toEqual([
      [0, null],
      [3, 'king'],
    ]);
  });

  it.each([
    ['not json', '{', /not valid JSON/],
    ['array', '[]', /must be an object/],
    ['bad key', file({ first: cue() }), /key "first" is not a paragraph index/],
    ['negative key', file({ '-1': cue() }), /not a paragraph index/],
    ['index beyond the story', file({ 5: cue() }), /index 5 is beyond the story \(it has 5 paragraphs/],
    ['unknown art', file({ 1: cue({ art: 'dragon' }) }), /unknown art id "dragon"/],
    ['missing art', file({ 1: { mood: 'day', alt: 'x' } }), /"art" must be an art id or null/],
    ['bad mood', file({ 1: cue({ mood: 'rainbow' }) }), /"mood" must be one of/],
    ['missing alt', file({ 1: cue({ alt: ' ' }) }), /"alt" text is required/],
  ])('rejects %s and names the file', (_name, source, message) => {
    expect(() => parseSceneFile('content/a.scenes.json', source, 5, IDS)).toThrow(message);
    expect(() => parseSceneFile('content/a.scenes.json', source, 5, IDS)).toThrow(/content\/a\.scenes\.json/);
  });
});

describe('buildScenes', () => {
  const story = { slug: 'one', paragraphs: ['a', 'b'] } as Story;
  it('keys cues by story slug', () => {
    expect(Object.keys(buildScenes({ 'c/one.scenes.json': file({ 0: cue() }) }, [story], IDS))).toEqual(['one']);
  });
  it('rejects a scene file with no matching story', () => {
    expect(() => buildScenes({ 'c/two.scenes.json': file({ 0: cue() }) }, [story], IDS)).toThrow(
      /c\/two\.scenes\.json.*"two"/,
    );
  });
  it('is not mistaken for a story: the real stories load without any .scenes.json entry', () => {
    expect(stories.every((s) => !s.slug.includes('scenes'))).toBe(true);
  });
});

describe('launch cues for kamal-ke-teen-ishare', () => {
  const cues = scenes['kamal-ke-teen-ishare'];
  const story = stories.find((s) => s.slug === 'kamal-ke-teen-ishare')!;

  it('loads, with only known art ids and in-range indices', () => {
    expect(cues.length).toBeGreaterThan(0);
    for (const c of cues) {
      expect(c.index).toBeLessThan(story.paragraphs.length);
      if (c.art) expect(ART_IDS as readonly string[]).toContain(c.art);
    }
  });

  it('has no art cue for the branding night, section 11 (paragraphs 36 to 39)', () => {
    expect(cues.filter((c) => c.index >= 36 && c.index <= 39)).toEqual([]);
    // the scene holding through those paragraphs is dark and has no art
    const holding = [...cues].reverse().find((c) => c.index < 36)!;
    expect(holding.art).toBeNull();
    expect(holding.mood).toBe('night');
  });

  it('adds no new art in the verdict (58 to 65) and ends neutral', () => {
    const verdict = cues.filter((c) => c.index >= 58);
    expect(verdict.every((c) => c.art === null)).toBe(true);
    expect(cues[cues.length - 1]).toMatchObject({ art: null, mood: 'neutral' });
  });
});

function Probe() {
  const scene = useScene();
  return <output data-testid="probe">{`${scene.art}|${scene.mood}`}</output>;
}

const draft = {
  order: 1,
  slug: 's',
  title: 'क',
  summary: 'ख',
  status: 'draft',
  paragraphs: ['एक', 'दो', 'तीन'],
} as Story;
const sceneCues = [
  { index: 0, art: 'lake', mood: 'day', alt: 'झील' },
  { index: 2, art: null, mood: 'night', alt: '' },
] as const;

describe('useScene', () => {
  it('is neutral outside a reader and reads the provided scene', () => {
    const { unmount } = render(<Probe />);
    expect(screen.getByTestId('probe')).toHaveTextContent('null|neutral');
    unmount();
    render(
      <SceneContext.Provider value={{ cueIndex: 3, art: 'king', mood: 'fire' }}>
        <Probe />
      </SceneContext.Provider>,
    );
    expect(screen.getByTestId('probe')).toHaveTextContent('king|fire');
  });
});

describe('StoryPage with scenes', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    delete document.documentElement.dataset.mood;
  });

  it('falls back to inline figures when IntersectionObserver is missing', async () => {
    const { Routes, Route } = await import('react-router-dom');
    render(
      <MemoryRouter initialEntries={['/kathaen/s']}>
        <Routes>
          <Route
            path="/kathaen/:slug"
            element={<StoryPage stories={[draft]} collectionTitle="सं" scenes={{ s: [...sceneCues] }} />}
          />
        </Routes>
      </MemoryRouter>,
    );
    expect(await screen.findByRole('img', { name: 'झील' })).toBeInTheDocument();
    expect(document.querySelectorAll('.scene-dock').length).toBe(0);
    expect(document.documentElement.dataset.mood).toBeUndefined();
  });

  it('follows the cue paragraphs with IntersectionObserver and exposes useScene', async () => {
    let trigger: () => void = () => {};
    class FakeIO {
      constructor(cb: () => void) {
        trigger = cb;
      }
      observe() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', FakeIO);
    const tops = new Map<string, number>();
    const spy = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (
      this: HTMLElement,
    ) {
      return { top: tops.get(this.textContent ?? '') ?? 5000 } as DOMRect;
    });
    tops.set('एक', 10);
    const { Routes, Route } = await import('react-router-dom');
    render(
      <MemoryRouter initialEntries={['/kathaen/s']}>
        <Routes>
          <Route
            path="/kathaen/:slug"
            element={<StoryPage stories={[draft]} collectionTitle="सं" scenes={{ s: [...sceneCues] }} />}
          />
        </Routes>
      </MemoryRouter>,
    );
    expect(await screen.findByRole('img', { name: 'झील' })).toBeInTheDocument();
    expect(document.documentElement.dataset.mood).toBe('day');

    tops.set('तीन', 100); // the second cue reaches the reading line
    act(() => trigger());
    expect(screen.queryByRole('img', { name: 'झील' })).toBeNull();
    expect(document.documentElement.dataset.mood).toBe('night');
    spy.mockRestore();
  });
});
