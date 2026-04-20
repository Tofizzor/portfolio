# Portfolio

Static portfolio site: **Vite**, **React**, **Tailwind CSS**, **React Router**. No backend—fast to host on any CDN.

## Scripts

| Command         | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Local dev server with HMR      |
| `npm run build`| Production build to `dist/`    |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint                         |

## Project structure

- `src/pages/` — route screens (`HomePage`, `ProjectsPage`, `ProjectDetailPage`, `NotFoundPage`)
- `src/components/layout/` — shell (`RootLayout`, header, footer)
- `src/components/sections/` — home sections and `ProjectCard`
- `src/components/ui/` — small primitives (`Container`, `Button`)
- `src/data/` — `site.js` (global copy) and `projects.js` (project entries + `getProjectBySlug`)
- `src/styles/index.css` — Tailwind entry + CSS variables (theme tokens)
- `public/` — static assets (`favicon.svg`, `robots.txt`, `_redirects`)

Path alias: `@/` → `src/` (see `vite.config.js` and `jsconfig.json`).

## Environment

Copy `.env.example` to `.env.production` and set **`VITE_BASE`** when deploying to a **subpath** (e.g. GitHub Pages project site at `https://user.github.io/repo-name/`). Use a value like `/repo-name/` (leading and trailing slash). The router uses `import.meta.env.BASE_URL` so assets and client routes stay aligned.

For a **custom domain** or **user** GitHub Pages (`username.github.io`), keep the default base `/`.

## SPA routing on static hosts

Client-side routes (`/projects`, `/projects/:slug`, etc.) require the host to serve `index.html` for unknown paths.

| Host              | What we use |
|-------------------|-------------|
| **Netlify**       | [`public/_redirects`](public/_redirects): `/*` → `/index.html` 200 |
| **Cloudflare Pages** | Add a `_redirects` file or **SPA fallback** in the dashboard (Settings → Builds & deployments → Redirects). |
| **GitHub Pages**  | Use a **project** build with `VITE_BASE` set, and either: (1) [`spa-github-pages`](https://github.com/rafgraph/spa-github-pages) pattern, or (2) copy `index.html` to `404.html` in your deploy step so all routes load the app. |

## Deploy

Build output is **`dist/`**. Upload to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc.).

```bash
npm run build
```

## Content

Edit **`src/data/site.js`** (name, tagline, email, socials) and **`src/data/projects.js`** (projects array). Add thumbnails under `public/` and reference paths like `/your-image.webp`.

## Mission

See [`.cursor/rules/portfolio-mission.mdc`](.cursor/rules/portfolio-mission.mdc) for positioning and collaboration notes.
