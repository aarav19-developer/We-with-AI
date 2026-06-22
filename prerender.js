/**
 * prerender.js
 * Runs after `vite build` (client build).
 * Uses the SSR bundle produced by `vite build --ssr` to render `/` to a
 * static HTML string, then injects it into dist/index.html so Google can
 * crawl real content instead of a blank <div id="root">.
 *
 * Only "/" is pre-rendered. All other routes are left as normal SPA routes
 * (Vercel handles them via vercel.json rewrites).
 */

import fs   from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES_TO_PRERENDER = ['/'];

async function run() {
  // 1. Load the SSR bundle Vite built into dist/server/
  const serverEntryPath = path.resolve(__dirname, 'dist/server/entry-server.js');

  if (!fs.existsSync(serverEntryPath)) {
    console.error('[prerender] ERROR: SSR bundle not found at', serverEntryPath);
    console.error('[prerender] Make sure `vite build --ssr src/entry-server.jsx` ran first.');
    process.exit(1);
  }

  // On Windows, dynamic import() requires a file:// URL for absolute paths
  const serverEntryUrl = new URL(`file:///${serverEntryPath.replace(/\\/g, '/')}`).href;
  const { render } = await import(serverEntryUrl);

  // 2. Read the client-built index.html template
  const templatePath = path.resolve(__dirname, 'dist/client/index.html');
  const template     = fs.readFileSync(templatePath, 'utf-8');

  for (const url of ROUTES_TO_PRERENDER) {
    console.log(`[prerender] Rendering ${url} …`);

    let html, helmet;
    try {
      ({ html, helmet } = render(url));
    } catch (err) {
      console.error(`[prerender] render() threw for ${url}:`, err);
      process.exit(1);
    }

    // 3. Build the full <head> additions from Helmet
    const helmetHead = [
      helmet?.title?.toString()       ?? '',
      helmet?.meta?.toString()        ?? '',
      helmet?.link?.toString()        ?? '',
    ].join('\n    ');

    // 4. Inject rendered HTML into the template
    //    a) Replace the empty root div with rendered content
    //    b) Inject Helmet tags before </head>
    let output = template
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace(
        '</head>',
        `  ${helmetHead}\n  </head>`
      );

    // 5. Write output
    //    "/" → dist/index.html  (Vercel serves this automatically)
    const outDir  = path.resolve(__dirname, 'dist');
    const outFile = url === '/'
      ? path.join(outDir, 'index.html')
      : path.join(outDir, url.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, output, 'utf-8');
    console.log(`[prerender] Written → ${path.relative(__dirname, outFile)}`);
  }

  console.log('[prerender] Done.');
}

run();
