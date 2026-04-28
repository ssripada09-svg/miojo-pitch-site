import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miojo — Founder-Led Platform",
  description:
    "A premium investor narrative for Miojo, Ciarra Pardo's founder-led lifestyle platform and AI operating layer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
