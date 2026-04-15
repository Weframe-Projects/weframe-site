"use client";

import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    client: "COREPROP GROUP",
    title: "[Project Title TBC]",
    metric: "[Metric TBC]",
    tags: ["Workflow Automation", "Web App", "Property"],
  },
  {
    client: "CLIENT 2",
    title: "[Project Title TBC]",
    metric: "[Metric TBC]",
    tags: ["Voice Agents", "CRM Integration"],
  },
  {
    client: "CLIENT 3",
    title: "[Project Title TBC]",
    metric: "[Metric TBC]",
    tags: ["Workflow Automation", "AI Integration"],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-[120px] scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4"
        >
          OUR WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="font-[var(--font-display)] text-3xl md:text-[48px] mb-16"
        >
          What we&apos;ve built for operators like you.
        </motion.h2>

        {/* Stacked editorial cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
              className="w-full h-[350px] md:h-[500px] bg-bg-surface rounded-[20px] relative overflow-hidden"
            >
              {/* Subtle texture overlay - each card slightly different */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at ${
                    i === 0
                      ? "bottom left"
                      : i === 1
                      ? "bottom right"
                      : "top right"
                  }, rgba(167,215,197,0.03) 0%, transparent 50%)`,
                }}
              />

              {/* Content overlaid bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="font-[var(--font-mono)] text-[11px] tracking-[0.15em] text-text-secondary mb-3">
                  {project.client}
                </p>

                <h3 className="font-[var(--font-display)] text-2xl md:text-4xl mb-3">
                  {project.title}
                </h3>

                <p className="text-accent text-sm font-[var(--font-mono)] mb-4">
                  {project.metric}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-bg-elevated text-xs text-text-secondary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
