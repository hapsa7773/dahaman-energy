"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

function CountUp({
  end,
  suffix = "",
  duration = 1200,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const [openWhySolar, setOpenWhySolar] = useState<number | null>(null);
  const [openWhyChoose, setOpenWhyChoose] = useState<number | null>(null);

  return (
    <main className="bg-white text-neutral-900">
      <Navbar />

      {/* ABOUT SECTION YAHAN AAYEGA */}
       <section
        id="about"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
       className="relative isolate overflow-hidden bg-[#f7f3eb] px-6 py-28 md:px-10 lg:px-12"
      >
        
{/* CSS SOLAR SUNLIGHT BACKGROUND */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 -z-10"
  style={{
    background: `
      radial-gradient(
        ellipse at 85% 10%,
        rgba(255, 190, 85, 0.30) 0%,
        rgba(255, 220, 160, 0.16) 28%,
        transparent 58%
      ),
      radial-gradient(
        ellipse at 5% 75%,
        rgba(255, 215, 150, 0.20) 0%,
        transparent 45%
      ),
      linear-gradient(
        135deg,
        #f7f3eb 0%,
        #f1e9db 50%,
        #faf6ef 100%
      )
    `,
  }}
/>

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
                <span className="h-px w-8 bg-orange-400" />
                About Dahaman
              </p>
            </div>


            <div>

              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[76px]">
                Powering a cleaner
                <br />
                <span className="text-neutral-400">
                  energy future.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
                Dahaman Energy is a leading solar energy company in India
                specializing in integrated solar solutions and turnkey services.
              </p>

            </div>

          </div>


          {/* STATS */}
          <div className="mt-20 grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">

            {/* STAT 01 */}
            <div className="border-b border-black/10 py-7 sm:border-r sm:pr-8 lg:border-b-0">

              <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
                <CountUp end={10} suffix="+" />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
                Years Experience
              </p>

            </div>


            {/* STAT 02 */}
            <div className="border-b border-black/10 py-7 sm:pl-8 lg:border-b-0 lg:border-r">

              <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
                <CountUp end={10} suffix="K+" />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
                Happy Customers
              </p>

            </div>


            {/* STAT 03 */}
            <div className="border-b border-black/10 py-7 sm:pr-8 lg:border-b-0 lg:border-r lg:pl-8">

              <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
                <CountUp end={100} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
                Awards Winning
              </p>

            </div>


            {/* STAT 04 */}
            <div className="py-7 sm:pl-8">

              <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
                <CountUp end={60} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
                Global Brands
              </p>

            </div>

          </div>

          
{/* WHY CHOOSE US - ORIGINAL STYLE */}
<section
  id="why-choose-us"
  className="mt-20 md:mt-24"
>
  <div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr]">
    <div className="pt-2">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
        <span className="h-px w-8 bg-orange-400" />
        Why Choose Us
      </p>
    </div>

    <div>
      <h2 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[76px]">
        Powering your journey
        <br />
        <span className="text-neutral-400">
          with confidence.
        </span>
      </h2>

      <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
        From consultation to installation, Dahaman Energy is
        committed to delivering reliable solar solutions and
        dependable customer support.
      </p>
    </div>
  </div>

  <div className="mt-20 border-t border-black/10">
    {[
      {
        id: 1,
        title: "Quality Services",
        description:
          "We focus on delivering quality solar services designed around your specific energy requirements.",
        detail:
          "From understanding your energy needs to planning and installation, we focus on practical solar solutions with attention to quality at every stage.",
        symbol: "✳",
      },
      {
        id: 2,
        title: "Expert Consultation",
        description:
          "Get guidance to understand the solar solution best suited to your requirements.",
        detail:
          "We help you evaluate your requirements and explore suitable solar options for your property or business.",
        symbol: "⌕",
      },
      {
        id: 3,
        title: "Reliable Installation",
        description:
          "Thoughtfully planned solar installations focused on dependable performance.",
        detail:
          "Our approach focuses on suitable system planning and careful execution according to project requirements.",
        symbol: "↗",
      },
      {
        id: 4,
        title: "Dependable Support",
        description:
          "Support to help you navigate your solar journey with confidence.",
        detail:
          "We aim to provide clear communication and assistance throughout your solar project journey.",
        symbol: "◌",
      },
    ].map((item) => {
      const isOpen = openWhyChoose === item.id;

      return (
        <div
          key={item.id}
          className={`border-b border-black/10 transition-colors duration-300 ${
            isOpen ? "bg-white/40" : ""
          }`}
        >
          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() =>
              setOpenWhyChoose(isOpen ? null : item.id)
            }
            className="grid w-full grid-cols-[32px_1fr_44px] items-center gap-4 py-10 text-left md:grid-cols-[64px_1fr_60px] md:py-12"
          >
            <span className="text-xs text-neutral-300">
              {String(item.id).padStart(2, "0")}
            </span>

            <div>
              <span className="mb-6 flex h-10 w-10 items-center justify-center text-3xl text-orange-500">
                {item.symbol}
              </span>

              <h3
                className={`text-2xl font-medium tracking-tight transition-colors duration-300 md:text-3xl ${
                  isOpen
                    ? "text-orange-500"
                    : "text-neutral-950"
                }`}
              >
                {item.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base md:leading-7">
                {item.description}
              </p>

              {isOpen && (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
                  {item.detail}
                </p>
              )}
            </div>

            <span
              className={`ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-lg text-neutral-500 transition-all duration-300 ${
                isOpen
                  ? "rotate-45 border-orange-300 text-orange-500"
                  : "hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              ↗
            </span>
          </button>
        </div>
      );
    })}
  </div>
</section>



          {/* LOWER CONTENT */}
          <div className="mt-20 grid gap-12 md:grid-cols-[0.65fr_1.35fr]">

            {/* LABEL */}
            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Why Solar
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Reliable solar solutions designed around your energy needs.
              </p>

            </div>


            {/* BENEFITS */}
            <div className="border-t border-black/10">

              {[
                {
                  id: 1,
                  number: "01",
                  title: "Clean and Renewable",
                  image: "/why-solar/clean-renewable.png",
                  short: "Harness clean solar energy for a more sustainable future.",
                  detail: "Solar power uses a clean, renewable source of energy to help reduce dependence on conventional electricity and support a more sustainable future.",
                },
                {
                  id: 2,
                  number: "02",
                  title: "Energy Independence",
                  image: "/why-solar/energy-independence.png",
                  short: "Take greater control of your energy and electricity costs.",
                  detail: "Generate more of the electricity you need yourself, giving you greater control over your energy usage and long-term electricity costs.",
                },
                {
                  id: 3,
                  number: "03",
                  title: "Low Maintenance",
                  image: "/why-solar/low-maintenance.png",
                  short: "Solar systems designed for dependable and easy operation.",
                  detail: "Once installed correctly, solar systems require relatively little day-to-day attention while delivering dependable energy for years.",
                },
                {
                  id: 4,
                  number: "04",
                  title: "Solar Scalability",
                  image: "/why-solar/solar-scalability.png",
                  short: "Flexible solar solutions that can grow with your energy needs.",
                  detail: "Start with a system that fits your current requirements and scale your solar setup as your energy consumption grows.",
                },
              ].map((item) => {
                const isOpen = openWhySolar === item.id;

                return (
                  <div
                    key={item.id}
                    className={`group border-b border-black/10 transition-all duration-500 ${isOpen ? "bg-white/50" : ""
                      }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Close" : "Learn more about"} ${item.title}`}
                      onClick={() => setOpenWhySolar(isOpen ? null : item.id)}
                      className="grid w-full grid-cols-[32px_82px_1fr_24px] items-center gap-3 py-7 text-left md:grid-cols-[50px_120px_1fr_40px] md:gap-7 md:py-8"
                    >
                      <span className="text-xs text-neutral-300">
                        {item.number}
                      </span>

                      <div className="flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
                        <img
                          src={item.image}
                          alt={item.title}
                          width="96"
                          height="96"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain drop-shadow-[0_10px_12px_rgba(0,0,0,0.14)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                        />
                      </div>

                      <div>
                        <h3 className={`text-xl font-medium tracking-tight text-neutral-950 transition-all duration-300 md:text-3xl ${isOpen ? "translate-x-1 text-orange-500" : "group-hover:translate-x-1 group-hover:text-orange-500"
                          }`}>
                          {item.title}
                        </h3>

                        <p className="mt-1.5 max-w-xl text-xs leading-5 text-neutral-500 md:mt-2 md:text-sm md:leading-6">
                          {item.short}
                        </p>
                      </div>

                      <span
                        className={`flex h-8 w-8 items-center justify-center text-base text-neutral-300 transition-all duration-500 md:text-lg ${isOpen
                            ? "rotate-45 text-orange-500"
                            : "group-hover:translate-x-1 group-hover:text-orange-500"
                          }`}
                      >
                        ↗
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden pl-[47px] pr-8 md:pl-[197px] md:pr-[55px]">
                        <p className="pb-7 text-xs leading-6 text-neutral-500 md:pb-8 md:text-sm md:leading-7">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}