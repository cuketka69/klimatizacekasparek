import Link from "next/link";
import { solutions } from "@/lib/content";
import { Reveal } from "./Reveal";
import { WindIcon, LayersIcon, DropletIcon, ArrowRightIcon } from "./icons";

const icons = [WindIcon, LayersIcon, DropletIcon];

export function Solutions() {
  return (
    <section id="cerpadla" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Řešení pro každý dům
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solutions.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={item.title}
                from={i === 0 ? "left" : i === 2 ? "right" : "up"}
                delay={i * 120}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-40 items-center justify-center bg-brand-light">
                    <Icon className="h-16 w-16 text-brand" strokeWidth={1.2} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[17px] font-semibold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground/65">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand group-hover:gap-2.5 transition-all"
                    >
                      Zjistit více
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
