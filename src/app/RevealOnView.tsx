"use client";

import { useEffect } from "react";

/**
 * Cross-browser scroll-into-view reveal.
 *
 * The existing CSS uses `@supports (animation-timeline: view())` for
 * scroll-driven reveals — that's Chrome-only. In Safari and Firefox the
 * fallback runs ALL `.reveal-on-view` animations on page load, so by the
 * time the user scrolls to a section the entrance has already finished.
 *
 * This component scans `.reveal-on-view` and `[data-reveal]` elements,
 * starts them hidden, and adds `data-shown="true"` when they enter the
 * viewport. The CSS then transitions them in. Works everywhere.
 */
export function RevealOnView() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal-on-view, [data-reveal], .portrait-reveal, .animated-timeline, .animated-econ, .founder-typed-title, .journey-title, .section-title, .tv-console h3, .os-title",
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.shown = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => {
      // Don't re-hide things already at the top of the viewport on first paint
      const r = el.getBoundingClientRect();
      const inView =
        r.top < (window.innerHeight || document.documentElement.clientHeight) &&
        r.bottom > 0;
      if (inView) {
        el.dataset.shown = "true";
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
