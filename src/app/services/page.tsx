import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web development, software development, UI/UX design and technology education services from Vikkymediatech Web World.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to build and grow, in one team"
        description="From your first business website to a full software product — and the training to build your own in-house talent."
      />

      <section className="section-y pt-4">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = (Icons[service.icon as keyof typeof Icons] as Icons.LucideIcon) ?? Icons.Sparkles;
              return (
                <div key={service.slug} className="card-surface card-surface-hover flex flex-col p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600/[0.08] text-royal-600 dark:bg-royal-400/[0.1] dark:text-royal-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-ink-500 dark:text-ink-300">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-royal-600 dark:text-royal-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 dark:text-royal-300"
                  >
                    Request this service <ArrowUpRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-ink-800 dark:text-white sm:text-3xl">
            Not sure which service fits your project?
          </h2>
          <p className="max-w-lg text-sm text-ink-500 dark:text-ink-300">
            Tell us about your goals and we&rsquo;ll recommend the right scope — no obligation.
          </p>
          <Button href="/contact" size="lg">
            Talk to our team <ArrowUpRight size={16} />
          </Button>
        </Container>
      </section>
    </>
  );
}
