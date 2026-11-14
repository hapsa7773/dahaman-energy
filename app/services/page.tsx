import { services } from "@/lib/data/services";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { ButtonLink } from "../components/ui/Button";

/**
 * Services page.
 * Server Component: no state or event handlers, so no "use client" needed.
 * That means less JavaScript is sent to the browser.
 */
export default function Services() {
  return (
    <main className="bg-white text-neutral-900">
      <section
        id="services"
        className="page-top relative overflow-hidden bg-black pb-28 text-white md:pb-36"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-400/[0.05] blur-[140px]" />

        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            tone="dark"
            eyebrow="What We Offer"
            title={
              <>
                Complete <span className="text-brand-400">Solar Solutions</span>
              </>
            }
            description="From homes to industries, we provide end-to-end solar solutions designed for better savings, reliable performance and a cleaner future."
            className="mb-16 md:mb-20"
          />

          {/* SERVICES GRID: one card per item in lib/data/services.ts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.number} href="/contact" tone="dark" interactive>
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

                <div className="relative flex h-52 items-center justify-center">
                  <img
                    src={service.image}
                    width="176"
                    height="176"
                    alt={service.imageAlt}
                    className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                  />

                  <span className="absolute left-0 top-0 text-xs text-white/25">
                    {service.number}
                  </span>
                </div>

                <div className="relative">
                  <h2 className="text-2xl font-medium tracking-tight">{service.title}</h2>

                  <p className="mt-3 text-sm leading-6 text-white/40">{service.description}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-white/60 transition-colors group-hover:text-brand-400">
                      Explore Service
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-400 group-hover:text-black"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-8 flex flex-col gap-6 rounded-card border border-brand-400/20 bg-brand-400/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-400">
                Let’s build a brighter tomorrow
              </p>

              <h2 className="mt-2 text-2xl font-medium md:text-3xl">
                Ready to switch to <span className="text-brand-400">solar?</span>
              </h2>

              <p className="mt-2 text-sm text-white/40">
                Get expert guidance and the right solar solution for your needs.
              </p>
            </div>

            <ButtonLink href="/contact" variant="light" className="w-fit shrink-0 gap-3">
              Get a Free Quote
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
