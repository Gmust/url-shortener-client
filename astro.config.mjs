import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
  })],
  security: {
    checkOrigin: true,
  },
  output: 'server'
});
