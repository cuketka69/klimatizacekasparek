"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "left" | "right" | "up";

const hidden: Record<Direction, string> = {
  left: "opacity-0 -translate-x-12",
  right: "opacity-0 translate-x-12",
  up: "opacity-0 translate-y-10",
};

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-x-0 translate-y-0" : hidden[from]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
