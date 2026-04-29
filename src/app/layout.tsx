import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { RevealOnView } from "./RevealOnView";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miojo — Founder-Led Lifestyle Platform",
  description:
    "A premium investor narrative for Miojo, Ciarra Pardo's founder-led lifestyle platform across community, commerce, hospitality, and wellness.",
  metadataBase: new URL("https://miojo-pitch-site-build.vercel.app"),
  openGraph: {
    title: "Miojo · One founder. One engine. Multiple expressions.",
    description:
      "Founder-led lifestyle platform. Investor preview.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body>
        <RevealOnView />
        {children}
      </body>
    </html>
  );
}
