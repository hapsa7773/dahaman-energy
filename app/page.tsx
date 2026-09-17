"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";


function CountUp({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animate = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      setCount(0);
      const startTime = performance.now();

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(eased * end));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(update);
        } else {
          setCount(end);
        }
      };

      animationRef.current = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          setCount(0);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {

  const [openWhyFeature, setOpenWhyFeature] = useState<number | null>(null);
  const [openWhySolar, setOpenWhySolar] = useState<number | null>(null);
  const [activePartner, setActivePartner] = useState<string | null>(null);

  const [calculator, setCalculator] = useState({
    name: "",
    mobile: "",
    bill: "",
    unitCost: "",
  });
  const [calculatorResult, setCalculatorResult] = useState<{
    units: number;
    systemSize: number;
    monthlySavings: number;
    annualSavings: number;
  } | null>(null);

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    bill: "",
    city: "",
    pin: "",
  });

  const handleCalculatorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bill = Number(calculator.bill);
    const unitCost = Number(calculator.unitCost);

    if (!bill || !unitCost || bill <= 0 || unitCost <= 0) {
      setCalculatorResult(null);
      return;
    }

    const units = bill / unitCost;
    const systemSize = Math.max(1, Math.ceil((units / 120) * 2) / 2);
    const monthlySavings = bill * 0.8;

    setCalculatorResult({
      units: Math.round(units),
      systemSize,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(monthlySavings * 12),
    });
  };

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello Dahaman Energy,\n\nI would like to get a free solar quote.\n\nName: ${quoteForm.name}\nEmail: ${quoteForm.email}\nWhatsApp Number: ${quoteForm.whatsapp}\nMonthly Electricity Bill: ₹${quoteForm.bill}\nCity: ${quoteForm.city}\nArea Pin Code: ${quoteForm.pin}`;

    const whatsappUrl = `https://wa.me/919057034374?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-white text-neutral-900">

      <Navbar />

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

          {/* Mobile */}
          <div
            className="pointer-events-none absolute bottom-[-35px] right-[-24%] z-[2] h-[390px] w-[390px] md:hidden"
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

              <a
                href="#quote"
                className="rounded-full bg-orange-400 px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-orange-300"
              >
                Get a Free Quote
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore Our Solutions
              </a>

            </div>


            {/* Trust Stats */}
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-semibold text-white">
                  10+
                </p>

                <p className="mt-1 text-xs text-white/45">
                  Years Experience
                </p>
              </div>


              <div>
                <p className="text-2xl font-semibold text-white">
                  10K+
                </p>

                <p className="mt-1 text-xs text-white/45">
                  Happy Customers
                </p>
              </div>


              <div>
                <p className="text-2xl font-semibold text-white">
                  100%
                </p>

                <p className="mt-1 text-xs text-white/45">
                  Clean Energy
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            HERO ABSTRACT VISUAL
            Clean original style — no Earth, no solar panels.
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

      {/* =========================
    ABOUT DAHAMAN ENERGY
========================= */}
      


      {/* =========================
          SERVICES
      ========================= */}



      {/* SERVICES */}
   
      

      {/* TRUSTED BRANDS */}
      <section
        id="brands"
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
        className="relative overflow-hidden bg-white py-24 text-neutral-950"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
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
        </div>

        {/* Continuous single-line logo marquee */}
        <div className="relative mt-16 overflow-hidden">
          {/* Soft edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white/55 to-transparent md:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white/55 to-transparent md:w-12" />

          <div className="dahaman-brands-track flex w-max gap-4 px-4 hover:[animation-play-state:paused] md:gap-5">
            {[
              ["/brands/adani.png", "Adani"],
              ["/brands/waaree.png", "Waaree"],
              ["/brands/vikram-solar.png", "Vikram Solar"],
              ["/brands/avaada.png", "Avaada"],
              ["/brands/luminous.png", "Luminous"],
              ["/brands/polycab.png", "Polycab"],
              ["/brands/sungrow.png", "Sungrow"],
              ["/brands/solis.png", "Solis"],
              ["/brands/k-solar.png", "K-Solar"],
            ].map(([src, alt]) => (
              <div
                key={`brand-a-${alt}`}
                className="h-[142px] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-transparent bg-[#090807] shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:h-[154px] md:w-[250px]"
              >
                <img
                  src={src}
                  alt={alt}
                  width="250"
                  height="154"
                  className={`h-full w-full object-cover ${alt === "K-Solar" ? "scale-[1.4]" : ""
                    }`}
                  loading="lazy"
                />
              </div>
            ))}

            {/* Exact duplicate = seamless loop */}
            {[
              ["/brands/adani.png", "Adani"],
              ["/brands/waaree.png", "Waaree"],
              ["/brands/vikram-solar.png", "Vikram Solar"],
              ["/brands/avaada.png", "Avaada"],
              ["/brands/luminous.png", "Luminous"],
              ["/brands/polycab.png", "Polycab"],
              ["/brands/sungrow.png", "Sungrow"],
              ["/brands/solis.png", "Solis"],
              ["/brands/k-solar.png", "K-Solar"],
            ].map(([src, alt]) => (
              <div
                key={`brand-b-${alt}`}
                aria-hidden="true"
                className="h-[142px] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-transparent bg-[#090807] shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:h-[154px] md:w-[250px]"
              >
                <img
                  src={src}
                  alt=""
                  width="250"
                  height="154"
                  className={`h-full w-full object-cover ${alt === "K-Solar" ? "scale-[1.4]" : ""
                    }`}
                  loading="lazy"
                />
              </div>
            ))}
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

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
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
              {[
                {
                  name: "M.G. College of Pharmaceutical Sciences",
                  image: "/clients/mgcps.jpeg",
                },
                {
                  name: "Oriana Power",
                  image: "/clients/oriana-power.jpeg",
                },
                {
                  name: "Larsen & Toubro",
                  image: "/clients/larsen-toubro.jpeg",
                },
                {
                  name: "Mahatma Gandhi Engineering College",
                  image: "/clients/mahatma-gandhi-engineering.jpeg",
                },
                {
                  name: "Jaipur Engineering College",
                  image: "/clients/jaipur-engineering-college.jpeg",
                },
                {
                  name: "Jaipur College of Pharmacy",
                  image: "/clients/jaipur-college-pharmacy.jpeg",
                },
                {
                  name: "National Sample Survey Office",
                  image: "/clients/nsso.jpeg",
                },
              ]
                .concat([
                  {
                    name: "M.G. College of Pharmaceutical Sciences",
                    image: "/clients/mgcps.jpeg",
                  },
                  {
                    name: "Oriana Power",
                    image: "/clients/oriana-power.jpeg",
                  },
                  {
                    name: "Larsen & Toubro",
                    image: "/clients/larsen-toubro.jpeg",
                  },
                  {
                    name: "Mahatma Gandhi Engineering College",
                    image: "/clients/mahatma-gandhi-engineering.jpeg",
                  },
                  {
                    name: "Jaipur Engineering College",
                    image: "/clients/jaipur-engineering-college.jpeg",
                  },
                  {
                    name: "Jaipur College of Pharmacy",
                    image: "/clients/jaipur-college-pharmacy.jpeg",
                  },
                  {
                    name: "National Sample Survey Office",
                    image: "/clients/nsso.jpeg",
                  },
                ])
                .map((partner, index) => (
                  <button
                    key={`${partner.name}-${index}`}
                    type="button"
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
                      src={partner.image}
                      alt={partner.name}
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
                ))}
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
                    src={
                      [
                        ["M.G. College of Pharmaceutical Sciences", "/clients/mgcps.jpeg"],
                        ["Oriana Power", "/clients/oriana-power.jpeg"],
                        ["Larsen & Toubro", "/clients/larsen-toubro.jpeg"],
                        ["Mahatma Gandhi Engineering College", "/clients/mahatma-gandhi-engineering.jpeg"],
                        ["Jaipur Engineering College", "/clients/jaipur-engineering-college.jpeg"],
                        ["Jaipur College of Pharmacy", "/clients/jaipur-college-pharmacy.jpeg"],
                        ["National Sample Survey Office", "/clients/nsso.jpeg"],
                      ].find(([name]) => name === activePartner)?.[1] ?? "/dahaman-logo.png"
                    }
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
        </div>

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
   

         {/* ==================== END PARTNERS & SPONSORS ==================== */}

      {/* =========================
    WHY CHOOSE US
========================= */}
      <section
        id="why-us"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
        className="relative overflow-hidden bg-[#eeeae2] px-6 py-28 md:px-10 lg:px-12"
      >
        {/* Subtle warm sunlight */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-orange-200/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* =========================
        HEADER
    ========================= */}
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">

            <div>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
                <span className="h-px w-8 bg-orange-400" />
                Why Choose Us
              </p>
            </div>


            <div>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[76px]">
                Powering your journey
                <br />
                <span className="text-neutral-400">
                  with confidence.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
                From consultation to installation, Dahaman Energy is
                committed to delivering reliable solar solutions and
                dependable customer support.
              </p>

            </div>

          </div>


          {/* =========================
        FEATURES
    ========================= */}
          <div className="mt-20 border-t border-black/10">

            {/* FEATURE 01 */}
            <div
              className={`group border-b border-black/10 transition-all duration-500 ${openWhyFeature === 1 ? "bg-white/50" : ""
                }`}
            >
              <div className="grid gap-6 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">
                <span className="text-sm text-neutral-300">01</span>

                <div>
                  <img
                    src="/why-us/01-quality-services.png"
                    alt=""
                    width="64"
                    height="64"
                    className="mb-5 h-16 w-16 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                  />
                  <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
                    Quality Services
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    We focus on delivering quality solar services designed around your specific energy requirements.
                  </p>
                </div>

                <button
                  type="button"
                  aria-expanded={openWhyFeature === 1}
                  aria-label="Learn more about Quality Services"
                  onClick={() => setOpenWhyFeature(openWhyFeature === 1 ? null : 1)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-neutral-500 transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black ${openWhyFeature === 1 ? "rotate-45 border-orange-400 bg-orange-400 text-black" : "border-black/10"
                    }`}
                >
                  ↗
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${openWhyFeature === 1 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden md:pl-[140px] md:pr-[100px]">
                  <p className="pb-8 text-sm leading-7 text-neutral-500 md:text-base">
                    From system planning to installation, we focus on dependable workmanship, quality components and solutions built around your actual energy needs.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 02 */}
            <div
              className={`group border-b border-black/10 transition-all duration-500 ${openWhyFeature === 2 ? "bg-white/50" : ""
                }`}
            >
              <div className="grid gap-6 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">
                <span className="text-sm text-neutral-300">02</span>

                <div>
                  <img
                    src="/why-us/02-expert-workers.png"
                    alt=""
                    width="64"
                    height="64"
                    className="mb-5 h-16 w-16 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                  />
                  <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
                    Expert Workers
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    Skilled professionals working to provide efficient and dependable solar solutions.
                  </p>
                </div>

                <button
                  type="button"
                  aria-expanded={openWhyFeature === 2}
                  aria-label="Learn more about Expert Workers"
                  onClick={() => setOpenWhyFeature(openWhyFeature === 2 ? null : 2)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-neutral-500 transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black ${openWhyFeature === 2 ? "rotate-45 border-orange-400 bg-orange-400 text-black" : "border-black/10"
                    }`}
                >
                  ↗
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${openWhyFeature === 2 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden md:pl-[140px] md:pr-[100px]">
                  <p className="pb-8 text-sm leading-7 text-neutral-500 md:text-base">
                    Our experienced team handles each project with attention to installation quality, system performance and long-term reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 03 */}
            <div
              className={`group border-b border-black/10 transition-all duration-500 ${openWhyFeature === 3 ? "bg-white/50" : ""
                }`}
            >
              <div className="grid gap-6 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">
                <span className="text-sm text-neutral-300">03</span>

                <div>
                  <img
                    src="/why-us/03-free-consultation.png"
                    alt=""
                    width="64"
                    height="64"
                    className="mb-5 h-16 w-16 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                  />
                  <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
                    Free Consultation
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    Get guidance from our team to understand the solar solution that fits your energy needs.
                  </p>
                </div>

                <button
                  type="button"
                  aria-expanded={openWhyFeature === 3}
                  aria-label="Learn more about Free Consultation"
                  onClick={() => setOpenWhyFeature(openWhyFeature === 3 ? null : 3)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-neutral-500 transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black ${openWhyFeature === 3 ? "rotate-45 border-orange-400 bg-orange-400 text-black" : "border-black/10"
                    }`}
                >
                  ↗
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${openWhyFeature === 3 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden md:pl-[140px] md:pr-[100px]">
                  <p className="pb-8 text-sm leading-7 text-neutral-500 md:text-base">
                    Get practical guidance on system sizing, expected savings, installation requirements and the solar option that best fits your property.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 04 */}
            <div
              className={`group border-b border-black/10 transition-all duration-500 ${openWhyFeature === 4 ? "bg-white/50" : ""
                }`}
            >
              <div className="grid gap-6 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">
                <span className="text-sm text-neutral-300">04</span>

                <div>
                  <img
                    src="/why-us/04-customer-support.png"
                    alt=""
                    width="64"
                    height="64"
                    className="mb-5 h-16 w-16 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                  />
                  <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
                    Customer Support
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                    Dedicated support to help you throughout your solar journey.
                  </p>
                </div>

                <button
                  type="button"
                  aria-expanded={openWhyFeature === 4}
                  aria-label="Learn more about Customer Support"
                  onClick={() => setOpenWhyFeature(openWhyFeature === 4 ? null : 4)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-neutral-500 transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black ${openWhyFeature === 4 ? "rotate-45 border-orange-400 bg-orange-400 text-black" : "border-black/10"
                    }`}
                >
                  ↗
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${openWhyFeature === 4 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden md:pl-[140px] md:pr-[100px]">
                  <p className="pb-8 text-sm leading-7 text-neutral-500 md:text-base">
                    Our support continues beyond installation, helping you with questions, system performance and ongoing solar requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* =========================
        BOTTOM CTA
    ========================= */}
          <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="max-w-lg text-sm leading-6 text-neutral-500">
              Have questions about going solar?
              Our team is here to help.
            </p>


            <a
              href="#quote"
              className="group flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:text-black"
            >
              Talk To Our Team

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>

            </a>

          </div>

        </div>
      </section>

      {/* =========================
    PROJECTS
========================= */}
      <section
        id="projects"
        style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
        className="bg-[#f5f4f1] px-6 py-28 md:px-10 md:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
                Our Projects
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-neutral-950 md:text-6xl lg:text-7xl">
                Solar in action.
                <br />
                <span className="text-neutral-400">
                  Impact you can see.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-neutral-500 md:text-lg">
              Explore the solar projects we've delivered across
              residential, commercial and large-scale applications.
            </p>
          </div>

          {/* Featured Project */}
          <div className="group relative mt-20 min-h-[520px] overflow-hidden rounded-[32px] bg-neutral-900">

            {/* Image */}
            <img
              src="/projects/solar-power-project.jpeg"
              width="1200"
              height="800"
              alt="Solar Power Project"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-[1.025]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                    Featured Project
                  </p>

                  <h3 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
                    Solar Power Project
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 md:text-base">
                    A complete solar energy solution designed to deliver
                    reliable and sustainable power for long-term performance.
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-xl text-black transition-all duration-300 group-hover:bg-orange-400">
                  ↗
                </div>

              </div>
            </div>
          </div>

          {/* Project Cards */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {/* Project 02 */}
            <div className="group relative min-h-[400px] overflow-hidden rounded-[28px] bg-neutral-900">

              {/* Image */}
              <img
                src="/projects/business-solar-solution.jpeg"
                width="900"
                height="600"
                alt="Business Solar Solution"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-[1.025]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                      Commercial
                    </p>

                    <h3 className="mt-3 text-3xl font-medium text-white">
                      Business Solar Solution
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                      Helping businesses move towards cleaner,
                      smarter and more efficient energy.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </div>

                </div>
              </div>
            </div>

            {/* Project 03 */}
            <div className="group relative min-h-[400px] overflow-hidden rounded-[28px] bg-neutral-900">

              {/* Image */}
              <img
                src="/projects/rooftop-solar.jpeg"
                width="900"
                height="600"
                alt="Rooftop Solar"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-[1.025]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                      Residential
                    </p>

                    <h3 className="mt-3 text-3xl font-medium text-white">
                      Rooftop Solar
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                      Efficient rooftop solar designed to turn
                      available space into clean energy.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
                    ↗
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* View All */}
          <div className="mt-12 flex justify-center">
            <a
              href="/projects"
              className="group flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-medium text-neutral-950 transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
            >
              View All Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

        </div>
      </section>
      
      <a
  href="https://wa.me/919057034374?text=Hello%20Dahaman%20Energy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solar%20solutions."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Dahaman Energy on WhatsApp"
  className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-black/10 bg-white/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
