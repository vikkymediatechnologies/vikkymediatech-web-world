"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] dark:opacity-[0.15]" />
      </div>
      <Container className="flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-800 dark:text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-300"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
