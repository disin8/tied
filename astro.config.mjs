import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://disin8.github.io',
  base: '/tied',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
