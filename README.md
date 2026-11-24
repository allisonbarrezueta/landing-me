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

## Email deliverability checklist

Code side (already done): sent from your verified domain with the visitor only in `Reply-To`, `[Landing Page]` subject prefix, plain-text + HTML parts with escaped content, idempotent sends with one retry.

DNS side (you must do this in your domain provider; Resend shows the exact records):

1. **SPF** and **DKIM**: add the records Resend gives you under Domains and wait for "Verified".
2. **DMARC**: add a TXT record on `_dmarc.yourdomain.com`, e.g. `v=DMARC1; p=none; rua=mailto:you@yourdomain.com`, then tighten to `quarantine` once reports look clean.
3. Send from a subdomain (e.g. `mail.yourdomain.com`) to protect your main domain's reputation.
4. Set `CONTACT_FROM_EMAIL` to an address on that verified domain; never use the visitor's address as sender.
5. Send yourself a test and mark it "Not spam" once; add the sender to your contacts so replies stay out of spam.
