import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ethereumclassicdao.org — a static informational website with no data collection.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero-gradient noise-overlay relative pt-32 pb-20">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeIn>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--brand-green)]">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Last updated: March 2026
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  No Data Collection
                </h2>
                <p className="mt-3">
                  This is a static informational website. We do not collect
                  personal data, use cookies, or track visitors. No analytics
                  scripts, advertising pixels, or third-party tracking tools are
                  present on this site.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  External Links
                </h2>
                <p className="mt-3">
                  This site contains links to external websites and services
                  (including GitHub, Olympia DAO properties, and government
                  registries). These external sites have their own privacy
                  policies. We are not responsible for the privacy practices of
                  external sites.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Hosting
                </h2>
                <p className="mt-3">
                  This site is hosted on Vercel. Vercel may collect standard
                  server logs (IP addresses, request timestamps) as part of
                  normal web hosting operations. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-green)] underline underline-offset-4 transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    Vercel&rsquo;s Privacy Policy
                  </a>{" "}
                  for details.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Contact</h2>
                <p className="mt-3">
                  For questions about this privacy policy, contact us through
                  the channels listed on our{" "}
                  <a
                    href="/contact"
                    className="text-[var(--brand-green)] underline underline-offset-4 transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    Contact page
                  </a>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
