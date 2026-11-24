// Drop-in images: a file at src/assets/scenes-override/<art-id>.(webp|jpg|png) replaces the SVG with the
// same art id, with no code change. See the README in that folder.
const found = import.meta.glob<string>('/src/assets/scenes-override/*.{webp,jpg,png}', {
  query: '?url',
  import: 'default',
  eager: true,
});

const byId: Record<string, string> = {};
for (const [path, url] of Object.entries(found)) {
  const id = /([^/]+)\.(?:webp|jpg|png)$/.exec(path)?.[1];
  if (id) byId[id] = url;
}

export function overrideFor(artId: string): string | undefined {
  return byId[artId];
}
