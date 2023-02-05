import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), purgecss(), prefetch()]
});