"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";


export default function Home() {

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

          <div className="absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-orange-400/20" />

          <div className="absolute -right-20 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-orange-400/10" />

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
<section
  id="about"
  style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
  className="bg-[#f5f4f1] px-6 py-28 md:px-10 lg:px-12"
>
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
          10+
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Years Experience
        </p>

      </div>


      {/* STAT 02 */}
      <div className="border-b border-black/10 py-7 sm:pl-8 lg:border-b-0 lg:border-r">

        <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
          10K+
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Happy Customers
        </p>

      </div>


      {/* STAT 03 */}
      <div className="border-b border-black/10 py-7 sm:pr-8 lg:border-b-0 lg:border-r lg:pl-8">

        <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
          100
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Awards Winning
        </p>

      </div>


      {/* STAT 04 */}
      <div className="py-7 sm:pl-8">

        <p className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950">
          60
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Global Brands
        </p>

      </div>

    </div>


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

        {/* 01 */}
        <div className="group flex items-center justify-between border-b border-black/10 py-7">

          <div className="flex items-center gap-7">

            <span className="text-xs text-neutral-300">
              01
            </span>

            <div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                Clean and Renewable
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                Harness clean solar energy for a more sustainable future.
              </p>
            </div>

          </div>

          <span className="ml-4 text-lg text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
            ↗
          </span>

        </div>


        {/* 02 */}
        <div className="group flex items-center justify-between border-b border-black/10 py-7">

          <div className="flex items-center gap-7">

            <span className="text-xs text-neutral-300">
              02
            </span>

            <div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                Energy Independence
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                Take greater control of your energy and electricity costs.
              </p>
            </div>

          </div>

          <span className="ml-4 text-lg text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
            ↗
          </span>

        </div>


        {/* 03 */}
        <div className="group flex items-center justify-between border-b border-black/10 py-7">

          <div className="flex items-center gap-7">

            <span className="text-xs text-neutral-300">
              03
            </span>

            <div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                Low Maintenance
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                Solar systems designed for dependable and easy operation.
              </p>
            </div>

          </div>

          <span className="ml-4 text-lg text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
            ↗
          </span>

        </div>


        {/* 04 */}
        <div className="group flex items-center justify-between py-7">

          <div className="flex items-center gap-7">

            <span className="text-xs text-neutral-300">
              04
            </span>

            <div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500 md:text-3xl">
                Solar Scalability
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                Flexible solar solutions that can grow with your energy needs.
              </p>
            </div>

          </div>

          <span className="ml-4 text-lg text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
            ↗
          </span>

        </div>

      </div>

    </div>

  </div>
</section>


      {/* =========================
          SERVICES
      ========================= */}



<section
  id="services"
  style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
  className="relative overflow-hidden bg-neutral-950 px-6 py-28 md:px-10 lg:px-12"
>
  {/* Subtle sunlight */}
  <div className="pointer-events-none absolute right-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-orange-400/15 blur-[110px]" />

  <div className="pointer-events-none absolute right-[18%] top-[28%] h-[180px] w-[180px] rounded-full bg-orange-300/10 blur-[70px]" />

  {/* Subtle sun ring */}
  <div className="pointer-events-none absolute -right-32 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-orange-400/10" />

  <div className="pointer-events-none absolute -right-10 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-orange-400/[0.06]" />


  <div className="relative z-10 mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

      <div>

        <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
          <span className="h-px w-8 bg-orange-400" />
          Our Services
        </p>

        <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
          Solar solutions
          <br />
          <span className="text-white/35">
            for every energy need.
          </span>
        </h2>

      </div>


      <p className="max-w-md text-base leading-7 text-white/45 md:text-lg">
        From powering your home to supporting large-scale
        energy requirements, we provide solar solutions
        designed around your needs.
      </p>

    </div>


    {/* SERVICES LIST */}
    <div className="mt-20 border-t border-white/10">


      {/* SERVICE 01 */}
      <div className="group grid gap-6 border-b border-white/10 py-10 md:grid-cols-[70px_1fr_50px] md:items-center">

        <span className="text-sm text-white/25">
          01
        </span>

        <div>

          <h3 className="text-3xl font-medium tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-400 md:text-4xl">
            Solar for Home Energy
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 md:text-base">
            Reliable solar energy solutions designed to help
            homes generate clean power and reduce electricity costs.
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* SERVICE 02 */}
      <div className="group grid gap-6 border-b border-white/10 py-10 md:grid-cols-[70px_1fr_50px] md:items-center">

        <span className="text-sm text-white/25">
          02
        </span>

        <div>

          <h3 className="text-3xl font-medium tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-400 md:text-4xl">
            Solar for Business
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 md:text-base">
            Smart solar solutions for businesses looking to
            manage energy costs and build a more sustainable future.
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* SERVICE 03 */}
      <div className="group grid gap-6 border-b border-white/10 py-10 md:grid-cols-[70px_1fr_50px] md:items-center">

        <span className="text-sm text-white/25">
          03
        </span>

        <div>

          <h3 className="text-3xl font-medium tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-400 md:text-4xl">
            Ground Mount Solar
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 md:text-base">
            Efficient ground-mounted solar systems designed
            for larger spaces and high energy generation requirements.
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* SERVICE 04 */}
      <div className="group grid gap-6 border-b border-white/10 py-10 md:grid-cols-[70px_1fr_50px] md:items-center">

        <span className="text-sm text-white/25">
          04
        </span>

        <div>

          <h3 className="text-3xl font-medium tracking-tight text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-400 md:text-4xl">
            Rooftop Solar
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 md:text-base">
            Customized rooftop solar systems that make smart
            use of available space while generating clean energy.
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>

    </div>


    {/* BOTTOM CTA */}
    <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <p className="max-w-lg text-sm leading-6 text-white/40">
        Looking for the right solar solution?
        Let’s find what works best for your energy needs.
      </p>

      <a
        href="#quote"
        className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-orange-400"
      >
        Get a Free Quote

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </a>

    </div>

  </div>
