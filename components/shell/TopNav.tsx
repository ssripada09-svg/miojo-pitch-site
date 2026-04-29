"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { CTAButton } from "@/components/primitives/CTAButtons";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Platform", href: "#platform-thesis" },
  { label: "Beauty Days", href: "#beauty-days" },
  { label: "Operating", href: "#operating-layer" },
  { label: "Economics", href: "#revenue" },
  { label: "Ask", href: "#ask" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b hairline bg-cream-50/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-forest-500 transition-colors hover:text-forest-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <CTAButton tone="gold" href="#ask" className="hidden md:inline-flex">
          Request walkthrough
        </CTAButton>
      </div>
    </header>
  );
}
