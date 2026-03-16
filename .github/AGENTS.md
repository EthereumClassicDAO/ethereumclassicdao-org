---
description: "Maintain the Ethereum Classic DAO LLC corporate website — a static Next.js 16 site with Olympia brand tokens."
---

# Copilot Coding Agent — ethereumclassicdao-org

You maintain the corporate website for the Ethereum Classic DAO LLC, a Wyoming-registered DAO LLC serving as an off-chain administrative executor for OlympiaDAO.

## Validation (run before every PR)

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Tech Stack

- **Runtime:** Node.js 24.x LTS
- **Framework:** Next.js 16.x (App Router, Turbopack)
- **Styling:** Tailwind CSS 4.x with CSS-first `@theme inline` config
- **Icons:** Lucide React
- **Package Manager:** pnpm 10.x
- **No wallet/blockchain deps** — this is a static corporate site

## Code Style

- TypeScript strict mode, no `any`
- Tailwind classes only — no CSS modules, no styled-components
- Section-based composition: each page imports independent section components
- `cn()` from `lib/utils.ts` for class merging (clsx)
- Mobile-first responsive with `sm:` / `md:` / `lg:` breakpoints

### Component Example

```tsx
import { FileText } from "lucide-react";

export function ReportsSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Public Reports
        </h1>
        <p className="mt-4 text-lg text-[var(--text-muted)]">
          Description text here.
        </p>
      </div>
    </section>
  );
}
```

## Brand Rules

- Primary green: `var(--brand-green)` / `#00ffae`
- Dark background: `var(--bg-default)` / `#0a0f10`
- Card pattern: `bg-[var(--bg-card)]` + `border-[var(--border-default)]` + `rounded-xl`
- Hover lift: `hover:-translate-y-0.5` with `transition-all duration-200`
- No amber accent (reserved for treasury)

## Content Rules

- All LLC scope and responsibilities from ECIP-1114 only
- No "Demo · Mordor" badges — this is the real legal entity
- Wyoming SOS Filing ID: 2025-001671865
- Registered Agent: 30 N Gould St Ste R, Sheridan, WY 82801

## Boundaries

- **Protected files:** `app/globals.css` (design tokens), `public/logo.svg`, `public/favicon.*`
- **No new pages** without explicit approval
- **No client-side data fetching** — static content only
- **No wallet connections** — no wagmi, no viem, no RainbowKit
