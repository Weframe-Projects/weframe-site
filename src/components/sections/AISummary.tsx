"use client";

import { usePathname } from "next/navigation";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const PROMPT =
  "Review weframe Group (https://weframe.io) - a UK-based AI consultancy for operators. Tell me what they actually do, who they've worked with, and whether they seem credible for deploying AI inside an operating business. Be blunt.";

type Service = {
  name: string;
  href: (prompt: string) => string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    name: "ChatGPT",
    href: (p) => `https://chatgpt.com/?q=${encodeURIComponent(p)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: (p) => `https://claude.ai/new?q=${encodeURIComponent(p)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128h-.229l-.79-.048-2.695-.073-2.34-.097-2.265-.122-.571-.121L0 11.784l.055-.352.48-.322.686.06 1.52.103 2.274.158 1.651.097 2.446.255h.388l.054-.158-.133-.097-.102-.097-2.34-1.586-2.534-1.677-1.327-.963-.716-.486-.362-.458-.157-1.004.655-.722.872.06.224.06.889.684 1.895 1.465 2.479 1.827.361.304.144-.103.019-.073-.17-.267-1.36-2.455-1.446-2.497-.644-1.032-.17-.62c-.061-.255-.098-.468-.098-.727L3.29.423 3.73 0l1.063.14.448.388.667 1.532 1.076 2.389 1.668 3.263.49.96.261.892.098.271h.17V9.68l.14-1.859.26-2.28.254-2.93.085-.824.401-.974.797-.522.623.296.51.727-.07.468-.305 1.982-.595 3.087-.389 2.065h.228l.26-.26 1.053-1.399 1.771-2.219.782-.88.904-.965.588-.467h1.11l.817 1.215-.365 1.256-1.142 1.448-.947 1.226-1.358 1.828-.844 1.456.078.116.2-.02 3.018-.643 1.627-.295 1.944-.33.88.41.094.418-.347.854-2.077.514-2.437.488-3.63.857-.044.032.052.065 1.636.153.694.039h1.703l3.18.237.822.54.498.672-.08.515-1.26.644-1.71-.406-3.99-.944-1.371-.33h-.187v.113l1.138 1.116 2.091 1.892 2.614 2.43.133.599-.334.472-.347-.049-2.282-1.713-.881-.774-1.992-1.676h-.132v.176l.457.668 2.438 3.661.124 1.129-.178.369-.632.22-.697-.128-1.416-1.981-1.456-2.225-1.175-2.004-.143.082-.695 7.495-.322.374-.75.288-.623-.475-.328-.76.328-1.507.405-1.974.322-1.57.292-1.948.175-.647-.005-.042-.132.02-1.392 1.905-2.107 2.841-1.672 1.792-.405.158-.695-.365.064-.641.395-.58 2.332-2.958 1.407-1.841.916-1.072-.005-.155h-.055L4.862 18.23l-1.462.188-.636-.587.077-.969.299-.319 2.576-1.771z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    href: (p) => `https://www.perplexity.ai/search?q=${encodeURIComponent(p)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M7 7l10 10M17 7 7 17" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    href: (p) => `https://gemini.google.com/app?q=${encodeURIComponent(p)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2c.5 4.5 3.5 7.5 8 8-4.5.5-7.5 3.5-8 8-.5-4.5-3.5-7.5-8-8 4.5-.5 7.5-3.5 8-8z" />
      </svg>
    ),
  },
  {
    name: "Grok",
    href: (p) => `https://grok.com/?q=${encodeURIComponent(p)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 3h4.5l4 5.2L15.8 3H21l-7 8.7L21.5 21H17l-4.3-5.6L7.9 21H3l7.4-9.2L3 3z" />
      </svg>
    ),
  },
];

export default function AISummary() {
  const pathname = usePathname();

  const getPrompt = () => {
    const url =
      typeof window !== "undefined"
        ? window.location.origin + pathname
        : "https://weframe.io";
    return PROMPT.replace("https://weframe.io", url);
  };

  return (
    <div className="flex items-center gap-4">
      <p className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-text-secondary">
        AI SUMMARY
      </p>
      <div className="flex items-center gap-2">
        {services.map((service) => (
          <MagneticWrapper key={service.name} strength={0.3}>
            <a
              href={service.href(PROMPT)}
              onClick={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.href = service.href(getPrompt());
              }}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label={`Open ${service.name} to review weframe`}
              title={`Review with ${service.name}`}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <span className="relative h-4 w-4">{service.icon}</span>
            </a>
          </MagneticWrapper>
        ))}
      </div>
    </div>
  );
}
