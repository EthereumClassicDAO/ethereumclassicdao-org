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
  sections/
    NavHeader.tsx         → Sticky nav (About, Disclosures, Contact + filing marker)
    FooterSection.tsx     → 4-column footer (Organization, Site, Ecosystem, Resources)
  home/
    MissionSection.tsx    → Entity identity, value prop, impact metrics
    PositioningSection.tsx → PoW+EVM uniqueness, institutional infra, regulatory
    EcosystemSection.tsx  → Ecosystem property links
  about/
    AboutSection.tsx      → Org description, Olympia upgrade, what we build
    InfrastructureSection.tsx → Exchanges, custody, Grayscale, mining, regulatory
  transparency/
    ReportsSection.tsx    → Reporting framework list
    DocumentsSection.tsx  → Document grid (Zcash model, available/pending status)
  contact/
    RegisteredAgentSection.tsx → Address block + Wyoming SOS link
    ChannelsSection.tsx   → Ecosystem property list
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
- **Pattern:** Flat cards (no hover lift, no shadows), `border-t` / `divide-y` dividers
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
- Add hover lifts, card shadows, or green glowing icons
- Reference ECIP-1114 in rendered content
- Commit .env files or credentials
