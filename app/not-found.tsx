import type { Metadata } from "next";
import { redirect } from "next/navigation";

// Next adds noindex to this page itself. Without these, the layout's robots rules would sit beside it, and
// its relative canonical and og:url would resolve to /_not-found.
export const metadata: Metadata = {
  robots: null,
  alternates: null,
  openGraph: null,
};

export default function NotFound() {
  redirect("/");
}
