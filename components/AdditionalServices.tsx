import Image from "next/image";
import { additionalServices } from "@/lib/content";
import { Reveal } from "./Reveal";

export function AdditionalServices() {
  return (
    <section id="sluzby" className="bg-brand-light/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Doplňkové služby
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-foreground/65">
            Nabízíme i doplňkové služby pro co nejefektivnější využití tepelné
            pohody vašeho domova.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {additionalServices.map((item, i) => (
            <Reveal
              key={item.title}
              from={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 120}
              className="h-full"
            >
              <div className="h-full overflow-hidden rounded-xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-44 w-full bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 pt-2 text-center">
                  <h3 className="text-[17px] font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground/65">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
