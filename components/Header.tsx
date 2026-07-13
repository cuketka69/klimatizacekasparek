"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "./icons";
import { company, nav } from "@/lib/content";

// Sekce na homepage, které sledujeme scroll-spy (odvozeno z hash odkazů v nav)
const sectionIds = nav
  .filter((item) => item.href.startsWith("/#"))
  .map((item) => item.href.slice(2));

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("uvod");

  // Header se při scrollu zmenší a přidá výraznější stín
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: zvýrazní odkaz na sekci, která je zrovna na obrazovce
  useEffect(() => {
    if (pathname !== "/") return;
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHash === href.slice(2);
    }
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/85 shadow-[0_8px_30px_-12px_rgba(18,56,33,0.25)] backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <Link href="/#uvod" className="group flex items-center gap-2 shrink-0">
          <span className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/kaspar.webp"
              alt="Tepelná čerpadla Kašpar"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
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
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-1 transition-colors duration-200 ${
                  active ? "text-brand" : "hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-brand transition-transform duration-300 ease-out ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-[15px] font-medium text-foreground/80 shrink-0">
          <PhoneIcon className="h-4 w-4 text-brand" />
          <a
            href={`tel:${company.phoneHref}`}
            className="group inline-flex items-center transition-colors hover:text-brand"
          >
            +420 {company.phone}
          </a>
        </div>

        <Link
          href="/#kontakt"
          className="group relative shrink-0 overflow-hidden rounded-lg bg-brand px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30"
        >
          {/* Jemný lesk přejíždějící přes tlačítko při hoveru */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
          <span className="relative">Nezávazná poptávka</span>
        </Link>
      </div>
    </header>
  );
}
