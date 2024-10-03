import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import auth from 'auth-astro';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
// Import /serverless for a Serverless SSR site
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind(), react(), icon({}), auth()],
  output: 'server',
  adapter: vercelServerless(),
});
