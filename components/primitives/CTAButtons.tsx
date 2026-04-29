import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CTAProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  tone?: "gold" | "forest" | "ghost";
};

export function CTAButton({
  children,
  href,
  onClick,
  className,
  tone = "gold",
}: CTAProps) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-mono text-[0.74rem] font-medium uppercase tracking-eyebrow",
    tone === "gold" && "btn-gold",
    tone === "forest" && "btn-forest",
    tone === "ghost" &&
      "btn-ghost border border-forest/40 bg-transparent text-forest",
    className,
  );
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
