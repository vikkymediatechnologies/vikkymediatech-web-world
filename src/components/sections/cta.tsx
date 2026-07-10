"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section-y">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-16 text-center sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-10" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to build something your business can grow into?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base">
              Tell us about your project or your learning goals, and our team will respond within one business day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get in touch <ArrowUpRight size={16} />
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:border-white/40 hover:text-royal-200"
              >
                See our work
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
