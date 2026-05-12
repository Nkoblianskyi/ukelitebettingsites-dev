import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const raleway = Raleway({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-raleway" })

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `UK Elite Betting Sites – Best UK Betting Sites ${currentYear}`,
  description:
    "Independent ranking of the best licensed betting sites in the United Kingdom. Expert reviews, welcome offers, and unbiased ratings for UK bettors — ukelitebettingsites.com.",
  metadataBase: new URL("https://ukelitebettingsites.com"),
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#f4f8fc",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>
      </body>
    </html>
  )
}
