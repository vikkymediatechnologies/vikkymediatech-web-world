"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

export function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <section id="services" className="section-y">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Full-stack technology services, built around your goals"
          description="From a first business website to a complex web application, our team designs and engineers the product your business actually needs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as Icons.LucideIcon) ?? Icons.Sparkles;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-surface card-surface-hover group p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600/[0.08] text-royal-600 transition-colors group-hover:bg-royal-600 group-hover:text-white dark:bg-royal-400/[0.1] dark:text-royal-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-royal-300"
                >
                  Learn more <ArrowUpRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/services" variant="secondary">
            View all services <ArrowUpRight size={15} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
