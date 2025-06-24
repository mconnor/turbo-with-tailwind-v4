import "./globals.css";
import Link from "next/link";
import Header from "#components/Header.tsx"

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
      <body>
        <Header
          title="Turborepo with Tailwind Version 4"
          logoSrc="/logo.svg"
          navigation={[
            { name: "Home", href: "/", current: true },
            { name: "About", href: "/about", current: false },
            { name: "Services", href: "/services", current: false },
            { name: "Contact", href: "/contact", current: false },
          ]}  />


        {children}
      </body>
    </html>
  );
}
