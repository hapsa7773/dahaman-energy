import type { Metadata } from "next";

// Server Component whose only job is page metadata (title/description).
// The page itself is a Client Component, and Client Components cannot export metadata.
export const metadata: Metadata = {
  title: "Solar Calculator",
  description:
    "Find out how much you can save by switching to solar. Enter your electricity details and estimate your solar requirement.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
