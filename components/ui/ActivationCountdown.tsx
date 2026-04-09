"use client";

import { useState, useEffect } from "react";

const FALLBACK_TARGET_MS = new Date("2027-01-01T00:00:00Z").getTime();

function DigitBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-16 items-center justify-center rounded-lg border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)] font-mono text-2xl font-bold text-[#F59E0B]">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-xs text-[var(--text-muted)]">{label}</span>
    </div>
  );
}

export function ActivationCountdown() {
  const [secondsLeft, setSecondsLeft] = useState<number>(() =>
    Math.max(0, Math.floor((FALLBACK_TARGET_MS - Date.now()) / 1000))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <div className="flex gap-3">
        <DigitBox value={days} label="Days" />
        <DigitBox value={hours} label="Hrs" />
        <DigitBox value={minutes} label="Min" />
        <DigitBox value={secs} label="Sec" />
      </div>
      <p className="text-center text-[10px] italic text-[var(--text-muted)] opacity-60">
        * Countdown is set to January 1, 2027 until the ETC mainnet activation block is set
      </p>
    </div>
  );
}
