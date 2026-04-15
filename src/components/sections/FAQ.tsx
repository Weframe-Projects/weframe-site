"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "Do we need a technical team on our side?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "What does it cost?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "Do you work with businesses outside the UK?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "What happens after you build it?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "How is this different from hiring a developer?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
  {
    question: "How do we get started?",
    answer: "[PLACEHOLDER - to be written before launch]",
  },
];

function FAQItem({
  item,
  index,
}: {
  item: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: easing }}
      className="border-t border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
      >
        <span className="text-base font-medium pr-4">{item.question}</span>
        <span
          className={`text-text-secondary text-xl transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easing }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-[15px] leading-[1.7] pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4"
        >
          COMMON QUESTIONS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-2xl md:text-[32px] mb-12"
        >
          Things people usually ask before booking a call.
        </motion.p>

        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
