import Link from "next/link";
import { products } from "@/lib/products";

function hrefFor(slug: string) {
  return slug ? `/cenova-nabidka/${slug}` : "/cenova-nabidka";
}

export function ProductSelectorCards({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {products.map((product) => {
        const isActive = product.slug === activeSlug;
        return (
          <Link
            key={product.slug || "aw"}
            href={hrefFor(product.slug)}
            className={`group rounded-xl border p-5 transition-colors ${
              isActive
                ? "border-brand bg-brand-light/60"
                : "border-black/5 bg-brand-light/25 hover:bg-brand-light/50"
            }`}
          >
            <h3 className="text-[15px] font-semibold text-brand-dark leading-snug">
              {product.navTitle}
            </h3>
            <p className="mt-2 text-[13px] font-medium text-brand">{product.subtitle}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-foreground/60 line-clamp-3">
              {product.excerpt}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
