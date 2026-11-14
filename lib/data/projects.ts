/**
 * Projects shown on /projects.
 * Copied as-is from the original page.
 * TODO (business): replace with real project details (capacity, location, year)
 * once confirmed. Do not invent project data.
 */
export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Featured Project",
    title: "Solar Power Project",
    description:
      "A complete solar energy solution designed to deliver reliable and sustainable power for long-term performance.",
    tag: "5kW",
    image: "/projects/solar-power-project.jpeg",
    featured: true,
  },
  {
    number: "02",
    category: "Commercial",
    title: "Business Solar Solution",
    description:
      "Helping businesses move towards cleaner, smarter and more efficient energy.",
    tag: "Commercial",
    image: "/projects/business-solar-solution.jpeg",
    featured: false,
  },
  {
    number: "03",
    category: "Residential",
    title: "Rooftop Solar",
    description:
      "Efficient rooftop solar designed to turn available space into clean energy.",
    tag: "Rooftop",
    image: "/projects/rooftop-solar.jpeg",
    featured: false,
  },
];
