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
                manualChunks: {
                    // Split large data files into separate chunks
                    'grammar-data': ['./src/data/grammar-exercises'],
                    'vocabulary-data': ['./src/data/vocabulary'],
                    'editing-data': ['./src/data/editing-exercises'],
                    // Split vendor libraries
                    'mui-core': ['@mui/material', '@mui/icons-material'],
                }
            }
        },
        // Increase chunk size warning limit since we're intentionally splitting
        chunkSizeWarningLimit: 600,
        // Use esbuild minification (default and faster than terser)
        minify: 'esbuild'
    }
})
