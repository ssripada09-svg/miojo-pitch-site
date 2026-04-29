"use client";

import { Children, type ReactNode, isValidElement } from "react";
import { Reveal } from "./Reveal";

type StaggerProps = {
  children: ReactNode;
  step?: number;
  start?: number;
  kind?: "y" | "scaleX" | "scaleY";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  itemAs?: keyof JSX.IntrinsicElements;
};

export function Stagger({
  children,
  step = 90,
  start = 0,
  kind = "y",
  className,
  as = "div",
  itemAs = "div",
}: StaggerProps) {
  const items = Children.toArray(children);
  const Wrap = as as any;
  return (
    <Wrap className={className}>
      {items.map((child, i) => {
        const key = isValidElement(child) && child.key != null ? child.key : i;
        return (
          <Reveal key={key} as={itemAs} delay={start + i * step} kind={kind}>
            {child}
          </Reveal>
        );
      })}
    </Wrap>
  );
}
