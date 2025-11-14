import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react(), svgr(), tsconfigPaths()],
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'], // React и основные библиотеки
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'], // Redux
          'ui-vendor': ['swiper'], // UI библиотеки
          'utils-vendor': ['react-hook-form', 'react-player', 'zod', 'clsx'], // Другие библиотеки
        },
      },
    },
  },
});
