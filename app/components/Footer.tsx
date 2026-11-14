import Link from "next/link";
import { emailLink, footerLinks, legalLinks, site } from "@/lib/site";
import Container from "./ui/Container";

/* Social icons, keyed by the `name` used in lib/site.ts */
const socialIcons: Record<string, React.ReactNode> = {
  YouTube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.6 3.9-6.6 3.9Z" />
    </svg>
  ),
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
    </svg>
  ),
  Instagram: (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5ZM4 9.5h5V21H4V9.5ZM12 9.5h4.8v1.6h.1c.7-1.2 2.1-2.1 4.3-2.1 4.6 0 5.4 3 5.4 6.9V21h-5v-4.5c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V21H12V9.5Z" />
    </svg>
  ),
};

const iconCircle =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-brand-400";

const eyebrow =
  "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-400";

export default function Footer() {
  return (
    <footer
      style={{ contentVisibility: "auto", containIntrinsicSize: "700px" }}
      className="relative overflow-hidden bg-footer text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-400/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-300/[0.04] blur-[120px]" />

      <Container className="relative z-10">
        {/* MAIN FOOTER */}
        <div className="grid gap-14 py-20 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          {/* LEFT — CONTACT */}
          <div>
            <p className={`mb-7 ${eyebrow}`}>
              <span className="h-px w-7 bg-brand-400" />
              Get In Touch
            </p>

            <h3 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] text-white md:text-4xl">
              Let&apos;s build a cleaner
              <br />
              energy future.
            </h3>

            <div className="mt-10 space-y-6">
              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className={iconCircle}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">Address</p>
                  <p className="max-w-sm text-sm leading-6 text-white/60">{site.address}</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className={iconCircle}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">Phone</p>
                  {site.phones.map((phone, i) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className={`block text-sm text-white/70 transition-colors hover:text-brand-400 ${i > 0 ? "mt-1" : ""}`}
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className={iconCircle}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">Email</p>
                  <a
                    href={emailLink()}
                    className="break-all text-sm text-white/70 transition-colors hover:text-brand-400"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-brand-400 hover:bg-brand-400 hover:text-white"
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>

          {/* CENTER — QUICK LINKS */}
          <div className="lg:pl-8">
            <p className={`mb-8 ${eyebrow}`}>
              <span className="h-px w-7 bg-brand-400" />
              Quick Links
            </p>

            <nav aria-label="Footer" className="space-y-1">
              {[...footerLinks, ...legalLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 py-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.name}</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-[-4px] text-brand-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT — LOGO + TAGLINE */}
          <div className="flex flex-col lg:items-end">
            <div className="mb-8 flex justify-start lg:justify-end">
              <img
                src="/dahaman-logo.png"
                alt={site.name}
                width="190"
                height="62"
                loading="lazy"
                decoding="async"
                className="h-auto w-[190px] object-contain"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/45 lg:text-right">
              {site.tagline}
              <br />
              We don&apos;t just sell solar — we give you
              <br />
              peace of mind.
            </p>

            <div className="mt-8 flex items-center gap-3 lg:justify-end">
              <span className="h-px w-10 bg-brand-400/50" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Solar &amp; Renewable Energy
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/70"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
