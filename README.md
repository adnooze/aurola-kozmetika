# Aurola – prirodna kozmetika za kosu

Web stranica za [@aurolakozmetika](https://www.instagram.com/aurolakozmetika/), izrađena u [Astro](https://astro.build).

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statični build u dist/
```

## Struktura

- `src/pages/` – početna, proizvodi (lista + stranica za svaki proizvod), rezultati, katalog, o nama
- `src/data/products.ts` – svi proizvodi, cijene, opisi i sastavi (iz Aurola kataloga)
- `src/data/results.ts` – rezultati korisnica
- `src/assets/instagram/` – slike s Instagram profila
- `src/assets/products/` – fotografije proizvoda izrezane iz kataloga

Narudžbe idu putem Instagram DM-a (`https://ig.me/m/aurolakozmetika`).

## Objava na GitHub Pages

Stranica radi s korijena domene. Za GitHub Pages (pod-putanja `/aurola-kozmetika`) build pokreni s:

```bash
BASE_PATH=/aurola-kozmetika npm run build
```
