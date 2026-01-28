import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put all node_modules into a vendor chunk, but separate big ones
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-animation';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-core';
            return 'vendor-others';
          }
        },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop() || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    // Reduce report size
    reportCompressedSize: false,
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  preview: {
    port: 4173,
  },
  server: {
    port: 5173,
  },
})
