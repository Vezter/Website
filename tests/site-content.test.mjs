import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { buildMailto } from '../app/data/contact-mailto.mjs';

test('mailto links encode the contact details safely', () => {
  const href = buildMailto('board@example.com', 'Hej & velkommen', 'Linje 1\nLinje 2');
  assert.equal(href, 'mailto:board@example.com?subject=Hej+%26+velkommen&body=Linje+1%0ALinje+2');
});

test('content data includes all four housing types and 21 homes', async () => {
  const source = await readFile(new URL('../app/data/site-content.ts', import.meta.url), 'utf8');
  assert.match(source, /size: 65/);
  assert.match(source, /size: 75/);
  assert.match(source, /size: 86/);
  assert.match(source, /size: 103/);
  assert.equal([...source.matchAll(/homes: (\d+)/g)].reduce((sum, match) => sum + Number(match[1]), 0), 21);
});
