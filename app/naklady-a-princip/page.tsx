import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InvestmentTable } from "@/components/InvestmentTable";
import { PrincipleDiagram } from "@/components/PrincipleDiagram";
import { principleSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pořizovací náklady tepelné čerpadlo / plyn | Tepelná čerpadla Kašpar",
  description:
    "Porovnání pořizovacích nákladů tepelného čerpadla a plynového kotle, návratnost investice a princip fungování tepelného čerpadla.",
};

export default function NakladyAPrincipPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="text-[13px] text-foreground/50">
            <Link href="/" className="hover:text-brand transition-colors">
              Úvodní
            </Link>{" "}
            » Pořizovací náklady tepelné čerpadlo / plyn
          </p>

          <h1 className="mt-4 text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Pořizovací náklady tepelné čerpadlo / plyn
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">
            Roční propočet nákladů na vytápění rodinného domu o tepelné
            ztrátě cca 9 kW.
          </p>

          <h2 className="mt-8 text-[16px] font-semibold text-brand-dark">
            Pořizovací náklady – návratnost
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">
            Při srovnání pořizovacích nákladů na tepelné čerpadlo oproti
            plynovému kotli a propočtení ročních nákladů na vytápění je zde
            důvod k zamyšlení: „Proč vlastně lidé při stoupajících cenách
            plynu a elektrické energie tak drahé produkty na vytápění ještě
            podporují?“
          </p>

          <div className="mt-6">
            <InvestmentTable />
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-foreground/70">
            Návratnost nákladů mezi plynovým vytápěním a tepelným čerpadlem
            je cca <strong className="text-brand-dark">3 roky</strong> bez
            možnosti čerpání dotace a cca{" "}
            <strong className="text-brand-dark">1 rok</strong> s možností
            čerpání dotace. Poté už jen šetříte v průměru cca{" "}
            <strong className="text-brand-dark">20 000 Kč ročně</strong>.
          </p>

          <p className="mt-4 rounded-lg bg-brand-light/60 p-4 text-[14px] leading-relaxed text-brand-dark">
            Dále pokud se jedná o vytápění tepelným čerpadlem, společnost ČEZ
            poskytuje připojení s 20 hodinami nízkého tarifu pro celý objekt
            – sazba D56 pro domácnost a C56 pro firmy. A proto zde dochází k
            dalším úsporám při provozu vašeho domova.
          </p>

          <h2 className="mt-12 text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Princip tepelného čerpadla
          </h2>
          <p className="mt-3 text-center text-[15px] leading-relaxed text-foreground/70">
            Díky principu tepelného čerpadla, kdy jsou poměry 25 % energie
            ze sítě a 75 % ze vzduchu, dochází k úspoře <sup>3</sup>&frasl;<sub>4</sub>{" "}
            nákladů.
          </p>

          <div className="mt-8">
            <PrincipleDiagram />
          </div>

          <p className="mt-8 text-[15px] leading-relaxed text-foreground/70">
            <strong className="text-brand-dark">Tepelné čerpadlo</strong> je
            vysoce efektivní zařízení pro získávání tepelné energie z
            obnovitelných přírodních zdrojů – vody, země, vzduchu.
          </p>

          <ul className="mt-4 space-y-2.5">
            {principleSteps.map((step) => (
              <li key={step} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-foreground/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {step}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
            >
              Nezávazně poptat řešení
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-black/10 px-6 py-3.5 text-[15px] font-semibold text-brand-dark hover:border-brand/40 transition-colors"
            >
              Zpět na úvod
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
