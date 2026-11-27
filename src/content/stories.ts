import { parseFrontMatter, toParagraphs } from './frontmatter';
import { STORY_KINDS, STORY_STATUSES, type Neighbours, type Story, type StoryKind, type StoryStatus } from './types';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REQUIRED_FIELDS = ['order', 'slug', 'title', 'summary', 'status'] as const;

function parseStory(path: string, source: string): Story {
  const fail = (message: string): never => {
    throw new Error(`Story file ${path}: ${message}`);
  };
  let parsed;
  try {
    parsed = parseFrontMatter(source);
  } catch (error) {
    return fail((error as Error).message);
  }
  const { data, body } = parsed;
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) fail(`missing required field "${field}"`);
  }
  const order = /^\d+$/.test(data.order) ? Number(data.order) : NaN;
  if (!Number.isInteger(order) || order < 1) fail(`"order" must be a positive whole number, got "${data.order}"`);
  if (!SLUG_PATTERN.test(data.slug)) fail(`"slug" must be lowercase ASCII words joined by hyphens, got "${data.slug}"`);
  if (!(STORY_STATUSES as readonly string[]).includes(data.status)) {
    fail(`"status" must be one of ${STORY_STATUSES.join(', ')}, got "${data.status}"`);
  }
  const kind = (data.kind ?? 'tale') as StoryKind;
  if (!(STORY_KINDS as readonly string[]).includes(kind)) fail(`"kind" must be one of ${STORY_KINDS.join(', ')}, got "${data.kind}"`);
  if (data.status === 'approved') {
    // D-083: approved means the user approved it, recorded by date and commit.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.approved_on ?? '')) fail('"approved" needs "approved_on" as YYYY-MM-DD (D-083)');
    if (!/^[0-9a-f]{7,40}$/.test(data.approved_commit ?? '')) fail('"approved" needs "approved_commit" as a git commit SHA (D-083)');
  }
  const paragraphs = toParagraphs(body);
  if (paragraphs.length === 0) fail('the story has no text after the front matter');
  return {
    order,
    kind,
    slug: data.slug,
    title: data.title,
    summary: data.summary,
    status: data.status as StoryStatus,
    paragraphs,
  };
}

/** Parses and validates raw story files (path → source) and returns them sorted by `order`. */
export function buildStories(files: Record<string, string>): Story[] {
  const stories: Story[] = [];
  const slugPaths = new Map<string, string>();
  const orderPaths = new Map<number, string>();
  for (const [path, source] of Object.entries(files)) {
    const story = parseStory(path, source);
    const sameSlug = slugPaths.get(story.slug);
    if (sameSlug) throw new Error(`Story files ${sameSlug} and ${path} both use the slug "${story.slug}"`);
    const sameOrder = orderPaths.get(story.order);
    if (sameOrder) throw new Error(`Story files ${sameOrder} and ${path} both use order ${story.order}`);
    slugPaths.set(story.slug, path);
    orderPaths.set(story.order, path);
    stories.push(story);
  }
  stories.sort((a, b) => a.order - b.order);
  let n = 0;
  for (const story of stories) if (story.kind === 'tale') story.number = ++n;
  return stories;
}

export function findStory(stories: Story[], slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function findNeighbours(stories: Story[], slug: string): Neighbours {
  const index = stories.findIndex((story) => story.slug === slug);
  if (index === -1) return {};
  return { previous: stories[index - 1], next: stories[index + 1] };
}
