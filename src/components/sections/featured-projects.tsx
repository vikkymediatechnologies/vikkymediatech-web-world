"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/site";

const gradients = [
  "from-royal-600 to-royal-800",
  "from-sky to-royal-700",
  "from-ink-700 to-royal-800",
];

export function FeaturedProjects() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects from our studio"
          description="A look at products we've designed and engineered for clients across e-commerce, education and community organizations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.a
              key={project.slug}
              href="/portfolio"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group block overflow-hidden rounded-3xl border border-ink-100 bg-white dark:border-white/10 dark:bg-surface-dark"
            >
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <div className="absolute inset-0 bg-grid-faint bg-grid opacity-20 mix-blend-overlay" />
                <span className="font-display text-2xl font-bold text-white/90 transition-transform duration-500 group-hover:scale-105">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-royal-600 dark:text-royal-300">
                  {project.category}
                </span>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-white">
                  View case study
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portfolio" variant="secondary">
            View full portfolio <ArrowUpRight size={15} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
