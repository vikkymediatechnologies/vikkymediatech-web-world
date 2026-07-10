import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { ArrowUpRight, Award, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/sections/faq";
import { academyPrograms, studentJourney } from "@/data/site";

export const metadata: Metadata = {
  title: "Academy",
  description: "Remote-first technology training programs from Vikkymediatech Academy — Frontend, Backend, UI/UX, Data Analytics & AI, and AI & Automation.",
};

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Vikkymediatech Academy"
        title="Learn to build. Get mentored. Ship real work."
        description="A remote-first technology education institution training the next generation of African developers, designers and data professionals."
      />

      <section className="section-y pt-4">
        <Container>
          <SectionHeading eyebrow="Training programs" title="Choose the track that matches your goals" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {academyPrograms.map((program) => {
              const Icon = (Icons[program.icon as keyof typeof Icons] as Icons.LucideIcon) ?? Icons.GraduationCap;
              return (
                <div key={program.title} className="card-surface card-surface-hover p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600/[0.08] text-royal-600 dark:bg-royal-400/[0.1] dark:text-royal-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">
                    {program.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {program.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.08em] text-royal-600 dark:text-royal-300">
                    {program.duration}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-surface p-8">
              <Users2 className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">
                Career Mentorship
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Every student is paired with a mentor for portfolio reviews, mock interviews and career guidance
                — support that continues well past graduation day.
              </p>
            </div>
            <div className="card-surface p-8">
              <Award className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">
                Certificates &amp; Internship
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                Graduates earn a verifiable certificate and can progress into our internship program for
                hands-on experience with real client projects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Student journey" title="From enrollment to a launched career" />
          <div className="relative mt-16 grid gap-8 sm:grid-cols-5">
            {studentJourney.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-royal-600/30 bg-white font-display text-sm font-bold text-royal-700 dark:border-royal-400/30 dark:bg-surface-dark dark:text-royal-300">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-ink-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-500 dark:text-ink-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-ink-800 dark:text-white sm:text-3xl">
            Applications are open for the next cohort
          </h2>
          <Button href="/contact" size="lg">
            Apply to the Academy <ArrowUpRight size={16} />
          </Button>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
