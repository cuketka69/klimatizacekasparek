"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { process, processSubtitle, processBadge } from "@/lib/content";
import { LeafIcon, MessageIcon, DocumentHomeIcon, WrenchIcon, ShieldCheckIcon } from "./icons";

const icons = [MessageIcon, DocumentHomeIcon, WrenchIcon, ShieldCheckIcon];

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-brand-light/30 py-20">
      <LeafDecoration className="left-0 top-10 h-56 w-56 -translate-x-1/3 rotate-[20deg] opacity-[0.07]" />
      <LeafDecoration className="right-0 bottom-0 h-64 w-64 translate-x-1/4 rotate-[-30deg] opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block animate-[float_4s_ease-in-out_infinite]">
            <span className="relative block h-40 w-40 sm:h-48 sm:w-48 drop-shadow-md">
              <Image
                src="/chat.webp"
                alt="Kašpárek mává na pozdrav"
                fill
                sizes="(min-width: 640px) 192px, 160px"
                className="object-contain"
              />
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-6 origin-bottom animate-[wave_2.2s_ease-in-out_infinite] text-4xl sm:text-5xl"
            >
              👋
            </span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-brand-dark">
            Jednoduchá cesta k levnějšímu vytápění
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-foreground/55">{processSubtitle}</p>
        </div>

        <div ref={trackRef} className="relative mt-20">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 z-10 hidden h-0.5 -translate-y-1/2 bg-black/10 lg:block">
            <div
              className="h-full bg-brand shadow-[0_0_6px_rgba(31,109,63,0.35)] transition-[width] duration-[1400ms] ease-out"
              style={{ width: visible ? "100%" : "0%" }}
            />
          </div>
          {[25, 50, 75].map((pos, i) => (
            <span
              key={pos}
              className="pointer-events-none absolute top-6 z-20 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-white transition-opacity duration-300 lg:block"
              style={{ left: `${pos}%`, opacity: visible ? 1 : 0, transitionDelay: `${(i + 1) * 350}ms` }}
            />
          ))}

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.step} className="relative flex flex-col items-center">
                  <span
                    className={`relative z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white shadow-md transition-transform duration-300 ease-out hover:scale-110 ${
                      visible ? "opacity-100" : "opacity-0 scale-50"
                    }`}
                    style={
                      visible
                        ? {
                            animation: `pop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) ${i * 320}ms both, ring-pulse 1.4s ease-out ${i * 320 + 400}ms 1`,
                          }
                        : undefined
                    }
                  >
                    {item.step}
                  </span>

                  <div
                    className={`group relative z-0 mt-1 w-full rounded-2xl bg-white px-6 pb-8 pt-8 text-center shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-brand/20 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${i * 320 + 180}ms` }}
                  >
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 text-[16px] font-semibold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/60">
                      {item.text}
                    </p>
                    <span className="mx-auto mt-5 block h-0.5 w-8 rounded-full bg-black/10 transition-all duration-300 ease-out group-hover:w-14 group-hover:bg-brand" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-brand/15 bg-brand-light/60 px-5 py-2.5">
            <LeafIcon className="h-4 w-4 text-brand" />
            <span className="text-[14px] font-medium text-brand-dark">{processBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute text-brand blur-2xl ${className ?? ""}`}
      fill="currentColor"
    >
      <path d="M100 10c50 10 80 50 80 90s-40 80-80 90c-10-50 0-90 20-110-30 10-60 40-65 80C25 140 25 80 60 45 75 30 85 15 100 10Z" />
    </svg>
  );
}
