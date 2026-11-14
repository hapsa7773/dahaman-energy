import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Buttons and button-styled links.
 *
 * - <Button>      renders a real <button> (for forms / actions)
 * - <ButtonLink>  renders a link that LOOKS like a button
 *
 * Why two components? HTML rule of thumb: if it goes to another page, it's a
 * link; if it does something on this page (submit, open), it's a button.
 * Screen readers and keyboards rely on that difference.
 */

export type ButtonVariant = "primary" | "light" | "dark" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm transition-all duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Orange - main call to action on dark backgrounds (hero)
  primary: "bg-brand-400 font-semibold text-black hover:bg-brand-300",
  // White - CTA on dark backgrounds (navbar, services)
  light: "bg-white font-medium text-black hover:bg-brand-400 hover:text-white",
  // Black - CTA on light backgrounds (projects)
  dark: "bg-ink font-medium text-white hover:bg-brand-400 hover:text-black",
  // Outlined - secondary action on dark backgrounds
  ghost:
    "border border-white/15 bg-white/[0.06] font-medium text-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3.5",
  lg: "px-7 py-3.5",
};

/** Exported so non-button elements can share the same look if needed. */
export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonStyles(variant, size, className)} {...props} />
  );
}

/**
 * Internal paths ("/contact") use Next.js <Link> for fast client-side
 * navigation (no full page reload). External URLs, tel: and mailto: use a
 * plain <a>, and external websites open in a new tab safely.
 */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >) {
  const classes = buttonStyles(variant, size, className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  const isWebsite = href.startsWith("http");

  return (
    <a
      href={href}
      className={classes}
      {...(isWebsite ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
