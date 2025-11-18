# ntanayo

A blog (Astro + TypeScript)

## Local development

Requirements: Node 18+ (we used 20), npm.

Install and run locally:

```bash
npm ci
npm run dev
```

Open http://127.0.0.1:3000 (Astro default)

## Build

```bash
npm run build
```

## Files added

- `package.json` — project scripts and devDependencies
- `astro.config.mjs` — Astro config
- `src/` — site source (posts, templates, data)
- `.github/workflows/deploy.yml` — CI that builds and deploys to `gh-pages`

## How to publish (exact commands)

```bash
# optional: create feature branch
git checkout -b add-astro

# add files
git add package.json astro.config.mjs src .github/workflows/deploy.yml README.md
git commit -m "Add Astro + TypeScript blog skeleton"
git push origin add-astro
```

Merge to `main` on GitHub or push directly to `main`. The workflow triggers on pushes to `main` and will publish to the `gh-pages` branch.

## Replace placeholders

- `src/data/site.ts`: set `url`, `googleAnalytics`, and `utterancesRepo`.
- `astro.config.mjs`: replace `https://<USERNAME>.github.io/ntanayo` with your actual URL if known.

## Utterances

1. Go to https://utteranc.es and install on this repository.
2. Set `site.utterancesRepo` in `src/data/site.ts` to `OWNER/REPO` (e.g., `ephilanti-arch/ntanayo`).

## Troubleshooting

- If the build fails on CI, check Actions logs and try `npm ci` and `npm run build` locally to reproduce.
- If comments don't appear, ensure Utterances is installed on the repo and `site.utterancesRepo` is set.
- If GA not collecting, replace `G-XXXXXXXXXX` with your measurement ID.

<!-- legacy placeholder removed -->
