import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],

  // Client build → dist/client/  |  SSR build → dist/server/
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',
    // SSR build: produce a single CJS/ESM bundle, not an asset-hashed bundle
    ...(isSsrBuild && {
      ssr: true,
      rollupOptions: {
        input: 'src/entry-server.jsx',
      },
    }),
  },

  server: {
    port: 5173,
    middlewareMode: false,
  },

  preview: {
    port: 4173,
  },

  appType: 'spa',
}))
