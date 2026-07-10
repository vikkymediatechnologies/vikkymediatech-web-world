"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
      <Container>
        <SectionHeading
          eyebrow="What people say"
          title="Trusted by founders, congregations and graduates alike"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface flex flex-col p-7"
            >
              <Quote className="h-6 w-6 text-royal-600/40 dark:text-royal-300/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5 dark:border-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-600/[0.08] font-display text-sm font-semibold text-royal-700 dark:bg-royal-400/[0.12] dark:text-royal-300">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-800 dark:text-white">{t.name}</p>
                  <p className="text-xs text-ink-400 dark:text-ink-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
