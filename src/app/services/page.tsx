import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    name: "Voice Agents",
    description:
      "AI that handles the call, end to end. Inbound support. Outbound qualification. Booked calendars. No human in the loop, no scripts that fall apart.",
  },
  {
    name: "Workflow Automation",
    description:
      "Hours back, every week. We find the repetitive work your team does manually, then take it off their desk.",
  },
  {
    name: "CRM Integrations",
    description:
      "A CRM your sales team actually uses. We connect the tools, clean the data, and build the automations around how your pipeline really moves.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-accent mb-4">
            SERVICES
          </p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl mb-16">
            What we build.
          </h1>

          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.name}
                className="border-t border-border pt-8 max-w-[700px]"
              >
                <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
