import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { PricingTable, TechTable, TuvTable } from "./ProductTables";
import { CheckIcon } from "./icons";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div>
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
        {product.navTitle}
      </h1>

      <div className="relative mx-auto mt-6 h-56 sm:h-72 w-full max-w-xl overflow-hidden rounded-xl bg-brand-light">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 640px) 576px, 100vw"
          className="object-contain p-4"
        />
      </div>

      <p className="mt-6 text-[15px] leading-relaxed text-foreground/75">
        {product.description}
      </p>

      {product.techDiagram && (
        <figure className="mt-6">
          <div className="relative mx-auto h-40 sm:h-48 w-full max-w-md overflow-hidden rounded-xl border border-black/5 bg-white">
            <Image
              src={product.techDiagram.image}
              alt={product.techDiagram.alt}
              fill
              sizes="(min-width: 640px) 448px, 100vw"
              className="object-contain p-3"
            />
          </div>
          <figcaption className="mt-2 text-center text-[13px] text-foreground/55">
            {product.techDiagram.caption}
          </figcaption>
        </figure>
      )}

      {product.bullets && (
        <ul className="mt-4 space-y-2.5">
          {product.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-foreground/75">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10">
        <PricingTable product={product} />
      </div>

      <div className="mt-12 space-y-10">
        <h2 className="text-xl font-bold text-brand-dark">Technické parametry</h2>
        {product.techTables.map((table) => (
          <TechTable key={table.title} table={table} />
        ))}
      </div>

      {product.tuvTable && (
        <div className="mt-10">
          <TuvTable tuv={product.tuvTable} />
        </div>
      )}

      <p className="mt-8 text-[13px] text-foreground/55">
        Dále jsme vám schopni zajistit jakýkoliv výrobek společnosti Carrier
        za ty nejpříznivější ceny.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/#kontakt"
          className="rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
        >
          Nezávazně poptat cenovou nabídku
        </Link>
      </div>
    </div>
  );
}
