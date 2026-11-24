import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repository>/, so assets must be relative.
  base: './',
  resolve: { preserveSymlinks: true },
})
