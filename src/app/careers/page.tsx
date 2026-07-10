import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { careers } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and internship opportunities at Vikkymediatech Web World.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with us"
        description="We're remote-first and always open to meeting talented engineers, designers and mentors who care about craft."
      />

      <section className="section-y pt-4">
        <Container>
          <SectionHeading eyebrow="Open roles" title="Current opportunities" align="left" />
          <div className="mt-10 divide-y divide-ink-100 dark:divide-white/10">
            {careers.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-800 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400 dark:text-ink-400">
                    <MapPin size={12} /> {role.type}
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-ink-500 dark:text-ink-300">{role.description}</p>
                </div>
                <Button href="/contact" variant="secondary" size="sm" className="shrink-0">
                  Apply now <ArrowUpRight size={14} />
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-ink-800 dark:text-white sm:text-3xl">
            Don&rsquo;t see the right role? Join our internship program instead
          </h2>
          <p className="max-w-lg text-sm text-ink-500 dark:text-ink-300">
            Academy graduates can apply for hands-on internship placements working on real client projects.
          </p>
          <Button href="/academy" size="lg">
            Explore the Academy <ArrowUpRight size={16} />
          </Button>
        </Container>
      </section>
    </>
  );
}
