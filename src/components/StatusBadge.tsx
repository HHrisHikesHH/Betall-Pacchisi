import { ui } from '../i18n/hi';
import type { StoryStatus } from '../content';

export function StatusBadge({ status }: { status: StoryStatus }) {
  if (status === 'approved') return null;
  return <span className={`badge badge--${status}`}>{status === 'placeholder' ? ui.placeholderBadge : ui.draftBadge}</span>;
}
