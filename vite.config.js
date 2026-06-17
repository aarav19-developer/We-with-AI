import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    // This is the correct Vite way to fix 404 on page refresh with React Router
    // It rewrites every request that doesn't match a file back to index.html
    middlewareMode: false,
  },

  preview: {
    port: 4173,
  },

  // This tells Vite's built-in static server to serve index.html for any unmatched route
  appType: 'spa',   // ← KEY FIX: tells Vite this is a Single Page App
})
