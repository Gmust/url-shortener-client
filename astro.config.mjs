import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*']
  }), auth()],
  security: {
    checkOrigin: true
  }
});