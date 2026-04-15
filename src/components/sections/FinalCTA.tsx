"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const MiniParticles = dynamic(
  () => import("@/components/three/MiniParticles"),
  { ssr: false }
);

const easing = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* WebGL echo - hidden on mobile */}
      <div className="hidden md:block">
        <MiniParticles />
      </div>

      {/* Static fallback on mobile */}
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(ellipse_at_center,_rgba(167,215,197,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center max-w-[800px]">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-text-secondary mb-8"
        >
          WORK WITH US
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1] mb-8"
        >
          Ready to stop
          <br />
          talking about AI?
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
          className="text-text-secondary text-lg mb-10"
        >
          We take on a small number of businesses at a time.
          <br />
          If yours is one of them, the next step is a conversation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
        >
          <Button href="/apply" size="large" className="animate-pulse-subtle" cursorType="cta">
            Apply to be weframed →
          </Button>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-[13px] text-text-secondary mt-8"
        >
          We&apos;ll respond within 1 business day.
        </motion.p>
      </div>
    </section>
  );
}
