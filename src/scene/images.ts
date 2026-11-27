// Final pictures: a file at content/images/<story slug or "shared">/<scene id>.(webp|jpg|png)
// replaces that scene's placeholder, with no code change.
const found = import.meta.glob<string>('/content/images/*/*.{webp,jpg,png}', {
  query: '?url',
  import: 'default',
  eager: true,
});

const byKey: Record<string, string> = {};
for (const [path, url] of Object.entries(found)) {
  const match = /([^/]+\/[^/]+)\.(?:webp|jpg|png)$/.exec(path);
  if (match) byKey[match[1]] = url;
}

export function imageFor(key: string): string | undefined {
  return byKey[key];
}
