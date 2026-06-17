import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // redirect all 404s back to index.html so React Router handles the route
    historyApiFallback: true,
  },
  preview: {
    // same fix for `vite preview`
    historyApiFallback: true,
  },
})
