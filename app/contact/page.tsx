"use client";

import { useState } from "react";
import { emailLink, site, whatsappLink } from "@/lib/site";
import {
  isValid,
  validateEmail,
  validateIndianMobile,
  validateName,
  validatePinCode,
  validatePositiveNumber,
} from "@/lib/validation";
import Container from "../components/ui/Container";
import FormField from "../components/ui/FormField";

type QuoteForm = {
  name: string;
  email: string;
  whatsapp: string;
  bill: string;
  city: string;
  pin: string;
};

type QuoteErrors = Partial<Record<keyof QuoteForm, string>>;

const emptyForm: QuoteForm = { name: "", email: "", whatsapp: "", bill: "", city: "", pin: "" };

function validateQuote(form: QuoteForm): QuoteErrors {
  return {
    name: validateName(form.name),
    email: validateEmail(form.email),
    whatsapp: validateIndianMobile(form.whatsapp),
    bill: validatePositiveNumber(form.bill, "monthly bill"),
    city: validateName(form.city, "city"),
    pin: validatePinCode(form.pin),
  };
}

export default function Contact() {
  const [quoteForm, setQuoteForm] = useState<QuoteForm>(emptyForm);
  const [errors, setErrors] = useState<QuoteErrors>({});

  /** Updates one field and clears its error message as the user types. */
  const updateField = (field: keyof QuoteForm, value: string) => {
    setQuoteForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validateQuote(quoteForm);
    setErrors(nextErrors);

    if (!isValid(nextErrors)) {
      // Move keyboard focus to the first invalid field so the user sees it.
      const firstInvalid = (Object.keys(nextErrors) as (keyof QuoteForm)[]).find(
        (field) => nextErrors[field]
      );
      if (firstInvalid) document.getElementById(`quote-${firstInvalid}`)?.focus();
      return;
    }

    const form = {
      name: quoteForm.name.trim(),
      email: quoteForm.email.trim(),
      whatsapp: quoteForm.whatsapp.trim(),
      bill: quoteForm.bill.trim(),
      city: quoteForm.city.trim(),
      pin: quoteForm.pin.trim(),
    };

    // Same message format as before.
    const message = `Hello Dahaman Energy,

I would like to get a free solar quote.

Name: ${form.name}
Email: ${form.email}
WhatsApp Number: ${form.whatsapp}
Monthly Electricity Bill: ₹${form.bill}
City: ${form.city}
Area Pin Code: ${form.pin}`;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-white text-neutral-900">
      <section
        id="quote"
        className="page-top relative overflow-hidden bg-surface-stone pb-24"
      >
        {/* Background Details */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-3xl" />

        <Container className="relative z-10">
          {/* TOP HEADING */}
          <div className="mb-16 max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand-500">
              <span className="h-px w-8 bg-brand-400" />
              Get In Touch
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-[76px]">
              Let’s power
              <br />
              <span className="text-neutral-400">your future.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">
              Ready to make the switch to solar? Tell us what you need
              and our team will help you find the right energy solution.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            {/* CONTACT INFORMATION */}
            <div className="rounded-panel bg-ink p-7 text-white md:p-9">
              <div className="flex h-full flex-col">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-400">{site.name}</p>
                  <h2 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                    Let’s build a cleaner energy future together.
                  </h2>
                </div>

                <div className="mt-12 space-y-4">
                  {/* PHONE */}
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-400 text-black">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Call Us</p>
                      {site.phones.map((phone, i) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className={`${i === 0 ? "mt-1" : "mt-2"} block text-base font-medium text-white transition-colors hover:text-brand-400`}
                        >
                          {phone.display}
                        </a>
                      ))}
                    </div>

                    <span aria-hidden="true" className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-400">
                      ↗
                    </span>
                  </div>

                  {/* EMAIL */}
                  <a
                    href={emailLink()}
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Email</p>
                      {/* break-all (not truncate) so the full address is always visible on small phones */}
                      <p className="mt-1 break-all text-base font-medium text-white">{site.email}</p>
                    </div>

                    <span aria-hidden="true" className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-400">
                      ↗
                    </span>
                  </a>

                  {/* LOCATION */}
                  <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Visit Us</p>
                      <p className="mt-2 text-sm leading-6 text-white/65">{site.address}</p>
                    </div>
                  </div>
                </div>

                {/* HOURS */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Working Hours</p>
                      <p className="mt-2 text-sm text-white/65">{site.workingHours}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* QUOTE FORM */}
            <div className="rounded-panel border border-black/[0.06] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-9 lg:p-10">
              <div className="mb-9">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight text-neutral-950">Get a Free Quote</h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Share your details and our solar experts will
                      get in touch with you.
                    </p>
                  </div>
                  <div aria-hidden="true" className="hidden h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-500 sm:flex">
                    ↗
                  </div>
                </div>
              </div>

              {/* noValidate: we show our own consistent error messages instead of browser pop-ups */}
              <form onSubmit={handleQuoteSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    id="quote-name"
                    label="Name"
                    type="text"
                    autoComplete="name"
                    required
                    value={quoteForm.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    error={errors.name}
                  />
                  <FormField
                    id="quote-email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    error={errors.email}
                  />
                </div>

                <FormField
                  id="quote-whatsapp"
                  label="WhatsApp Number"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={quoteForm.whatsapp}
                  onChange={(e) => updateField("whatsapp", e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  error={errors.whatsapp}
                />

                <FormField
                  id="quote-bill"
                  label="Monthly Electricity Bill"
                  type="number"
                  inputMode="decimal"
                  min={1}
                  required
                  prefix="₹"
                  value={quoteForm.bill}
                  onChange={(e) => updateField("bill", e.target.value)}
                  placeholder="Enter your monthly bill"
                  error={errors.bill}
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    id="quote-city"
                    label="City"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={quoteForm.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Your city"
                    error={errors.city}
                  />
                  <FormField
                    id="quote-pin"
                    label="Area Pin Code"
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    maxLength={6}
                    required
                    value={quoteForm.pin}
                    onChange={(e) => updateField("pin", e.target.value.replace(/\D/g, ""))}
                    placeholder="302012"
                    error={errors.pin}
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-3 flex w-full items-center justify-between rounded-xl bg-ink px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  <span>Request a Free Quote</span>
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-black/10">
                    ↗
                  </span>
                </button>

                <p className="text-center text-xs text-neutral-400">
                  Submitting opens WhatsApp with your details pre-filled.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
