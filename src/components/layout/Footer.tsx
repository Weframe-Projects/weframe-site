import Link from "next/link";
import AISummary from "@/components/sections/AISummary";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left */}
          <div className="space-y-2 text-sm text-text-secondary">
            <p className="text-text-primary font-medium">
              weframe Group Limited
            </p>
            <p>Company No: 17093742</p>
            <p>© {new Date().getFullYear()} weframe Group</p>
          </div>

          {/* Right */}
          <div className="flex gap-16">
            <div className="space-y-3 text-sm">
              <Link
                href="/#work"
                data-cursor="hover"
                className="block text-text-secondary hover:text-text-primary transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="/about"
                data-cursor="hover"
                className="block text-text-secondary hover:text-text-primary transition-colors"
              >
                Our Team
              </Link>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.linkedin.com/company/waframeio/"
                data-cursor="hover"
                className="block text-text-secondary hover:text-text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-text-secondary">
            Built with AI. Operated by humans.
          </p>
          <AISummary />
        </div>
      </div>
    </footer>
  );
}
