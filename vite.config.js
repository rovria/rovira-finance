import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component', // Import SVGs as Vue components
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Vite configuration for custom elements
  build: {
    rollupOptions: {
      plugins: [
        // Add any necessary Rollup plugins here
      ],
    },
  },
  // Ensure Vue 3 components are correctly resolved
  optimizeDeps: {
    include: [],
  },
});
