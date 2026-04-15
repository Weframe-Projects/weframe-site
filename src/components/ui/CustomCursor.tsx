"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type CursorVariant = "default" | "hover" | "cta";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  // Raw mouse position (inner dot follows instantly)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Lagged position for outer ring
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Only show on desktop
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleMq = (e: MediaQueryListEvent | MediaQueryList) => {
      setVisible(e.matches);
      document.documentElement.classList.toggle("custom-cursor", e.matches);
    };
    handleMq(mq);
    mq.addEventListener("change", handleMq);

    // Mouse move
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect hover targets via data-cursor attribute
    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor]"
      );
      if (target) {
        const val = target.getAttribute("data-cursor") as CursorVariant;
        setVariant(val === "cta" ? "cta" : "hover");
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor]"
      );
      if (target) setVariant("default");
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    // Hide when mouse leaves window
    const handleLeave = () => setVisible(false);
    const handleEnter = () => {
      if (mq.matches) setVisible(true);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      mq.removeEventListener("change", handleMq);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  // Variant-specific styles
  const outerSize =
    variant === "cta" ? 64 : variant === "hover" ? 40 : 12;

  const outerStyle = {
    default: {
      width: outerSize,
      height: outerSize,
      backgroundColor: "transparent",
      border: "1.5px solid rgba(245, 245, 240, 0.6)",
    },
    hover: {
      width: outerSize,
      height: outerSize,
      backgroundColor: "rgba(45, 106, 79, 0.8)",
      border: "1.5px solid transparent",
    },
    cta: {
      width: outerSize,
      height: outerSize,
      backgroundColor: "rgba(167, 215, 197, 0.9)",
      border: "1.5px solid transparent",
    },
  };

  return (
    <>
      {/* Outer ring / filled circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          ...outerStyle[variant],
          scale: clicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: variant === "default" ? 150 : 200,
          damping: variant === "default" ? 20 : 25,
          scale: { type: "spring", stiffness: 400, damping: 15 },
        }}
      >
        {/* CTA label */}
        <AnimatePresence>
          {variant === "cta" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="text-[9px] font-medium whitespace-nowrap"
              style={{
                color: "#080808",
                fontFamily: "var(--font-body)",
              }}
            >
              apply →
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: variant === "default" ? 4 : 0,
          height: variant === "default" ? 4 : 0,
          opacity: variant === "default" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-full h-full rounded-full bg-[#F5F5F0]" />
      </motion.div>
    </>
  );
}
