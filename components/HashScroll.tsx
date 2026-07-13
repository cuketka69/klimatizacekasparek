"use client";

import { useEffect } from "react";

// Po příchodu na stránku s hash kotvou (např. /#kontakt z jiné podstránky)
// spolehlivě dojede na cílovou sekci — App Router to u dlouhých stránek
// sám nezvládne, protože se obsah dorenderovává postupně.
export function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Několik pokusů, jak se stránka a obrázky dorovnají do finální výšky.
    const timers = [80, 300, 700].map((ms) => setTimeout(scrollToTarget, ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
