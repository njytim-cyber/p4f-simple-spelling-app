import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    css: true,
    include: ['tests/**/*.test.{js,ts,tsx}'], // Only .test.* files (not .spec.*)
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'tests/e2e/**', // Exclude E2E directory (Playwright tests)
    ],
  },
});
