/**
 * Brand logos shown in the "Trusted Brands" marquee on the home page.
 */
export type Brand = {
  name: string;
  logo: string;
  /** Optional extra classes for logos that need visual adjustment. */
  imageClassName?: string;
};

export const brands: Brand[] = [
  { name: "Adani", logo: "/brands/adani.png" },
  { name: "Waaree", logo: "/brands/waaree.png" },
  { name: "Vikram Solar", logo: "/brands/vikram-solar.png" },
  { name: "Avaada", logo: "/brands/avaada.png" },
  { name: "Luminous", logo: "/brands/luminous.png" },
  { name: "Polycab", logo: "/brands/polycab.png" },
  { name: "Sungrow", logo: "/brands/sungrow.png" },
  { name: "Solis", logo: "/brands/solis.png" },
  // The K-Solar artwork has extra padding, so it is scaled up to match the others.
  { name: "K-Solar", logo: "/brands/k-solar.png", imageClassName: "scale-[1.4]" },
];
