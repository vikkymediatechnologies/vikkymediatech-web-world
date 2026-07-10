import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/page-hero";
import { PortfolioGrid } from "./portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and projects delivered by Vikkymediatech Web World across e-commerce, education and corporate technology.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Case studies from our studio"
        description="A selection of the products, platforms and websites we've designed and engineered for our clients."
      />
      <section className="section-y pt-4">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
