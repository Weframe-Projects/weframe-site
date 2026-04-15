"use client";

const clients = ["CoreProp", "MVE Management", "Tony Page"];

export default function SocialProof() {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-6">
        <p className="font-[var(--font-mono)] text-xs text-text-secondary tracking-wide text-center">
          Working with operators who stopped talking about AI and started using it.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <div className="flex items-center animate-marquee whitespace-nowrap">
          {doubled.map((client, i) => (
            <span
              key={i}
              className="mx-16 text-base font-medium text-text-primary/40 hover:text-text-primary/80 transition-opacity tracking-wider"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
