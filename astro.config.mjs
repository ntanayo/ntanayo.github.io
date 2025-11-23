import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set your production site URL (used for sitemap, RSS, canonical links)
  site: 'https://ntanayo.github.io',
  // No base path needed for root domain deployment
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
