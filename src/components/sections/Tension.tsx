"use client";

import { motion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Tension() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[700px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-[48px] leading-[1.15]"
        >
          You&apos;ve bought enough software
          <br />
          that goes half-used.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easing }}
          className="text-text-secondary text-lg mt-8 leading-relaxed"
        >
          CRMs. Project tools. Ops platforms. You signed up, paid, onboarded the
          team, and most of it sits there. Generic software built for everyone,
          used by a few, worked around by most.
          <br />
          <br />
          AI is the same story in a different costume. Unless someone builds it
          around how your business actually runs.
          <br />
          <br />
          That&apos;s what we do.
        </motion.p>
      </div>
    </section>
  );
}
