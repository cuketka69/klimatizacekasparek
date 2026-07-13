import { investmentRows, investmentTotals } from "@/lib/content";

export function InvestmentTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-black/10">
      <table className="w-full min-w-[560px] text-left text-[14px]">
        <thead>
          <tr className="bg-brand-light text-brand-dark">
            <th className="px-4 py-3 font-semibold" />
            <th className="px-4 py-3 font-semibold">Kotel – plyn</th>
            <th className="px-4 py-3 font-semibold">Rozdíl nákladů</th>
            <th className="px-4 py-3 font-semibold">Tepelné čerpadlo</th>
          </tr>
        </thead>
        <tbody>
          {investmentRows.map((row) => (
            <tr key={row.label} className="border-t border-black/5 even:bg-brand-light/30">
              <td className="px-4 py-3 font-medium text-brand-dark">{row.label}</td>
              <td className="px-4 py-3 text-foreground/70">{row.gas}</td>
              <td className="px-4 py-3 text-foreground/70">{row.diff}</td>
              <td className="px-4 py-3 text-foreground/70">{row.pump}</td>
            </tr>
          ))}
          <tr className="border-t border-black/10 bg-amber-100/70 font-semibold text-brand-dark">
            <td className="px-4 py-3">součet</td>
            <td className="px-4 py-3">{investmentTotals.soucet.gas}</td>
            <td className="px-4 py-3">{investmentTotals.soucet.diff}</td>
            <td className="px-4 py-3">{investmentTotals.soucet.pump}</td>
          </tr>
          <tr className="border-t border-black/5 text-foreground/70">
            <td className="px-4 py-3">dotace</td>
            <td className="px-4 py-3">{investmentTotals.dotace.gas}</td>
            <td className="px-4 py-3">{investmentTotals.dotace.diff}</td>
            <td className="px-4 py-3">{investmentTotals.dotace.pump}</td>
          </tr>
          <tr className="border-t border-black/10 bg-red-100/70 font-bold text-red-900">
            <td className="px-4 py-3">součet po odečtení dotace</td>
            <td className="px-4 py-3">{investmentTotals.final.gas}</td>
            <td className="px-4 py-3">{investmentTotals.final.diff}</td>
            <td className="px-4 py-3">{investmentTotals.final.pump}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
