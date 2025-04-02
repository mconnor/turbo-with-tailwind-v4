import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turborepo with Tailwind Version 4",
  description: "Updated Turborepo with Tailwind Version 4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
