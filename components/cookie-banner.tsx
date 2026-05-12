"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookieConsent")) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", value)
      localStorage.setItem("cookieConsentDate", new Date().toISOString())
    } catch { /* silent */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.08)]"
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Primary top accent */}
      <div className="h-[3px] w-full bg-primary" />

      <div className="container mx-auto max-w-6xl px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-heading font-700 text-foreground mb-0.5">We use cookies</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ukelitebettingsites.com uses cookies to improve your browsing experience and analyse site traffic.
                Read our{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline underline-offset-2 font-medium">
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => choose("rejected")}
              className="h-9 px-4 text-[11px] font-heading font-700 uppercase tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors bg-transparent rounded"
            >
              Essential Only
            </button>
            <button
              onClick={() => choose("accepted")}
              className="h-9 px-5 text-[11px] font-heading font-700 uppercase tracking-wide bg-primary text-white hover:bg-primary/90 transition-colors rounded shadow-sm"
            >
              Accept All
            </button>
            <button
              onClick={() => choose("rejected")}
              className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-border rounded"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
