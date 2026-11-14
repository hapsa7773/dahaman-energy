import type { Metadata } from "next";

// Server Component whose only job is page metadata (title/description).
// The page itself is a Client Component, and Client Components cannot export metadata.
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to make the switch to solar? Tell us what you need and our team will help you find the right energy solution.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
