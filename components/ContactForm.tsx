"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";
import { Reveal } from "./Reveal";
import { PhoneIcon, MailIcon, PinIcon, CheckIcon } from "./icons";

// Client-side only — wire up to a real backend/email service (API route,
// Formspree, Resend, …) before launch.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-brand-light/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-brand-dark">
            Napište nám
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-foreground/65">
            Popište nám váš záměr a my se vám ozveme s nezávaznou nabídkou.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal from="left" className="space-y-5">
            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-foreground/55">Zavolejte nám</p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-[15px] font-semibold text-brand-dark hover:text-brand transition-colors"
                >
                  +420 {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-foreground/55">Napište e-mail</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-[15px] font-semibold text-brand-dark hover:text-brand transition-colors break-all"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] text-foreground/55">Navštivte nás</p>
                <p className="text-[15px] font-semibold text-brand-dark">
                  {company.street}, {company.city}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={120} className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/5">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                  <CheckIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-brand-dark">
                  Děkujeme za zprávu
                </h3>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-foreground/65">
                  Ozveme se vám co nejdříve, obvykle do druhého pracovního dne.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="block text-[13px] font-medium text-brand-dark">
                    Jméno a příjmení
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="Jan Novák"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-[13px] font-medium text-brand-dark">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="+420 xxx xxx xxx"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-[13px] font-medium text-brand-dark">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-lg border border-black/10 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="jan.novak@email.cz"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-[13px] font-medium text-brand-dark">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full resize-none rounded-lg border border-black/10 px-3.5 py-2.5 text-[14px] text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="Popište nám váš dům a co byste od tepelného čerpadla očekávali…"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:w-auto"
                  >
                    Odeslat poptávku
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
