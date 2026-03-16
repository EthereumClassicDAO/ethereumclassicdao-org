# Ethereum Classic DAO — Institutional Website

## Project Context

Institutional website for **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC (Filing ID 2025-001671865). The LLC is the organizational entity behind Ethereum Classic's Olympia DAO, building governance infrastructure for the largest Proof-of-Work smart contract platform.

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
  page.tsx                → Home (mission, positioning, ecosystem)
  about/page.tsx          → About (org description, institutional infrastructure)
  transparency/page.tsx   → Disclosures (reporting framework, documents)
  contact/page.tsx        → Contact (registered agent, ecosystem properties)
  globals.css             → Design tokens + Tailwind @theme
components/
  ui/
    FadeIn.tsx            → Scroll-triggered fade-up animation (client, IntersectionObserver)
    SectionDivider.tsx    → Gradient line divider between sections
    PropertyCard.tsx      → Shared link card (icon, name, desc, arrow, hover)
  sections/
    NavHeader.tsx         → Sticky nav, backdrop-blur, active link green dot indicator
    FooterSection.tsx     → 4-column footer with SectionDivider + section-alt
  home/
    MissionSection.tsx    → Hero gradient, metric cards, entity identity
    PositioningSection.tsx → Icon cards (Shield, Building2, Scale), section-alt
    EcosystemSection.tsx  → PropertyCard grid (Vote, Landmark, LayoutDashboard, Github)
  about/
    AboutSection.tsx      → Hero-gradient-light, callout, icon list
    InfrastructureSection.tsx → Icon cards grid, section-alt
  transparency/
    ReportsSection.tsx    → Icon cards (Receipt, ClipboardCheck, Calculator, etc.)
    DocumentsSection.tsx  → Badge cards (available/pending), 2-col grid
  contact/
    RegisteredAgentSection.tsx → Address card with MapPin icon
    ChannelsSection.tsx   → PropertyCard grid (same as EcosystemSection)
lib/
  utils.ts                → cn() helper (clsx)
public/
  logo.svg                → Olympia logomark (green)
  favicon.ico + assets    → From olympia-brand
  og-image.png            → OG image
```

## Design System

- **Brand:** Olympia tokens — `#00ffae` green accent, `#0a0f10` dark background
- **Surfaces:** Neutralized — `#111111` surface, `#181818` elevated, `#1a1a1a` borders
- **Fonts:** Inter (body) + JetBrains Mono (code) via next/font/google
- **Heroes:** Radial green glow (`hero-gradient` / `hero-gradient-light`), grid overlay optional
- **Cards:** `rounded-xl bg-[var(--bg-elevated)] border border-[rgba(255,255,255,0.06)]`, hover: border brightens + `hover:-translate-y-0.5`
- **Icons:** Lucide 20px on 40x40 `rounded-lg bg-[rgba(0,255,174,0.08)]` backgrounds — every card/list item gets a contextual icon
- **Sections:** Alternating `--background` / `.section-alt` with `SectionDivider` gradient lines between
- **Metrics:** Green left border (`border-l-2 border-[var(--brand-green)]`), `font-mono` labels, `text-2xl font-bold` values
- **Badges:** `.badge-available` (green pill) / `.badge-pending` (muted pill)
- **Animations:** `FadeIn` wrapper (Intersection Observer, `translateY(20px)→0`, 700ms ease-out, staggered delays, respects `prefers-reduced-motion`)
- **Nav:** `backdrop-blur-md`, active link gets green dot indicator via `usePathname()`
- **Hover:** `hover:text-white` (not `hover:text-green`)
- **Tone:** Confident, institutional, understated — like Solana Foundation or Stellar Enterprise Fund
- **No "Demo · Mordor" badge** — this is the real legal entity

## Positioning & Copy Guidelines

- **ETC unique claim:** "The largest Proof-of-Work blockchain with native smart contracts"
- **Regulatory:** CLARITY Act "digital commodity" classification is *pending* — use "positioned for" or "candidate for"
- **Grayscale:** ETCG is a trust, NOT an ETF. Say "regulated securities exposure" not "ETF pipeline"
- **Mining:** "170+ TH/s" and "absorbed significant Ethereum mining infrastructure post-Merge" are safe claims
- **Naming:** "Ethereum Classic's Olympia DAO" (not "OlympiaDAO")
- **Never say:** "subordinate to on-chain governance", "off-chain administrative executor", SHALL/MUST NOT, ECIP-1114 references in rendered content, hash-bound tuples, governance pipeline
- **Tone:** Confident but factual. No hype. No superlatives. Let the facts speak.

## Cross-Site Links

| Property | URL |
|----------|-----|
| Olympia DAO | https://olympiadao.org |
| Olympia Treasury | https://olympiatreasury.org |
| Governance App | https://app.olympiadao.org |
| GitHub | https://github.com/EthereumClassicDAO |

## Boundaries

### Always Do
- Follow Olympia brand tokens for colors, spacing, typography
- Use section-based composition pattern (each page imports section components)
- Keep institutional tone — professional, factual, no hype
- Run `pnpm lint && pnpm typecheck` before committing

### Ask First
- Adding new pages beyond the 4-page structure
- Adding client-side JavaScript beyond NavHeader mobile menu
- Changing LLC registration details or legal content

### Never Do
- Add wallet connections or blockchain interactions (this is a static corporate site)
- Add "Demo · Mordor" badges (real legal entity)
- Use amber accent (reserved for treasury across the suite)
- Add card shadows or green glowing icons
- Reference ECIP-1114 in rendered content
- Commit .env files or credentials
