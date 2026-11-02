import type { ImageMetadata } from 'astro';

export const SITE = {
  name: 'Aurola',
  tagline: 'Prirodna kozmetika za kosu',
  description:
    'Aurola – prirodna kozmetika za kosu. Proizvodi na prirodnoj bazi koji pomažu ženama da imaju jaču, gušću i ljepšu kosu koja brže raste i ne opada.',
  instagram: 'https://www.instagram.com/aurolakozmetika/',
  handle: '@aurolakozmetika',
  dm: 'https://ig.me/m/aurolakozmetika',
  followers: '26,8 tis.',
  shipping: '9 KM',
};

/** Prefiksira internu putanju s base URL-om (potrebno za GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpg,png}', {
  eager: true,
});

/** Vraća sliku iz src/assets po putanji, npr. "products/serum-5-ulja.jpg". */
export function img(path: string): ImageMetadata {
  const found = images[`../assets/${path}`];
  if (!found) throw new Error(`Slika nije pronađena: ${path}`);
  return found.default;
}

export function price(value: number): string {
  return `${value.toLocaleString('bs-BA', { minimumFractionDigits: value % 1 ? 2 : 0, maximumFractionDigits: 2 })} KM`;
}
