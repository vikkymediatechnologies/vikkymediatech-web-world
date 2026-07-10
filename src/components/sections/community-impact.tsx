"use client";

import { motion } from "framer-motion";
import { Church, School, HeartHandshake, Building2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const groups = [
  { icon: School, label: "Schools" },
  { icon: Church, label: "Churches" },
  { icon: HeartHandshake, label: "NGOs" },
  { icon: Building2, label: "SMEs & Startups" },
];

export function CommunityImpact() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Community impact"
          title="Serving the organizations that build our communities"
          description="Beyond client work, we offer discounted rates and pro-bono support to schools, churches and NGOs building their first digital presence — because access to good technology shouldn't depend on budget alone."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white px-4 py-8 text-center dark:border-white/10 dark:bg-surface-darkSoft"
            >
              <g.icon className="h-7 w-7 text-royal-600 dark:text-royal-300" />
              <span className="text-sm font-semibold text-ink-700 dark:text-white">{g.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
