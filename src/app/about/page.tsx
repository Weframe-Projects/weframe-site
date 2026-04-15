"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const easing = [0.16, 1, 0.3, 1] as const;

const founders = [
  {
    name: "George Bier",
    role: "Co-Founder",
    duotone: "/team/george-duo.jpg",
    colour: "/team/george-colour.jpg",
    linkedin: "https://www.linkedin.com/in/georgejb/",
  },
  {
    name: "Omid Woror",
    role: "Co-Founder",
    duotone: "/team/omid-duo.jpg",
    colour: "/team/omid-colour.jpg",
    linkedin: "https://www.linkedin.com/in/omid-woror/",
  },
  {
    name: "Levi Freud",
    role: "Co-Founder",
    duotone: "/team/levi-duo.jpg",
    colour: "/team/levi-colour.jpg",
    linkedin: "https://www.linkedin.com/in/levi-freud/",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4"
          >
            OUR TEAM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl mb-8"
          >
            Meet the Team.
          </motion.h1>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-24">
            {/* Left - label + description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easing }}
            >
              <p className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-6">
                FOUNDERS
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Three founders who came from inside a fast-scaling tech company.
                We built AI systems that drove millions in revenue and replaced
                entire manual workflows. We saw what worked, what didn&apos;t,
                and how much it cost when nobody asked the right questions
                first.
              </p>
            </motion.div>

            {/* Right - team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {founders.map((person, i) => (
                <motion.a
                  key={person.name}
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: easing,
                  }}
                  className="group bg-bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300"
                >
                  {/* Photo area - duotone default, colour on hover */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    {/* Duotone layer (default) */}
                    <Image
                      src={person.duotone}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Colour layer (revealed on hover) */}
                    <Image
                      src={person.colour}
                      alt=""
                      fill
                      className="object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        {person.name}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {person.role}
                      </p>
                    </div>
                    <span className="text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 text-lg">
                      ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backstory block */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-[700px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-6"
          >
            OUR STORY
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
          >
            <p>
              Everyone&apos;s talking about AI. Knowing what to build with it is
              the hard part.
            </p>
            <p>
              We&apos;re three founders who came from inside a fast-scaling tech
              company. We built AI systems that drove millions in revenue and
              replaced entire manual workflows. We saw what worked, what
              didn&apos;t, and how much it cost when nobody asked the right
              questions first.
            </p>
            <p>
              We don&apos;t need a client to explain why their problem matters
              commercially. We already get it. We scope for outcomes, not
              features. And we stick around after go-live to make sure the work
              keeps performing.
            </p>
            <p>That&apos;s weframe.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