</section>
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
      <div className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">

        <span className="text-sm text-neutral-300">
          01
        </span>


        <div>

          <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
            Quality Services
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
            We focus on delivering quality solar services designed
            around your specific energy requirements.
          </p>

        </div>


        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* FEATURE 02 */}
      <div className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">

        <span className="text-sm text-neutral-300">
          02
        </span>


        <div>

          <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
            Expert Workers
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
            Skilled professionals working to provide efficient and
            dependable solar solutions.
          </p>

        </div>


        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* FEATURE 03 */}
      <div className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">

        <span className="text-sm text-neutral-300">
          03
        </span>


        <div>

          <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
            Free Consultation
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
            Get guidance from our team to understand the solar
            solution that fits your energy needs.
          </p>

        </div>


        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
        </div>

      </div>


      {/* FEATURE 04 */}
      <div className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-[80px_1fr_60px] md:items-center">

        <span className="text-sm text-neutral-300">
          04
        </span>


        <div>

          <h3 className="text-3xl font-medium tracking-tight text-neutral-950 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-500 md:text-4xl">
            Customer Support
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
            Dedicated support to help you throughout your solar
            journey.
          </p>

        </div>


        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-400 group-hover:text-black">
          ↗
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
  
  {/* =========================
    SOLAR CALCULATOR
========================= */}
<section
  id="solar-calculator"
  style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
  className="relative overflow-hidden bg-neutral-950 px-6 py-28 md:px-10 lg:px-12"
