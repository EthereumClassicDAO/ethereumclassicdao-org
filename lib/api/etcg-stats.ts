// Grayscale Ethereum Classic Trust (ETCG) live data
// Yahoo Finance v6 quote — server-side, revalidated every 5 minutes
// Static fallback values sourced from 2025 10-K (Dec 31, 2025)

export interface EtcgStats {
  sharePrice: number;
  priceChangePercent: number;
  volume: number;
}

// From 10-K: 0.7850 ETC per share; 13,993,800 shares outstanding
export const ETCG_ETC_PER_SHARE = 0.785;
export const ETCG_SHARES_OUTSTANDING = 13_993_800;

// Fallback: ~28% discount to NAV as of Dec 31, 2025; ETC ≈ $9
const FALLBACK: EtcgStats = {
  sharePrice: 5.1,
  priceChangePercent: 0,
  volume: 0,
};

interface YahooQuote {
  regularMarketPrice?: number;
  regularMarketChangePercent?: number;
  regularMarketVolume?: number;
}

interface YahooResponse {
  quoteResponse?: {
    result?: YahooQuote[];
  };
}

export async function fetchEtcgStats(): Promise<EtcgStats> {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v6/finance/quote?symbols=ETCG&fields=regularMarketPrice,regularMarketChangePercent,regularMarketVolume",
      {
        next: { revalidate: 300 },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64; rv:126.0) Gecko/20100101 Firefox/126.0",
          Accept: "application/json",
        },
      },
    );
    if (!res.ok) throw new Error(`Yahoo Finance HTTP ${res.status}`);
    const data: YahooResponse = await res.json();
    const quote = data?.quoteResponse?.result?.[0];
    if (!quote) throw new Error("Empty quote response");

    return {
      sharePrice: quote.regularMarketPrice ?? FALLBACK.sharePrice,
      priceChangePercent:
        quote.regularMarketChangePercent ?? FALLBACK.priceChangePercent,
      volume: quote.regularMarketVolume ?? FALLBACK.volume,
    };
  } catch {
    return FALLBACK;
  }
}
