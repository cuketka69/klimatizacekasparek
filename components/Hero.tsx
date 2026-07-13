import Image from "next/image";
import Link from "next/link";
import { LeafIcon, PlayIcon, StarIcon } from "./icons";

// Placeholder headshots — replace with real customer photos (with consent) before launch.
const customerPhotos = [
  "/avatars/customer-1.jpg",
  "/avatars/customer-2.jpg",
  "/avatars/customer-3.jpg",
  "/avatars/customer-4.jpg",
  "/avatars/customer-5.jpg",
];

function SavingsBadge({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-lg border border-black/5 ${className ?? ""}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand">
        <LeafIcon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-lg font-bold text-brand-dark leading-none">Úspora až 70 %</p>
        <p className="text-[13px] text-foreground/60 mt-1">na nákladech za vytápění</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="uvod" className="relative overflow-hidden bg-white">
      {/* Full-bleed image, right half of the viewport, full section height (desktop only) */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/hero/hero.webp"
          alt="Moderní tepelné čerpadlo u rodinného domu"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <SavingsBadge className="absolute top-8 right-8 hidden xl:flex" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-8">
            <p className="mb-3 text-[13px] font-semibold tracking-wide text-brand uppercase">
              Úsporné vytápění pro váš domov
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-brand-dark">
              Teplo, které šetří <br />
              vaše{" "}
              <span className="relative inline-block font-handwriting text-[1.6em] text-brand underline decoration-4 decoration-brand/70 underline-offset-[6px]">
                náklady
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-foreground/70">
              Návrh, dodávka, montáž a servis tepelných čerpadel Carrier pro
              rodinné domy. Úsporné řešení, které je šetrné k přírodě i k vaší
              peněžence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/naklady-a-princip"
                className="rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
              >
                Spočítat úsporu
              </Link>
              <Link
                href="/#cerpadla"
                className="flex items-center gap-2 rounded-lg border border-black/10 px-6 py-3.5 text-[15px] font-semibold text-brand-dark hover:border-brand/40 transition-colors"
              >
                Jak čerpadlo funguje
                <PlayIcon className="h-4 w-4 text-brand" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {customerPhotos.map((src, i) => (
                  <span
                    key={src}
                    className="relative block h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-sm"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[17px] font-bold leading-none text-brand-dark">
                  15+ let, 300+ spokojených zákazníků
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="flex gap-0.5 text-amber-400">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="text-[13px] text-foreground/60">
                    Doporučují nás naši zákazníci
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer column so text stays in the left half on desktop; image sits behind, full-bleed */}
          <div className="hidden lg:block" />

          {/* Stacked image for mobile/tablet, where full-bleed doesn't apply */}
          <div className="relative lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/5 shadow-xl">
              <Image
                src="/hero/hero.webp"
                alt="Moderní tepelné čerpadlo u rodinného domu"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <SavingsBadge className="absolute -bottom-6 -left-6 hidden sm:flex" />
          </div>
        </div>
      </div>
    </section>
  );
}
