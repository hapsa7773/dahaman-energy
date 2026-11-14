/**
 * Shared form validation rules (used by Contact and Solar Calculator).
 *
 * Each function returns an error message string when the value is invalid,
 * or `undefined` when it is valid. This makes it easy to build an
 * `errors` object: { name: validateName(form.name), ... }
 */

export function validateName(value: string, label = "name") {
  if (value.trim().length < 2) return `Please enter your ${label}.`;
}

export function validateEmail(value: string) {
  // Intentionally simple: something@something.something
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
}

/**
 * Indian mobile numbers: 10 digits starting with 6, 7, 8 or 9.
 * Accepts optional +91 / 91 / 0 prefix, spaces and dashes.
 */
export function normalizeIndianMobile(value: string) {
  const digits = value.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function validateIndianMobile(value: string, { required = true } = {}) {
  if (!value.trim()) return required ? "Please enter your mobile number." : undefined;
  if (!normalizeIndianMobile(value)) {
    return "Please enter a valid 10-digit Indian mobile number.";
  }
}

/** Indian PIN codes are 6 digits and never start with 0. */
export function validatePinCode(value: string) {
  if (!/^[1-9]\d{5}$/.test(value)) return "Please enter a valid 6-digit PIN code.";
}

export function validatePositiveNumber(value: string, label: string) {
  const number = Number(value);
  if (!value.trim() || !Number.isFinite(number) || number <= 0) {
    return `Please enter your ${label} (a number greater than 0).`;
  }
}

/** True when an errors object has no messages. */
export function isValid(errors: Record<string, string | undefined>) {
  return Object.values(errors).every((message) => !message);
}
