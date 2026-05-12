import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Header } from "@/components/header"

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-xs mt-2">ukelitebettingsites.com &mdash; Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-5">

        {/* What are cookies */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Cookie className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">What Are Cookies?</h2>
          </div>
          <div className="px-5 py-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They allow ukelitebettingsites.com to recognise your browser, remember your preferences, and improve the overall experience on return visits. Cookies do not contain personally identifiable information unless you have provided that information directly.
            </p>
          </div>
        </div>

        {/* Types of cookies */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">Types of Cookies We Use</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                title: "Essential Cookies",
                tag: "Required",
                tagClass: "bg-primary/10 text-primary border border-primary/20",
                desc: "These cookies are strictly necessary for the website to function correctly. They enable core features such as cookie consent preferences and page navigation. They cannot be disabled.",
              },
              {
                title: "Analytics Cookies",
                tag: "Optional",
                tagClass: "bg-surface text-muted-foreground border border-border",
                desc: "These help us understand how visitors navigate the site — which pages are visited most, how long users spend on each section, and where traffic originates. This data is used to improve content and usability.",
              },
              {
                title: "Marketing Cookies",
                tag: "Optional",
                tagClass: "bg-surface text-muted-foreground border border-border",
                desc: "Used to serve relevant content and measure the effectiveness of our affiliate partnerships with licensed UK bookmakers. These do not create personal profiles or track you across unrelated websites.",
              },
            ].map((item, i) => (
              <div key={i} className="px-5 py-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-700 text-foreground text-sm">{item.title}</h3>
                  <span className={`${item.tagClass} text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wide font-heading font-700`}>{item.tag}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Managing cookies */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-heading font-700 text-base tracking-wide text-foreground">Managing Your Cookie Preferences</h2>
          </div>
          <div className="px-5 py-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              You can manage your cookie preferences at any time using the consent banner displayed when you first visit the site, or by adjusting the settings in your browser. Most modern browsers allow you to refuse, delete, or be notified when cookies are set. Please be aware that disabling essential cookies may prevent some features of the site from working correctly.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-surface border border-border rounded-xl px-5 py-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            Questions about cookies or this policy? Contact us at:{" "}
            <span className="text-primary font-medium">cookies@ukelitebettingsites.com</span>
          </p>
        </div>

      </div>
    </div>
  )
}
