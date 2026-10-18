import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const bytes = await readFile('data/staging/tuscany-reviewed.json');
assert.equal(createHash('sha256').update(bytes).digest('hex'), '8f03905e29168426211666b43b61fb4115aa0b365926d000c0dd2bd85b341e48', 'Reviewed edition changed: compare against the approved staging input before updating this pin');
const edition = JSON.parse(bytes);
assert.equal(edition.draft.sections.length, 9);
assert.equal(edition.draft.sections.flatMap(s => s.paragraphs).length, 18);
assert.equal(edition.sources.length, 15);
assert.equal(edition.images.length, 3);
assert.equal(edition.author, undefined);
assert.notEqual(edition.slug, 'the-perfect-tuscany-road-trip');
const sources = new Set(edition.sources.map(s => s.id));
for (const s of edition.draft.sections) for (const id of s.sourceIds) assert.ok(sources.has(id), `Unresolved citation ${id}`);
for (const photo of edition.images) {
  assert.ok(photo.placement === 'hero' || edition.draft.sections.some(s => s.heading === photo.placement));
  assert.equal(createHash('sha256').update(await readFile(join('public',photo.src))).digest('hex'), photo.sha256);
  assert.ok(photo.credit && photo.license && photo.source && photo.changes);
}
// Neither public discovery source references the test edition.
for (const p of ['data/content.ts', 'app/sitemap.ts']) assert.ok(!(await readFile(p,'utf8')).includes(edition.slug));
console.log('Verified immutable reviewed input:9sections/18paragraphs/15sources/3imagehashes; no byline or public discovery entry.');
