import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSelectorCards } from "@/components/ProductSelectorCards";
import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/lib/products";

const product = products[0];

export const metadata: Metadata = {
  title: `${product.navTitle} | Tepelná čerpadla Kašpar`,
  description: product.excerpt,
};

export default function CenovaNabidkaPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-[13px] text-foreground/50">
            <Link href="/" className="hover:text-brand transition-colors">
              Úvodní
            </Link>{" "}
            » Cenová nabídka
          </p>

          <div className="mt-6">
            <ProductSelectorCards activeSlug="" />
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
