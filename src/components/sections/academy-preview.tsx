"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { academyPrograms } from "@/data/site";

export function AcademyPreview() {
  return (
    <section className="section-y">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-800 via-ink-900 to-royal-900 dark:border-white/10">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:p-16">
            <div>
              <span className="eyebrow border-white/15 bg-white/[0.06] text-royal-200">
                <GraduationCap size={13} /> Vikkymediatech Academy
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Train for a real technology career — remotely, with mentors who ship
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-200 sm:text-base">
                Our remote-first Academy prepares students across Frontend, Backend, UI/UX, Data Analytics &amp;
                AI, and AI &amp; Automation — with mentorship and internship pathways into real projects.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/academy">
                  Explore programs <ArrowUpRight size={15} />
                </Button>
                <Button href="/careers" variant="secondary" className="border-white/20 bg-transparent text-white hover:border-white/40 hover:text-royal-200">
                  Internship program
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {academyPrograms.map((program, i) => {
                const Icon = (Icons[program.icon as keyof typeof Icons] as Icons.LucideIcon) ?? Icons.GraduationCap;
                return (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <Icon size={18} className="text-royal-300" />
                    <h3 className="mt-3 text-sm font-semibold text-white">{program.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-300">{program.description}</p>
                    <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.08em] text-royal-300">
                      {program.duration}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
