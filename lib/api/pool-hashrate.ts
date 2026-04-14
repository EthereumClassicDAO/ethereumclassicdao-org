// Per-pool ETC hashrate — derived from recent block coinbase attribution
//
// Approach: fetch the last ~500 blocks from Blockscout, count blocks per miner
// address, map known addresses to pool IDs, then scale by current network hashrate.
//
// This is chain-native data — no third-party scraping or API key needed.
// Addresses were identified from block extraData (pools embed their name there).
//
// ISR: revalidate every 3600s — matches the hashrate chart cadence.
// On any failure → returns empty record; table displays "—" gracefully.

import { fetchHashrateTHs } from "@/lib/api/hashrate";

const BLOCKSCOUT = "https://etc.blockscout.com/api/v2";

// Known ETC mining pool payout addresses → miningpoolstats pool_id
// Verified from block extraData samples (2026-04-14)
const POOL_ADDRESSES: Record<string, string> = {
  "0x406177b983c28eb720827985ef5953e8430d4e95": "f2pool",     // 七彩神仙鱼 (Discus Fish)
  "0xa6e43e5d497ce1f4d28b4270630e97308eda8b3e": "2miners",    // EthClassicPPLNS/2miners
  "0x5253b33c1313a4449bc5304a9c55b4cc2bdf2872": "k1pool",     // K1Pool.com
  "0x981217f3fcc2cd5128e01bcffaa14f0c7e729bdc": "antpool",    // Mined by AntPool
  "0xfad4a236c87880035497043f24ea58d73c3e50de": "gtpool",     // GTPool.io
  "0x66b64504341874105e989d9a9402d8e2350d48fa": "kryptex",    // pool.kryptex.com
  "0x6364c971f636b14fc7fdb5e3ccd0d8c396870328": "binance",    // FRA1/pool.binance.com
  "0x35aa26bbfe74714b38ef668e36f986daac80846a": "2miners",    // EthClassicSOLO/2miners (same pool)
  "0x6e4f3f1c81b7016c3deb8b2d434209b926d21aa2": "viabtc",     // Mined By ViaBTC
  "0xbe0ab377a19dd1306c663420465659e111cd19eb": "herominers", // etc.herominers.com
  "0xf35074bbd0a9aee46f4ea137971feec024ab704e": "solopool",   // solopool.org
  "0x2021f0afb70029528a0a6bc0a054d82dc371fa73": "666pool",    // 666
  "0x2f7cc3e6a842c591ec57a7079dfb6db2365b5b0f": "baikalmine", // BaikalMine.com
};

const BLOCKS_TO_SAMPLE = 500; // ~1.8 hours of ETC blocks at 13s average

interface BlockscoutBlocksPage {
  items: Array<{ miner?: { hash?: string } }>;
  next_page_params: { block_number: number; items_count: number } | null;
}

async function fetchMinerCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  let cursor: { block_number: number; items_count: number } | null = null;
  let total = 0;

  while (total < BLOCKS_TO_SAMPLE) {
    let url = `${BLOCKSCOUT}/blocks?type=block`;
    if (cursor) {
      url += `&block_number=${cursor.block_number}&items_count=${cursor.items_count}`;
    }

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) break;

    const page: BlockscoutBlocksPage = await res.json();

    for (const block of page.items ?? []) {
      const addr = block.miner?.hash?.toLowerCase();
      if (addr) {
        counts[addr] = (counts[addr] ?? 0) + 1;
        total++;
      }
    }

    cursor = page.next_page_params ?? null;
    if (!cursor) break;
  }

  return counts;
}

export type PoolHashrates = Record<string, number>; // statsId → TH/s

export async function fetchPoolHashrates(): Promise<PoolHashrates> {
  try {
    const [minerCounts, networkTHs] = await Promise.all([
      fetchMinerCounts(),
      fetchHashrateTHs(),
    ]);

    const totalBlocks = Object.values(minerCounts).reduce((a, b) => a + b, 0);
    if (!totalBlocks || !networkTHs) return {};

    const result: PoolHashrates = {};
    for (const [addr, count] of Object.entries(minerCounts)) {
      const poolId = POOL_ADDRESSES[addr];
      if (poolId) {
        const share = count / totalBlocks;
        const ths = Math.round(share * networkTHs * 100) / 100;
        // Accumulate — some pools have multiple payout addresses (e.g. 2miners PPLNS + SOLO)
        result[poolId] = Math.round(((result[poolId] ?? 0) + ths) * 100) / 100;
      }
    }

    return result;
  } catch {
    return {};
  }
}
