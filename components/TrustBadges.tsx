import { ShieldIcon, WrenchIcon, CheckIcon, HomeIcon } from "./icons";
import { trustPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = [WrenchIcon, ShieldIcon, CheckIcon, HomeIcon];

export function TrustBadges() {
  return (
    <section className="bg-brand-light/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          <Reveal from="left" className="flex items-start gap-4 lg:w-72 shrink-0">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-md shrink-0">
              <ShieldIcon className="h-9 w-9" />
            </span>
            <div>
              <p className="text-[20px] font-bold text-brand-dark leading-snug">
                Kvalitní montáž. <br /> Spolehlivý provoz.
              </p>
              <p className="mt-2 text-[14px] text-foreground/65 leading-relaxed">
                Sázíme na špičkové technologie, odborný přístup a férové jednání.
              </p>
            </div>
          </Reveal>

          <Reveal
            from="right"
            delay={120}
            className="grid flex-1 grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4"
          >
            {trustPoints.map((text, i) => {
              const Icon = icons[i];
              return (
                <div key={text} className="flex items-start gap-3.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand shadow-sm shrink-0">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <p className="pt-1 text-[15px] font-medium leading-snug text-brand-dark">
                    {text}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
