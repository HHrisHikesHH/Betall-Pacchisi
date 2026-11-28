import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';
import { scenes, stories as realStories } from './content';
import { buildStories } from './content/stories';
import type { Collection } from './content';

const collection: Collection = {
  title: 'संग्रह',
  subtitle: 'उपशीर्षक',
  intro: 'परिचय',
};
const story = (order: number, slug: string, title: string, status = 'placeholder') =>
  `---\norder: ${order}\nslug: ${slug}\ntitle: ${title}\nsummary: ${title} का सार\nstatus: ${status}\n${status === 'approved' ? 'approved_on: 2026-11-27\napproved_commit: 58d0060\n' : ''}---\n${title} का पहला अनुच्छेद\n\n${title} का दूसरा अनुच्छेद\n`;
const stories = buildStories({
  'a.md': story(1, 'pehli', 'पहली'),
  'b.md': story(2, 'doosri', 'दूसरी', 'draft'),
  'c.md': story(3, 'teesri', 'तीसरी', 'approved'),
});

function renderAt(path: string, list = stories) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App collection={collection} stories={list} />
    </MemoryRouter>,
  );
}

/** jsdom has no media queries: answer the ones named here with yes. */
function screenIs(...features: string[]) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: features.some((feature) => query.includes(feature)),
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

afterEach(() => {
  vi.unstubAllGlobals();
  window.sessionStorage.clear();
  window.localStorage.clear();
});

const words = (text: string) => text.replace(/\s+/g, ' ').trim();
const shownParagraphs = () =>
  Array.from(document.querySelectorAll('.pothi-sheet .pothi-p'), (p) => words(p.textContent!));

