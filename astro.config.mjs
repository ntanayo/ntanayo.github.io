import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set your production site URL (used for sitemap, RSS, canonical links)
  // Replace the placeholder below with your actual GitHub Pages URL, for example:
  //   https://ephilanti-arch.github.io/ntanayo
  // If you don't have a public URL yet, set to an empty string or remove the `site` field,
  // but some features (sitemap, RSS) expect a valid absolute URL.
  site: 'https://ephilanti-arch.github.io/ntanayo',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
