"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/data/site";
import { cn } from "@/lib/utils";

const gradients = [
  "from-royal-600 to-royal-800",
  "from-sky to-royal-700",
  "from-ink-700 to-royal-800",
  "from-royal-500 to-ink-800",
];

const categories = ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.category)))];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
              active === cat
                ? "border-royal-600 bg-royal-600 text-white"
                : "border-ink-200 text-ink-600 hover:border-royal-600/40 hover:text-royal-700 dark:border-white/15 dark:text-ink-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-ink-100 bg-white dark:border-white/10 dark:bg-surface-dark"
            >
              <div
                className={cn(
                  "relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br",
                  gradients[i % gradients.length]
                )}
              >
                <div className="absolute inset-0 bg-grid-faint bg-grid opacity-20 mix-blend-overlay" />
                <span className="px-6 text-center font-display text-xl font-bold text-white/90 transition-transform duration-500 group-hover:scale-105">
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
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-medium text-ink-500 dark:bg-white/5 dark:text-ink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-white">
                  View case study
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
