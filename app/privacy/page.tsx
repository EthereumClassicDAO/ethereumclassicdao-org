import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for ethereumclassicdao.org: no cookies and no personal data collected by the site; page views are measured with Cloudflare Web Analytics.",
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
              Last updated: November 2026
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 space-y-8 text-base leading-relaxed text-[var(--text-secondary)]">
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                  What This Site Collects
                </h2>
                <p className="mt-3">
                  This is a static informational website. We do not collect
                  personal data, set cookies, or use advertising pixels or
                  cross-site tracking. To count page views and measure how pages
                  perform, the site loads Cloudflare Web Analytics, which in
                  Cloudflare&rsquo;s words &ldquo;does not collect or use your
                  visitors&rsquo; personal data.&rdquo; See{" "}
                  <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-green)] underline underline-offset-4 transition-colors hover:text-[var(--brand-green-hover)]"
                  >
                    Cloudflare&rsquo;s Privacy Policy
                  </a>{" "}
                  for details. Your light or dark theme choice is kept in your
                  browser&rsquo;s local storage and is not sent anywhere.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
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
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
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
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">Contact</h2>
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
      <BreadcrumbJsonLd name="Privacy Policy" path="/privacy" />
    </main>
  );
}
