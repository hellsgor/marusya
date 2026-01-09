import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
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
          // React core - отдельно для лучшего кэширования
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react/index')
          ) {
            return 'react-core';
          }

          // React DOM - отдельно
          if (id.includes('react-dom')) {
            return 'react-dom';
          }

          // React Router
          if (id.includes('react-router')) {
            return 'react-router';
          }

          // Redux
          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'redux-vendor';
          }

          // UI библиотеки
          if (id.includes('swiper')) {
            return 'ui-vendor';
          }

          // Формы и валидация
          if (id.includes('react-hook-form') || id.includes('zod')) {
            return 'forms-vendor';
          }

          // react-player НЕ группируем отдельно - пусть Vite решает сам
          // Это избежит циклических зависимостей

          // Остальные node_modules библиотеки
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
