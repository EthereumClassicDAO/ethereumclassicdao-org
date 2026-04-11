"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { HashrateHistories, TimePeriod } from "@/lib/api/hashrate";

interface Props {
  histories: HashrateHistories;
  currentTHs: number;
}

const PERIODS: { key: TimePeriod; label: string }[] = [
  { key: "week", label: "7D" },
  { key: "month", label: "30D" },
  { key: "year", label: "1Y" },
  { key: "all", label: "All" },
];

export function HashrateChart({ histories, currentTHs }: Props) {
  const [period, setPeriod] = useState<TimePeriod>("week");
  const data = histories[period];

  if (!data || data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)]">
        <p className="text-xs text-[var(--text-subtle)]">
          {currentTHs.toFixed(1)} TH/s — chart unavailable
        </p>
      </div>
    );
  }

  const min = Math.min(...data.map((d) => d.hashrateTHs));
  const max = Math.max(...data.map((d) => d.hashrateTHs));
  const pad = Math.max((max - min) * 0.2, 5);

  return (
    <div className="mt-5 rounded-xl border border-[var(--divider)] bg-[var(--bg-elevated)] px-4 pb-3 pt-4">
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-subtle)]">
          Network Hashrate
        </p>
        {/* Period tabs */}
        <div className="flex gap-0.5 rounded-lg border border-[var(--divider)] p-0.5">
          {PERIODS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              className={`rounded-md px-2.5 py-1 font-mono text-[10px] transition-colors duration-150 ${
                period === key
                  ? "bg-[var(--brand-green)] text-black font-semibold"
                  : "text-[var(--text-subtle)] hover:text-[var(--text-muted)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="hashrateGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ffae" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#00ffae" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            tick={{ fill: "var(--text-subtle)", fontSize: 9, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[Math.max(0, min - pad), max + pad]}
            tick={{ fill: "var(--text-subtle)", fontSize: 9, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            width={36}
            tickFormatter={(v: number) => `${v.toFixed(0)}`}
          />
          <Tooltip
            contentStyle={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--divider)",
              borderRadius: 8,
              fontSize: 11,
              fontFamily: "monospace",
              color: "var(--text-primary)",
            }}
            formatter={(value) => [`${Number(value).toFixed(1)} TH/s`, "Hashrate"]}
            labelStyle={{ color: "var(--text-subtle)", marginBottom: 2 }}
            cursor={{ stroke: "var(--brand-green)", strokeWidth: 1, strokeDasharray: "4 2" }}
          />
          <Area
            type="monotone"
            dataKey="hashrateTHs"
            stroke="#00ffae"
            strokeWidth={1.5}
            fill="url(#hashrateGrad)"
            dot={false}
            activeDot={{ r: 3, fill: "#00ffae", strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
