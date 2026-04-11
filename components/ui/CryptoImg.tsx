// Renders cryptocurrency logos from the cryptocurrency-icons CDN.
// Source: github.com/spothq/cryptocurrency-icons (color SVGs)
// Covers all major tokens; unknown symbols fall back to a muted monogram.

const CDN =
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color";

// Per-symbol overrides for tokens not in spothq/cryptocurrency-icons
const OVERRIDES: Record<string, string> = {
  cake: "https://cryptologos.cc/logos/pancakeswap-cake-logo.svg",
  busd: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg",
};

// Symbols known to exist in spothq/cryptocurrency-icons
const KNOWN: Set<string> = new Set([
  "btc", "eth", "usdt", "usdc", "bnb", "xrp", "doge",
  "uni", "ltc", "etc", "ada", "sol", "dot", "avax",
  "matic", "link", "dai", "shib", "trx", "atom",
]);

interface Props {
  symbol: string; // e.g. "BTC", "ETH", "USDT"
  size?: number;
  className?: string;
}

export function CryptoImg({ symbol, size = 20, className = "" }: Props) {
  const lower = symbol.toLowerCase();
  const overrideUrl = OVERRIDES[lower];
  if (overrideUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={overrideUrl}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className={`shrink-0 rounded-full ${className}`.trim()}
      />
    );
  }
  if (!KNOWN.has(lower)) {
    // Muted monogram fallback for unlisted tokens (e.g. FDUSD)
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--bg-elevated)] border border-[var(--divider)] font-mono font-bold text-[var(--text-subtle)] ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
        aria-hidden="true"
      >
        {symbol.slice(0, 2)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${CDN}/${lower}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`shrink-0 rounded-full ${className}`.trim()}
    />
  );
}
