import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "raised" | "soft" | "outline" | "dark";
  as?: "div" | "article" | "li" | "section" | "button";
  onClick?: () => void;
};

const toneMap = {
  raised: "bg-cream-50 border hairline card-raised",
  soft: "bg-cream-50 border hairline card-soft",
  outline: "bg-transparent border hairline-strong",
  dark: "bg-char-900 border border-char-800 text-cream-50",
};

export function Card({
  children,
  className,
  tone = "soft",
  as: Tag = "div",
  onClick,
}: CardProps) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        "rounded-2xl",
        toneMap[tone],
        onClick && "cursor-pointer transition-shadow hover:shadow-lg",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
