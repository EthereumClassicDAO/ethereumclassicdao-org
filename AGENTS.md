# AGENTS.md — ethereumclassicdao-org

Institutional website for **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC
(Filing ID 2025-001671865). The LLC is the organizational entity behind Ethereum
Classic's Olympia DAO, building governance infrastructure for the largest
Proof-of-Work smart contract platform.

- **Domain:** ethereumclassicdao.org
- **Repo:** `EthereumClassicDAO/ethereumclassicdao-org`
- **Branch:** work on `main`; it deploys.

---

## Setup and commands

```bash
pnpm install       # install dependencies
pnpm dev           # dev server (Turbopack)
pnpm build         # production build
pnpm start         # production server
pnpm lint          # ESLint
pnpm typecheck     # tsc --noEmit
```

**Validation before every commit:** `pnpm lint && pnpm typecheck && pnpm build`.

There is **no `test` script** in `package.json`. Do not assume one exists or invent
a call to one. `lint` and `typecheck` are the only gates, plus a successful build.

## Stack

Read from `package.json`; versions below are the major series actually in use.

| Layer | Technology | Version |
|-------|------------|---------|
| Runtime | Node.js | 24.x (`engines.node: >=24`) |
| Framework | Next.js | 16.x (App Router, Turbopack) |
| UI | React | 19.x |
| Language | TypeScript | 5.x, strict |
| Styling | Tailwind CSS | 4.x (CSS-first, `@theme inline`) |
| Icons | Lucide React | latest |
| Package manager | pnpm | 10.x (`packageManager: pnpm@10.28.2`) |

## Structure

```
app/                    → routes; each page composes section components
  layout.tsx            → root layout: fonts, metadata, JSON-LD, nav, footer
  globals.css           → design tokens + Tailwind @theme (light + dark)
components/
  ui/                   → FadeIn, SectionDivider, PropertyCard, Accordion,
                          ActivationCountdown, HashrateChart
  sections/             → NavHeader, FooterSection
  <page>/               → section components, one directory per page
lib/
  utils.ts              → cn() class-merge helper
  api/                  → live data fetchers (see below)
public/
  llms.txt              → machine-readable site summary; keep in sync with page copy
```

**Composition rule:** a page imports section components. Do not inline sections
into a page file.

## Live data

The site is otherwise static, but four figures are fetched server-side with ISR
(`next: { revalidate: 3600 }`):

| Source | Module | Provides |
|---|---|---|
| Blockscout ETC | `lib/api/hashrate.ts` | network hashrate + multi-timeframe history |
| Blockscout ETC | `lib/api/pool-hashrate.ts` | per-pool share, from block attribution |
| Blockscout ETC | `lib/api/etc-stats.ts` | chain statistics |
| CoinGecko | `lib/api/*` | market data |

**Hashrate is derived, not reported.** Block difficulty ÷ the network's own
`average_block_time` from Blockscout `/stats`. There is exactly one upstream
source; 2Miners is a pool identity in the address map, not an API. Never hardcode
a hashrate figure in prose — a standing "170+ TH/s" went stale and had to be
removed. `fetchHashrate()` returns `{ths, isFallback}`; anything rendering a
fallback must label it as an estimate.

## Design system

- **Brand:** Olympia tokens — `#00ffae` green accent on dark, `#007a53` on light
- **Theme-aware:** light and dark tokens both defined in `globals.css`. Never
  hardcode `text-white` or `text-black` — use `var(--text-primary)` etc. A
  hardcoded white heading rendered at 1.00:1 on the light background.
- **Hover:** brightens toward primary text — `hover:text-[var(--text-primary)]`,
  never `hover:text-white`, never green
- **Fonts:** Inter (body) + JetBrains Mono (code) via `next/font/google`
- **Cards:** `rounded-xl bg-[var(--bg-elevated)]` + border; hover brightens border
  and `hover:-translate-y-0.5`
- **Icons:** Lucide 20px on 40×40 `rounded-lg` tinted backgrounds
- **Sections:** alternating `--background` / `.section-alt` with `SectionDivider`
- **Animation:** `FadeIn` wrapper — IntersectionObserver, staggered delays,
  respects `prefers-reduced-motion`
- **EIP badges:** violet CSS variables (`--color-violet`), linked to
  `eips.ethereum.org`. The renderers are data-driven; adding an EIP to the array
  gives it the badge and link automatically.

## Content and positioning

- **ETC claim:** the only Proof-of-Work blockchain with native EVM smart contracts;
  the largest such network by hashrate
- **Olympia:** advances the execution layer through Dencun, Pectra and Fusaka, and
  carries that work into Glamsterdam. Do **not** claim "full Glamsterdam parity" —
  ECIP-1121 includes two of Glamsterdam's seven execution-layer EIPs; the rest are
  blocked on EIP-7928 and EIP-4788 dependencies, not on Proof-of-Stake grounds.
- **Activation:** targeted for 2027. The activation *block* is TBD.
- **Clients:** Fukuii is ETC's first native client. Core-Geth is a go-ethereum
  derivative. Besu, Erigon, Ethrex, Go-Ethereum, Nethermind and Reth are ETC
  *plugins* — never "overlays".
- **Governance:** the Olympia DAO makes binding decisions via OpenZeppelin Governor
  5.x. Futarchy (ECIP-1117/1118) is an open signal layer and a Child-DAO, never
  binding.
- **Regulatory:** CLARITY Act digital-commodity classification is *pending* — write
  "positioned for" or "candidate for"
- **Grayscale:** ETCG is a trust product. The ETF conversion pipeline may be
  referenced. Do not call ETCG an ETF.
- **Naming:** "Ethereum Classic's Olympia DAO", never "OlympiaDAO"
- **Tone:** confident, institutional, understated. No hype, no superlatives.

**Never say:** "subordinate to on-chain governance", "off-chain administrative
executor", SHALL/MUST NOT, ECIP-1120 references in rendered content, hash-bound
tuples, governance pipeline.

**Write timeless.** No "future work", "coming soon", "planned post-X". Describe
what a thing is; put mutable status in a structured field such as a badge, so
changing it later is one edit rather than a prose hunt.

## Boundaries

**Protected — do not modify without explicit approval**

- `app/globals.css` — design tokens
- `app/layout.tsx` — root layout, fonts, metadata, JSON-LD
- `public/logo.svg`, `public/favicon.*`, `public/og-image.png` — brand assets,
  do not regenerate
- `tsconfig.json`, `next.config.ts` — build configuration

**Ask first**

- New pages beyond the existing route set
- Client-side JavaScript beyond the nav's mobile menu
- LLC registration details or legal content
- Dependency changes — route these to the `sentinel` agent

**Never**

- Wallet connections or blockchain interactions (wagmi, viem, RainbowKit)
- "Demo · Mordor" badges — this is the real legal entity
- Amber accent (reserved for the treasury site across the suite)
- Card shadows or green glowing icons
- Commit `.env` files, credentials, or anything under `.local/`

## Upstream sources of truth

The Olympia content on this site is downstream of specs that live elsewhere. When
they disagree, the spec wins and the site is corrected.

| Subject | Authority |
|---|---|
| Olympia ECIPs (1111–1122) | the ECIPs repository |
| EIP contents and dependencies | `eips.ethereum.org` |
| Fukuii positioning and URLs | fukuii.org and `fukuii-cli/NOTICE` |
