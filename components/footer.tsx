import Link from "next/link"
import { ExternalLink } from "lucide-react"

const pages = [
  { label: "About Us",             href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
  { label: "Cookie Policy",        href: "/cookie-policy" },
  { label: "Privacy Policy",       href: "/privacy-policy" },
]

const regulators = [
  { name: "UKGC",        url: "https://www.gamblingcommission.gov.uk" },
  { name: "GambleAware", url: "https://www.begambleaware.org" },
  { name: "GamCare",     url: "https://www.gamcare.org.uk" },
  { name: "GAMSTOP",     url: "https://www.gamstop.co.uk" },
]

const logos = [
  { src: "/gamble.webp",  alt: "BeGambleAware",    url: "https://www.begambleaware.org" },
  { src: "/gamstop.jpg",  alt: "GAMSTOP",           url: "https://www.gamstop.co.uk" },
  { src: "/gamecare.svg", alt: "GamCare",           url: "https://www.gamcare.org.uk" },
  { src: "/ukgc.jpg",     alt: "UKGC",              url: "https://www.gamblingcommission.gov.uk" },
]

export function Footer() {
  return (
    <footer className="w-full bg-white" aria-label="Site footer">

      {/* ── Primary band: brand left, columns right ── */}
      <div className="border-t-4 border-primary">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4 max-w-sm">
            {/* Logo + wordmark */}
            <Link href="/" className="flex items-center gap-3 group w-fit" aria-label="UK Elite Betting Sites">
              <div className="relative w-10 h-10 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <rect x="0" y="0" width="40" height="40" rx="10" fill="hsl(211 85% 50%)" />
                  <path d="M10 26 L13 16 L17 21 L20 13 L23 21 L27 16 L30 26 Z" fill="white" fillOpacity="0.25" />
                  <path d="M10 26 L13 16 L17 21 L20 13 L23 21 L27 16 L30 26 Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
                  <path d="M9 27.5 H31" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-heading text-[18px] leading-none tracking-tight whitespace-nowrap">
                <span className="font-black text-foreground">UK&nbsp;</span>
                <span className="font-black text-primary">Elite&nbsp;</span>
                <span className="font-black text-foreground">Betting&nbsp;</span>
                <span className="font-extrabold text-foreground/70">Sites</span>
              </span>
            </Link>

            {/* Short editorial line */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Independent editorial rankings of UKGC-licensed bookmakers. Every operator is individually tested, rated, and verified by our expert team. We are not a bookmaker.
            </p>

            {/* Regulatory logos */}
            <div className="flex flex-wrap gap-2 mt-1">
              {logos.map((l) => (
                <a
                  key={l.alt}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface border border-border rounded-lg px-3 py-1.5 hover:border-primary/40 transition-colors flex items-center"
                  aria-label={l.alt}
                >
                  <img src={l.src} alt={l.alt} className="h-5 w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav + Regulatory columns */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[9px] font-heading font-black uppercase tracking-[0.2em] text-primary mb-4 border-b border-border pb-2">
                Pages
              </p>
              <nav className="flex flex-col gap-2.5" aria-label="Footer pages navigation">
                {pages.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {p.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[9px] font-heading font-black uppercase tracking-[0.2em] text-primary mb-4 border-b border-border pb-2">
                Regulatory
              </p>
              <nav className="flex flex-col gap-2.5" aria-label="Regulatory links">
                {regulators.map((r) => (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1.5"
                  >
                    {r.name}
                    <ExternalLink className="w-2.5 h-2.5 opacity-40" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ── Disclaimer band ── */}
      <div className="bg-surface border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-destructive font-black">18+</span> &nbsp;&middot;&nbsp;
            ukelitebettingsites.com is an independent comparison platform. We may receive affiliate commission when users visit operators through our links — this never influences our editorial ratings. All listed operators hold a valid UKGC licence. Gambling involves financial risk. If gambling is affecting you or someone you know, seek help at{" "}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              BeGambleAware.org
            </a>{" "}
            or call the National Gambling Helpline on <span className="font-medium text-foreground">0808 8020 133</span>.
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-foreground">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-heading">
            &copy; {new Date().getFullYear()} UK Elite Betting Sites &mdash; All rights reserved
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-heading hidden sm:block">
              Independent &middot; UKGC Licensed Only
            </span>
            <span className="text-[10px] font-heading font-black text-destructive border border-destructive/50 px-2 py-0.5 rounded bg-destructive/10 uppercase tracking-widest">
              18+
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
