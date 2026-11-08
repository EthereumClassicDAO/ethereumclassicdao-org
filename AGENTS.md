# AGENTS.md — ethereumclassicdao-org

Institutional website for **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC
(Filing ID 2025-001671865): the standing legal entity that maintains and funds
Ethereum Classic's public goods (the Core-Geth client, the bootnodes and the peer
discovery lists) as the funder of last resort. Ethereum Classic's core developers
and community contributors do the day-to-day work.

- **Domain:** ethereumclassicdao.org
- **Repo:** `EthereumClassicDAO/ethereumclassicdao-org`
- **Branch:** work on `main`; it deploys.

---

## Setup and commands

```bash
pnpm install       # install dependencies
pnpm dev           # dev server (Turbopack)
pnpm build         # production build, then scripts/sitemap.mjs writes public/sitemap.xml
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
  ui/                   → FadeIn, SectionDivider, PropertyCard, Accordion, Cite,
                          ActivationCountdown, HashrateChart
  sections/             → NavHeader, FooterSection
  <page>/               → section components, one directory per page
lib/
  utils.ts              → cn() class-merge helper
  network-links.ts      → shared URLs, and the status lines pages render
  *.ts                  → page data: public goods, maintenance record, Olympia
                          ECIPs, and ECIP-1121's EIP rows
  api/                  → live data fetchers (see below)
public/
  llms.txt              → machine-readable site summary; keep in sync with page copy
  sitemap.xml           → written by scripts/sitemap.mjs during `pnpm build`; not tracked
scripts/
  sitemap.mjs           → dates each sitemap entry by its page's content (see Live data)
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

**Mark every element that renders a live figure with `data-live`.** After
`next build`, `scripts/sitemap.mjs` compares each page it built with the same
page live: the title, description, canonical, robots rules, structured data, and
the text and links inside `<main>`. An unchanged page keeps the date the live
sitemap gives it; a changed, new or unreadable page takes the build's time. It
leaves out every element carrying `data-live`, with its contents, so a figure
that changes on revalidation is not counted as an edit. A live figure without
the attribute restamps its page on every deploy, and an editorial sentence
inside a `data-live` element is never compared, so mark the value rather than
the section around it.

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
- **Olympia is a proposal: its ECIPs are drafts, and the ECIPs repository is the
  authority.** Write it in proposal voice ("would", "as proposed"), with its status
  in `OLYMPIA_STATUS` rather than in prose. As proposed, it advances the execution
  layer through Dencun, Pectra and Fusaka, and carries that work into Glamsterdam.
  Do **not** claim "full Glamsterdam parity": ECIP-1121 adopts part of
  Glamsterdam's set, and its EIP lists come from ECIP-1121's own rows.
- **Activation:** targeted for 2027. The activation *block* is TBD, and the
  countdown's target (`OLYMPIA_TARGET_ISO`) is a placeholder, not an activation date.
- **Clients:** Core-Geth is the recommended client to run, a go-ethereum
  derivative released and maintained in the `ethereumclassic` organization; run
  the v1.13 line. It is not native and not a plugin. Fukuii is an alternative to
  try beside it, in alpha: an EVM-compliant execution client in Scala 3 with
  pluggable consensus, continuing IOHK's Mantis client and maintained by Chippr
  Robotics LLC. Describe it from its maintainers' pages only, never as native,
  "first native client", "primary", "most popular" or Core-Geth's successor.
  Besu, Erigon, Ethrex, Go-Ethereum, Nethermind and Reth are planned ETC
  *plugins*, never "overlays", and a plugin is never counted as a client.
- **Client links** go to `/clients`, which holds across network upgrades. Olympia
  pages carry only Olympia readiness, and Olympia's own URLs appear in the
  navigation only under its Olympia menu.
- **Fees:** Ethereum Classic has no base fee before Olympia, so nothing is
  "discarded" or taken from miners. Ethereum burns its base fee; it does not fund
  Ethereum's development. Under Olympia the base fee goes to the Treasury, not to
  miner revenue. A fee figure is read from Blockscout, never typed into copy.
- **Governance:** ECIP-1113, ECIP-1114, ECIP-1117, ECIP-1118 and ECIP-1119 govern
  the Olympia governance copy; read them in the ECIPs repository before writing it.
- **The LLC and Olympia:** the LLC's relation to Ethereum Classic's Olympia DAO is
  the one ECIP-1114 states. `components/olympia/LegalWrapperSection.tsx` carries
  the site's wording, and a line on it anywhere else follows that section. It is
  legal content: ask first.
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
changing it later is one edit rather than a prose hunt. Word release links and
versions so a client's next release leaves them true, and the client cards need
no edit each release: link the release as `releases/latest`
(`CORE_GETH_LATEST_RELEASE_URL`, `FUKUII_LATEST_RELEASE_URL`), never a tag, and
recommend a range that outlives a patch. "The v1.13 line" does; v1.13.0 goes
stale the day v1.13.1 ships. A version stays where the context is that version,
such as the CVEs a v1.12 release carries and the move from it to the v1.13 line.
The same holds for any tool a page tells a reader to run.

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
| Core-Geth, clients, v1.12/v1.13, security, MESS defaults | coregeth.com, docs.coregeth.com and `ethereumclassic/core-geth` |
| The Olympia ECIPs, as the ECIPs repository defines the suite, and ECBP-1100/1110 (MESS) | the ECIPs repository |
| EIP contents and dependencies | `eips.ethereum.org` |
| Fukuii positioning and URLs | fukuii.com, docs.fukuii.com and `chippr-robotics/fukuii` |
