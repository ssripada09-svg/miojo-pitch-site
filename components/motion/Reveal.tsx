"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  delay?: number;
  kind?: "y" | "scaleX" | "scaleY";
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
};

export function Reveal({
  as = "div",
  children,
  delay = 0,
  kind = "y",
  once = true,
  className,
  style,
  threshold = 0.18,
}: RevealProps) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      data-reveal={kind}
      data-shown={shown ? "true" : "false"}
      className={className}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
