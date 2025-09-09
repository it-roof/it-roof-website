import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://baas.it-roof.com/wp-content/uploads/2025/09/Design-ohne-Titel-5.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/90 border border-white/30 rounded-lg text-black border-border">
            🚀 Streamline Your Workflow Today
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6 text-balance">
            Automate Your Business
            <span className="text-foreground"> Processes</span>
          </h1>
          <p className="text-xl font-medium leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            IT ROOF helps teams automate repetitive tasks, streamline workflows, and boost productivity by up to 300%.
            Focus on what matters most.
          </p>
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
              Watch Demo
            </Button>
          </div>
          <p className="text-sm leading-normal text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
