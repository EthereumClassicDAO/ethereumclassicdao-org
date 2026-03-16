# Copilot Instructions — ethereumclassicdao-org

## LTS Versions (CRITICAL)

| Technology | Version | Notes |
|------------|---------|-------|
| Node.js | 24.x | LTS (NOT 22 or 20) |
| Next.js | 16.x | App Router (NOT 14 or 15) |
| React | 19.x | Server Components |
| TypeScript | 5.x | Strict mode |
| Tailwind CSS | 4.x | CSS-first config |
| pnpm | 10.x | Package manager |

## Key Rules

1. **Static site** — No wallet connections, no blockchain deps, no data fetching
2. **Tailwind only** — Use CSS variables from `globals.css`, no CSS modules
3. **Section composition** — Each page imports section components, no inline sections
4. **Brand tokens** — Use `var(--brand-green)`, `var(--bg-card)`, etc. from globals.css
5. **ECIP-1114 authority** — LLC content comes from ECIP-1114 only, no reinterpretation
6. **No amber** — Amber accent is reserved for treasury site

## Validation

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Protected Files

Do not modify without explicit approval:
- `app/globals.css` (design tokens)
- `app/layout.tsx` (root layout, metadata)
- `public/` (brand assets)
- `.claude/CLAUDE.md`
