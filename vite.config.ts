import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    host: true,
    hmr: {
      port: 5173,
      host: 'localhost'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  optimizeDeps: {
    include: [
      '@dnd-kit/core',
      '@dnd-kit/sortable',
      '@tiptap/react',
      '@tiptap/starter-kit',
      '@tiptap/extension-image',
      'react-hook-form',
      'zod'
    ]
  }
});