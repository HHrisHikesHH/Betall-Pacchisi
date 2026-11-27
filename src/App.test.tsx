import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';
import { scenes, stories as realStories } from './content';
import { buildStories } from './content/stories';
import type { Collection } from './content';

const collection: Collection = { title: 'संग्रह', subtitle: 'उपशीर्षक', intro: 'परिचय' };
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
});

const words = (text: string) => text.replace(/\s+/g, ' ').trim();
const shownParagraphs = () => Array.from(document.querySelectorAll('.pothi-sheet .pothi-p'), (p) => words(p.textContent!));

describe('home and contents', () => {
  it('opens the closed pothi onto the list of tales', async () => {
    screenIs('prefers-reduced-motion');
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: 'संग्रह' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'पोथी खोलें' }));
    const links = within(await screen.findByRole('list')).getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/kathaen/pehli', '/kathaen/doosri', '/kathaen/teesri']);
    expect(screen.getByText('मसौदा')).toBeInTheDocument();
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
    expect(screen.getByRole('button', { name: 'ध्वनि चालू / बंद' })).toBeInTheDocument();
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
