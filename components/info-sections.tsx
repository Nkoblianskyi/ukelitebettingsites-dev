"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

function Panel({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <h2 className="font-heading font-700 text-base md:text-lg tracking-wide text-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        }
      </button>

      {open && (
        <div className="pb-7 space-y-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export function InfoSections() {
  return (
    <section className="bg-background py-10 md:py-14 px-4" aria-label="Information">
      <div className="container mx-auto max-w-6xl">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1 h-6 bg-primary rounded-full flex-shrink-0" aria-hidden="true" />
          <h2 className="font-heading font-700 text-xl md:text-2xl tracking-wide text-foreground">
            UK Betting Guide
          </h2>
        </div>

        <div className="bg-white border border-border rounded-xl shadow-sm divide-y divide-border px-5 md:px-8">

          {/* Panel 1 */}
          <Panel title="How We Rate UK Betting Sites" defaultOpen>
            <p>
              ukelitebettingsites.com applies a rigorous, transparent methodology to assess every bookmaker in our database. Our team spends weeks testing each operator in real conditions before any rating is published — we never accept payment from operators to influence rankings.
            </p>
            <p>
              <span className="text-foreground font-semibold">Licensing and player safety</span> sit at the top of our scoring framework. We verify each site holds a current, active UK Gambling Commission (UKGC) licence, audit SSL encryption standards, review how player funds are protected, and confirm that responsible gambling tools are prominent and easy to use. No unlicensed operator will ever appear on UK Elite Betting Sites.
            </p>
            <p>
              <span className="text-foreground font-semibold">Welcome offers and promotions</span> are scored on genuine value, not headline size. We read every term — wagering requirements, bet restrictions, time limits — and rate offers on fairness to real players. A bonus with punishing wagering conditions will always score below a straightforward, low-barrier offer.
            </p>
            <p>
              <span className="text-foreground font-semibold">Odds quality and market breadth</span> are tested by comparing prices across Premier League, Championship, and major international fixtures. We calculate average margins, note in-play availability, and review niche sport coverage. Sharper odds mean a higher rating.
            </p>
            <p>
              <span className="text-foreground font-semibold">Platform, payments, and support</span> round out our review. We test mobile apps and desktop sites, process deposits and withdrawals via common UK methods, time live chat responses, and rate the quality of each help centre. Fast withdrawals, responsive service, and a polished mobile experience are baseline expectations.
            </p>
          </Panel>

          {/* Panel 2 */}
          <Panel title="What Makes a Great UK Betting Site in 2026">
            <p>
              The United Kingdom operates one of the world&apos;s most tightly regulated betting markets — and that is very much to a bettor&apos;s advantage. Every site we feature at ukelitebettingsites.com must hold a UKGC licence, meaning the operator is legally required to segregate player funds, provide accessible responsible gambling tools, and submit to regular independent compliance checks.
            </p>
            <p>
              Beyond the licence, the elite operators of {new Date().getFullYear()} share consistent hallmarks. They offer deep, competitive markets across football, horse racing, tennis, and cricket — the four biggest categories for UK players. They process withdrawals to UK bank accounts and debit cards within 24 hours. Their apps are stable, fast, and intuitive across iOS and Android. And they make deposit limits, reality checks, and self-exclusion genuinely easy to find and activate.
            </p>
            <p>
              Welcome bonuses attract attention, but they should not decide your choice of bookmaker. The better long-term indicator is an ongoing promotions programme — accumulator insurance, enhanced odds for existing customers, and loyalty rewards that deliver real value over months, not just the first deposit.
            </p>
          </Panel>

          {/* Panel 3 */}
          <Panel title="Responsible Gambling">
            <p>
              Betting is entertainment. Every operator on our list is required by UKGC regulation to provide a comprehensive set of responsible gambling tools — and we encourage every player to use them as a matter of course, regardless of experience level.
            </p>
            <p>
              <span className="text-foreground font-semibold">Deposit limits</span> let you set a daily, weekly, or monthly cap on how much you can load onto your account. Setting a limit before you start is one of the simplest and most effective ways to stay in control. Most operators apply a mandatory cooling-off period before any increase takes effect.
            </p>
            <p>
              <span className="text-foreground font-semibold">Session reminders and reality checks</span> notify you of how long you have been betting. Research consistently shows that losing track of time is a key factor in problem gambling — a periodic alert every 30 or 60 minutes can make a meaningful difference.
            </p>
            <p>
              <span className="text-foreground font-semibold">Self-exclusion</span> is available on every UKGC-licensed site and nationally through GAMSTOP, which blocks you from all licensed UK operators simultaneously. If gambling is causing harm, visit{" "}
              <span className="text-primary">www.gamstop.co.uk</span>. Free, confidential support is also available 24 hours a day from GambleAware at{" "}
              <span className="text-primary">www.begambleaware.org</span> and GamCare at{" "}
              <span className="text-primary">www.gamcare.org.uk</span>.
            </p>
            <p className="border-l-2 border-destructive pl-4 text-foreground bg-destructive/5 py-3 pr-3 rounded-r-lg">
              <strong>18+ only.</strong> Gambling can be addictive. Never bet more than you can comfortably afford to lose. If you feel gambling is affecting your health, relationships, or finances, please seek help immediately.
            </p>
          </Panel>

          {/* Panel 4 */}
          <Panel title="Frequently Asked Questions">
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Are all sites on this list UKGC licensed?</h3>
                <p>Yes, without exception. Every bookmaker that features on ukelitebettingsites.com holds a current licence issued by the UK Gambling Commission. We verify licence status before publishing and review it regularly throughout {new Date().getFullYear()}.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">How are the rankings ordered?</h3>
                <p>Rankings reflect our independent composite score derived from licensing strength, offer quality, odds competitiveness, usability, payment options, and customer support. The list is reviewed monthly and updated whenever operators meaningfully improve or decline.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Do you receive commission from bookmakers?</h3>
                <p>We may earn affiliate revenue when a visitor registers with a site through our links. This commercial relationship does not alter our editorial rankings — every site is rated on genuine merit, and we have declined to list operators that did not meet our standards despite their commercial interest.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Can I hold accounts at multiple betting sites?</h3>
                <p>Yes. Most seasoned bettors keep accounts at two or three bookmakers to compare odds and take advantage of different promotions. There is no restriction on holding multiple accounts with different UKGC-licensed operators.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">What payment methods are accepted at UK betting sites?</h3>
                <p>All operators on our list accept Visa and Mastercard debit cards — credit cards are banned for gambling transactions under UKGC regulation. Most also accept PayPal, Apple Pay, and bank transfer. The best sites complete withdrawals within 24 hours.</p>
              </div>
            </div>
          </Panel>

        </div>
      </div>
    </section>
  )
}
