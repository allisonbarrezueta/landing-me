"use client";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  from?: "up" | "left" | "right";
  className?: string;
}

export default function Reveal({ children, from = "up", className = "" }: RevealProps): React.JSX.Element {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal={from}
      data-visible={inView}
      className={className}
    >
      {children}
    </div>
  );
}
