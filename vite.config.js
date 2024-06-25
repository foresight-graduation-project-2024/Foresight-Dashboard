import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from "vite-plugin-eslint";
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(), 
    eslint(), 
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    })
  ],
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'react-icons': ['react-icons'],
          'apexcharts': ['react-apexcharts'],
        }
      }
    }
  }
});