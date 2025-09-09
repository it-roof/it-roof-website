import { BackgroundElements } from "@/components/sections/background-elements"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { VideoDemo } from "@/components/sections/video-demo"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { LiveChat } from "@/components/sections/live-chat"
import { ROICalculator } from "@/components/sections/roi-calculator"
import { FAQ } from "@/components/sections/faq"
import { LimitedTimeOffer } from "@/components/sections/limited-time-offer"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { TrustCarousel } from "@/components/sections/trust-carousel"
import { Projects } from "@/components/sections/projects"
import { HighlightProject } from "@/components/sections/highlight-project"

export default function ITRoofLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundElements />
      <Header />
      <Hero />
      <TrustCarousel />
      <HighlightProject />
      <Projects />
      <VideoDemo />
      <Features />
      <Testimonials />
      <LiveChat />
      <ROICalculator />
      <FAQ />
      <LimitedTimeOffer />
      <FinalCTA />
      <Footer />
    </div>
  )
}
