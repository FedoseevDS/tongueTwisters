import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tonguet-twisters/',
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      styles: resolve(__dirname, './src/styles'),
    },
    extensions: ['.js', '.jsx'],
  },
  server: {
    port: 5002,
  },
});
