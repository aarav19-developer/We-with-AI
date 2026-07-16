/**
 * copy-dist.js
 * Copies dist/client/ contents into dist/ so Vercel serves assets correctly.
 * Runs after prerender.js in the build script.
 * Uses ESM (project type: "module").
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

// Copy all files from dist/client → dist (skip if already exists — prerendered
// HTML files in dist/ take priority over the blank client index.html)
fs.cpSync(src, dest, { recursive: true, force: false });

console.log('[copy-dist] dist/client → dist copied successfully.');
