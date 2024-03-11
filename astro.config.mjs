import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: 'server',
  adapter: vercel(),
  // et moi
  buildOptions: {
    out: 'dist',
  },
});



// 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
