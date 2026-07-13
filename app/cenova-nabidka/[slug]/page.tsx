import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSelectorCards } from "@/components/ProductSelectorCards";
import { ProductDetail } from "@/components/ProductDetail";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.navTitle} | Tepelná čerpadla Kašpar`,
    description: product.excerpt,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-[13px] text-foreground/50">
            <Link href="/" className="hover:text-brand transition-colors">
              Úvodní
            </Link>{" "}
            »{" "}
            <Link href="/cenova-nabidka" className="hover:text-brand transition-colors">
              Cenová nabídka
            </Link>{" "}
            » {product.navTitle}
          </p>

          <div className="mt-6">
            <ProductSelectorCards activeSlug={slug} />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ProductDetail product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
