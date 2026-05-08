# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

No test runner is configured.

## Stack

- **Next.js 16** + **React 19** + **Tailwind v4** — APIs differ from training data; consult `node_modules/next/dist/docs/` before writing Next-specific code.
- **Framer Motion** for animations, **Lucide React** for icons.
- No `next-intl` — i18n is hand-rolled (see below). Don't add it without asking.
- `params` in route handlers/pages is a **Promise** — always `await params`.

## Architecture

### i18n (hand-rolled, server-only)
- Locales: **`mne`** (Montenegrin, default) and **`eng`** (English) — not `me`/`en`. Defined in [lib/i18n.ts](lib/i18n.ts).
- Message files: [messages/en.json](messages/en.json) and [messages/me.json](messages/me.json) (mapped in `lib/i18n.ts`).
- `getDictionary(locale)` is `server-only`. Pass dict slices as props to client components — never import server-only modules client-side.
- Locale routing via [proxy.ts](proxy.ts) (Next 16's renamed `middleware.ts`). Matcher excludes `_next`, `favicon.ico`, and paths with file extensions; everything else is redirected based on `accept-language`.
- All routes live under `app/[locale]/`. Root [app/layout.tsx](app/layout.tsx) is locale-agnostic; [app/[locale]/layout.tsx](app/[locale]/layout.tsx) loads the dictionary and renders Navbar/Footer.

### Services data model
[lib/services.ts](lib/services.ts) is the single source of truth for the 7 services:
- `ServiceKey` (camelCase) ↔ URL slug (kebab-case) via `SERVICE_SLUGS`
- `SERVICES_ORDER` controls homepage section order — `paymentSystems` is in `SERVICE_SLUGS` but intentionally excluded here
- Use `slugToKey(slug)` in `[service]` dynamic routes; copy is keyed by `ServiceKey` in the dictionary JSON

### Styling
Tailwind v4 with no `tailwind.config`. All brand tokens are CSS variables in [app/globals.css](app/globals.css):
- Semantic tokens (`--color-heading`, `--color-body`, `--color-surface`, etc.) switch between light/dark via `[data-theme="dark"]` on a root element.
- Brand palette: `brand-teal` (#00C9A7), `brand-violet` (#5B4FE9), `brand-cyan` (#00BFFF), `brand-orange` (#E8523A).
- Custom utilities defined via `@utility`: `bg-gradient-hero`, `bg-gradient-wwd`, `text-gradient-brand`, `shadow-card`.
- Use tokens, not hard-coded hex values.

### Dark mode
Toggled by setting `data-theme="dark"` on a root element (see [components/layout/ThemeToggle.tsx](components/layout/ThemeToggle.tsx)). The `@custom-variant dark` in globals.css targets `[data-theme="dark"]`, not `prefers-color-scheme` or a `dark` class.

### Component conventions
- [components/ui/Button.tsx](components/ui/Button.tsx) — polymorphic: renders a `<Link>` when `href` is provided, `<button>` otherwise. Variants: `primary`, `teal`, `ghost`.
- Navbar receives `locale` + a `nav` dict slice; Footer receives `locale` + `dict` + `navDict`.
- Components under `components/services/` are shared across the `/what-we-do` index and all service subpages.
