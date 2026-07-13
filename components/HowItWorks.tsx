"use client";

import { useEffect, useRef, useState } from "react";
import { howItWorks } from "@/lib/content";
import { WindIcon, ThermoUpIcon, HouseHeartIcon, LeafIcon } from "./icons";

const steps = [
  { Icon: WindIcon, icon: "text-emerald-600" },
  { Icon: ThermoUpIcon, icon: "text-emerald-600" },
  { Icon: HouseHeartIcon, icon: "text-emerald-600" },
  { Icon: LeafIcon, icon: "text-emerald-600" },
];

// Výchozí šířka čárky (px) — cca 2 písmenka uprostřed
const MIN_WIDTH = 32;

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 když nadpis právě vjede zdola, 1 když vystoupá do horní třetiny
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = clamp((start - rect.top) / (start - end), 0, 1);
      // Čárka se jen roztahuje — při scrollu nahoru zůstává na dosaženém maximu
      setProgress((prev) => Math.max(prev, p));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Kartičky se objeví, jakmile je čárka téměř roztažená
  const showCards = progress > 0.85;

  return (
    <section className="bg-brand-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div ref={ref} className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Jak tepelné čerpadlo funguje
            </h2>
            <div
              className="mt-2 h-1 rounded-full bg-brand"
              style={{
                // z MIN_WIDTH px (2 písmenka) až na 100 % šířky textu
                width: `calc(${MIN_WIDTH}px + (100% - ${MIN_WIDTH}px) * ${progress})`,
                marginInline: "auto",
              }}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, i) => {
            const { Icon, icon } = steps[i];
            const from = i % 2 === 0 ? "-translate-x-12" : "translate-x-12";
            return (
              <div
                key={item.title}
                className={`h-full transition-all duration-700 ease-out ${
                  showCards
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${from}`
                }`}
                style={{ transitionDelay: showCards ? `${i * 120}ms` : "0ms" }}
              >
                <div className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <Icon
                    className={`h-16 w-16 ${icon} transition-transform duration-300 ease-out group-hover:scale-110`}
                    strokeWidth={1.1}
                  />
                  <h3 className="mt-4 text-[18px] font-extrabold tracking-tight text-brand-dark">
                    <span className="text-brand">{i + 1}.</span> {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground/65">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
