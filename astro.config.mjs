import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nicsonniam.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});