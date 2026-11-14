"use client";

import { useState } from "react";
import { brands } from "@/lib/data/brands";
import { partners } from "@/lib/data/partners";
import { heroStats } from "@/lib/data/stats";
import Container from "./components/ui/Container";
import { ButtonLink } from "./components/ui/Button";

/*
 * The marquees repeat their items twice so the animation can loop
 * seamlessly. The second copy is decorative only: it is hidden from screen
 * readers (aria-hidden) and keyboard users (tabIndex -1).
 */
const brandLoop = [...brands, ...brands];
const partnerLoop = [...partners, ...partners];

export default function Home() {
  const [activePartner, setActivePartner] = useState<string | null>(null);
  const activePartnerLogo = partners.find((p) => p.name === activePartner)?.logo;

  return (
    <main className="bg-white text-neutral-900">
      {/* =========================
    HERO
========================= */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-neutral-950 text-white"
      >

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(245,158,11,0.22),transparent_30%)]" />

          {/* Subtle depth behind the hero visual */}
          <div className="absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-orange-400/20" />
          <div className="absolute -right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-orange-400/10" />

          {/* Single 3D Earth + Solar Panels image
              No CSS animation — the complete visual is one image. */}
          <div className="group absolute right-[-3%] top-1/2 z-20 hidden h-[680px] w-[680px] -translate-y-1/2 cursor-pointer lg:block">
            <img
              src="/hero-earth-solar.png"
              alt=""
              width="680"
              height="680"
              fetchPriority="high"
              className="
      h-full w-full object-contain
      transition-all duration-700 ease-out
      group-hover:scale-[1.07]
      group-hover:drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]
    "
              draggable={false}
            />
          </div>

          {/* Mobile + tablet (the desktop image above only appears from lg) */}
          <div
            className="pointer-events-none absolute bottom-[-35px] right-[-24%] z-[2] h-[390px] w-[390px] md:right-[-6%] md:h-[460px] md:w-[460px] lg:hidden"
            aria-hidden="true"
          >
            <img
              src="/hero-earth-solar.png"
              alt=""
              width="390"
              height="390"
              fetchPriority="high"
              className="h-full w-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-10 lg:px-12">

          <div className="max-w-3xl">

            {/* Small Label */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-white/70">
                Clean Energy • Smart Future
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">

              Power your
              <br />

              <span className="text-orange-400">
                future with solar.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              Reliable and sustainable solar energy solutions for
              homes, businesses and industries. Make the switch to
              cleaner energy with Dahaman Energy.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <ButtonLink href="/contact" variant="primary" size="lg">
                Get a Free Quote
              </ButtonLink>

              <ButtonLink href="/services" variant="ghost" size="lg">
                Explore Our Solutions
              </ButtonLink>

            </div>


            {/* Trust Stats */}
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-7">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* =========================
            HERO ABSTRACT VISUAL
            Decorative CSS rings + glow drawn behind the Earth image.
        ========================= */}
        <div
          className="pointer-events-none absolute right-[-10%] top-1/2 z-[1] hidden h-[760px] w-[760px] -translate-y-1/2 md:block lg:right-[-4%] lg:h-[820px] lg:w-[820px]"
          aria-hidden="true"
        >
          <div className="absolute inset-[18%] rounded-full bg-orange-400/10 blur-[90px]" />

          <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/15" />
          <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/15" />
          <div className="absolute left-1/2 top-1/2 h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/10" />

          <div className="absolute left-1/2 top-1/2 h-[1px] w-[94%] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[94%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-400/20 to-transparent" />

          <div className="absolute left-[18%] top-[23%] h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,1)]" />
          <div className="absolute right-[17%] top-[39%] h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,1)]" />
          <div className="absolute bottom-[20%] left-[38%] h-1 w-1 rounded-full bg-orange-200 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />

          <div className="absolute left-[14%] top-[17%] h-px w-24 rotate-[32deg] bg-gradient-to-r from-transparent to-orange-400/25" />
          <div className="absolute bottom-[19%] right-[14%] h-px w-28 -rotate-[25deg] bg-gradient-to-r from-transparent to-orange-400/20" />
        </div>

        {/* Mobile abstract visual */}
        <div
          className="pointer-events-none absolute -bottom-20 right-[-30%] z-[1] h-[430px] w-[430px] opacity-80 md:hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-[16%] rounded-full bg-orange-400/10 blur-[70px]" />
          <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/15" />
          <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400/10" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 md:flex">

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-orange-400 to-transparent" />

        </div>

      </section>


      {/* TRUSTED BRANDS */}
      <section
        id="brands"
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
        className="relative overflow-hidden bg-white py-24 text-neutral-950"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-orange-500">
              Trusted Brands
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              We Work With{" "}
              <span className="text-orange-500">Trusted Names</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
              We partner with leading solar and energy brands to deliver reliable,
              high-performance solutions for every project.
            </p>
          </div>
        </Container>

        {/* Continuous single-line logo marquee */}
        <div className="relative mt-16 overflow-hidden">
          {/* Soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white/55 to-transparent md:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white/55 to-transparent md:w-12" />

          <div className="dahaman-brands-track flex w-max gap-4 px-4 hover:[animation-play-state:paused] md:gap-5">
            {brandLoop.map((brand, index) => {
              const isCopy = index >= brands.length;
              return (
                <div
                  key={`${brand.name}-${index}`}
                  aria-hidden={isCopy || undefined}
                  className="h-[142px] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-transparent bg-[#090807] shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:h-[154px] md:w-[250px]"
                >
                  <img
                    src={brand.logo}
                    alt={isCopy ? "" : brand.name}
                    width="250"
                    height="154"
                    className={`h-full w-full object-cover ${brand.imageClassName ?? ""}`}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .dahaman-brands-track {
            animation: dahamanBrandsMarquee 34s linear infinite;
            will-change: transform;
          }

          @keyframes dahamanBrandsMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 8px));
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dahaman-brands-track {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* ==================== PARTNERS & SPONSORS ==================== */}
      <section
        id="partners"
        style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
        className="relative overflow-hidden bg-[#fafafa] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-orange-400/[0.035] blur-3xl" />
        </div>

        <Container className="relative">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-500">
              Our Network
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
              Partners &amp; Sponsors
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/50 md:text-base">
              Proud to work with trusted organizations and institutions
              who support our journey towards a cleaner energy future.
            </p>
          </div>

          {/* Moving partner wall */}
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="dahaman-partners-track flex w-max gap-5 py-3 md:gap-7">
              {partnerLoop.map((partner, index) => {
                const isCopy = index >= partners.length;
                return (
                  <button
                    key={`${partner.name}-${index}`}
                    type="button"
                    aria-hidden={isCopy || undefined}
                    tabIndex={isCopy ? -1 : undefined}
                    aria-pressed={activePartner === partner.name}
                    onClick={() =>
                      setActivePartner((current) =>
                        current === partner.name ? null : partner.name
                      )
                    }
                    className={`group relative flex h-[180px] w-[290px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] border border-transparent bg-white px-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.05)] outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-orange-400 md:h-[190px] md:w-[330px] ${activePartner === partner.name
                        ? "border-orange-400/50 shadow-[0_22px_60px_rgba(245,158,11,0.14)]"
                        : "border-transparent hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]"
                      }`}
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.10),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span
                      className={`pointer-events-none absolute right-5 top-5 rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${activePartner === partner.name
                          ? "border-orange-400/30 bg-orange-400/[0.08] text-orange-500 opacity-100"
                          : "border-black/10 text-black/30 opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      Selected
                    </span>

                    <img
                      src={partner.logo}
                      alt={isCopy ? "" : partner.name}
                      width="330"
                      height="190"
                      className="relative z-10 max-h-[115px] max-w-[82%] object-contain transition-all duration-500 ease-out group-hover:scale-[1.07]"
                      loading="lazy"
                      decoding="async"
                    />

                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-orange-400 transition-all duration-500 ${activePartner === partner.name
                          ? "w-20"
                          : "w-0 group-hover:w-16"
                        }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected partner spotlight */}
          <div
            className={`mx-auto overflow-hidden transition-all duration-500 ease-out ${activePartner ? "mt-8 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
              }`}
            aria-live="polite"
          >
            {activePartner && (
              <div className="mx-auto flex max-w-3xl items-center gap-5 rounded-3xl border border-orange-400/15 bg-white px-6 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:px-8">
                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl border border-black/[0.06] bg-[#fafafa] p-2">
                  <img
                    src={activePartnerLogo ?? "/dahaman-logo.png"}
                    alt=""
                    width="80"
                    height="64"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-orange-500">
                    Network Partner
                  </p>
                  <p className="mt-1 text-base font-medium tracking-tight text-neutral-950 md:text-lg">
                    {activePartner}
                  </p>
                </div>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/40 md:flex">
                  ↗
                </span>
              </div>
            )}
          </div>
        </Container>

        <style jsx>{`
          .dahaman-partners-track {
            animation: dahamanPartnerMarquee 38s linear infinite;
            will-change: transform;
          }

          .dahaman-partners-track:hover {
            animation-play-state: paused;
          }

          @keyframes dahamanPartnerMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-50% - 10px));
            }
          }

          @media (max-width: 767px) {
            .dahaman-partners-track {
              animation-duration: 30s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dahaman-partners-track {
              animation: none;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
