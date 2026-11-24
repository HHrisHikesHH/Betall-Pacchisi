import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { App } from './App';
import { stories as realStories } from './content';
import { buildStories } from './content/stories';
import type { Collection } from './content';

const collection: Collection = { title: 'संग्रह', subtitle: 'उपशीर्षक', intro: 'परिचय' };
const story = (order: number, slug: string, title: string, status = 'placeholder') =>
  `---\norder: ${order}\nslug: ${slug}\ntitle: ${title}\nsummary: ${title} का सार\nstatus: ${status}\n---\n${title} का पहला अनुच्छेद\n\n${title} का दूसरा अनुच्छेद\n`;
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

describe('collection page', () => {
  it('lists every story in order with links', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: 'संग्रह' })).toBeInTheDocument();
    const links = within(screen.getByRole('list')).getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/kathaen/pehli',
      '/kathaen/doosri',
      '/kathaen/teesri',
    ]);
    expect(screen.getAllByText('नमूना — कथा नहीं')).toHaveLength(1);
    expect(screen.getByText('मसौदा')).toBeInTheDocument();
  });

  it('shows an empty state when there are no stories', () => {
    renderAt('/', []);
    expect(screen.getByText('अभी कोई कथा उपलब्ध नहीं है')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});

describe('story page', () => {
  it('shows the story text, the placeholder banner and both neighbours', async () => {
    renderAt('/kathaen/doosri');
    expect(await screen.findByRole('heading', { level: 1, name: /दूसरी/ })).toBeInTheDocument();
    expect(screen.getByText('दूसरी का पहला अनुच्छेद')).toBeInTheDocument();
    expect(screen.getByText('दूसरी का दूसरा अनुच्छेद')).toBeInTheDocument();
    expect(screen.getByText('मसौदा')).toBeInTheDocument();
    const nav = screen.getByRole('navigation');
    expect(within(nav).getByRole('link', { name: /पिछली/ })).toHaveAttribute('href', '/kathaen/pehli');
    expect(within(nav).getByRole('link', { name: /अगली/ })).toHaveAttribute('href', '/kathaen/teesri');
  });

  it('labels a placeholder with a banner and moves focus to the title', async () => {
    renderAt('/kathaen/pehli');
    const heading = await screen.findByRole('heading', { level: 1, name: /पहली/ });
    expect(screen.getByRole('note')).toHaveTextContent('नमूना पाठ');
    expect(heading).toHaveFocus();
  });

  it('labels a draft with a banner that says it is unreviewed and not approved text', async () => {
    renderAt('/kathaen/doosri');
    await screen.findByRole('heading', { level: 1, name: /दूसरी/ });
    expect(screen.getByRole('note')).toHaveTextContent(
      'मसौदा पाठ — यह कथा अभी समीक्षा में है, स्वीकृत पाठ नहीं है, और इसमें बदलाव हो सकते हैं।',
    );
  });

  it('has no previous link on the first story and no next link on the last', async () => {
    const first = renderAt('/kathaen/pehli');
    const firstNav = await screen.findByRole('navigation');
    expect(within(firstNav).queryByRole('link', { name: /पिछली/ })).not.toBeInTheDocument();
    expect(within(firstNav).getByRole('link', { name: /अगली/ })).toBeInTheDocument();
    first.unmount();

    renderAt('/kathaen/teesri');
    const lastNav = await screen.findByRole('navigation');
    expect(within(lastNav).getByRole('link', { name: /पिछली/ })).toBeInTheDocument();
    expect(within(lastNav).queryByRole('link', { name: /अगली/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('note')).not.toBeInTheDocument();
  });

  it('shows a not-found state for an unknown story', async () => {
    renderAt('/kathaen/koi-nahin');
    expect(await screen.findByRole('heading', { name: 'यह कथा नहीं मिली' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'सभी कथाओं पर लौटें' })).toHaveAttribute('href', '/');
  });
});

it('shows a not-found page for an unknown route', () => {
  renderAt('/kuchh/aur');
  expect(screen.getByRole('heading', { name: 'यह पृष्ठ नहीं मिला' })).toBeInTheDocument();
});

it('renders the real content from /content without errors', async () => {
  render(
    <MemoryRouter initialEntries={[`/kathaen/${realStories[0].slug}`]}>
      <App />
    </MemoryRouter>,
  );
  expect(await screen.findByRole('heading', { level: 1, name: new RegExp(realStories[0].title) })).toBeInTheDocument();
  expect(screen.getByRole('note')).toBeInTheDocument();
});
