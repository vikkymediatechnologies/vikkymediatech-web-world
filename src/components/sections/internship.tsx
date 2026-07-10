"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const perks = [
  "Work on live client and internal Vikkymediatech projects",
  "Direct code and design reviews from senior mentors",
  "A completed, portfolio-ready body of work",
  "A reference and recommendation on graduation",
];

export function Internship() {
  return (
    <section className="section-y bg-surface-soft dark:bg-surface-darkSoft/40">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Internship Program"
            title="From coursework to real, shipped experience"
            description="Academy graduates who want deeper, hands-on experience can join our internship track — working alongside our team on real client and product work before stepping into the job market."
          />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="card-surface p-8"
          >
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal-600 dark:text-royal-300" />
                  <span className="text-sm leading-relaxed text-ink-600 dark:text-ink-200">{perk}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
