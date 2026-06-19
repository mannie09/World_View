import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { normalizeResendSender } = require('../scripts/lib/resend-from.cjs');

const silent = () => {};

test('returns null for empty, null, undefined, or whitespace-only input', () => {
  assert.equal(normalizeResendSender(null, 'WorldView', silent), null);
  assert.equal(normalizeResendSender(undefined, 'WorldView', silent), null);
  assert.equal(normalizeResendSender('', 'WorldView', silent), null);
  assert.equal(normalizeResendSender('   ', 'WorldView', silent), null);
});

test('passes a properly wrapped sender through unchanged', () => {
  assert.equal(
    normalizeResendSender('WorldView <alerts@worldview.app>', 'Default', silent),
    'WorldView <alerts@worldview.app>',
  );
  assert.equal(
    normalizeResendSender('WorldView Brief <brief@worldview.app>', 'Default', silent),
    'WorldView Brief <brief@worldview.app>',
  );
});

test('trims surrounding whitespace before returning a wrapped sender', () => {
  assert.equal(
    normalizeResendSender('  WorldView Brief <brief@worldview.app>  ', 'Default', silent),
    'WorldView Brief <brief@worldview.app>',
  );
});

test('wraps a bare email address with the supplied default display name', () => {
  assert.equal(
    normalizeResendSender('brief@worldview.app', 'WorldView Brief', silent),
    'WorldView Brief <brief@worldview.app>',
  );
  assert.equal(
    normalizeResendSender('alerts@worldview.app', 'WorldView Alerts', silent),
    'WorldView Alerts <alerts@worldview.app>',
  );
});

test('emits exactly one warning when coercing a bare address', () => {
  const warnings = [];
  normalizeResendSender('brief@worldview.app', 'WorldView Brief', (m) => warnings.push(m));
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /lacks display name/);
  assert.match(warnings[0], /WorldView Brief <brief@worldview\.app>/);
});

test('does not warn when the value already has a display-name wrapper', () => {
  const warnings = [];
  normalizeResendSender(
    'WorldView Brief <brief@worldview.app>',
    'Default',
    (m) => warnings.push(m),
  );
  assert.equal(warnings.length, 0);
});

test('defaults to console.warn when no warning sink is supplied', () => {
  const original = console.warn;
  const captured = [];
  console.warn = (m) => captured.push(m);
  try {
    normalizeResendSender('bare@example.com', 'Name');
    assert.equal(captured.length, 1);
    assert.match(captured[0], /lacks display name/);
  } finally {
    console.warn = original;
  }
});
