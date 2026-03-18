# EthereumClassicDAO.org

Institutional website for **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC (Filing ID 2025-001671865). The legal entity behind Ethereum Classic's Olympia DAO governance infrastructure.

**URL:** [ethereumclassicdao.org](https://ethereumclassicdao.org)

## Features

- Institutional positioning for the largest Proof-of-Work smart contract platform
- Live network stats (Blockscout API v2 + CoinGecko, ISR 10min)
- 7 pages: Home, About, Governance, Ecosystem, Transparency, Contact, Privacy
- 30+ section components across page-scoped directories
- Light/dark theme toggle
- Scroll-triggered fade-up animations (Intersection Observer)
- Responsive, mobile-first

## Pages

| Page | Content |
|------|---------|
| **Home** | Mission hero, ETC overview (live data), network stats, governance process, what we do, how we help, Olympia ecosystem |
| **About** | Organization, infrastructure, leadership (headshots), values, roadmap |
| **Governance** | How it works, treasury funding flow, safeguards, FAQ |
| **Ecosystem** | Network config (EVM versions), developer tooling (8 categories), clients, mining, equipment (ASIC+GPU), institutional products |
| **Transparency** | Principles, reports, documents |
| **Contact** | Registered agent, engagement channels |
| **Privacy** | Legal/compliance |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5 (strict) |
| Styling | Tailwind CSS 4, CSS custom properties |
| Icons | Lucide React |
| Package Manager | pnpm 10 |

## Quick Start

```bash
pnpm install
pnpm dev          # Dev server (Turbopack)
pnpm build        # Production build
pnpm lint         # ESLint
pnpm typecheck    # TypeScript check
```

## Design

- **Brand:** Olympia tokens — `#00ffae` green accent, `#0a0f10` dark background
- **Logo:** ETC diamond (pure vector SVG from olympia-brand repo)
- **Fonts:** Inter (body) + JetBrains Mono (code)
- **Tone:** Institutional, confident, factual — like Solana Foundation or Stellar Enterprise Fund

## Related Repos

- [olympia-brand](https://github.com/olympiadao/olympia-brand) — Design tokens, logos, favicons
- [olympiadao-org](https://github.com/olympiadao/olympiadao-org) — Olympia DAO landing page
- [olympiatreasury-org](https://github.com/olympiadao/olympiatreasury-org) — Treasury dashboard
- [olympia-app](https://github.com/olympiadao/olympia-app) — Governance UI
- [olympia-governance-contracts](https://github.com/olympiadao/olympia-governance-contracts) — Governor, Executor, ECFPRegistry
- [olympia-treasury-contract](https://github.com/olympiadao/olympia-treasury-contract) — Treasury vault
