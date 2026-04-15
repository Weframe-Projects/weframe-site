"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

const ParticleNetwork = dynamic(
  () => import("@/components/three/ParticleNetwork"),
  { ssr: false }
);

const easing = [0.16, 1, 0.3, 1] as const;

const headlineLines = [
  "We build AI",
  "that moves the numbers",
  "that matter.",
];

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 50) setShowScroll(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL - hidden on mobile */}
      <div className="hidden md:block">
        <ParticleNetwork />
      </div>

      {/* Static fallback on mobile */}
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(ellipse_at_center,_rgba(167,215,197,0.04)_0%,_transparent_70%)]" />

      {/* Text layer */}
      <div className="relative z-10 text-center px-6 max-w-[900px]">
        {/* Headline with unified shimmer across all lines */}
        <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.05] mb-8 text-shimmer">
          {headlineLines.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 * i,
                ease: easing,
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easing }}
          className="text-text-secondary text-lg max-w-[560px] mx-auto mb-10"
        >
          Business people who build. Not tech people who consult. If it
          won&apos;t bring results, we won&apos;t build it.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easing }}
        >
          <Button href="/apply" size="large" cursorType="cta">
            Apply to be weframed →
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 0.5 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-bounce-slow"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
