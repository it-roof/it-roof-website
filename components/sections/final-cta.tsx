import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, CheckCircle, Star } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge className="mb-6 backdrop-blur-xl bg-white/20 border border-white/30 rounded-lg text-foreground">
          🔥 Limited Time: 50% Off First 3 Months
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4 text-balance text-foreground">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto text-pretty text-muted-foreground">
          Join 10,000+ teams who have saved over 2 million hours with IT ROOF. Start your free trial today.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>30-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>4.9/5 Customer Rating</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-lg text-foreground hover:from-white/15 hover:to-white/8 transition-all duration-300"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm leading-normal text-muted-foreground mt-6">
          No credit card required • 14-day free trial • 30-day money-back guarantee
          <br />
          Questions? Call us at (555) 123-4567 or email support@it-roof.com
        </p>
      </div>
    </section>
  )
}