>
  {/* Background glow */}
  <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-400/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT CONTENT */}
      <div>

        <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
          Solar Calculator
        </p>

        <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
          Know your
          <br />
          <span className="text-white/40">
            solar potential.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-base leading-7 text-white/55 md:text-lg">
          Find out how much you can save by switching to solar.
          Enter your electricity details and take the first step
          towards a smarter energy future.
        </p>

        {/* Small highlights */}
        <div className="mt-10 grid max-w-lg grid-cols-2 gap-6">

          <div className="border-l border-white/10 pl-5">
            <p className="text-sm font-medium text-white">
              Smart Calculation
            </p>

            <p className="mt-1 text-xs leading-5 text-white/40">
              Based on your electricity usage
            </p>
          </div>

          <div className="border-l border-white/10 pl-5">
            <p className="text-sm font-medium text-white">
              Better Savings
            </p>

            <p className="mt-1 text-xs leading-5 text-white/40">
              Understand your solar requirement
            </p>
          </div>

        </div>

      </div>


      {/* CALCULATOR CARD */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl md:p-8">

        <div className="mb-8">

          <p className="text-sm font-medium text-white">
            Calculate Your Solar Requirement
          </p>

          <p className="mt-1 text-sm text-white/40">
            Enter your details to get started.
          </p>

        </div>


        <form className="space-y-5" onSubmit={handleCalculatorSubmit}>

          {/* NAME */}
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              value={calculator.name}
              onChange={(e) => setCalculator({ ...calculator, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
            />
          </div>


          {/* MOBILE */}
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={calculator.mobile}
              onChange={(e) => setCalculator({ ...calculator, mobile: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
            />
          </div>


          {/* MONTHLY BILL */}
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
              Monthly Electricity Bill
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                ₹
              </span>

              <input
                type="number"
                placeholder="Enter monthly bill"
                value={calculator.bill}
                onChange={(e) => setCalculator({ ...calculator, bill: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
              />
            </div>
          </div>


          {/* UNIT COST */}
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/40">
              Electricity Unit Cost
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                ₹
              </span>

              <input
                type="number"
                  placeholder="Cost per unit"
                value={calculator.unitCost}
                onChange={(e) => setCalculator({ ...calculator, unitCost: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-orange-400/60"
              />
            </div>
          </div>


          {/* BUTTON */}
          <button
            type="submit"
            className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-400 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-orange-300"
          >
            Calculate Solar Potential

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>

          {calculatorResult && (
            <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-400/10 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-300">
                Estimated Solar Potential
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-semibold text-white">{calculatorResult.systemSize} kW</p>
                  <p className="mt-1 text-xs text-white/40">Suggested system size</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">₹{calculatorResult.monthlySavings.toLocaleString("en-IN")}</p>
                  <p className="mt-1 text-xs text-white/40">Estimated monthly savings</p>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm text-white/70">
                  Approx. annual savings: <span className="font-semibold text-white">₹{calculatorResult.annualSavings.toLocaleString("en-IN")}</span>
                </p>
                <p className="mt-2 text-xs leading-5 text-white/35">
                  Estimate based on your entered bill and unit cost. Final system sizing depends on site conditions and an expert assessment.
                </p>
              </div>
            </div>
          )}

        </form>

      </div>

    </div>

  </div>
</section>
  
  {/* =========================
    CONTACT / FREE QUOTE
========================= */}
<section
  id="quote"
  style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
  className="relative overflow-hidden bg-[#f1f0ec] px-6 py-24 md:px-10 lg:px-12"
>
  {/* Background Details */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* TOP HEADING */}
    <div className="mb-16 max-w-3xl">

      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
        <span className="h-px w-8 bg-orange-400" />
        Get In Touch
      </p>

      <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[76px]">
        Let’s power
        <br />
        <span className="text-neutral-400">
          your future.
        </span>
      </h2>

      <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
        Ready to make the switch to solar? Tell us what you need
        and our team will help you find the right energy solution.
      </p>

    </div>


    {/* MAIN GRID */}
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">


      {/* =========================
          CONTACT INFORMATION
      ========================= */}
      <div className="rounded-[28px] bg-neutral-950 p-7 text-white md:p-9">

        <div className="flex h-full flex-col">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              Dahaman Energy
            </p>

            <h3 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Let’s build a cleaner energy future together.
            </h3>
          </div>


          {/* CONTACT ITEMS */}
          <div className="mt-12 space-y-4">


            {/* PHONE */}
            <a
              href="tel:+919057034374"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.07]"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-400 text-black">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Call Us
                </p>

                <p className="mt-1 text-base font-medium text-white">
                  +91-9057034374
                </p>

              </div>

              <span className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                ↗
              </span>

            </a>


            {/* EMAIL */}
            <a
              href="mailto:info@dahamanenergy.com"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.07]"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-400">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>

                <p className="mt-1 truncate text-base font-medium text-white">
                  info@dahamanenergy.com
                </p>

              </div>

              <span className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                ↗
              </span>

            </a>


            {/* LOCATION */}
            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-400">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

              </div>

              <div>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Visit Us
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
S151-152, Kalwar Road, Arihant Nagar, Hathoj, Jaipur, Rajasthan
                </p>

              </div>

            </div>

          </div>


          {/* HOURS */}
          <div className="mt-auto pt-10">

            <div className="flex items-center justify-between border-t border-white/10 pt-5">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Working Hours
                </p>

                <p className="mt-2 text-sm text-white/65">
                  Mon - Sun · 09:00 AM - 09:00 PM
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          QUOTE FORM
      ========================= */}
      <div className="rounded-[28px] border border-black/[0.06] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-9 lg:p-10">

        <div className="mb-9">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-2xl font-medium tracking-tight text-neutral-950">
                Get a Free Quote
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Share your details and our solar experts will
                get in touch with you.
              </p>

            </div>

            <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 sm:flex">
              ↗
            </div>

          </div>

        </div>


        <form
          onSubmit={handleQuoteSubmit}
          className="space-y-5"
        >

          {/* NAME + EMAIL */}
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Name
              </label>

              <input
                type="text"
                required
                value={quoteForm.name}
                onChange={(e) =>
                  setQuoteForm({ ...quoteForm, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Email
              </label>

              <input
                type="email"
                required
                value={quoteForm.email}
                onChange={(e) =>
                  setQuoteForm({ ...quoteForm, email: e.target.value })
                }
                placeholder="you@example.com"
                className="w-full rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
              />
            </div>

          </div>

          {/* WHATSAPP */}
          <div>
            <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              WhatsApp Number
            </label>

            <input
              type="tel"
              required
              value={quoteForm.whatsapp}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, whatsapp: e.target.value })
              }
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
            />
          </div>

          {/* MONTHLY BILL */}
          <div>
            <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Monthly Electricity Bill
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
                ₹
              </span>

              <input
                type="number"
                required
                value={quoteForm.bill}
                onChange={(e) =>
                  setQuoteForm({ ...quoteForm, bill: e.target.value })
                }
                placeholder="Enter your monthly bill"
                className="w-full rounded-xl border border-black/10 bg-[#fafaf9] py-4 pl-9 pr-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
              />
            </div>
          </div>

          {/* CITY + PIN */}
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                City
              </label>

              <input
                type="text"
                required
                value={quoteForm.city}
                onChange={(e) =>
                  setQuoteForm({ ...quoteForm, city: e.target.value })
                }
                placeholder="Your city"
                className="w-full rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Area Pin Code
              </label>

              <input
                type="text"
                required
                inputMode="numeric"
                maxLength={6}
                value={quoteForm.pin}
                onChange={(e) =>
                  setQuoteForm({
                    ...quoteForm,
                    pin: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="302012"
                className="w-full rounded-xl border border-black/10 bg-[#fafaf9] px-4 py-4 text-sm text-neutral-950 outline-none placeholder:text-neutral-300 transition focus:border-orange-400 focus:bg-white"
              />
            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="group mt-3 flex w-full items-center justify-between rounded-xl bg-neutral-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400 hover:text-black"
          >
            <span>
              Request a Free Quote
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-black/10">
              ↗
            </span>
          </button>

        </form>

      </div>

    </div>

  </div>
</section>

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
                className="text-sm text-white/70 transition-colors hover:text-orange-400"
              >
                +91-9057034374
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
            href="#about"
            className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
          >
            <span>About Us</span>
            <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          </a>

          <a
            href="#quote"
            className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
          >
            <span>Contact Us</span>
            <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          </a>

          <a
            href="#services"
            className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
          >
            <span>Our Services</span>
            <span className="translate-x-[-4px] text-orange-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              ↗
            </span>
          </a>

          <a
            href="#projects"
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
