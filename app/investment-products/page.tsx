import type { Metadata } from "next";
import { InvestmentHeroSection } from "@/components/investment-products/InvestmentHeroSection";
import { ETCGSection } from "@/components/investment-products/ETCGSection";
import { GrayscaleProductLifecycleSection } from "@/components/investment-products/GrayscaleProductLifecycleSection";
import { TradFiAccessSection } from "@/components/investment-products/TradFiAccessSection";
import { FutureIssuersSection } from "@/components/investment-products/FutureIssuersSection";
import { InvestmentThesisSection } from "@/components/investment-products/InvestmentThesisSection";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Institutional Access to Ethereum Classic",
  description:
    "The Grayscale Ethereum Classic Trust (ETCG), on OTCQX since 2018 and at major US brokerages, and the trust-to-ETF conversion path GBTC and ETHE took.",
  keywords: [
    "ETCG",
    "Grayscale Ethereum Classic Trust",
    "ETC ETF",
    "ETC investment",
    "Ethereum Classic trust",
    "OTCQX",
    "Charles Schwab ETC",
    "Fidelity ETC",
    "Interactive Brokers ETC",
    "ETC fund",
    "digital asset ETF",
    "Ethereum Classic institutional",
    "Proof-of-Work investment product",
    "ETC brokerage",
    "Grayscale ETF conversion",
    "ETC TradFi",
  ],
};

export default function InvestmentProductsPage() {
  return (
    <main>
      <InvestmentHeroSection />
      <ETCGSection />
      <GrayscaleProductLifecycleSection />
      <TradFiAccessSection />
      <FutureIssuersSection />
      <InvestmentThesisSection />
      <BreadcrumbJsonLd name="Investment Products" path="/investment-products" />
    </main>
  );
}
