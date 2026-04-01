## Portfolio Rebuild (Next.js)

The new personal site is implemented in `site-next` using Next.js (App Router + TypeScript).

## Local Development

```bash
cd site-next
npm install
npm run dev
```

## Production Build

```bash
cd site-next
npm run build
```

## Netlify Deployment

Deployment is configured from the repository root via `netlify.toml`.

- Base directory: `site-next`
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

In Netlify:

1. Connect this repository.
2. Keep build settings from `netlify.toml` (recommended).
3. Trigger deploy.

## Content Editing

- Work entries: `site-next/content/work/*.mdx`
- Event entries: `site-next/content/events/*.mdx`
- Content editing guide: `site-next/content/README.md`
- Event preview images: `site-next/public/events/*.svg`

The homepage reads content directly from MDX files using frontmatter and body text, so adding/updating entries does not require component changes.
