# Ethereum Classic DAO LLC — Corporate Website

## Project Context

Professional corporate landing page for the **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC (Filing ID 2025-001671865). The LLC serves as an off-chain administrative executor for OlympiaDAO, strictly subordinate to on-chain governance per ECIP-1114.

**Domain:** ethereumclassicdao.org
**Repo:** `EthereumClassicDAO/ethereumclassicdao-org`

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Runtime | Node.js | 24.x LTS |
| Framework | Next.js | 16.x (App Router, Turbopack) |
| UI | React | 19.x |
| Language | TypeScript | 5.x (strict) |
| Styling | Tailwind CSS | 4.x (CSS-first, `@theme inline`) |
| Icons | Lucide React | Latest |
| Package Manager | pnpm | 10.x |

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server (Turbopack)
pnpm build            # Production build
pnpm start            # Production server
pnpm lint             # ESLint
pnpm typecheck        # TypeScript strict check
```

## Project Structure

```
app/
  layout.tsx              → Root layout (fonts, metadata, NavHeader, Footer)
  page.tsx                → Home page
  about/page.tsx          → About (LLC scope per ECIP-1114)
  transparency/page.tsx   → Transparency (reports, audit trail, disclosures)
  contact/page.tsx        → Contact (registered agent, official channels)
  globals.css             → Design tokens + Tailwind @theme
components/
  sections/
    NavHeader.tsx         → Sticky nav (4 pages + external links)
    FooterSection.tsx     → Footer (cross-links, copyright, legal)
  home/                   → Home page sections
  about/                  → About page sections
  transparency/           → Transparency page sections
  contact/                → Contact page sections
lib/
  utils.ts                → cn() helper (clsx)
public/
  logo.svg                → Olympia logomark (green)
  favicon.ico + assets    → From olympia-brand
  og-image.png            → OG image
```

## Design System

- **Brand:** Olympia design tokens — `#00ffae` green accent, `#0a0f10` dark background
- **Fonts:** Inter (body) + JetBrains Mono (code) via next/font/google
- **Cards:** `rgba(0,0,0,0.35)` bg, `#1f292b` border, 14px radius, lift-on-hover
- **Tone:** Formal/institutional (more corporate than olympiadao.org)
- **No "Demo · Mordor" badge** — this is the real legal entity

## Content Authority

All LLC scope, responsibilities, prohibitions, and transparency requirements derived exclusively from **ECIP-1114** (lines 347-476). No discretionary reinterpretation.

## Cross-Site Links

| Property | URL |
|----------|-----|
| OlympiaDAO | https://olympiadao.org |
| Treasury | https://olympiatreasury.org |
| Governance App | https://app.olympiadao.org |
| GitHub | https://github.com/EthereumClassicDAO |

## Boundaries

### Always Do
- Follow Olympia brand tokens for colors, spacing, typography
- Use section-based composition pattern (each page imports section components)
- Keep content faithful to ECIP-1114 definitions
- Run `pnpm lint && pnpm typecheck` before committing

### Ask First
- Adding new pages beyond the 4-page structure
- Adding client-side JavaScript beyond NavHeader mobile menu
- Changing LLC registration details or legal content

### Never Do
- Add wallet connections or blockchain interactions (this is a static corporate site)
- Add "Demo · Mordor" badges (real legal entity)
- Use amber accent (reserved for treasury across the suite)
- Commit .env files or credentials
