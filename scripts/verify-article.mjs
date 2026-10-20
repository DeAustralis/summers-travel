import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const bytes = await readFile('data/tuscany-reviewed.json');
const edition = JSON.parse(bytes);
assert.equal(createHash('sha256').update(JSON.stringify({draft:edition.draft,sources:edition.sources,images:edition.images})).digest('hex'), '01a143efe0ddd49132e6c32617e59bfa29185434d3fe9a761461361402047015', 'Reviewed prose, references or image records changed');
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
assert.equal(edition.slug, 'a-considered-week-in-tuscany');
assert.equal(edition.status, 'Published');
console.log('Verified reviewed prose, 15 references, three licensed image hashes and no author byline.');
