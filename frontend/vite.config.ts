// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Root directory for the project
  publicDir: 'public', // Optional: put static assets like favicon here
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean old files before build
  },
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
