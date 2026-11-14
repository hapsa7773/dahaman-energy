"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Site navigation. Rendered ONCE in app/layout.tsx, so pages must not
 * render their own <Navbar />.
 *
 * It's a Client Component because it needs:
 * - useState     -> open/close the mobile menu
 * - usePathname  -> know which page is active
 */

/** "/" only matches the home page; "/services" also matches "/services/xyz". */
function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const MOBILE_MENU_ID = "mobile-navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the page changes (incl. browser back/forward).
  // This "compare with previous value during render" pattern is React's
  // recommended alternative to calling setState inside a useEffect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Close the mobile menu with the Escape key (keyboard accessibility).
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:px-6"
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
          className="group relative flex items-center rounded-xl p-1 transition-all duration-300"
        >
          <span className="absolute inset-0 -z-10 rounded-xl bg-brand-400/0 blur-xl transition-all duration-500 group-hover:bg-brand-400/20" />

          <img
            src="/dahaman-logo.png"
            alt={site.name}
            width={170}
            height={56}
            className="h-12 w-auto object-contain transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.35)] md:h-14"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative py-2 text-sm transition-colors duration-300 hover:text-white",
                  active ? "text-white" : "text-white/65"
                )}
              >
                {item.name}

                {/* Orange underline: always visible on the active page, animated on hover */}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-brand-400 transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-brand-400 hover:text-white md:flex"
        >
          Get a Quote
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-400/10 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          id={MOBILE_MENU_ID}
          className="mx-4 mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/95 p-5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item, index) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 text-sm transition-colors duration-300 hover:text-white",
                    active ? "text-brand-400" : "text-white/70",
                    index !== navItems.length - 1 && "border-b border-white/10"
                  )}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight
                    size={15}
                    className={active ? "text-brand-400" : "text-white/30"}
                  />
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-brand-400 hover:text-white"
            >
              Get a Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
