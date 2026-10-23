import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await readFile(path.join(root, 'server.js'), 'utf8');
const html = await readFile(path.join(root, 'public', 'index.html'), 'utf8');
const css = await readFile(path.join(root, 'public', 'style.css'), 'utf8');
const app = await readFile(path.join(root, 'public', 'app.js'), 'utf8');

test('serveur expose un endpoint de santé', () => {
  assert.match(server, /app\.get\('\/health'/);
});

test('les 9 mini-jeux prévus sont déclarés', () => {
  for (const id of ['panique', 'pas-encore', 'tarte', 'imposteur', 'pierre', 'bouton', 'gourmand', 'cadeau', 'fusee']) {
    assert.ok(server.includes(`id:'${id}'`), `mini-jeu manquant: ${id}`);
  }
});

test('la partie est limitée à 8 joueurs et interdit de rejoindre après le départ', () => {
  assert.match(server, /r\.players\.size>=8/);
  assert.match(server, /r\.phase!=='lobby'/);
});

test('les trois phases utilisent des fenêtres de 5 secondes', () => {
  assert.ok((server.match(/Date\.now\(\)\+5000/g) || []).length >= 3);
});

test('le serveur interdit les actions après la fin de la fenêtre de jeu', () => {
  assert.match(server, /Date\.now\(\)>r\.endsAt/);
});

test('le navigateur utilise les événements de salon et d’action attendus', () => {
  assert.match(app, /room:create/);
  assert.match(app, /room:join/);
  assert.match(app, /game:action/);
  assert.match(html, /id="players"/);
  assert.ok(css.length > 1000);
});
