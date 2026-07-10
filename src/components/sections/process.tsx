"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/data/site";

export function Process() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A clear, five-step process from idea to launch"
          description="No black boxes. You'll know exactly what stage your project is in, and why, at every point."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ink-100 dark:bg-white/10 sm:block lg:left-1/2" />
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-4 lg:flex-col lg:gap-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-royal-600/30 bg-white font-display text-sm font-bold text-royal-700 dark:border-royal-400/30 dark:bg-surface-dark dark:text-royal-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-display text-base font-semibold text-ink-800 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
