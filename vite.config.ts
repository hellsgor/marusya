import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : process.env.VITE_BASE_PATH,
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://cinemaguide.skillbox.cc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            const setCookie = proxyRes.headers['set-cookie'];
            if (setCookie) {
              proxyRes.headers['set-cookie'] = setCookie.map((cookie) =>
                cookie
                  .replace(/;\s*secure/gi, '')
                  .replace(/;\s*samesite=none/gi, ''),
              );
            }
          });
        },
      },
    },
  },
  plugins: [react(), svgr(), tsconfigPaths()],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react/index')
          ) {
            return 'react-core';
          }

          if (id.includes('react-dom')) {
            return 'react-dom';
          }

          if (id.includes('react-router')) {
            return 'react-router';
          }

          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'redux-vendor';
          }

          if (id.includes('swiper')) {
            return 'ui-vendor';
          }

          if (id.includes('react-hook-form') || id.includes('zod')) {
            return 'forms-vendor';
          }

          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
