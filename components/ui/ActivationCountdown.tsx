"use client";

import { useState, useEffect } from "react";

const FALLBACK_TARGET_MS = new Date("2027-01-01T00:00:00Z").getTime();

function DigitBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-16 items-center justify-center rounded-lg border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] font-mono text-2xl font-bold text-[var(--brand-green)]">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-xs text-[var(--text-muted)]">{label}</span>
    </div>
  );
}

export function ActivationCountdown() {
  // Initialize to 0 on server to avoid SSR/CSR hydration mismatch.
  // On the client, compute fresh from Date.now() on each tick so the value
  // stays accurate without calling setState synchronously in an effect body.
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    const update = () =>
      setSecondsLeft(Math.max(0, Math.floor((FALLBACK_TARGET_MS - Date.now()) / 1000)));
    // Populate on next tick (async) so the first frame shows a real value
    const immediate = setTimeout(update, 0);
    const id = setInterval(update, 1000);
    return () => {
      clearTimeout(immediate);
      clearInterval(id);
    };
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  return (
    <div
      role="timer"
      aria-label="Olympia mainnet activation countdown — activation block pending"
      className="rounded-xl border border-[var(--border-brand)] bg-[var(--brand-green-subtle)] p-6 text-center"
    >
      {/* aria-hidden: digits change every second and would be announced continuously by screen readers */}
      <div aria-hidden="true" className="mb-4 flex justify-center gap-4">
        <DigitBox value={days} label="Days" />
        <DigitBox value={hours} label="Hours" />
        <DigitBox value={minutes} label="Minutes" />
        <DigitBox value={secs} label="Seconds" />
      </div>
      <p className="mb-4 text-[10px] italic text-[var(--text-muted)] opacity-60">
        * Countdown is set to January 1, 2027 until the ETC mainnet activation block is set
      </p>
      <div className="mb-2 flex items-center justify-center gap-2">
        <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-green)]" />
        <span className="text-sm font-medium text-[var(--brand-green)]">Activation Block Pending</span>
      </div>
      <p className="text-sm text-[var(--text-muted)]">
        Olympia is in final testing on the Mordor Testnet. Activation Block: TBD
      </p>
      <p className="mt-1 text-xs text-[var(--text-muted)] opacity-60">
        The exact block number will be announced after the Olympia Upgrade core developers call.
      </p>
    </div>
  );
}
