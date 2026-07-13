import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";
import { Reveal } from "./Reveal";
import { ArrowRightIcon } from "./icons";

export function Articles() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Užitečné články
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((item, i) => (
            <Reveal
              key={item.title}
              from={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 120}
              className="h-full"
            >
              <article className="h-full overflow-hidden rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-36 w-full bg-brand-light">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground/65">
                    {item.text}
                  </p>
                  <Link
                    href={`/clanky/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:gap-2.5 transition-all"
                  >
                    Číst článek
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
