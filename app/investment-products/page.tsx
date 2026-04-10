import type { Metadata } from "next";
import { InvestmentHeroSection } from "@/components/investment-products/InvestmentHeroSection";
import { ETCGSection } from "@/components/investment-products/ETCGSection";
import { GrayscaleProductLifecycleSection } from "@/components/investment-products/GrayscaleProductLifecycleSection";
import { TradFiAccessSection } from "@/components/investment-products/TradFiAccessSection";
import { FutureIssuersSection } from "@/components/investment-products/FutureIssuersSection";
import { InvestmentThesisSection } from "@/components/investment-products/InvestmentThesisSection";

export const metadata: Metadata = {
  title: "Institutional Investment Products",
  description:
    "Grayscale Ethereum Classic Trust (ETCG) has traded on OTCQX since 2018. Available at Charles Schwab, Fidelity, Interactive Brokers, and major US brokerages. The Grayscale product lifecycle from closed-end trust to ETF conversion, and the landscape of issuers with infrastructure to bring future ETC products to market.",
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
