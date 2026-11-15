# Tied landing

Astro 5 + Tailwind v4 static site, same shape as the Catographer landing. English and Russian. Intended for GitHub Pages at `https://disin8.github.io/tied/`.

The copy describes Tied as it works in the app: the wedding record stays on the iPhone, there is no Tied account or server, iCloud sharing is opt-in, and the venue-day handoff omits allergy notes, phones and emails. Privacy and Terms are written so the developer does not promise a planning service, medical safety, payments, or the ability to restore deleted data.

## Develop

```
npm install
npm run dev
npm run build
```

## Before going live

1. `src/config.ts` — set `APP_STORE_URL` when the App Store page exists. Until then the button says “Coming soon”.
2. If the Pages URL is not `https://disin8.github.io/tied/`, change `site` and `base` in `astro.config.mjs` and `SITE` / `BASE` in `src/config.ts`, then update `public/robots.txt` and `public/sitemap.xml`.
3. Read `src/pages/privacy.astro` and `src/pages/terms.astro` against the current app before submission. They are a practical draft for the store listing, not a lawyer’s opinion.

## Deploy

Push to `main`. Settings → Pages → Source: **GitHub Actions** (`.github/workflows/static.yml`). Commit `package-lock.json` so `npm ci` works.

The App should link to `/tied/privacy/`, `/tied/terms/` and `/tied/support/`.
