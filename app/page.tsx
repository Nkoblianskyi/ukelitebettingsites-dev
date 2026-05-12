"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { InfoSections } from "@/components/info-sections"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <OurChoiceSection />
    </div>
  )
}