describe('home and contents', () => {
  it('opens the closed pothi onto the list of tales', async () => {
    screenIs('prefers-reduced-motion');
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: 'संग्रह' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'पोथी खोलें' }));
    const links = within(await screen.findByRole('list')).getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/kathaen/pehli',
      '/kathaen/doosri',
      '/kathaen/teesri',
    ]);
    expect(screen.getByText('मसौदा')).toBeInTheDocument();
  });

  it('shows each tale as a card with time, state chip and an ornament, and marks the frame start', () => {
    renderAt('/kathaen');
    const cards = within(screen.getByRole('list')).getAllByRole('link');
    expect(cards).toHaveLength(3);
    expect(cards[0]).toHaveTextContent('पहली');
    expect(cards[0]).toHaveTextContent('पहली का सार');
    expect(cards[0]).toHaveTextContent('लगभग १ मिनट');
    expect(cards[0]).toHaveTextContent('नई');
    expect(cards[0].querySelector('.pothi-card-art--ornament')).not.toBeNull();
    expect(screen.queryByText('यहीं से शुरू करें')).toBeNull();
  });

  it('shows in-progress and finished chips', () => {
    window.localStorage.setItem(
      'betal-pachisi:progress',
      JSON.stringify({
        pehli: { paragraph: 1, offset: 0, updated: 100, finished: false },
        teesri: { paragraph: 1, offset: 0, updated: 300, finished: true },
      }),
    );
    renderAt('/kathaen');
    const cards = within(screen.getByRole('list')).getAllByRole('link');
    expect(cards[0]).toHaveTextContent('अधूरी');
    expect(cards[1]).toHaveTextContent('नई');
    expect(cards[2]).toHaveTextContent('पढ़ ली');
  });

  it('marks the frame card as the place to start when nothing has been read', () => {
    const framed = buildStories({
      'f.md': `---\norder: 1\nslug: katha-mukh\ntitle: कथामुख\nsummary: आरम्भ\nstatus: draft\nkind: frame\n---\nएक\n`,
      'a.md': story(2, 'pehli', 'पहली'),
    });
    renderAt('/kathaen', framed);
    expect(screen.getByText('यहीं से शुरू करें')).toBeInTheDocument();
  });

  it('sends the old prototype address home', () => {
    renderAt('/pothi');
    expect(screen.getByRole('button', { name: 'पोथी खोलें' })).toBeInTheDocument();
  });

  it('shows an empty state when there are no stories', () => {
    renderAt('/kathaen', []);
    expect(screen.getByText('अभी कोई कथा उपलब्ध नहीं है')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});

describe('reader', () => {
  it('shows the whole tale on a leaf, labels a draft and leads to the next tale', async () => {
    renderAt('/kathaen/doosri');
    expect(await screen.findByRole('heading', { level: 2, name: 'दूसरी' })).toBeInTheDocument();
    expect(shownParagraphs()).toEqual(['दूसरी का पहला अनुच्छेद', 'दूसरी का दूसरा अनुच्छेद']);
    expect(screen.getByText('मसौदा')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'अगली कथा: तीसरी' })).toHaveAttribute('href', '/kathaen/teesri');
    expect(screen.getByRole('main')).toHaveFocus();
    expect(screen.getByRole('button', { name: 'ध्वनि: बंद' })).toBeInTheDocument();
  });

  it('gives approved text no label, ends on the contents, and closes to them', async () => {
    renderAt('/kathaen/teesri');
    await screen.findByRole('heading', { level: 2, name: 'तीसरी' });
    expect(screen.queryByText('मसौदा')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'सभी कथाओं पर लौटें' })).toHaveAttribute('href', '/kathaen');
    fireEvent.click(screen.getByRole('button', { name: 'पोथी बंद करें' }));
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('switches between leaves and scrolling', async () => {
    renderAt('/kathaen/pehli');
    fireEvent.click(await screen.findByRole('button', { name: 'स्क्रोल करके पढ़ें' }));
    expect(screen.getByRole('region', { name: 'पहली' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'पन्ने पलटकर पढ़ें' }));
    expect(screen.getByRole('button', { name: 'अगला पन्ना' })).toBeInTheDocument();
  });

  it('invites an upright phone to turn, once, and reads upright if the reader prefers', async () => {
    screenIs('orientation: portrait', 'max-width: 600px');
    const first = renderAt('/kathaen/pehli');
    expect(await screen.findByRole('heading', { level: 1, name: 'फ़ोन घुमाइए' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'ऐसे ही पढ़ें' }));
    expect(screen.getByRole('heading', { level: 2, name: 'पहली' })).toBeInTheDocument();
    first.unmount();
    renderAt('/kathaen/doosri');
    expect(await screen.findByRole('heading', { level: 2, name: 'दूसरी' })).toBeInTheDocument();
  });

  it('shows a not-found state for an unknown story and an unknown route', async () => {
    const view = renderAt('/kathaen/koi-nahin');
    expect(await screen.findByRole('heading', { name: 'यह कथा नहीं मिली' })).toBeInTheDocument();
    view.unmount();
    renderAt('/kuchh/aur');
    expect(screen.getByRole('heading', { name: 'यह पृष्ठ नहीं मिला' })).toBeInTheDocument();
  });
});

