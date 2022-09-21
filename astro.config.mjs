import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://appydave.com',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dark-plus',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});

  // | 'css-variables'
  // | 'dark-plus'
  // | 'dracula-soft'
  // | 'dracula'
  // | 'github-dark-dimmed'
  // | 'github-dark'
  // | 'github-light'
  // | 'hc_light'
  // | 'light-plus'
  // | 'material-darker'
  // | 'material-default'
  // | 'material-lighter'
  // | 'material-ocean'
  // | 'material-palenight'
  // | 'min-dark'
  // | 'min-light'
  // | 'monokai'
  // | 'nord'
  // | 'one-dark-pro'
  // | 'poimandres'
  // | 'rose-pine-dawn'
  // | 'rose-pine-moon'
  // | 'rose-pine'
  // | 'slack-dark'
  // | 'slack-ochin'
  // | 'solarized-dark'
  // | 'solarized-light'
  // | 'vitesse-dark'
  // | 'vitesse-light'