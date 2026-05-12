import Link from "next/link"
import { ArrowLeft, AlertTriangle, HeartHandshake, Phone } from "lucide-react"
import { Header } from "@/components/header"

export default function ResponsibleGamblingPage() {
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
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h1 className="font-heading font-800 text-3xl md:text-4xl text-foreground tracking-tight">
              Responsible Gambling
            </h1>
            <span className="text-destructive font-heading font-700 text-sm border border-destructive/40 px-3 py-1 rounded bg-destructive/5 uppercase tracking-wide">18+</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2">Betting should always remain entertainment — never a way to make money</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-5">

        {/* Important warning */}
        <div className="border-2 border-destructive/30 bg-destructive/5 rounded-xl px-5 py-5 flex gap-4">
          <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-heading font-700 text-destructive mb-1 uppercase tracking-wide">Important Warning</p>
            <p className="text-sm text-foreground leading-relaxed">
              Sports betting can be addictive and cause serious financial and personal harm. Never wager money you cannot afford to lose. If gambling is affecting your daily life, seek help immediately.
            </p>
            <p className="text-destructive font-heading font-700 text-xs mt-2 uppercase tracking-widest">Strictly 18+ Only</p>
          </div>
        </div>

        {/* What is responsible gambling */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <HeartHandshake className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">What Is Responsible Gambling?</h2>
          </div>
          <div className="px-5 py-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Responsible gambling means placing bets in a conscious, controlled, and safe manner — maintaining a healthy balance between leisure enjoyment and your personal and financial wellbeing. Every site on ukelitebettingsites.com is UKGC-licensed and legally required to provide a full suite of player protection tools.
            </p>
          </div>
        </div>

        {/* Key principles */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">Key Principles</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { num: "1", title: "Only Bet What You Can Afford to Lose", desc: "Never use money earmarked for bills, rent, food, or any essential expense." },
              { num: "2", title: "Set Limits Before You Start", desc: "Decide your budget and time limit in advance — and commit to it before you place your first bet." },
              { num: "3", title: "Never Chase Losses", desc: "Accepting a loss is part of betting. Chasing losses is the most common path to significantly larger losses." },
              { num: "4", title: "Do Not Bet When Emotional or Impaired", desc: "Avoid gambling when you are tired, stressed, upset, or under the influence of alcohol or other substances." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 px-5 py-4">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-heading font-700 text-sm flex-shrink-0 rounded-full">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-700 text-foreground text-sm mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safe practices / warning signs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-border px-5 py-3">
              <h2 className="font-heading font-700 text-sm tracking-wide text-foreground">Safe Practices</h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5">
              {[
                "Set a firm monthly betting budget",
                "Activate deposit limits on your account",
                "Keep other hobbies and interests in your life",
                "Take regular breaks from betting",
                "Use self-exclusion tools if needed",
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-destructive/30 bg-destructive/5 px-5 py-3">
              <h2 className="font-heading font-700 text-sm tracking-wide text-destructive">Warning Signs</h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5">
              {[
                "Betting more than you can comfortably afford",
                "Hiding your gambling from family or friends",
                "Borrowing money to fund bets",
                "Neglecting work, study, or responsibilities",
                "Feeling anxious or irritable when unable to bet",
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-bold flex-shrink-0 text-xs mt-0.5">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support services */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">UK Support Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { name: "GambleAware",      url: "www.begambleaware.org",   desc: "Free confidential support and practical advice" },
              { name: "GamCare",          url: "www.gamcare.org.uk",      desc: "National gambling helpline and counselling services" },
              { name: "GAMSTOP",          url: "www.gamstop.co.uk",       desc: "UK national self-exclusion scheme — all licensed sites" },
              { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "Free international online support and forums" },
            ].map((org, i) => (
              <div key={i} className="px-5 py-4">
                <div className="font-heading font-700 text-foreground text-sm mb-0.5">{org.name}</div>
                <a href={`https://${org.url}`} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">{org.url}</a>
                <div className="text-muted-foreground text-[11px] mt-1 leading-relaxed">{org.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Age warning */}
        <div className="bg-destructive/5 border border-destructive/30 rounded-xl px-5 py-4 text-center">
          <span className="font-heading font-700 text-sm text-destructive uppercase tracking-widest">Under 18s Must Not Gamble</span>
        </div>

      </div>
    </div>
  )
}
