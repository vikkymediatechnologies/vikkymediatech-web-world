"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-700 via-royal-600 to-royal-500 px-6 py-12 sm:px-14 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-20 mix-blend-overlay" />
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <span className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-royal-100 sm:text-sm">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
