import Image from "next/image"
import { ShieldCheck, FlaskConical, RefreshCw, Fingerprint } from "lucide-react"

const trustItems = [
  { icon: ShieldCheck, label: "UKGC Licensed" },
  { icon: FlaskConical, label: "Tested Hands-On" },
  { icon: RefreshCw, label: "Monthly Updated" },
  { icon: Fingerprint, label: "Editorial Only" },
]

export function Hero() {
  return (
    <section
      className="w-full h-[250px] md:h-[400px] flex overflow-hidden"
      aria-label="Hero banner"
    >
      {/* LEFT — solid dark panel, all content lives here */}
      <div className="relative z-10 flex flex-col justify-between bg-[#0a1e35] px-5 md:px-12 py-4 md:py-9 w-[52%] md:w-[48%] shrink-0">

        {/* Top content */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <span className="inline-block w-1 h-3 md:h-4 bg-sky-400 rounded-full" />
            <span className="text-[7px] md:text-[9px] font-heading font-bold uppercase tracking-[0.22em] text-sky-400">
              2026 Rankings
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading leading-[1.08] tracking-tight">
            <span className="block text-[0.9rem] md:text-[2.1rem] font-extrabold text-white">
              The UK&apos;s Most
            </span>
            <span className="block text-[0.9rem] md:text-[2.1rem] font-extrabold text-white">
              Trusted Betting
            </span>
            <span className="block text-[0.9rem] md:text-[2.1rem] font-extrabold text-sky-400">
              Site Reviews
            </span>
          </h1>

          {/* Sub copy — hidden on smallest screens to save height */}
          <p className="hidden sm:block mt-2 md:mt-4 text-[9px] md:text-[12px] text-white/55 leading-snug max-w-[260px] md:max-w-[340px]">
            Every bookmaker independently tested, rated &amp; UKGC verified.
          </p>
        </div>

        {/* Trust strip — bottom of left panel */}
        <div>
          <div className="w-full h-px bg-white/10 mb-2 md:mb-3" />
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 md:gap-x-5 md:gap-y-2">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1 md:gap-1.5">
                <Icon
                  className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-sky-400 shrink-0"
                  strokeWidth={2}
                />
                <span className="text-[7px] md:text-[9px] font-heading font-semibold uppercase tracking-wide text-white/80 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-1.5 md:mt-2.5 text-[6px] md:text-[8px] text-white/30 uppercase tracking-widest">
            18+ &middot; BeGambleAware.org
          </p>
        </div>
      </div>

      {/* RIGHT — photo fills remaining width */}
      <div className="relative flex-1">
        {/* thin gradient bridge from left panel to photo */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0a1e35] to-transparent z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Live football match at a packed UK stadium"
          fill
          priority
          className="object-cover object-center"
          sizes="52vw"
        />
        {/* subtle right vignette */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a1e35]/20 to-transparent" />
      </div>
    </section>
  )
}
