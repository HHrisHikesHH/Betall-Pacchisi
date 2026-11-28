import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { parseMarks } from '../content/marks';
import { Words } from './Sheet';

describe('Words', () => {
  const { text, marks } = parseMarks('एक {k|राजा} था। {t|वह चला। फिर रुका।}');

  it('wraps marked ranges in classed spans and keeps the danda styling inside', () => {
    const { container } = render(<p><Words text={text} marks={marks} /></p>);
    expect(container.querySelector('.pothi-mark--k')?.textContent).toBe('राजा');
    const turn = container.querySelector('.pothi-mark--t');
    expect(turn?.textContent).toBe('वह चला। फिर रुका।');
    expect(turn?.querySelectorAll('.pothi-danda')).toHaveLength(2);
    expect(container.textContent).toBe(text);
  });

  it('renders the intersected range on a leaf that cuts inside a mark', () => {
    const cut = text.indexOf('फिर');
    const { container } = render(<p><Words text={text.slice(cut)} from={cut} marks={marks} /></p>);
    expect(container.querySelector('.pothi-mark--t')?.textContent).toBe('फिर रुका।');
    expect(container.querySelector('.pothi-mark--k')).toBeNull();
  });
});
