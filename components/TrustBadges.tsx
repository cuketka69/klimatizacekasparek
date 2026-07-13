import { ShieldIcon, WrenchIcon, CheckIcon, HomeIcon } from "./icons";
import { trustPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

const icons = [WrenchIcon, ShieldIcon, CheckIcon, HomeIcon];

export function TrustBadges() {
  return (
    <section className="bg-brand-light/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
          <Reveal from="left" className="flex items-start gap-4 lg:w-72 shrink-0">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-sm shrink-0">
              <ShieldIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-[17px] font-bold text-brand-dark leading-snug">
                Kvalitní montáž. <br /> Spolehlivý provoz.
              </p>
              <p className="mt-1.5 text-[13px] text-foreground/60 leading-relaxed">
                Sázíme na špičkové technologie, odborný přístup a férové jednání.
              </p>
            </div>
          </Reveal>

          <Reveal
            from="right"
            delay={120}
            className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4"
          >
            {trustPoints.map((text, i) => {
              const Icon = icons[i];
              return (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <p className="text-[13px] leading-snug text-foreground/75">{text}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
