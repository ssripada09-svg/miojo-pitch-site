import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/shell/SiteShell";

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
  title: "Miojo · Founder-led lifestyle platform · Investor preview",
  description:
    "Miojo turns twenty years of cultural taste into a founder-led platform across community, commerce, hospitality, and wellness. Investor preview by Ciarra Pardo Co.",
  metadataBase: new URL("https://miojo-pitch-site-build.vercel.app"),
  openGraph: {
    title: "Miojo · One founder. One engine. Multiple expressions.",
    description:
      "Founder-led lifestyle platform. Investor preview.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
