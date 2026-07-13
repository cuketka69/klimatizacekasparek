import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles, getArticle } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Tepelná čerpadla Kašpar`,
    description: article.text,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <article className="mx-auto max-w-3xl px-6 py-10">
          <p className="text-[13px] text-foreground/50">
            <Link href="/" className="hover:text-brand transition-colors">
              Úvodní
            </Link>{" "}
            » {article.title}
          </p>

          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-brand-dark">
            {article.title}
          </h1>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-8 text-[17px] leading-relaxed text-foreground/80">
            {article.intro}
          </p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mt-8">
              <h2 className="text-xl font-bold text-brand-dark">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-[15px] leading-relaxed text-foreground/70"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-12 rounded-2xl bg-brand-light/50 p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-brand-dark">
              Chcete nezávaznou nabídku?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-foreground/70">
              Rádi vám poradíme s výběrem i dotací. Ozvěte se nám a připravíme
              řešení na míru vašemu domu.
            </p>
            <Link
              href="/#kontakt"
              className="mt-5 inline-block rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
            >
              Nezávazně nás kontaktovat
            </Link>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-[14px] font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              ← Zpět na úvod
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
