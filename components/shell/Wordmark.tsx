import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-baseline gap-1.5 select-none",
        className,
      )}
    >
      <span
        className={cn(
          "font-display text-[1.25rem] tracking-tight",
          inverted ? "text-cream-50" : "text-forest-900",
        )}
      >
        Miojo
      </span>
      <span
        aria-hidden
        className={cn(
          "h-1 w-1 rounded-full",
          inverted ? "bg-gold-300" : "bg-gold-500",
        )}
      />
      <span
        className={cn(
          "font-mono text-[0.66rem] uppercase tracking-eyebrow",
          inverted ? "text-cream-100/70" : "text-forest-500",
        )}
      >
        Ciarra Pardo Co.
      </span>
    </a>
  );
}
