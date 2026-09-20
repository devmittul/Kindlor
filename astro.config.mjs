import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kindlor.com',
  adapter: vercel(),
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
