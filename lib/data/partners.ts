/**
 * Organisations shown in "Partners & Sponsors" on the home page.
 */
export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "M.G. College of Pharmaceutical Sciences", logo: "/clients/mgcps.jpeg" },
  { name: "Oriana Power", logo: "/clients/oriana-power.jpeg" },
  { name: "Larsen & Toubro", logo: "/clients/larsen-toubro.jpeg" },
  {
    name: "Mahatma Gandhi Engineering College",
    logo: "/clients/mahatma-gandhi-engineering.jpeg",
  },
  {
    name: "Jaipur Engineering College",
    logo: "/clients/jaipur-engineering-college.jpeg",
  },
  {
    name: "Jaipur College of Pharmacy",
    logo: "/clients/jaipur-college-pharmacy.jpeg",
  },
  { name: "National Sample Survey Office", logo: "/clients/nsso.jpeg" },
];
