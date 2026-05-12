import { bettingSites } from "@/lib/mock-data"
import { Award, Star, ExternalLink } from "lucide-react"

export function OurChoiceSection() {
  const top = bettingSites[0]

  return (
    <section className="w-full bg-surface border-y border-border py-8 md:py-10" aria-label="Our Top Pick">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
          <div className="w-10 h-10 bg-highlight flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-highlight-foreground" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-heading font-700 text-2xl md:text-3xl uppercase tracking-wide text-foreground leading-tight">
              Our Top Pick This Month
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              The highest-rated UKGC-licensed operator in our current rankings
            </p>
          </div>
        </div>

        {/* Featured card — two-column on desktop */}
        <a
          href={top.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="group block border border-highlight/40 bg-card hover:border-highlight/70 transition-colors overflow-hidden rank-1-glow"
          aria-label={`Visit ${top.name} — ${top.bonus}`}
        >
          {/* Gold top bar */}
          <div className="h-[3px] w-full bg-highlight" />

          <div className="flex flex-col md:flex-row md:items-stretch">

            {/* Left: logo + rating */}
            <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:w-52 bg-surface border-b md:border-b-0 md:border-r border-border px-6 py-5 gap-4">
              <div className="flex items-center justify-center  w-36 md:w-40 h-18 md:h-18 px-3 py-2 flex-shrink-0">
                <img src={top.logo || "/placeholder.svg"} alt={`${top.name} logo`} className="max-h-18 w-full object-contain" />
              </div>
              <div className="text-center flex-shrink-0">
                <div className="font-heading font-700 text-5xl text-primary leading-none tabular-nums">{top.rating.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground mt-0.5 mb-2">/10 rating</div>
                <div className="flex items-center justify-center gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < top.stars ? "fill-highlight text-highlight" : "fill-muted/40 text-muted/40"}`} aria-hidden="true" />
                  ))}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1.5">{top.reviews.toLocaleString()} reviews</div>
              </div>
            </div>

            {/* Right: offer + features + CTA */}
            <div className="flex-1 px-5 md:px-8 py-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-highlight text-highlight-foreground text-[10px] font-heading font-700 uppercase tracking-[0.12em] px-2.5 py-1 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    #1 Top Pick
                  </span>
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest">
                    {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1.5">Welcome Offer</div>
                <p className="text-foreground font-semibold text-lg md:text-xl leading-snug">{top.bonus}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{top.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-full sm:w-48 bg-primary hover:bg-primary/85 text-primary-foreground font-heading font-700 uppercase tracking-wide text-sm h-12 flex items-center justify-center gap-2 transition-colors cursor-pointer">
                  Visit Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  <span className="text-destructive font-semibold">18+</span> · New customers only · T&amp;Cs Apply · BeGambleAware.org
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
