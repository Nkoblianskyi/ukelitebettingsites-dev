import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { ListOrdered, Info } from "lucide-react"

export function RatingSection() {
  return (
    <section className="w-full bg-background py-8 md:py-12" id="rankings" aria-label="UK Betting Sites Rankings">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Column headers — desktop only */}
        <div className="hidden md:grid md:grid-cols-[56px_160px_1fr_140px_160px] px-5 mb-2 text-[10px] uppercase tracking-widest text-muted-foreground gap-0">
          <div className="text-center">Rank</div>
          <div className="text-center">Operator</div>
          <div className="pl-4">Offer &amp; Features</div>
          <div className="text-center pl-4">Rating</div>
          <div className="text-center pl-5">Action</div>
        </div>

        {/* Cards list */}
        <div className="space-y-3">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex items-start gap-2 bg-surface border border-border px-4 py-3">
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Rankings are based on independent editorial review. We may receive commission when you visit an operator via our links. This does not affect our ratings. All listed operators hold a valid UKGC licence. <span className="text-destructive font-semibold">18+</span> · Please gamble responsibly · BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
