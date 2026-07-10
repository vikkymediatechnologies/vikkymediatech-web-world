import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/layout/page-hero";
import { values, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story, mission and people behind Vikkymediatech Web World.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vikkymediatech"
        title="Building technology, one relationship at a time"
        description="We're a Nigerian technology company on a mission to help businesses grow digitally, while training the professionals who will shape Africa's technology future."
      />

      <section className="section-y">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-6 font-display text-3xl font-semibold text-ink-800 dark:text-white sm:text-4xl">
              From a single developer to a growing technology company
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300 sm:text-base">
              <p>
                Vikkymediatech Web World began with a simple observation: too many good businesses in Nigeria
                were being held back by websites and software that didn&rsquo;t match the quality of their work.
                Founder Victor Joseph Oke set out to close that gap — one project at a time.
              </p>
              <p>
                What started as freelance web development grew into a full technology company, and eventually
                into Vikkymediatech Academy — a training arm built to pass on the same standards we hold
                ourselves to as a studio, to the next generation of developers and designers.
              </p>
              <p>
                Today, we build for startups, SMEs, schools, churches, NGOs and corporate organizations across
                Nigeria and beyond, while mentoring students through structured, remote-first training programs.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-royal-600/20 to-sky/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card dark:border-white/10 dark:bg-surface-darkSoft">
              <Image
                src="/assets/founder-photo.png"
                alt={site.founder}
                width={496}
                height={578}
                className="h-full w-full object-cover"
              />
              <div className="p-6">
                <p className="font-display text-lg font-semibold text-ink-800 dark:text-white">{site.founder}</p>
                <p className="mt-1 text-sm text-royal-600 dark:text-royal-300">Founder, Vikkymediatech Web World</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  &ldquo;I built Vikkymediatech to prove that world-class technology can come out of Nigeria —
                  and to make sure the next generation doesn&rsquo;t have to figure it out alone.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card-surface p-8">
              <Target className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Empower businesses through innovative digital solutions while training, mentoring, and preparing
                the next generation of technology professionals.
              </p>
            </div>
            <div className="card-surface p-8">
              <Eye className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                To become one of Africa&rsquo;s most respected technology companies — recognized for innovation,
                software development, technology education, and digital transformation.
              </p>
            </div>
            <div className="card-surface p-8">
              <Compass className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">Why we exist</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Great ideas shouldn&rsquo;t be limited by access to great technology. We exist to close that gap,
                for businesses and for the people who want to build it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Core values" title="What guides how we work" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-ink-100 p-6 dark:border-white/10">
                <h3 className="font-display text-base font-semibold text-royal-700 dark:text-royal-300">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
