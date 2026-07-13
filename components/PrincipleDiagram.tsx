export function PrincipleDiagram() {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 sm:p-10 shadow-sm">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8">
        <div className="text-center">
          <div className="mx-auto flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-4 border-sky-400 bg-sky-50">
            <span className="text-[13px] sm:text-[14px] font-semibold text-sky-700">
              Vypařování
            </span>
          </div>
          <p className="mt-3 text-[13px] font-medium text-foreground/70">
            Energie okolí <span className="font-bold text-sky-600">3/4</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="whitespace-nowrap text-[12px] font-medium text-foreground/60">
            Poháněcí síla
            <br />
            (el. energie) <span className="font-bold text-brand">1/4</span>
          </p>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark text-white">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3.2" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[12px] font-semibold text-brand-dark">Komprese</p>
        </div>

        <div className="text-center">
          <div className="mx-auto flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-4 border-orange-400 bg-orange-50">
            <span className="text-[13px] sm:text-[14px] font-semibold text-orange-700">
              Kondenzace
            </span>
          </div>
          <p className="mt-3 text-[13px] font-medium text-foreground/70">
            Teplo do topení <span className="font-bold text-orange-600">4/4</span>
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="h-px w-16 sm:w-28 bg-black/10" />
        <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-foreground/50" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3v10M8 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 17a5 5 0 0 0 5 4h2a5 5 0 0 0 5-4" />
          </svg>
          <span className="text-[12px] font-semibold text-foreground/60">Expanze</span>
        </div>
        <span className="h-px w-16 sm:w-28 bg-black/10" />
      </div>
    </div>
  );
}
