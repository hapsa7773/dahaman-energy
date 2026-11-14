import Link from "next/link";
import { cn } from "@/lib/cn";

type CardProps = {
  /** "dark" for cards on black sections, "light" for white sections. */
  tone?: "dark" | "light";
  /** Adds the lift + orange border hover effect. */
  interactive?: boolean;
  /** If provided, the whole card becomes a link. */
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const tones = {
  dark: "border-white/10 bg-white/[0.035] text-white",
  light: "border-black/[0.06] bg-white text-neutral-950 shadow-[0_12px_40px_rgba(0,0,0,0.05)]",
};

const hoverTones = {
  dark: "hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.055]",
  light: "hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)]",
};

/**
 * Rounded surface with border, used for service cards and similar blocks.
 * "group" is included so children can react to hovering the card
 * (e.g. `group-hover:text-brand-400`).
 */
export default function Card({
  tone = "dark",
  interactive = false,
  href,
  className,
  children,
}: CardProps) {
  const classes = cn(
    "group relative block overflow-hidden rounded-card border p-6 transition-all duration-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
    tones[tone],
    interactive && hoverTones[tone],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
