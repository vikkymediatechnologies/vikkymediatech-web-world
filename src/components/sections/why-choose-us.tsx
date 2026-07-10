"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck, Rocket, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    icon: Layers,
    title: "Systems, not one-off pages",
    description: "Every build starts with a reusable design system, so future pages and features stay consistent and fast to ship.",
  },
  {
    icon: Rocket,
    title: "Performance by default",
    description: "We treat Core Web Vitals and load speed as requirements, not extras — because slow costs you customers.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description: "Typed, tested, documented code that the next engineer — ours or yours — can actually maintain.",
  },
  {
    icon: HeartHandshake,
    title: "A genuine partner",
    description: "Clear communication, honest timelines, and a team that treats your business goals as our own.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why Vikkymediatech"
            title="A technology partner that thinks like a product team"
            description="We've delivered for startups, schools, churches and corporates alike — and every engagement is treated with the same rigor as a Silicon Valley product launch."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-white/10 dark:bg-surface-dark"
              >
                <p.icon className="h-6 w-6 text-royal-600 dark:text-royal-300" />
                <h3 className="mt-4 font-display text-[15px] font-semibold text-ink-800 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
