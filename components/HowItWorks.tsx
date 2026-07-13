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

// Délka animace čárky (ms) — po ní se začnou objevovat kartičky
const LINE_DURATION = 700;

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Až se čárka roztáhne, spustíme kartičky
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setShowCards(true), LINE_DURATION);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <section className="bg-brand-dark py-16">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <h2
          className={`text-center text-2xl sm:text-3xl font-bold text-white transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Jak tepelné čerpadlo funguje
        </h2>
        <div
          className="mx-auto mt-2 h-1 rounded-full bg-brand transition-[width] ease-out"
          style={{
            width: inView ? "3.5rem" : "0rem",
            transitionDuration: `${LINE_DURATION}ms`,
          }}
        />

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
