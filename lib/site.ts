/**
 * Single source of truth for Dahaman Energy business information.
 *
 * Why this file exists:
 * Phone numbers, email, address etc. used to be typed by hand in 5+ files.
 * If a number changed, every copy had to be found and edited. Now every
 * component imports from here, so one edit updates the whole website.
 *
 * IMPORTANT: Values below were copied exactly from the existing website.
 * Do not change them without confirmation from the business.
 */

export const site = {
  name: "Dahaman Energy",
  title: "Dahaman Energy | Solar Energy Solutions in Jaipur",
  description:
    "Reliable and sustainable solar energy solutions for homes, businesses and industries. Make the switch to cleaner energy with Dahaman Energy.",
  tagline: "Rooftop solar made simple.",

  phones: [
    { display: "+91-9057034374", href: "tel:+919057034374" },
    { display: "+91-8560034374", href: "tel:+918560034374" },
  ],

  email: "info@dahamanenergy.com",

  address: "S151-152, Kalwar Road, Arihant Nagar, Hathoj, Jaipur, Rajasthan",

  workingHours: "Mon - Sun · 09:00 AM - 09:00 PM",

  whatsapp: {
    /** International format without "+" or spaces, as required by wa.me */
    number: "919057034374",
    defaultMessage:
      "Hello Dahaman Energy, I would like to know more about your solar solutions.",
  },

  socials: [
    {
      name: "YouTube",
      href: "https://youtube.com/@dahamansolarenergy?si=D7_jRD6wQNq_OBnC",
    },
    { name: "Facebook", href: "https://www.facebook.com/share/1626VB66An/" },
    { name: "Instagram", href: "https://www.instagram.com/dahamansolarenergy/" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dahaman-energy-10b6a3334/",
    },
  ],
} as const;

/** Main navigation, used by the Navbar (desktop + mobile). */
export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Solar Calculator", href: "/solar-calculator" },
  { name: "Contact", href: "/contact" },
] as const;

/** Footer "Quick Links". */
export const footerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Solar Calculator", href: "/solar-calculator" },
] as const;

/**
 * Legal pages linked from the footer (Quick Links + bottom bar).
 * NOTE: these pages do not exist yet, so the links currently show a 404.
 * Kept as in the original site, pending the business's decision on content.
 */
export const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
] as const;

/** Builds a WhatsApp chat link with a pre-filled message. */
export function whatsappLink(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link with optional subject and body. */
export function emailLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}
