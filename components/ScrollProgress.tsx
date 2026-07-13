"use client";

import { useEffect, useState } from "react";

// Tenký ukazatel postupu scrollování přes celou stránku
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="h-full origin-left rounded-r-full bg-gradient-to-r from-brand to-emerald-400"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
