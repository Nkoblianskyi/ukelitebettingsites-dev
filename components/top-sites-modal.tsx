"use client"

import { useEffect, useState } from "react"
import { X, ExternalLink, ShieldCheck, Star, Award } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [open, setOpen] = useState(false)
  const top = bettingSites[0]

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 9000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open || !top) return null

  const score = top.rating
  const scorePercent = Math.round((score / 10) * 100)

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[380px] overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Our top-rated betting site this month"
      >

        {/* ── Header panel: deep navy ── */}
        <div className="bg-foreground px-5 pt-5 pb-4 relative overflow-hidden">
          {/* Subtle crown watermark */}
          <svg className="absolute right-[-10px] top-[-10px] opacity-[0.05] w-32 h-32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M5 30 L10 10 L18 20 L20 4 L22 20 L30 10 L35 30 Z" fill="white" />
            <path d="M4 32 H36" stroke="white" strokeWidth="2" />
          </svg>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-highlight" aria-hidden="true" />
            <span className="text-[10px] font-heading font-black uppercase tracking-[0.18em] text-highlight">
              Our Top Pick — {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
            </span>
          </div>

          {/* Logo on dark */}
          <div className="h-18 w-full bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/15">
            <img
              src={top.logo || "/placeholder.svg"}
              alt={`${top.name} logo`}
              className="max-h-18 max-w-[140px] object-contain"
            />
          </div>

          {/* Score row */}
          <div className="mt-4 flex items-end gap-3">
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-[3rem] text-white leading-none tabular-nums">
                {score.toFixed(1)}
              </span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-heading mt-0.5">/ 10</span>
            </div>

            {/* Arc fill bar */}
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < top.stars ? "fill-highlight text-highlight" : "fill-white/10 text-white/10"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
                  style={{ width: `${scorePercent}%` }}
                />
              </div>
              <p className="text-[10px] text-white/40 mt-1 font-heading">
                Based on {top.reviews.toLocaleString("en-GB")} verified reviews
              </p>
            </div>
          </div>
        </div>

        {/* ── Body panel: white ── */}
        <div className="bg-white px-5 py-4 flex flex-col gap-4">

          {/* Offer block */}
          <div className="relative rounded-xl border-2 border-highlight/40 bg-highlight/5 overflow-hidden">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-highlight rounded-l-xl" />
            <div className="pl-4 pr-4 py-3.5">
              <p className="text-[10px] font-heading font-black uppercase tracking-[0.15em] text-muted-foreground mb-1">
                Welcome Offer
              </p>
              <p className="font-heading font-black text-foreground text-[1.4rem] leading-tight">
                {top.bonus}
              </p>
              <p className="text-[10px] text-muted-foreground/70 mt-1 leading-relaxed">
                {top.terms}
              </p>
            </div>
          </div>

          {/* Editorial trust line */}
          <div className="flex items-start gap-2.5 py-2 border-t border-border">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-px" aria-hidden="true" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {top.name} holds a full UKGC licence and consistently leads our trust index across odds quality, payout speed, and customer support — independently verified by our editorial team.
            </p>
          </div>

          {/* CTA */}
          <a
            href={top.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex items-center justify-center gap-2 w-full h-12 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-heading font-black uppercase tracking-wide text-sm transition-all rounded-xl shadow-sm shadow-primary/25"
          >
            Visit {top.name}
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-center text-[10px] text-muted-foreground/60">
            <span className="text-destructive font-black">18+</span> &nbsp;&middot;&nbsp; T&amp;Cs Apply &nbsp;&middot;&nbsp; BeGambleAware.org
          </p>
        </div>

      </div>
    </div>
  )
}
