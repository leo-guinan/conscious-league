// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // GitHub Pages will be configured via the base path if needed
  // If deploying to username.github.io/repo-name, uncomment and set:
  // base: '/repo-name',
});
