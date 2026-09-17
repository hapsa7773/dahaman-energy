"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    bill: "",
    city: "",
    pin: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Dahaman Energy,

I would like to get a free solar quote.

Name: ${quoteForm.name}
Email: ${quoteForm.email}
WhatsApp Number: ${quoteForm.whatsapp}
Monthly Electricity Bill: ₹${quoteForm.bill}
City: ${quoteForm.city}
Area Pin Code: ${quoteForm.pin}`;

    const whatsappUrl = `https://wa.me/919057034374?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-white text-neutral-900">
      <Navbar />

      {/* CONTACT / FREE QUOTE SECTION WILL COME HERE */}

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
                  {/* PHONE */}
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.07]">

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

                      <a
                        href="tel:+919057034374"
                        className="mt-1 block text-base font-medium text-white transition-colors hover:text-orange-400"
                      >
                        +91-9057034374
                      </a>

                      <a
                        href="tel:+918560034374"
                        className="mt-2 block text-base font-medium text-white transition-colors hover:text-orange-400"
                      >
                        +91-8560034374
                      </a>
                    </div>

                    <span className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-400">
                      ↗
                    </span>

                  </div>


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


    </main>
  );
}