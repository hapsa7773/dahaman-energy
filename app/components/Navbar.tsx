"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Solar Calculator", href: "#solar-calculator" },
  { name: "Contact", href: "#quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:px-6">

        {/* =========================
            LOGO
        ========================= */}
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="group relative flex items-center rounded-xl p-1 transition-all duration-300"
        >
          {/* Logo Glow */}
          <span className="absolute inset-0 -z-10 rounded-xl bg-orange-400/0 blur-xl transition-all duration-500 group-hover:bg-orange-400/20" />

          <img
            src="/dahaman-logo.png"
            alt="Dahaman Energy"
            className="
              h-12 w-auto object-contain
              transition-all duration-300 ease-out
              group-hover:-translate-y-0.5
              group-hover:scale-[1.03]
              group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.35)]
              md:h-14
            "
          />
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <div className="hidden items-center gap-7 lg:flex">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                group relative py-2
                text-sm text-white/65
                transition-colors duration-300
                hover:text-white
              "
            >
              {item.name}

              {/* Animated Orange Line */}
              <span
                className="
                  absolute bottom-0 left-1/2
                  h-px w-0
                  -translate-x-1/2
                  bg-orange-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}

        </div>


        {/* =========================
            DESKTOP CTA
        ========================= */}
        <Link
          href="#quote"
          className="
            group hidden items-center gap-2
            rounded-full
            bg-white
            px-5 py-2.5
            text-sm font-medium text-black
            transition-all duration-300
            hover:bg-orange-400
            hover:text-white
            md:flex
          "
        >
          Get a Quote

          <ArrowUpRight
            size={16}
            className="
              transition-transform duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </Link>


        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/10
            bg-white/[0.03]
            transition-all duration-300
            hover:border-orange-400/50
            hover:bg-orange-400/10
            lg:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================= */}
      {open && (
        <div
          className="
            mx-4 mt-2
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-black/95
            p-5
            text-white
            shadow-2xl shadow-black/30
            backdrop-blur-xl
            lg:hidden
          "
        >

          <div className="flex flex-col">

            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center justify-between
                  py-4
                  text-sm text-white/70
                  transition-colors duration-300
                  hover:text-white
                  ${
                    index !== navItems.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                `}
              >
                <span>{item.name}</span>

                <ArrowUpRight
                  size={15}
                  className="text-white/30"
                />
              </Link>
            ))}


            {/* =========================
                MOBILE CTA
            ========================= */}
            <Link
              href="#quote"
              onClick={() => setOpen(false)}
              className="
                group mt-5
                flex items-center justify-center gap-2
                rounded-full
                bg-white
                px-5 py-3
                text-sm font-medium text-black
                transition-all duration-300
                hover:bg-orange-400
                hover:text-white
              "
            >
              Get a Quote

              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}