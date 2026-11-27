import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { App } from '../App';
import { stories } from '../content';

const sample = stories.find((story) => story.slug === 'kamal-ke-teen-ishare')!;

function renderPothi() {
  return render(
    <MemoryRouter initialEntries={['/pothi']}>
      <App />
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

afterEach(() => vi.unstubAllGlobals());

const words = (text: string) => (text ?? '').replace(/\s+/g, ' ').trim();

describe('/pothi', () => {
  it('shows a closed pothi without the site chrome, and says what the sample is', async () => {
    renderPothi();
    expect(await screen.findByRole('heading', { level: 1, name: 'बेताल पच्चीसी' })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(document.querySelector('.pothi-cover-note')).toHaveTextContent(/नमूना.*AI.*दृश्य नहीं/);
    expect(screen.getByRole('button', { name: 'पोथी खोलें' })).toBeInTheDocument();
  });

  it('opens on the first eight paragraphs, with no draft label (the sample is approved), the AI credit and a Hindi description', async () => {
    screenIs('prefers-reduced-motion');
    renderPothi();
    fireEvent.click(await screen.findByRole('button', { name: 'पोथी खोलें' }));
    expect(await screen.findByRole('heading', { level: 2, name: sample.title })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('main')).toHaveFocus();
    const shown = Array.from(document.querySelectorAll('.pothi-sheet .pothi-p'), (p) => words(p.textContent!));
    expect(shown).toEqual(sample.paragraphs.slice(0, 8).map(words));
    expect(screen.queryByText('मसौदा')).not.toBeInTheDocument();
    expect(screen.getByText('चित्र: AI से निर्मित')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /AI से बना चित्र/ })).toBeInTheDocument();
  });

  it('switches between leaves and scrolling, and closes back to the cover', async () => {
    screenIs('prefers-reduced-motion');
    renderPothi();
    fireEvent.click(await screen.findByRole('button', { name: 'पोथी खोलें' }));
    fireEvent.click(await screen.findByRole('button', { name: 'स्क्रोल करके पढ़ें' }));
    expect(screen.getByRole('region', { name: sample.title })).toBeInTheDocument();
    expect(screen.queryByText('मसौदा')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'अगला पन्ना' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'पन्ने पलटकर पढ़ें' }));
    expect(screen.getByRole('button', { name: 'अगला पन्ना' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'पोथी बंद करें' }));
    expect(screen.getByRole('button', { name: 'पोथी खोलें' })).toHaveFocus();
  });

  it('invites an upright phone to turn, and reads upright if the reader prefers', async () => {
    screenIs('prefers-reduced-motion', 'orientation: portrait', 'max-width: 600px');
    renderPothi();
    fireEvent.click(await screen.findByRole('button', { name: 'पोथी खोलें' }));
    expect(screen.getByRole('heading', { level: 1, name: 'फ़ोन घुमाइए' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'ऐसे ही पढ़ें' }));
    expect(screen.getByRole('heading', { level: 2, name: sample.title })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.queryByText('मसौदा')).not.toBeInTheDocument();
    expect(screen.getByText('चित्र: AI से निर्मित')).toBeInTheDocument();
  });

  it('is not linked from the existing pages', async () => {
    for (const path of ['/', `/kathaen/${sample.slug}`]) {
      const view = render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      await screen.findByRole('heading', { level: 1 });
      expect(document.querySelector('a[href*="pothi"]')).toBeNull();
      view.unmount();
    }
  });
});
