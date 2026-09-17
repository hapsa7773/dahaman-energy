"use client";

import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <main className="bg-white text-neutral-900">
      <Navbar />

      {/* SERVICES SECTION WILL COME HERE */}
        <section
        id="services"
        style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}
        className="relative overflow-hidden bg-black py-28 text-white md:py-36"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-400/[0.05] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

          {/* HEADER */}
          <div className="mb-16 max-w-3xl md:mb-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-orange-400">
                What We Offer
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Complete{" "}
              <span className="text-orange-400">Solar Solutions</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
              From homes to industries, we provide end-to-end solar solutions
              designed for better savings, reliable performance and a cleaner future.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* SERVICE 01 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/rooftop-3d.png"
                  width="176"
                  height="176"
                  alt="Rooftop Solar"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  01
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Rooftop Solar
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Efficient rooftop solar solutions for homes to reduce electricity
                  bills and achieve energy independence.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 02 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/industrial-solar-3d.png"
                  width="176"
                  height="176"
                  alt="Industrial Solar Solutions"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  02
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Commercial & Industrial
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  High-capacity solar systems designed for factories, offices,
                  businesses and large-scale energy requirements.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 03 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/solar-design-3d.png"
                  width="176"
                  height="176"
                  alt="Solar System Design"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  03
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Solar System Design
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Expert engineering, site analysis and customized system design
                  built around your energy requirements.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 04 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/rooftop-commercial-3d.png"
                  width="176"
                  height="176"
                  alt="Rooftop and Commercial Solar"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  04
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Rooftop & Commercial
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Complete rooftop solar installation for residential,
                  commercial and institutional properties.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 05 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/subsidy-netmetering-3d.png"
                  width="176"
                  height="176"
                  alt="Solar Subsidy and Net Metering"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  05
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Subsidy & Net Metering
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Complete assistance with solar subsidy schemes, documentation
                  and net metering procedures.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 06 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/solar-maintenance-3d.png"
                  width="176"
                  height="176"
                  alt="Solar Panel Cleaning and Maintenance"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  06
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Cleaning & Maintenance
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Professional solar panel cleaning and maintenance to maintain
                  long-term system performance.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 07 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/hybrid-solar-3d.png"
                  width="176"
                  height="176"
                  alt="Hybrid Solar System"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  07
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Hybrid Solar System
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Integrated solar, grid and battery solutions for higher solar
                  utilization and reliable backup power.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 08 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/bess-3d.png"
                  width="176"
                  height="176"
                  alt="Battery Energy Storage System"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  08
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Battery Energy Storage
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Advanced energy storage solutions for backup power, peak demand
                  management and better energy reliability.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

            {/* SERVICE 09 */}
            <a
              href="#quote"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-orange-400/[0.14]" />

              <div className="relative flex h-52 items-center justify-center">
                <img
                  src="/services/solar-park-3d.png"
                  width="176"
                  height="176"
                  alt="Solar Park"
                  className="h-44 w-44 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 text-xs text-white/25">
                  09
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight">
                  Solar Park
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Large-scale solar power projects engineered for efficient
                  electricity generation and reliable grid connectivity.
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/60 transition-colors group-hover:text-orange-400">
                    Explore Service
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </a>

          </div>

          {/* BOTTOM CTA */}
          <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-orange-400/20 bg-orange-400/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                Let’s build a brighter tomorrow
              </p>

              <h3 className="mt-2 text-2xl font-medium md:text-3xl">
                Ready to switch to <span className="text-orange-400">solar?</span>
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Get expert guidance and the right solar solution for your needs.
              </p>
            </div>

            <a
              href="#quote"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-orange-400 hover:text-white"
            >
              Get a Free Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}