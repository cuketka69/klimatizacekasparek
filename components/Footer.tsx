import { LeafIcon, PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./icons";
import { company, nav, serviceAreas } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="text-[15px] font-semibold text-white">
              Tepelná čerpadla Kašpar
            </span>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/55">
            Úsporné a ekologické řešení vytápění tepelnými čerpadly.
          </p>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold text-white">Kontakt</h3>
          <ul className="mt-4 space-y-2.5 text-[13px]">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 text-brand-light/80 shrink-0" />
              <a href={`tel:${company.phoneHref}`} className="hover:text-white transition-colors">
                +420 {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-brand-light/80 shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="h-4 w-4 mt-0.5 text-brand-light/80 shrink-0" />
              <span>
                {company.street}
                <br />
                {company.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold text-white">Navigace</h3>
          <ul className="mt-4 space-y-2.5 text-[13px]">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-[14px] font-semibold text-white">
            <ClockIcon className="h-4 w-4 text-brand-light/80" />
            Servisní linka
          </h3>
          <p className="mt-4 text-[13px] leading-relaxed">
            Po–Pá: 7:00–20:00
          </p>
          <h3 className="mt-6 text-[14px] font-semibold text-white">Působíme</h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/70">
            {serviceAreas.join(", ")} a okolí
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/45">
          <p>
            © {new Date().getFullYear()} {company.name} · IČ {company.ico} · DIČ {company.dic}
          </p>
          <p>Autorizovaný partner značky {company.partner}</p>
        </div>
      </div>
    </footer>
  );
}
