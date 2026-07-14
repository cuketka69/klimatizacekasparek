import Image from "next/image";
import { WrenchIcon, CheckIcon, HomeIcon, ShieldIcon } from "./icons";
import { trustPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = [WrenchIcon, ShieldIcon, CheckIcon, HomeIcon];

export function TrustBadges() {
  return (
    <section className="bg-brand-light/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="relative mx-auto block h-96 w-96">
            <Image
              src="/kascer.webp"
              alt="Maskot Kašpar"
              fill
              sizes="384px"
              className="object-contain"
            />
          </span>
          <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-brand-dark">
            Kvalitní montáž a spolehlivý provoz
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/65">
            Sázíme na špičkové technologie, odborný přístup a férové jednání.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustPoints.map((text, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={text}
                delay={i * 120}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <p className="mt-4 text-[15px] font-semibold leading-snug text-brand-dark">
                  {text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
