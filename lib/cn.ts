/**
 * Joins CSS class names, skipping empty/false values.
 *
 *   cn("p-4", isActive && "text-brand-400", className)
 *
 * Note: this does NOT resolve conflicting Tailwind classes (e.g. "p-4 p-6").
 * When passing a `className` to a component, avoid overriding the same
 * property the component already sets.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
