"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const easing = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    number: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" />
        <path d="M12 8.5V12L14.5 14.5" strokeLinecap="round" />
        <path d="M2 12H4M20 12H22M12 2V4M12 20V22" strokeLinecap="round" />
      </svg>
    ),
    name: "Voice Agents",
    outcome: "AI that handles the call, end to end.",
    proof:
      "Inbound support. Outbound qualification. Booked calendars. No human in the loop, no scripts that fall apart.",
  },
  {
    number: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6H20M4 12H20M4 18H12" strokeLinecap="round" />
        <path d="M16 16L20 20M20 16L16 20" strokeLinecap="round" />
      </svg>
    ),
    name: "Workflow Automation",
    outcome: "Hours back. Every week.",
    proof:
      "We find the repetitive work your team does manually. Then we take it off their desk.",
  },
  {
    number: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14V21M14 17.5H21" strokeLinecap="round" />
      </svg>
    ),
    name: "CRM Integrations",
    outcome: "A CRM your sales team actually uses.",
    proof:
      "We connect the tools, clean the data, and build the automations around how your pipeline really moves.",
  },
];

export default function Services() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4"
        >
          WHAT WE BUILD
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-2xl md:text-[32px] mb-16"
        >
          Three problems we&apos;re known for solving. Built around how your
          business actually runs.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: easing,
              }}
            >
            <TiltCard
              className="group bg-bg-surface border border-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300"
              tiltStrength={8}
            >
            <div data-cursor="hover">
              {/* Number */}
              <p className="font-[var(--font-mono)] text-[11px] text-text-secondary mb-4">
                {service.number}
              </p>

              {/* Icon */}
              <div className="text-accent mb-4">{service.icon}</div>

              {/* Name */}
              <h3 className="text-[22px] font-bold mb-2">{service.name}</h3>

              {/* Outcome */}
              <p className="text-text-secondary text-base mb-6">
                {service.outcome}
              </p>

              {/* Divider */}
              <div className="border-t border-border mb-6" />

              {/* Proof */}
              <p className="text-text-secondary text-sm">{service.proof}</p>
            </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
