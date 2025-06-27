import { defineConfig } from 'vite';

// Minimal config: set demo as root and allow importing workspace files
export default defineConfig({
  root: 'demo',
  server: {
    fs: {
      // allow reading files from one level up (src directory)
      allow: ['..']
    }
  }
});
