import Link from "next/link"
import { ArrowLeft, Target, Search, ShieldCheck, BarChart3 } from "lucide-react"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto max-w-3xl px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4 uppercase tracking-wide">
            <ArrowLeft className="w-3 h-3" />
            Back to Rankings
          </Link>
          <h1 className="font-heading font-800 text-3xl md:text-4xl text-foreground tracking-tight">
            About UK Elite Betting Sites
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Independent sports betting comparison for UK players — ukelitebettingsites.com</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-5">

        {/* Mission */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">Our Mission</h2>
          </div>
          <div className="px-5 py-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              UK Elite Betting Sites was created to give British sports bettors a clear, honest, and independent guide to UKGC-licensed bookmakers. We cut through the marketing noise to deliver transparent, evidence-based comparisons that help you make informed decisions — without commercial bias or misleading claims.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">What We Do</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                icon: BarChart3,
                title: "In-Depth Site Reviews",
                desc: "Every bookmaker is tested hands-on against a structured set of criteria covering licensing, odds, promotions, usability, and customer support before any rating is published.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Monthly Rankings",
                desc: "Our ratings are updated every month to reflect real changes in operator quality, offer terms, and platform performance. No operator pays to rank higher.",
              },
              {
                icon: Target,
                title: "Responsible Gambling First",
                desc: "We promote safe betting habits on every page and link to UK support services including GambleAware, GamCare, and GAMSTOP wherever relevant.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 px-5 py-4">
                <div className="w-8 h-8 bg-surface border border-border rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-700 text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-border">
            {[
              { title: "Transparency",  desc: "Every rating criterion is published and applied consistently." },
              { title: "Independence",  desc: "No operator influences our editorial scores." },
              { title: "Responsibility", desc: "Safe gambling messaging on every single page." },
              { title: "Accuracy",      desc: "Monthly updates keep rankings current and relevant." },
            ].map((item, i) => (
              <div key={i} className="px-5 py-4">
                <h3 className="font-heading font-700 text-primary text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-surface border border-border rounded-xl px-5 py-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> ukelitebettingsites.com is an informational comparison site. We are not a bookmaker and do not accept wagers. All operators we recommend hold a current UKGC licence. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </div>
    </div>
  )
}
