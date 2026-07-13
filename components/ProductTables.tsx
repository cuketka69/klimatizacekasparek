import type { Product, TechTable as TechTableType } from "@/lib/products";

export function PricingTable({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-brand-dark">{product.pricingTitle}</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-black/10">
        <table className="w-full min-w-[480px] text-left text-[14px]">
          <thead>
            <tr className="bg-brand-light text-brand-dark">
              <th className="px-4 py-3 font-semibold">Typ</th>
              {product.pricingHeaders.map((h) => (
                <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.pricingRows.map((row) => (
              <tr
                key={row.label}
                className={
                  row.highlight
                    ? "border-t border-black/10 bg-red-100/70 font-bold text-red-900"
                    : "border-t border-black/5 text-foreground/75"
                }
              >
                <td className="px-4 py-3">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="px-4 py-3 whitespace-nowrap">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {product.pricingNote && (
        <p className="mt-2 text-[12px] text-foreground/50">{product.pricingNote}</p>
      )}
    </div>
  );
}

export function TechTable({ table }: { table: TechTableType }) {
  return (
    <div>
      <h3 className="text-[16px] font-semibold text-brand-dark">{table.title}</h3>
      <div className="mt-3 overflow-x-auto rounded-xl border border-black/10">
        <table className="w-full min-w-[520px] text-left text-[13px]">
          <thead>
            <tr className="bg-brand-light/70 text-brand-dark">
              <th className="px-3 py-2.5 font-semibold">Parametr</th>
              {table.columns.map((c, i) => (
                <th key={i} className="px-3 py-2.5 font-semibold whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-t border-black/5 even:bg-brand-light/20">
                <td className="px-3 py-2 text-foreground/75">
                  {row.label}
                  {row.unit && <span className="text-foreground/45"> ({row.unit})</span>}
                </td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-3 py-2 whitespace-nowrap text-foreground/75">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="mt-2 text-[12px] text-foreground/50">{table.note}</p>}
    </div>
  );
}

export function TuvTable({ tuv }: { tuv: NonNullable<Product["tuvTable"]> }) {
  return (
    <div>
      <h3 className="text-[16px] font-semibold text-brand-dark">{tuv.title}</h3>
      <div className="mt-3 overflow-x-auto rounded-xl border border-black/10">
        <table className="w-full min-w-[400px] text-left text-[14px]">
          <thead>
            <tr className="bg-brand-light/70 text-brand-dark">
              <th className="px-4 py-2.5 font-semibold">Zásobník</th>
              <th className="px-4 py-2.5 font-semibold">Provedení</th>
              <th className="px-4 py-2.5 font-semibold">Cena</th>
            </tr>
          </thead>
          <tbody>
            {tuv.rows.map((row, i) => (
              <tr key={i} className="border-t border-black/5">
                <td className="px-4 py-2.5 text-foreground/75">{row.label}</td>
                <td className="px-4 py-2.5 text-foreground/75">{row.spirala}</td>
                <td className="px-4 py-2.5 font-medium text-brand-dark">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
