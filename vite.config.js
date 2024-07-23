import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000
  },
  publicDir: 'public', // Ensures Vite serves static files from 'public' directory
});
