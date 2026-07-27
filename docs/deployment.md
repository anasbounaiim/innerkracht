# Deployment

1. Installeer Node 20+ en pnpm 10.
2. Kopieer `.env.example` naar `.env` en vul productie-URL’s in.
3. Installeer en activeer `wordpress/innerkracht-headless.php` in WordPress.
4. Configureer een beveiligd mail-endpoint en vervang de tijdelijke contactadapter.
5. Voer `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm test` en `pnpm build` uit.
6. Deploy `.output` op een Node/Nitro-compatibele host achter HTTPS.
7. Configureer redirects uit `docs/redirect-map.md`, controleer canonical URLs en verstuur de sitemap.
8. Controleer formulierbezorging, spammap, consent en juridische pagina’s op productie.

Benodigde secrets horen alleen in de hostingomgeving. Maak geen `NUXT_PUBLIC_` variabelen van wachtwoorden.
