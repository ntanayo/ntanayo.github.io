import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set your production site URL (used for sitemap, RSS, canonical links)
  site: 'https://ephilanti-arch.github.io',
  // Base path for GitHub Pages (the repository name)
  base: '/ntanayo',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
