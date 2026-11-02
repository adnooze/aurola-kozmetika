// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH se postavlja samo za GitHub Pages (npr. /aurola-kozmetika).
// Na Netlify/Vercel/vlastitoj domeni stranica radi s korijena "/".
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://adnooze.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
});
