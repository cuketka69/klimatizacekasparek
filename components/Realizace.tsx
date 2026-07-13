"use client";

import { useState } from "react";
import Image from "next/image";
import { realizace } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Realizace() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? realizace : realizace.slice(0, 4);

  return (
    <section id="realizace" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Naše realizace
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) => (
            <Reveal
              key={item.place}
              from={i % 2 === 0 ? "left" : "right"}
              delay={(i % 4) * 100}
              className="h-full"
            >
              <figure className="h-full overflow-hidden rounded-xl border border-black/5 shadow-sm">
                <div className="relative h-40 w-full bg-brand-light">
                  <Image
                    src={item.image}
                    alt={`${item.title} – ${item.place}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3">
                  <p className="text-[14px] font-semibold text-brand-dark">{item.place}</p>
                  <p className="text-[13px] text-foreground/55">{item.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {!showAll && realizace.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Zobrazit další realizace →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
