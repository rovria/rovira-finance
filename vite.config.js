import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
