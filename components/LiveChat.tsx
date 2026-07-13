"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";
import { CloseIcon, SendIcon } from "./icons";

type Action = { label: string; href: string };
type Message = { from: "bot" | "user"; text: string; action?: Action };

// Odstraní diakritiku a převede na malá písmena — kvůli robustnímu porovnávání
const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

// Jednoduchá pravidlová logika: podle klíčových slov vybere odpověď.
function getReply(input: string): Message {
  const t = normalize(input);
  const has = (...words: string[]) => words.some((w) => t.includes(w));

  if (has("ahoj", "dobry den", "zdravim", "cau", "dobry vecer")) {
    return {
      from: "bot",
      text: "Dobrý den! Rád pomůžu. Zajímá vás cena, dotace, jak čerpadlo funguje, nebo něco jiného?",
    };
  }
  if (has("cena", "cenu", "cenik", "cenov", "nabidk", "kolik", "stoji", "rozpocet")) {
    return {
      from: "bot",
      text: "Ceny závisí na typu a výkonu čerpadla. Připravíme vám nezávaznou nabídku na míru vašemu domu. Orientační ceník najdete v sekci Ceník.",
      action: { label: "Zobrazit ceník", href: "/cenova-nabidka" },
    };
  }
  if (has("dotac", "zelen", "usporam", "nzu")) {
    return {
      from: "bot",
      text: "Na tepelné čerpadlo lze čerpat dotaci z programu Nová zelená úsporám, která výrazně sníží investici. S celým procesem vám pomůžeme.",
      action: { label: "Číst o dotacích", href: "/clanky/dotace-zelena-usporam" },
    };
  }
  if (has("funguje", "princip", "jak to", "jak funguje")) {
    return {
      from: "bot",
      text: "Tepelné čerpadlo odebírá teplo z venkovního vzduchu a přečerpává ho do topení a teplé vody. Podrobně to popisujeme na stránce Náklady a princip.",
      action: { label: "Jak to funguje", href: "/naklady-a-princip" },
    };
  }
  if (has("vzduch", "voda", "typ", "jaky druh", "jake cerpadlo", "model")) {
    return {
      from: "bot",
      text: "Nabízíme čerpadla vzduch–voda Carrier (6–14 kW), výkonnější řadu RQ (17–33 kW) i řešení pro ohřev vody. Podle domu doporučíme to nejvhodnější.",
      action: { label: "Naše řešení", href: "/#cerpadla" },
    };
  }
  if (has("montaz", "instalac", "realizac", "za jak dlouho", "termin")) {
    return {
      from: "bot",
      text: "Zajišťujeme kompletní návrh, dodávku i montáž. Realizace u rodinného domu obvykle zabere 1–2 dny. Rádi vám navrhneme řešení na míru.",
      action: { label: "Naše realizace", href: "/#realizace" },
    };
  }
  if (has("servis", "zaruk", "oprav", "porouch", "nefunguje")) {
    return {
      from: "bot",
      text: `Poskytujeme záruční i pozáruční servis. Servisní linka je Po–Pá 7:00–20:00 na čísle +420 ${company.phone}.`,
    };
  }
  if (has("usetr", "uspora", "naklad", "provoz", "spotreb")) {
    return {
      from: "bot",
      text: "Oproti plynu nebo elektrokotli ušetříte na vytápění klidně 50–70 %. Rádi vám spočítáme orientační úsporu pro váš dům.",
      action: { label: "Spočítat úsporu", href: "/naklady-a-princip" },
    };
  }
  if (has("kontakt", "telefon", "volat", "email", "mail", "schuzk", "napsat", "spojit")) {
    return {
      from: "bot",
      text: `Zavolejte nám na +420 ${company.phone} nebo napište na ${company.email}. Můžete také vyplnit nezávaznou poptávku.`,
      action: { label: "Kontaktní formulář", href: "/#kontakt" },
    };
  }
  if (has("dekuj", "diky", "super", "vyborne")) {
    return { from: "bot", text: "Rádo se stalo! Kdybyste potřeboval cokoli dalšího, jsem tu. 🙂" };
  }

  return {
    from: "bot",
    text: `Na tohle vám nejlépe odpoví náš technik. Zavolejte na +420 ${company.phone} nebo nám napište přes formulář a ozveme se vám.`,
    action: { label: "Nezávazná poptávka", href: "/#kontakt" },
  };
}

const quickReplies = ["Cena a nabídka", "Dotace", "Jak to funguje", "Kontakt"];

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Dobrý den! 👋 Jsem virtuální asistent Tepelných čerpadel Kašpar. S čím vám mohu pomoci?",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll na poslední zprávu
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setInput("");
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    // Malé zpoždění, ať to působí jako odpověď
    setTimeout(() => {
      setMessages((prev) => [...prev, getReply(trimmed)]);
    }, 450);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Plovoucí tlačítko */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Zavřít chat" : "Otevřít chat"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <span className="absolute inset-0 overflow-hidden rounded-full bg-white">
            <Image
              src="/chat.webp"
              alt="Chat s asistentem"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </span>
        )}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white" />
          </span>
        )}
      </button>

      {/* Okno chatu */}
      <div
        className={`fixed bottom-24 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ height: "min(32rem, calc(100vh - 8rem))" }}
        role="dialog"
        aria-label="Chat s asistentem"
      >
        {/* Hlavička */}
        <div className="flex items-center gap-3 bg-brand-dark px-4 py-3.5 text-white">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white/20">
            <Image
              src="/chat.webp"
              alt="Asistent Kašpar"
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </span>
          <div className="leading-tight">
            <p className="text-[15px] font-semibold">Asistent Kašpar</p>
            <p className="flex items-center gap-1.5 text-[12px] text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Obvykle odpovíme hned
            </p>
          </div>
        </div>

        {/* Zprávy */}
        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-brand-light/30 p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${
                m.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {m.from === "bot" && (
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5">
                  <Image
                    src="/chat.webp"
                    alt="Asistent Kašpar"
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                  />
                </span>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-sm bg-brand text-white"
                    : "rounded-bl-sm bg-white text-foreground/80 shadow-sm"
                }`}
              >
                {m.text}
                {m.action && (
                  <Link
                    href={m.action.href}
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-block rounded-lg bg-brand px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-brand-dark transition-colors"
                  >
                    {m.action.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rychlé odpovědi */}
        <div className="flex flex-wrap gap-2 border-t border-black/5 bg-white px-3 pt-3">
          {quickReplies.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => send(q)}
              className="rounded-full border border-brand/30 bg-brand-light/50 px-3 py-1.5 text-[12px] font-medium text-brand hover:bg-brand-light transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Vstup */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Napište zprávu…"
            className="flex-1 rounded-lg border border-black/10 px-3 py-2.5 text-[14px] outline-none focus:border-brand/50"
          />
          <button
            type="submit"
            aria-label="Odeslat"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand text-white hover:bg-brand-dark transition-colors"
          >
            <SendIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </>
  );
}
