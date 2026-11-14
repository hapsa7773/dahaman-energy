import type { Metadata } from "next";

// Server Component whose only job is page metadata (title/description).
// The page itself is a Client Component, and Client Components cannot export metadata.
export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From homes to industries, we provide end-to-end solar solutions designed for better savings, reliable performance and a cleaner future.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
