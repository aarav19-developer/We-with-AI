/**
 * copy-dist.js
 * Copies dist/client/ assets (JS, CSS, images) into dist/ so Vercel can serve them.
 * Runs AFTER prerender.js — prerendered HTML files in dist/ are NOT overwritten
 * because we skip existing files (force: false).
 *
 * Final dist/ structure:
 *   dist/index.html          ← prerendered homepage (from prerender.js)
 *   dist/about/index.html    ← prerendered /about   (from prerender.js)
 *   dist/services/index.html ← prerendered /services (from prerender.js)
 *   dist/why-us/index.html   ← prerendered /why-us  (from prerender.js)
 *   dist/contact/index.html  ← prerendered /contact  (from prerender.js)
 *   dist/assets/             ← JS + CSS bundles      (from dist/client/assets/)
 *   dist/Z.png               ← public assets         (from dist/client/)
 *   dist/sitemap.xml         ← sitemap               (from dist/client/)
 *   dist/robots.txt          ← robots                (from dist/client/)
 *   dist/favicon.svg         ← favicon               (from dist/client/)
 */
import fs   from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const src  = path.resolve(__dirname, 'dist/client');
const dest = path.resolve(__dirname, 'dist');

if (!fs.existsSync(src)) {
  console.error('[copy-dist] ERROR: dist/client not found. Run vite build first.');
  process.exit(1);
}

// Copy dist/client → dist
// force: false = do NOT overwrite existing files (prerendered HTML files are protected)
fs.cpSync(src, dest, { recursive: true, force: false });

console.log('[copy-dist] Done — dist/client assets copied to dist/');
