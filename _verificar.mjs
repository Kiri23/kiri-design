#!/usr/bin/env node
/* ═══ Kiri · _verificar.mjs ══════════════════════════════════════════
   El validador de las fichas. Lo que acá abajo NO se puede chequear no
   es una regla del sistema: es un gusto, y un gusto no se le exige a un
   agente. Corre sin dependencias:  node _verificar.mjs
   ═══════════════════════════════════════════════════════════════════ */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const raiz = new URL('.', import.meta.url).pathname;
const fallos = [];
const mal = (f, m) => fallos.push(`${f}: ${m}`);

// ── Los tokens que de verdad existen, leídos de css/, no de una lista. ──
const css = ['color', 'escala'].map(n => readFileSync(join(raiz, 'css', n + '.css'), 'utf8')).join('\n');
const TOKENS = new Set([...css.matchAll(/(--kiri-[\w-]+)\s*:/g)].map(m => m[1]));

// ── Las fichas: todo *.card.html del repo. ─────────────────────────────
const fichas = [];
const caminar = d => {
  for (const e of readdirSync(join(raiz, d), { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = d ? `${d}/${e.name}` : e.name;
    if (e.isDirectory()) caminar(p);
    else if (e.name.endsWith('.card.html')) fichas.push(p);
  }
};
caminar('');

const FUENTES = ['Space Grotesk', 'Newsreader', 'JetBrains Mono'];
const taller = readFileSync(join(raiz, 'taller.html'), 'utf8');

for (const f of fichas) {
  const src = readFileSync(join(raiz, f), 'utf8');
  const l1 = src.split('\n', 1)[0];

  // 1 · @dsCard en la LÍNEA 1, con los cuatro campos. Sin esto la ficha
  //     no aparece ni en el taller ni en el panel de Claude Design.
  if (!l1.startsWith('<!-- @dsCard ')) mal(f, '@dsCard no está en la línea 1');
  else for (const campo of ['group', 'viewport', 'name', 'subtitle'])
    if (!new RegExp(`${campo}="[^"]+"`).test(l1)) mal(f, `al @dsCard le falta ${campo}`);
  const vp = l1.match(/viewport="(\d+)x(\d+)"/);
  if (l1.startsWith('<!-- @dsCard ') && !vp) mal(f, 'viewport no tiene la forma AxB');

  // 2 · Ni un hex propio. Si falta un color, se agrega un token.
  for (const h of src.matchAll(/#[0-9a-fA-F]{3,8}\b/g))
    if (!/^#[a-z-]+$/.test(h[0])) mal(f, `hex crudo ${h[0]} — usá var(--kiri-*)`);

  // 3 · Solo las tres familias del sistema, y siempre por token.
  for (const ff of src.matchAll(/font-family\s*:\s*([^;"'}]+)/g)) {
    const v = ff[1].trim();
    if (!v.startsWith('var(--kiri-') && !FUENTES.some(n => v.includes(n)) && !/inherit|^var\(/.test(v))
      mal(f, `fuente de fuera del sistema: ${v}`);
  }
  for (const sh of src.matchAll(/\bfont\s*:\s*[^;"'}]*?\b(?:var\(--kiri-(?:ui|lectura|mono)\)|[A-Z][\w ]+)/g)) {
    const v = sh[0];
    if (!/var\(--kiri-(ui|lectura|mono)\)/.test(v) && !FUENTES.some(n => v.includes(n)))
      mal(f, `atajo font: sin familia del sistema: ${v.trim()}`);
  }

  // 4 · Todo var(--kiri-*) tiene que existir de verdad en css/.
  for (const v of src.matchAll(/var\((--kiri-[\w-]+)/g))
    if (!TOKENS.has(v[1])) mal(f, `token inexistente ${v[1]}`);

  // 5 · Las fichas de fundamento enlazan el barril y el armazón común.
  if (f.startsWith('guidelines/')) {
    if (!src.includes('href="../tokens.css"')) mal(f, 'no enlaza ../tokens.css');
    if (!src.includes('href="guia.css"')) mal(f, 'no enlaza guia.css');
    if (!/group="Fundamentos"/.test(l1)) mal(f, 'el group no es "Fundamentos"');
  }

  // 6 · Una ficha que el taller no lista es una ficha que nadie ve.
  if (!taller.includes(`'${f}'`)) mal(f, 'no está en la const PIEZAS de taller.html');
}

// 7 · El armazón compartido tampoco puede traer un hex propio.
const guia = readFileSync(join(raiz, 'guidelines/guia.css'), 'utf8');
for (const h of guia.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) mal('guidelines/guia.css', `hex crudo ${h[0]}`);
for (const v of guia.matchAll(/var\((--kiri-[\w-]+)/g))
  if (!TOKENS.has(v[1])) mal('guidelines/guia.css', `token inexistente ${v[1]}`);

console.log(`${fichas.length} fichas · ${TOKENS.size} tokens`);
if (fallos.length) { console.error('\n✗ ' + fallos.join('\n✗ ')); process.exit(1); }
console.log('✓ sin fallos');
