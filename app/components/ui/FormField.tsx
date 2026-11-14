import { cn } from "@/lib/cn";

type FormFieldProps = {
  /** Required: connects the <label> to the <input> (htmlFor = id). */
  id: string;
  label: string;
  /** "light" for white forms (Contact), "dark" for dark forms (Calculator). */
  tone?: "light" | "dark";
  /** Text shown before the value inside the input, e.g. "₹". */
  prefix?: string;
  /** Validation message. When set, the field is styled and announced as invalid. */
  error?: string;
  /** Helper text shown under the field when there is no error. */
  hint?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "prefix">;

const styles = {
  light: {
    label: "mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400",
    input:
      "w-full rounded-xl border bg-[#fafaf9] py-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-300 focus:bg-white",
    border: "border-black/10 focus:border-brand-400",
    prefix: "text-neutral-400",
    hint: "text-neutral-400",
    error: "text-red-600",
  },
  dark: {
    label: "mb-2 block text-xs uppercase tracking-[0.15em] text-white/40",
    input:
      "w-full rounded-xl border bg-white/5 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25",
    border: "border-white/10 focus:border-brand-400/60",
    prefix: "text-white/40",
    hint: "text-white/35",
    error: "text-red-300",
  },
};

/**
 * Label + input + error message, wired together for accessibility.
 *
 * Why the id matters: <label htmlFor={id}> lets screen readers announce the
 * label when the input is focused, and lets users tap the label to focus
 * the input (bigger touch target on mobile).
 */
export default function FormField({
  id,
  label,
  tone = "light",
  prefix,
  error,
  hint,
  className,
  ...inputProps
}: FormFieldProps) {
  const s = styles[tone];
  const messageId = `${id}-message`;
  const message = error ?? hint;

  return (
    <div className={className}>
      <label htmlFor={id} className={s.label}>
        {label}
        {inputProps.required && (
          <span aria-hidden="true" className="ml-1 text-brand-400">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {prefix && (
          <span
            aria-hidden="true"
            className={cn("pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm", s.prefix)}
          >
            {prefix}
          </span>
        )}

        <input
          id={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className={cn(
            s.input,
            prefix ? "pl-9 pr-4" : "px-4",
            error ? "border-red-400 focus:border-red-400" : s.border
          )}
          {...inputProps}
        />
      </div>

      {message && (
        <p id={messageId} className={cn("mt-2 text-xs", error ? s.error : s.hint)}>
          {message}
        </p>
      )}
    </div>
  );
}
