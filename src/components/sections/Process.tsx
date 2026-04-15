"use client";

import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "A working session, not a questionnaire. We find the processes costing you the most time, money, or attention. Bring the people who know where it actually hurts.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We handle the complexity. You get a system built around your workflows, not a generic tool you have to adapt to.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "Live in your environment within weeks. Real data, real workflows. Not a demo that dies on a shared drive.",
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "Most of the value shows up after go-live. We stick around to tune, improve, and measure against the outcomes we agreed on.",
  },
];

export default function Process() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4"
        >
          HOW WE WORK
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-2xl md:text-[32px] mb-16"
        >
          We don&apos;t do discovery decks. We scope, build, and ship.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: easing,
                }}
                className="relative"
              >
                {/* Dot on timeline */}
                <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />

                <div className="md:pt-12">
                  <p className="font-[var(--font-mono)] text-accent text-sm mb-2">
                    {step.number} - {step.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
