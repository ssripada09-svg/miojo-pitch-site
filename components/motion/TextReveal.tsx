"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  Fragment,
} from "react";
import { cn } from "@/lib/cn";

type TextRevealProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  children?: string;
  className?: string;
  delay?: number;
  wordStep?: number;
  segments?: Segment[];
  threshold?: number;
};

export type Segment = {
  text: string;
  className?: string;
  mask?: boolean;
};

export function TextReveal({
  as: Tag = "span",
  children,
  className,
  delay = 0,
  wordStep = 55,
  segments,
  threshold = 0.3,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const baseSegments: Segment[] = segments ?? [{ text: children ?? "" }];

  let wordIndex = 0;

  return (
    <Tag
      ref={ref as any}
      data-shown={shown ? "true" : "false"}
      className={cn("tx-root", className)}
    >
      {baseSegments.map((seg, si) => {
        if (seg.mask) {
          const totalBefore = wordIndex;
          const words = seg.text.split(/(\s+)/);
          const myWords = words.filter((w) => w.trim().length > 0).length;
          const maskDelay = delay + totalBefore * wordStep + 80;
          wordIndex += myWords;
          return (
            <span
              key={si}
              data-reveal="mask"
              data-shown={shown ? "true" : "false"}
              className={cn("inline-block", seg.className)}
              style={{ transitionDelay: `${maskDelay}ms` }}
            >
              {seg.text}
            </span>
          );
        }

        const parts = seg.text.split(/(\s+)/);
        return (
          <Fragment key={si}>
            {parts.map((part, pi) => {
              if (/^\s+$/.test(part)) {
                return <Fragment key={pi}>{part}</Fragment>;
              }
              if (part === "") return null;
              const d = delay + wordIndex * wordStep;
              wordIndex += 1;
              return (
                <span
                  key={pi}
                  className={cn("tx-word", seg.className)}
                >
                  <span style={{ transitionDelay: `${d}ms` }}>{part}</span>
                </span>
              );
            })}
          </Fragment>
        );
      })}
    </Tag>
  );
}

export function MaskReveal({
  children,
  delay = 0,
  className,
  as: Tag = "span",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as any}
      data-reveal="mask"
      data-shown={shown ? "true" : "false"}
      className={cn("inline-block", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
