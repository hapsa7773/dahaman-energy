import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Small orange label above the title, e.g. "What We Offer". */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** "dark" = for dark backgrounds (white text), "light" = for light backgrounds. */
  tone?: "dark" | "light";
  /** Use "h1" for the main heading of a page (one per page, good for SEO). */
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Standard "eyebrow + title + description" block used at the top of sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-brand-400" />
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-[0.35em]",
              dark ? "text-brand-400" : "text-brand-500"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <Heading
        className={cn(
          "text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl",
          dark ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
      </Heading>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-sm leading-7 md:text-base",
            dark ? "text-white/45" : "text-neutral-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
