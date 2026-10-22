import type { ReactNode } from "react";

/**
 * Inline citation link for prose that makes a historical or factual claim.
 *
 * Inherits the surrounding text color rather than taking the brand green: these
 * sit mid-sentence, and coloring them would break the paragraph into fragments.
 * The underline carries the affordance, and hover brightens toward primary text.
 */
export function Cite({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition-colors hover:text-[var(--text-primary)]"
    >
      {children}
    </a>
  );
}
