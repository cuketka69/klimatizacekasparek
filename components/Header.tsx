import Link from "next/link";
import { LeafIcon, PhoneIcon } from "./icons";
import { company, nav } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/#uvod" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold text-brand-dark">
              Tepelná čerpadla
            </span>
            <span className="block text-[15px] font-semibold text-brand-dark -mt-0.5">
              Kašpar
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[15px] text-foreground/80">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-[15px] font-medium text-foreground/80 shrink-0">
          <PhoneIcon className="h-4 w-4 text-brand" />
          <a href={`tel:${company.phoneHref}`} className="hover:text-brand transition-colors">
            +420 {company.phone}
          </a>
        </div>

        <Link
          href="/#kontakt"
          className="shrink-0 rounded-lg bg-brand px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
        >
          Nezávazná poptávka
        </Link>
      </div>
    </header>
  );
}
