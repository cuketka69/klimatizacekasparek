import { Reveal } from "./Reveal";
import { StarIcon } from "./icons";

// Placeholder testimonials — the source site has no published reviews yet.
// Replace with real customer quotes before launch.
const testimonials = [
  {
    text: "Profesionální přístup od návrhu po montáž. Čerpadlo nám výrazně snížilo náklady a dům máme pořád krásně vyhřátý.",
    name: "J. a P. N.",
    place: "Plzeň",
  },
  {
    text: "Skvělá komunikace, rychlá instalace a ochotný servis. Doporučujeme všem, kteří chtějí ušetřit.",
    name: "M. S.",
    place: "Rokycany",
  },
  {
    text: "S tepelným čerpadlem jsme spokojeni. Tichý provoz, nízké náklady a žádné starosti.",
    name: "L. D.",
    place: "Klatovy",
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-light/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Co říkají naši zákazníci
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              from={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 120}
              className="h-full"
            >
              <div className="h-full rounded-xl bg-white p-6 shadow-sm">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground/75">
                  {t.text}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand text-[13px] font-semibold">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-brand-dark">{t.name}</p>
                    <p className="text-[13px] text-foreground/55">{t.place}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
