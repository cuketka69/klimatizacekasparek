"use client";

import { useEffect, useRef, useState } from "react";

// Odpočítá číslo od 0 k cílové hodnotě, jakmile se objeví na obrazovce.
// Přijímá text jako "15+" nebo "300+" a animuje jen číselnou část.
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);

  const target = match ? parseInt(match[2], 10) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [match]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  if (!match) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
}
