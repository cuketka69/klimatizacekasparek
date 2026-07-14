import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { CheckIcon, LeafIcon, FlameIcon, BoltIcon, ArrowRightIcon } from "./icons";
import { costRows } from "@/lib/content";

const rowIcons = [LeafIcon, FlameIcon, BoltIcon];

export function Costs() {
  return (
    <section id="naklady" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal from="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/sluzby/provozcerpadla.webp"
                alt="Kolik stojí provoz tepelného čerpadla"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal from="right" delay={120}>
            <p className="mb-2 text-[13px] font-semibold tracking-wide text-brand uppercase">
              Náklady na provoz
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
              Kolik stojí provoz <br /> tepelného čerpadla?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
              Tepelné čerpadlo je nejúspornější způsob vytápění. Porovnejte
              orientační roční náklady u rodinného domu (150 m²).
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-black/10">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="bg-brand-light/60 text-brand-dark">
                    <th className="px-4 py-3 font-semibold">Typ vytápění</th>
                    <th className="px-4 py-3 font-semibold">Roční náklady</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, i) => {
                    const Icon = rowIcons[i];
                    return (
                      <tr key={row.type} className="border-t border-black/5">
                        <td className="px-4 py-3.5 flex items-center gap-2 text-brand-dark font-medium">
                          <Icon className="h-4 w-4 text-brand" />
                          {row.type}
                        </td>
                        <td className="px-4 py-3.5 text-foreground/70">{row.cost}</td>
                        <td className="px-4 py-3.5">
                          {row.highlight && (
                            <span className="rounded-full bg-brand text-white text-[11px] font-semibold px-2.5 py-1 whitespace-nowrap">
                              Nejnižší náklady
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <ul className="mt-6 space-y-2.5">
              {[
                "Výrazná úspora oproti plynovému kotli i elektrokotli",
                "Nízké provozní náklady a dlouhá životnost",
                "Návratnost investice řádově v jednotkách let",
              ].map((text) => (
                <li key={text} className="flex items-start gap-2.5 text-[14px] text-foreground/75">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/#kontakt"
                className="inline-block rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
              >
                Chci orientační výpočet
              </Link>
              <Link
                href="/naklady-a-princip"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Návratnost investice a princip čerpadla
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