>
  {/* WhatsApp Icon */}
  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] shadow-[0_5px_18px_rgba(37,211,102,0.28)] transition-transform duration-300 group-hover:scale-105">
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-white"
      aria-hidden="true"
    >
      <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.86-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.65c-2.06 0-4.08-.55-5.83-1.59l-.42-.25-4.07.95.97-3.97-.27-.43A10.94 10.94 0 1 1 16 26.65z" />
    </svg>
  </span>

  {/* Text */}
  <span className="hidden pr-1 sm:block">
    <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
      Quick Connect
    </span>
    <span className="mt-0.5 block text-sm font-medium tracking-tight text-neutral-900">
      Chat on WhatsApp
    </span>
  </span>
</a>
   
    


      {/* =========================
    FOOTER
========================= */}
      <footer
        style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
        className="relative overflow-hidden bg-[#151b22] text-white"
      >

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-400/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-300/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          {/* =========================
        MAIN FOOTER
    ========================= */}
          <div className="grid gap-14 py-20 lg:grid-cols-[1.2fr_0.7fr_1fr]">


            {/* =========================
          LEFT — CONTACT
      ========================= */}
            <div>

              <p className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-orange-400">
                <span className="h-px w-7 bg-orange-400" />
                Get In Touch
              </p>

              <h3 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] text-white md:text-4xl">
                Let&apos;s build a cleaner
                <br />
                energy future.
              </h3>


              {/* CONTACT DETAILS */}
              <div className="mt-10 space-y-6">


                {/* ADDRESS */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-orange-400">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Address
                    </p>

                    <p className="max-w-sm text-sm leading-6 text-white/60">
                      S151-152, Kalwar Road, Arihant Nagar, Hathoj, Jaipur, Rajasthan
                    </p>
                  </div>

                </div>


                {/* PHONE */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-orange-400">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Phone
                    </p>

                    <a
                      href="tel:+919057034374"
                      className="block text-sm text-white/70 transition-colors hover:text-orange-400"
                    >
                      +91-9057034374
                    </a>

                    <a
                      href="tel:+918560034374"
                      className="mt-1 block text-sm text-white/70 transition-colors hover:text-orange-400"
                    >
                      +91-8560034374
                    </a>
                  </div>

                </div>


                {/* EMAIL */}
                <div className="flex gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-orange-400">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>

                    <a
                      href="mailto:info@dahamanenergy.com"
                      className="text-sm text-white/70 transition-colors hover:text-orange-400"
                    >
                      info@dahamanenergy.com
                    </a>
                  </div>

                </div>

              </div>


              {/* =========================
            SOCIAL LINKS
        ========================= */}
              <div className="mt-9 flex gap-3">

                {/* YOUTUBE */}
                <a
                  href="https://youtube.com/@dahamansolarenergy?si=D7_jRD6wQNq_OBnC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/60 transition-colors group-hover:text-white"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.6 3.9-6.6 3.9Z" />
                  </svg>
                </a>


                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/share/1626VB66An/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/60 transition-colors group-hover:text-white"
                  >
                    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
                  </svg>
                </a>


                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/dahamansolarenergy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/60 transition-colors group-hover:text-white"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>


                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/dahaman-energy-10b6a3334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-orange-400 hover:bg-orange-400"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white/60 transition-colors group-hover:text-white"
                  >
                    <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4 9.5h5V21H4V9.5ZM12 9.5h4.8v1.6h.1c.7-1.2 2.1-2.1 4.3-2.1 4.6 0 5.4 3 5.4 6.9V21h-5v-4.5c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21H12V9.5Z" />
                  </svg>
                </a>

              </div>

            </div>


            {/* =========================
          CENTER — QUICK LINKS
      ========================= */}
            <div className="lg:pl-8">

              <p className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-orange-400">
                <span className="h-px w-7 bg-orange-400" />
                Quick Links
              </p>

              <nav className="space-y-1">

                <a
                  href="/about"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>About Us</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

                <a
                  href="/contact"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>Contact Us</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

                <a
                  href="/services"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>Our Services</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

                <a
                  href="/projects"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>Projects</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

                <a
                  href="/privacy-policy"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>Privacy Policy</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

                <a
                  href="/terms-conditions"
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>Terms &amp; Conditions</span>
                  <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>

              </nav>

            </div>


            {/* =========================
          RIGHT — LOGO + TAGLINE
      ========================= */}
            <div className="flex flex-col lg:items-end">

              {/* DAHAMAN LOGO */}
              <div className="mb-8 flex justify-start lg:justify-end">
                <img
                  src="/dahaman-logo.png"
                  alt="Dahaman Energy"
                  width="190"
                  height="70"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-[190px] object-contain"
                />
              </div>


              {/* TAGLINE */}
              <p className="max-w-sm text-sm leading-7 text-white/45 lg:text-right">
                Rooftop solar made simple.
                <br />
                We don&apos;t just sell solar — we give you
                <br />
                peace of mind.
              </p>


              <div className="mt-8 flex items-center gap-3 lg:justify-end">
                <span className="h-px w-10 bg-orange-400/50" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Solar &amp; Renewable Energy
                </span>
              </div>

            </div>

          </div>


          {/* =========================
        BOTTOM BAR
    ========================= */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">

            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Dahaman Energy. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="/privacy-policy"
                className="text-xs text-white/30 transition-colors hover:text-white/70"
              >
                Privacy Policy
              </a>

              <a
                href="/terms-conditions"
                className="text-xs text-white/30 transition-colors hover:text-white/70"
              >
                Terms &amp; Conditions
              </a>

            </div>

          </div>

        </div>

      </footer>
    </main>
  );
}
