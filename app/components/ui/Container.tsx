import { cn } from "@/lib/cn";

/**
 * Centers page content and applies the standard side padding.
 *
 * Before: every section repeated "mx-auto max-w-7xl px-6 md:px-10 lg:px-12"
 * with small differences (px-5, px-8 ...), so edges didn't line up between
 * sections. Now all sections share one width and one gutter.
 */
export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12", className)}>
      {children}
    </div>
  );
}
