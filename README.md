# landing-me

Personal landing page for Allison Barrezueta. Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest + Testing Library |

Requires Node >= 20.9.

## Structure

```
src/
  app/            routes, metadata, sitemap/robots, server actions (contact)
  components/
    layout/       header, footer, theme toggle
    sections/     hero, projects, stack, about, education, contact
    ui/           section, reveal, tag, contact-form
  hooks/          use-in-view, use-theme, use-contact-form
  data/           typed content: profile, stack, education, socials, nav
  lib/            github fetcher, contact schema, rate limiter
```

Edit content in `src/data/`; components stay free of copy.

## Contact form

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified Resend sender), `CONTACT_TO_EMAIL` (where messages arrive)
- `NEXT_PUBLIC_CONTACT_EMAIL` (optional): shown in the footer and as a `mailto:` fallback when sending fails

Without these the form shows a "not configured" message instead of failing silently.

## Projects

The Projects section lists your top public non-fork repos from GitHub (`profile.github`), cached for 1 hour. It hides itself if GitHub is unreachable.