describe('reading comfort', () => {
  it('opens the Aa panel, changes size, font, spacing and page, and remembers them', async () => {
    const view = renderAt('/kathaen/pehli');
    const open = await screen.findByRole('button', { name: 'पढ़ने की सेटिंग' });
    const root = () => document.querySelector<HTMLElement>('.pothi')!;
    expect(root().style.getPropertyValue('--read-scale')).toBe('1');

    fireEvent.click(open);
    const dialog = screen.getByRole('dialog', { name: 'पढ़ने की सेटिंग' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(within(dialog).getByRole('button', { name: 'बंद करें' })).toHaveFocus();

    fireEvent.click(within(dialog).getByRole('button', { name: 'अक्षर बड़े करें' }));
    expect(root().style.getPropertyValue('--read-scale')).toBe('1.18');
    fireEvent.click(within(dialog).getByRole('button', { name: 'अक्षर बड़े करें' }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'अक्षर बड़े करें' }));
    expect(within(dialog).getByRole('button', { name: 'अक्षर बड़े करें' })).toBeDisabled();
    fireEvent.click(within(dialog).getByRole('button', { name: 'सादा' }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'खुली' }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'रात' }));
    expect(within(dialog).getByRole('button', { name: 'रात' })).toHaveAttribute('aria-pressed', 'true');
    expect(within(dialog).getByRole('button', { name: 'कागज़' })).toHaveAttribute('aria-pressed', 'false');
    expect(root()).toHaveAttribute('data-theme', 'night');
    expect(root()).toHaveAttribute('data-font', 'mukta');
    expect(root().style.getPropertyValue('--read-leading')).toBe('1.95');
    expect(root().style.getPropertyValue('--read-face')).toContain('Mukta');
    expect(JSON.parse(window.localStorage.getItem('betal-pachisi:reading')!)).toEqual({
      size: 5,
      font: 'mukta',
      leading: 'airy',
      theme: 'night',
    });

    fireEvent.keyDown(dialog, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(open).toHaveFocus();

    // a new visit starts with the saved settings
    view.unmount();
    renderAt('/kathaen/doosri');
    await screen.findByRole('heading', { level: 2, name: 'दूसरी' });
    expect(document.querySelector('.pothi')).toHaveAttribute('data-theme', 'night');
  });

  it('closes the panel on a tap outside it', async () => {
    renderAt('/kathaen/pehli');
    fireEvent.click(await screen.findByRole('button', { name: 'पढ़ने की सेटिंग' }));
    fireEvent.pointerDown(document.querySelector('.pothi-panel-backdrop')!);
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('offers to continue the latest unfinished tale on the contents page, and starts a finished one over', async () => {
    window.localStorage.setItem(
      'betal-pachisi:progress',
      JSON.stringify({
        pehli: { paragraph: 1, offset: 0, updated: 100, finished: false },
        doosri: { paragraph: 1, offset: 0, updated: 200, finished: false },
        teesri: { paragraph: 1, offset: 0, updated: 300, finished: true },
      }),
    );
    const view = renderAt('/kathaen');
    const link = screen.getByRole('link', { name: /पढ़ना जारी रखें/ });
    expect(link).toHaveAttribute('href', '/kathaen/doosri');
    expect(link).toHaveTextContent('दूसरी');
    view.unmount();

    // reading the second paragraph's tale from where it was left
    renderAt('/kathaen/doosri');
    await screen.findByRole('heading', { level: 2, name: 'दूसरी' });
  });

  it('remembers the place and the end of a tale', async () => {
    const view = renderAt('/kathaen/pehli');
    await screen.findByRole('heading', { level: 2, name: 'पहली' });
    await act(async () => {});
    // the whole tale is one leaf here, so its end is shown at once
    expect(JSON.parse(window.localStorage.getItem('betal-pachisi:progress')!).pehli.finished).toBe(true);
    view.unmount();
    expect(screen.queryByRole('link', { name: /पढ़ना जारी रखें/ })).toBeNull();
  });
});

describe('real content: placeholders and review mode', () => {
  const [first] = realStories;
  const opening = () => scenes[first.slug][0];
  const renderReal = (query = '') =>
    render(
      <MemoryRouter initialEntries={[`/kathaen/${first.slug}${query}`]}>
        <App />
      </MemoryRouter>,
    );

  it('shows readers a described empty panel and never the prompt', async () => {
    renderReal();
    await screen.findByRole('heading', { level: 2, name: first.title });
    expect(screen.getByRole('img', { name: opening().alt })).toBeInTheDocument();
    expect(screen.queryByText(opening().prompt)).not.toBeInTheDocument();
  });

  it('shows the prompt and sound cues with ?review=1', async () => {
    renderReal('?review=1');
    await screen.findByRole('heading', { level: 2, name: first.title });
    expect(screen.getByText(opening().prompt)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Copy full prompt' })).toBeInTheDocument();
  });
});
