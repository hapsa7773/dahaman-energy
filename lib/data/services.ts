/**
 * Services shown on /services.
 * Text copied as-is from the original page. Add a service = add one object.
 */
export type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Rooftop Solar",
    description:
      "Efficient rooftop solar solutions for homes to reduce electricity bills and achieve energy independence.",
    image: "/services/rooftop-3d.png",
    imageAlt: "Rooftop Solar",
  },
  {
    number: "02",
    title: "Commercial & Industrial",
    description:
      "High-capacity solar systems designed for factories, offices, businesses and large-scale energy requirements.",
    image: "/services/industrial-solar-3d.png",
    imageAlt: "Industrial Solar Solutions",
  },
  {
    number: "03",
    title: "Solar System Design",
    description:
      "Expert engineering, site analysis and customized system design built around your energy requirements.",
    image: "/services/solar-design-3d.png",
    imageAlt: "Solar System Design",
  },
  {
    number: "04",
    title: "Rooftop & Commercial",
    description:
      "Complete rooftop solar installation for residential, commercial and institutional properties.",
    image: "/services/rooftop-commercial-3d.png",
    imageAlt: "Rooftop and Commercial Solar",
  },
  {
    number: "05",
    title: "Subsidy & Net Metering",
    description:
      "Complete assistance with solar subsidy schemes, documentation and net metering procedures.",
    image: "/services/subsidy-netmetering-3d.png",
    imageAlt: "Solar Subsidy and Net Metering",
  },
  {
    number: "06",
    title: "Cleaning & Maintenance",
    description:
      "Professional solar panel cleaning and maintenance to maintain long-term system performance.",
    image: "/services/solar-maintenance-3d.png",
    imageAlt: "Solar Panel Cleaning and Maintenance",
  },
  {
    number: "07",
    title: "Hybrid Solar System",
    description:
      "Integrated solar, grid and battery solutions for higher solar utilization and reliable backup power.",
    image: "/services/hybrid-solar-3d.png",
    imageAlt: "Hybrid Solar System",
  },
  {
    number: "08",
    title: "Battery Energy Storage",
    description:
      "Advanced energy storage solutions for backup power, peak demand management and better energy reliability.",
    image: "/services/bess-3d.png",
    imageAlt: "Battery Energy Storage System",
  },
  {
    number: "09",
    title: "Solar Park",
    description:
      "Large-scale solar power projects engineered for efficient electricity generation and reliable grid connectivity.",
    image: "/services/solar-park-3d.png",
    imageAlt: "Solar Park",
  },
];
