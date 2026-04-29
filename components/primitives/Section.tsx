import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  tone?: "default" | "raised" | "warm" | "dark";
  children: ReactNode;
  className?: string;
  bleed?: boolean;
};

const toneMap = {
  default: "bg-cream-100 text-forest",
  raised: "bg-cream-50 text-forest",
  warm: "bg-sand-100/70 text-forest",
  dark: "bg-char-900 text-cream-50",
};

export function Section({
  id,
  tone = "default",
  children,
  className,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full border-b hairline",
        toneMap[tone],
        tone === "dark" && "border-char-800",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-shell",
          bleed ? "px-0 py-24 md:py-28" : "px-6 py-24 md:px-10 md:py-28",
        )}
      >
        {children}
      </div>
    </section>
  );
}
