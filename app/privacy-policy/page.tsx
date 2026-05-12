import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-xs mt-2">ukelitebettingsites.com &mdash; Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        {[
          {
            title: "Introduction",
            icon: Lock,
            content:
              "UK Elite Betting Sites (ukelitebettingsites.com) is committed to protecting the privacy of all visitors to our website. This policy explains how we collect, use, store, and protect your personal information in full compliance with UK GDPR and the Data Protection Act 2018. By using our site, you consent to the practices described in this policy.",
          },
          {
            title: "Information We Collect",
            list: [
              "IP address and approximate geographic location",
              "Browser type, device type, and operating system",
              "Pages visited, time spent on each page, and navigation paths",
              "Referral sources (e.g. search engines, external links)",
              "Cookie preferences and consent status",
            ],
          },
          {
            title: "How We Use Your Data",
            list: [
              "To improve site content, layout, and user experience",
              "To analyse traffic patterns and understand how visitors use the site",
              "To measure the effectiveness of our affiliate partnerships",
              "To comply with legal obligations under UK GDPR",
              "To respond to any contact requests submitted via the site",
            ],
          },
          {
            title: "Data Protection & Security",
            content:
              "We implement appropriate technical and organisational security measures to protect your data against unauthorised access, accidental loss, alteration, or disclosure. These measures include SSL/TLS encryption, restricted access controls, and regular security reviews. We do not sell or rent your personal data to any third party.",
          },
          {
            title: "Your Rights Under UK GDPR",
            content:
              "You have the right to: access the personal data we hold about you; request correction of inaccurate data; request erasure of your data ('right to be forgotten'); object to or restrict processing of your data; and request portability of your data in a machine-readable format. To exercise any of these rights, please contact us using the details below.",
          },
          {
            title: "Cookies",
            content:
              "We use cookies and similar technologies to improve your browsing experience and analyse site usage. You can manage your cookie preferences at any time via the consent banner on first visit or your browser settings. For full details, please read our Cookie Policy.",
          },
          {
            title: "Third-Party Links",
            content:
              "ukelitebettingsites.com contains links to external bookmaker websites. We are not responsible for the privacy practices of those sites. We strongly recommend you review the privacy policy of any external site you visit through our links.",
          },
          {
            title: "Contact & Data Controller",
            content:
              "For all privacy enquiries, data subject requests, or to report a concern: privacy@ukelitebettingsites.com. We aim to respond to all requests within 30 days in accordance with our obligations under UK GDPR.",
          },
        ].map((section, i) => (
          <div key={i} className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-heading font-700 text-base tracking-wide text-foreground">{section.title}</h2>
            </div>
            <div className="px-5 py-5">
              {section.content && (
                <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
              )}
              {section.list && (
                <ul className="space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
