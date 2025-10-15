import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
	 test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.{js,ts,jsx,tsx}'], // Include source files for coverage
      exclude: ['src/index.ts'], // Example: Exclude a specific file
    },
  },
})
