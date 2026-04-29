"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gold scroll-progress bar pinned to the top of the viewport.
 * Mirrors page progress with a warm, restrained gradient.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const el = barRef.current;
      if (!el) return;
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const progress = total > 0 ? h.scrollTop / total : 0;
      el.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[2px] bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(to right, rgba(196,164,95,0.85) 0%, rgba(216,179,149,0.95) 60%, rgba(196,164,95,0.85) 100%)",
          boxShadow: "0 1px 6px rgba(196,164,95,0.35)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
