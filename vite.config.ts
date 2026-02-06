import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    server: {
        port: 3000
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Split large data files into separate chunks
                    if (id.includes('src/data/grammar-exercises')) return 'grammar-data';
                    if (id.includes('src/data/vocabulary')) return 'vocabulary-data';
                    if (id.includes('src/data/editing-exercises')) return 'editing-data';
                    // Group MUI + Emotion into a cacheable vendor chunk
                    if (id.includes('@mui/') || id.includes('@emotion/')) return 'mui-vendor';
                }
            }
        },
        // Increase chunk size warning limit since we're intentionally splitting
        chunkSizeWarningLimit: 500,
        // Use esbuild minification (default and faster than terser)
        minify: 'esbuild'
    }
})
