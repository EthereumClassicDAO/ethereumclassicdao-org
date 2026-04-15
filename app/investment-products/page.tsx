import type { Metadata } from "next";
import { InvestmentHeroSection } from "@/components/investment-products/InvestmentHeroSection";
import { ETCGSection } from "@/components/investment-products/ETCGSection";
import { GrayscaleProductLifecycleSection } from "@/components/investment-products/GrayscaleProductLifecycleSection";
import { TradFiAccessSection } from "@/components/investment-products/TradFiAccessSection";
import { FutureIssuersSection } from "@/components/investment-products/FutureIssuersSection";
import { InvestmentThesisSection } from "@/components/investment-products/InvestmentThesisSection";

export const metadata: Metadata = {
  title: "ETC Institutional Investment Products — ETCG, ETF Pipeline, TradFi Access",
  description:
    "Grayscale Ethereum Classic Trust (ETCG) has traded on OTCQX since 2018. Available at Charles Schwab, Fidelity, Interactive Brokers, and major US brokerages. The Grayscale product lifecycle from closed-end trust to ETF conversion, and the landscape of issuers with infrastructure to bring future ETC products to market.",
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
    </main>
  );
}
