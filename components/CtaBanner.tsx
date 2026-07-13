import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/cta/cta-1.webp"
          alt="Moderní tepelné čerpadlo u rodinného domu"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal from="left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Zjistěte, kolik můžete ušetřit
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
              Nezávazně spočítáme úsporu pro váš dům a doporučíme ideální
              řešení na míru.
            </p>
            <Link
              href="/#kontakt"
              className="mt-6 inline-block rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-white hover:text-brand-dark transition-colors"
            >
              Nezávazně poptat řešení
            </Link>
          </Reveal>

          {/* Stacked image for mobile/tablet, where full-bleed doesn't apply */}
          <div className="relative h-52 overflow-hidden rounded-xl lg:hidden">
            <Image
              src="/cta/cta-1.webp"
              alt="Moderní tepelné čerpadlo u rodinného domu"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
