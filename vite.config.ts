import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  // Advanced build configuration for SEO
  build: {
    // Generate sourcemaps for debugging (disabled in prod for smaller bundle)
    sourcemap: false,
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        // Manual chunks for better caching and faster loading
        manualChunks: {
          // Core React libraries
          'vendor-react': ['react', 'react-dom'],
          // Router
          'vendor-router': ['react-router-dom'],
          // Animation libraries
          'vendor-animation': ['framer-motion'],
          // 3D libraries (lazy loaded)

          // Utility libraries
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        // Asset file naming for better caching
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
    // Target modern browsers for smaller bundle
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // Minify for production (using default esbuild which is faster and built-in)
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
  // SSR configuration (for future SSR if needed)
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  // Preview server config
  preview: {
    port: 4173,
    // host: true, // Removed to hide network URL
  },
  // Dev server config
  server: {
    port: 5173,
    // host: true, // Removed to hide network URL
  },
})
