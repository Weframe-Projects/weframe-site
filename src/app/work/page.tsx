import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4">
            OUR WORK
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl mb-8">
            What we&apos;ve built.
          </h1>
          <p className="text-text-secondary text-lg max-w-[600px]">
            Case studies are on the way. In the meantime, get in touch and
            we&apos;ll walk you through the work directly.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
