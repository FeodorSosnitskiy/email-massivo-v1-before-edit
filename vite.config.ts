import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',        // Абсолютные пути для обычного хостинга (измените на './' если GitHub Pages)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
