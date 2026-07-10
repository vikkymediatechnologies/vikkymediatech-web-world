"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 sm:pt-48">
      {/* Signature: orbit / flight-path motif echoing the globe in the Vikkymediatech mark */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)] dark:opacity-[0.15]" />
        <svg
          className="absolute left-1/2 top-[-120px] h-[720px] w-[720px] -translate-x-1/2 animate-orbit-slow opacity-[0.35] sm:h-[900px] sm:w-[900px] dark:opacity-[0.22]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <ellipse cx="200" cy="200" rx="190" ry="70" stroke="#2563EB" strokeWidth="0.6" strokeDasharray="2 6" />
          <ellipse
            cx="200"
            cy="200"
            rx="190"
            ry="70"
            stroke="#38BDF8"
            strokeWidth="0.6"
            strokeDasharray="2 6"
            transform="rotate(60 200 200)"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="190"
            ry="70"
            stroke="#2563EB"
            strokeWidth="0.6"
            strokeDasharray="2 6"
            transform="rotate(120 200 200)"
          />
          <circle cx="200" cy="200" r="120" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="0.6" />
        </svg>
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          <Sparkles size={13} /> Building technology across Africa &amp; beyond
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-7 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink-800 dark:text-white sm:text-6xl lg:text-[4.25rem]"
        >
          Technology built with intent.
          <br />
          <span className="gradient-text">Talent trained for the future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg"
        >
          Vikkymediatech Web World designs and builds premium websites, software and digital products for
          growing organizations — while training the next generation of African developers and designers
          through our Academy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Start a project <ArrowUpRight size={16} />
          </Button>
          <Button href="/academy" variant="secondary" size="lg">
            Explore the Academy
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium uppercase tracking-[0.14em] text-ink-400 dark:text-ink-500"
        >
          <span>Founded by Victor Joseph Oke</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
          <span>Registered in Nigeria · CAC 9657637</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
          <span>Remote-first team</span>
        </motion.div>
      </Container>
    </section>
  );
}
