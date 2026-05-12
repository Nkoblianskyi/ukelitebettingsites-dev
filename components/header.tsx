"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full" aria-label="Site header">
      {/* Main bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-border shadow-[0_1px_12px_rgba(26,143,227,0.07)]">
        <div className="container mx-auto max-w-6xl px-4 h-[60px] flex items-center justify-between">

          {/* Logo + wordmark in one row */}
          <Link
            href="/"
            className="flex items-center gap-3 group select-none"
            aria-label="UK Elite Betting Sites — home"
          >
            {/* Custom diamond-shield mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Outer ring */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="absolute inset-0">
                <rect x="1" y="1" width="38" height="38" rx="10" fill="hsl(211 85% 50%)" />
                {/* Crown shape */}
                <path d="M10 26 L13 16 L17 21 L20 13 L23 21 L27 16 L30 26 Z" fill="white" fillOpacity="0.25" />
                <path d="M10 26 L13 16 L17 21 L20 13 L23 21 L27 16 L30 26 Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
                {/* Crown base line */}
                <path d="M9 27.5 H31" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Wordmark — single row, all tokens */}
            <span className="font-heading text-[19px] leading-none tracking-tight whitespace-nowrap">
              <span className="font-black text-foreground">UK&nbsp;</span>
              <span className="font-black text-primary">Elite&nbsp;</span>
              <span className="font-black text-foreground">Betting&nbsp;</span>
              <span className="font-extrabold text-foreground/70">Sites</span>
            </span>
          </Link>

          {/* Right side: thin accent bar + 18+ tag */}
          <div className="flex items-center gap-3">
            {/* Vertical divider rule */}
            <div className="hidden sm:flex flex-col items-end gap-0.5">
              <span className="text-[9px] font-heading font-black uppercase tracking-[0.18em] text-muted-foreground">
                UKGC Licensed Reviews
              </span>
              <div className="h-[2px] w-full bg-gradient-to-r from-primary/60 to-highlight/60 rounded-full" />
            </div>

            {/* 18+ pill */}
            <span
              className="flex-shrink-0 h-7 px-2.5 inline-flex items-center justify-center rounded-lg bg-destructive/10 border border-destructive/30 text-destructive font-heading font-black text-[11px] tracking-widest uppercase"
              aria-label="18 plus only"
            >
              18+
            </span>
          </div>

        </div>
      </div>

      {/* Thin primary accent line below bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-highlight to-primary/40" />
    </header>
  )
}
