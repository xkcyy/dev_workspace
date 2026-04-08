import { cp, mkdir, readdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, '..');
const docsRoot = path.resolve(siteRoot, '..');
const targetRoot = path.resolve(siteRoot, 'content', 'docs');
const tempRoot = path.resolve(siteRoot, 'content', '.docs-sync-temp');
const sourceItems = ['meta.json', 'system', 'topics', 'notes', 'references', 'maps'];

await rm(tempRoot, { recursive: true, force: true });
await mkdir(tempRoot, { recursive: true });

for (const item of sourceItems) {
  const from = path.resolve(docsRoot, item);
  const to = path.resolve(tempRoot, item);

  await cp(from, to, { recursive: true, force: true });
}

await rm(targetRoot, { recursive: true, force: true });
await rename(tempRoot, targetRoot);

const contentItems = await readdir(targetRoot);
if (contentItems.length === 0) {
  throw new Error('No wiki content was synced into _site/content/docs.');
}
