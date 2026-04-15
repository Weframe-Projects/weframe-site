"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easing = [0.16, 1, 0.3, 1] as const;

type Project = {
  client: string;
  title: string;
  metric: string;
  tags: string[];
  images?: string[];
  imageAspect?: string;
};

const projects: Project[] = [
  {
    client: "MVE MANAGEMENT",
    title: "Scout",
    metric: "From 8 hours per brief to under 10 minutes.",
    tags: ["AI Search", "Creator Discovery", "Audience Analytics", "Messaging"],
    images: [
      "/work/mve/scout-search.png",
      "/work/mve/scout-analytics.png",
    ],
    imageAspect: "aspect-[5/4]",
  },
  {
    client: "TONY PAGE",
    title: "Staff Operations",
    metric: "Spreadsheets out. Every shift tracked, payroll exported in minutes.",
    tags: ["Time Tracking", "QR Clock-In", "PWA", "Events & Hospitality"],
    images: [
      "/work/tp/dashboard.png",
      "/work/tp/events.png",
    ],
    imageAspect: "aspect-[16/9]",
  },
  {
    client: "COREPROP GROUP",
    title: "[Project Title TBC]",
    metric: "[Metric TBC]",
    tags: ["Workflow Automation", "Web App", "Property"],
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
          {projects.map((project, i) => {
            const aspect = project.imageAspect ?? "aspect-[5/4]";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
                className="w-full min-h-[350px] md:h-[520px] bg-bg-surface rounded-[20px] relative overflow-hidden"
              >
                {/* Subtle texture gradient */}
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

                {/* Desktop: two same-sized screenshots overlaid */}
                {project.images && (
                  <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
                    {/* Accent glow behind */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at right, rgba(167,215,197,0.07) 0%, transparent 60%)",
                      }}
                    />

                    {/* Screenshot 1 - back */}
                    {project.images[1] && (
                      <div
                        className={`absolute top-12 right-[18%] w-[62%] ${aspect} rounded-lg overflow-hidden border border-border shadow-[0_24px_60px_rgba(0,0,0,0.5)] -rotate-[3deg]`}
                      >
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} - secondary view`}
                          fill
                          sizes="(max-width: 768px) 0px, 420px"
                          className="object-cover object-top"
                        />
                      </div>
                    )}

                    {/* Screenshot 2 - front */}
                    <div
                      className={`absolute bottom-12 right-[-20px] w-[62%] ${aspect} rounded-lg overflow-hidden border border-border shadow-[0_30px_80px_rgba(0,0,0,0.55)] rotate-[2deg]`}
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - primary view`}
                        fill
                        sizes="(max-width: 768px) 0px, 420px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                )}

                {/* Mobile single screenshot */}
                {project.images && (
                  <div
                    className={`md:hidden absolute top-6 right-[-20px] w-[55%] ${aspect} rounded-lg overflow-hidden border border-border opacity-90`}
                  >
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} - preview`}
                      fill
                      sizes="(max-width: 768px) 220px, 0px"
                      className="object-cover object-top"
                    />
                  </div>
                )}

                {/* Content bottom-left with gradient to keep text legible over image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 md:max-w-[55%] bg-gradient-to-t from-bg-surface via-bg-surface/80 to-transparent pt-24">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
