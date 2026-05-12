"use client"

import { Star, ExternalLink, Award, Flame, TrendingUp, ThumbsUp } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

function Stars({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < count ? "fill-highlight text-highlight" : "fill-muted/40 text-muted/40"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function Badge({ site }: { site: BettingSite }) {
  if (site.isTopRating)
    return (
      <span className="inline-flex items-center gap-1 bg-highlight text-highlight-foreground text-[10px] font-heading font-700 uppercase tracking-[0.12em] px-2.5 py-1">
        <Award className="w-3 h-3" />
        Top Pick
      </span>
    )
  if (site.isTopLine)
    return (
      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-heading font-700 uppercase tracking-[0.12em] px-2.5 py-1">
        <ThumbsUp className="w-3 h-3" />
        Best Value
      </span>
    )
  if (site.isPopular)
    return (
      <span className="inline-flex items-center gap-1 bg-surface text-foreground border border-border text-[10px] font-heading font-700 uppercase tracking-[0.12em] px-2.5 py-1">
        <TrendingUp className="w-3 h-3 text-primary" />
        Popular
      </span>
    )
  if (site.isTrending)
    return (
      <span className="inline-flex items-center gap-1 bg-surface text-foreground border border-border text-[10px] font-heading font-700 uppercase tracking-[0.12em] px-2.5 py-1">
        <Flame className="w-3 h-3 text-highlight" />
        Trending
      </span>
    )
  return null
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const isFirst = rank === 1

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={`
        group block relative overflow-hidden border transition-all duration-150
        ${isFirst
          ? "border-highlight/50 bg-card rank-1-glow"
          : "border-border bg-card hover:border-primary/40 hover:bg-surface"
        }
      `}
      aria-label={`Visit ${site.name} — ${site.bonus}`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] ${isFirst ? "bg-highlight" : "bg-transparent group-hover:bg-primary/50"} transition-colors`}
        aria-hidden="true"
      />

      {/* Badge row — sits above the card body */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-0 md:px-5">
        <Badge site={site} />
        {isFirst && (
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Editor&apos;s Choice — {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
          </span>
        )}
      </div>

      {/* ──────────── DESKTOP layout ──────────── */}
      <div className="hidden md:grid md:grid-cols-[56px_160px_1fr_140px_160px] md:items-center md:gap-0 px-5 py-4">

        {/* Rank */}
        <div className="flex items-center justify-center">
          <div className={`
            w-10 h-10 flex items-center justify-center font-heading font-700 text-xl leading-none
            ${isFirst ? "bg-highlight text-highlight-foreground" : "bg-muted text-muted-foreground"}
          `}>
            {rank}
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center px-3">
          <div className="w-44 h-18 flex items-center justify-center px-3 py-2">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-18 w-full object-contain"
            />
          </div>
        </div>

        {/* Offer + features */}
        <div className="px-4 border-l border-border">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">Welcome Offer</div>
          <p className="text-foreground font-semibold text-sm md:text-base leading-snug">{site.bonus}</p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center justify-center border-l border-border px-4 text-center">
          <div className="font-heading font-700 text-4xl text-primary leading-none tabular-nums">
            {site.rating.toFixed(1)}
          </div>
          <div className="text-[10px] text-muted-foreground mt-0.5 mb-2">/10 rating</div>
          <Stars count={site.stars} size="md" />
          <div className="text-[10px] text-muted-foreground mt-1.5">
            {site.reviews.toLocaleString()} reviews
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center border-l border-border pl-5 gap-2">
          <div className="w-full bg-primary hover:bg-primary/85 text-primary-foreground font-heading font-700 uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-colors cursor-pointer">
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wide">T&amp;Cs Apply</span>
        </div>
      </div>

      {/* ──────────── MOBILE layout ──────────── */}
      <div className="md:hidden px-4 pb-4 pt-3">

        {/* Row 1: rank + logo + rating */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`
            w-8 h-8 flex items-center justify-center font-heading font-700 text-base flex-shrink-0
            ${isFirst ? "bg-highlight text-highlight-foreground" : "bg-muted text-muted-foreground"}
          `}>
            {rank}
          </div>

          <div className="flex-1 flex items-center justify-center h-10 px-2 py-1">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-10 w-full object-contain"
            />
          </div>

          <div className="text-right flex-shrink-0">
            <div className="font-heading font-700 text-2xl text-primary leading-none tabular-nums">
              {site.rating.toFixed(1)}
            </div>
            <Stars count={site.stars} />
          </div>
        </div>

        {/* Row 2: offer box */}
        <div className={`px-3 py-2.5 mb-3 border-l-2 ${isFirst ? "border-highlight bg-highlight/5" : "border-primary/50 bg-surface"}`}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">Welcome Offer</div>
          <div className="text-foreground font-semibold text-sm leading-snug">{site.bonus}</div>
        </div>

        {/* Row 3: CTA button */}
        <div className="w-full bg-primary hover:bg-primary/85 text-primary-foreground font-heading font-700 uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-colors cursor-pointer">
          Visit Site
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Disclaimer strip */}
      <div className="border-t border-border px-4 md:px-5 py-2 bg-surface/50">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          <span className="text-destructive font-semibold">18+</span> · New customers only · Responsible Gambling · UKGC Licensed · T&amp;Cs Apply · BeGambleAware.org
        </p>
      </div>
    </a>
  )
}
