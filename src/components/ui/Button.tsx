"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  size?: "default" | "large";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  cursorType?: "hover" | "cta";
  magnetic?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  onClick,
  cursorType = "hover",
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 200, damping: 15 });
  const springY = useSpring(my, { stiffness: 200, damping: 15 });

  // Ripple position for hover glow
  const rippleX = useMotionValue(50);
  const rippleY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !magnetic) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mx.set((e.clientX - centerX) * 0.2);
    my.set((e.clientY - centerY) * 0.3);
    rippleX.set(((e.clientX - rect.left) / rect.width) * 100);
    rippleY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300";

  const variants = {
    primary: "text-bg-primary",
    ghost:
      "bg-transparent border border-border text-text-primary hover:border-accent/40",
  };

  const sizes = {
    default: "px-6 py-3 rounded-full text-sm",
    large: "px-8 py-4 rounded-full text-base",
  };

  const inner = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      animate={{ y: hovered ? -1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.span>
  );

  const buttonContent = (
    <motion.div
      ref={ref}
      className="relative group inline-block"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {variant === "primary" ? (
        <>
          {/* Animated gradient border wrapper */}
          <div className="relative rounded-full p-[1.5px] overflow-hidden">
            {/* Spinning gradient border */}
            <div
              className={`absolute inset-[-50%] transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background:
                  "conic-gradient(from 0deg, #A7D7C5, #2D6A4F, #A7D7C5, #2D6A4F, #A7D7C5)",
                animation: "spin 2s linear infinite",
              }}
            />
            {/* Button face */}
            <div
              className={`${base} ${variants[variant]} ${sizes[size]} ${className} relative bg-accent overflow-hidden`}
              data-cursor={cursorType}
            >
              {/* Hover glow that follows cursor */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `radial-gradient(circle at var(--rx, 50%) var(--ry, 50%), rgba(255,255,255,0.25) 0%, transparent 60%)`,
                }}
              />
              {inner}
            </div>
          </div>
        </>
      ) : (
        <div
          className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
          data-cursor={cursorType}
        >
          {inner}
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className="appearance-none border-0 bg-transparent p-0">
      {buttonContent}
    </button>
  );
}
