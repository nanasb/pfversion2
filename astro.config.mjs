import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  output: 'server',
  adapter: vercel(),
  adapter: netlify(),
});

