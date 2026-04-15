"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Everyone knows I\u2019m not easily impressed\u2026 The ones who earn your trust are the ones who understand your operation before they start building. What weframe built for us is genuinely excellent. They took a genuine operational headache - tracking staff hours across multiple venues - and turned it into something that just works. Professional, innovative, and completely trustworthy.",
    name: "Tony Page",
    title: "Founder",
    company: "Tony Page Ltd",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section
      className="py-[120px] px-6 bg-[#0A0A0A]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[800px] mx-auto text-center relative">
        {/* Large quote mark */}
        <span className="font-[var(--font-display)] text-[120px] text-accent/20 absolute -top-16 left-1/2 -translate-x-1/2 leading-none select-none">
          &ldquo;
        </span>

        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-[var(--font-display)] italic text-xl md:text-[28px] leading-[1.4] mb-8">
                &ldquo;{quotes[current].text}&rdquo;
              </p>
              <p className="text-sm text-text-secondary">
                {quotes[current].name} · {quotes[current].title} ·{" "}
                {quotes[current].company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
