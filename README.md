# Innerkracht

Productiegerichte Nuxt 4-redesign voor de headless WordPress-site van Innerkracht.

## Requirements

Node.js 20+ en pnpm 10+.

## Installation

```bash
pnpm install
```

## Environment variables

Kopieer `.env.example` naar `.env`. Publieke site- en WordPress-URL’s gebruiken `NUXT_PUBLIC_`; credentials nooit.

## Local development

```bash
pnpm dev
```

## WordPress configuration

Activeer `wordpress/innerkracht-headless.php`. WordPress blijft de redactionele bron voor pagina’s, posts, media, begeleidingen, ervaringen en FAQ’s. Zie `docs/architecture.md`.

## Content editing

De niet-technische handleiding staat in `docs/cms-guide-nl.md`.

## Testing

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm test:e2e
```

## Production build

```bash
pnpm build
pnpm preview
```

## Deployment

Zie `docs/deployment.md` en `docs/redirect-map.md`.

## Troubleshooting

Bij een onbereikbare WordPress API toont de blog een gecontroleerde lege staat. Controleer `WORDPRESS_API_URL`. Zonder productie-mailadapter geeft het formulier bewust een duidelijke fout met rechtstreeks e-mailadres; dit voorkomt stil verlies van berichten.
