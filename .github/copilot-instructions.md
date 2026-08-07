# Copilot Instructions — ethereumclassicdao-org

Institutional website for **Ethereum Classic DAO LLC**, a Wyoming-registered DAO LLC
(Filing ID 2025-001671865), the organizational entity behind Ethereum Classic's
Olympia DAO.

This file is deliberately self-contained rather than a pointer to `AGENTS.md`.
Copilot reads `AGENTS.md` on some surfaces and not others, and this is a public
repository whose audience is not one person's toolchain — so the duplication is a
cost paid on purpose. **When this file and `AGENTS.md` disagree, `AGENTS.md` wins;
keep them in sync when either changes.**

## Validation — run before every PR

```bash
pnpm lint && pnpm typecheck && pnpm build
```

There is **no `test` script**. Do not assume one exists or invent a call to one.

## Stack

| Technology | Version | Notes |
|------------|---------|-------|
| Node.js | 24.x | `engines.node: >=24` — not 22, not 20 |
| Next.js | 16.x | App Router, Turbopack — not 14, not 15 |
| React | 19.x | Server Components |
| TypeScript | 5.x | strict mode, no `any` |
| Tailwind CSS | 4.x | CSS-first `@theme inline` |
| pnpm | 10.x | `packageManager: pnpm@10.28.2` |

## Code style

- Tailwind classes only — no CSS modules, no styled-components
- Section-based composition: a page imports section components; never inline a
  section into a page file
- `cn()` from `lib/utils.ts` for class merging
- Mobile-first responsive with `sm:` / `md:` / `lg:`

## Theme-aware colors — the most common defect

Light and dark tokens are both defined in `globals.css`. **Never hardcode
`text-white` or `text-black`.** A hardcoded white heading rendered at 1.00:1
against the light background — invisible. Use the tokens:

```tsx
className="text-[var(--text-primary)]"          // headings
className="text-[var(--text-muted)]"            // secondary copy
className="hover:text-[var(--text-primary)]"    // hover, never hover:text-white
```

Brand green inverts between themes (`#007a53` light, `#00ffae` dark), so
`var(--brand-green)` is correct in both; a literal hex is not.

## Brand rules

- Card pattern: `rounded-xl bg-[var(--bg-elevated)]` + border, hover brightens
  border with `hover:-translate-y-0.5`
- Icons: Lucide, 20px, on 40×40 tinted `rounded-lg` backgrounds
- **No amber accent** — reserved for the treasury site
- No card shadows, no green glowing icons

## Content rules

- Tone: confident, institutional, understated. No hype, no superlatives.
- Olympia advances the execution layer through Dencun, Pectra and Fusaka and
  carries that work into Glamsterdam. **Do not write "full Glamsterdam parity"** —
  ECIP-1121 takes two of Glamsterdam's seven execution-layer EIPs.
- Fukuii is ETC's first native client; Core-Geth is a go-ethereum derivative;
  Besu, Erigon, Ethrex, Go-Ethereum, Nethermind and Reth are ETC **plugins**
- Naming: "Ethereum Classic's Olympia DAO", never "OlympiaDAO"
- **Never say:** "off-chain administrative executor", "subordinate to on-chain
  governance", SHALL/MUST NOT, ECIP-1120 in rendered content
- Never hardcode a hashrate figure — it is fetched live and a hardcoded one
  went stale
- Write timeless: no "coming soon" or "future work" in prose; put mutable status
  in a badge or status field

## Boundaries

**Protected — do not modify without explicit approval**

- `app/globals.css` (design tokens)
- `app/layout.tsx` (root layout, metadata, JSON-LD)
- `public/` brand assets — `logo.svg`, `favicon.*`, `og-image.png`
- `tsconfig.json`, `next.config.ts`

**Never**

- Wallet connections or blockchain interactions — no wagmi, viem, or RainbowKit
- "Demo · Mordor" badges — this is the real legal entity
- Commit `.env` files, credentials, or anything under `.local/`

**Note:** the site is otherwise static, but it *does* fetch live chain data
server-side with ISR (`lib/api/`). "No data fetching" is not a rule here; "no
client-side data fetching" is.
