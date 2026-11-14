import type { Metadata } from "next";

// Server Component whose only job is page metadata (title/description).
// The page itself is a Client Component, and Client Components cannot export metadata.
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dahaman Energy is a leading solar energy company in India specializing in integrated solar solutions and turnkey services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
