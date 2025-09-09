import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function LimitedTimeOffer() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="backdrop-blur-lg bg-gradient-to-r from-[#2B5395]/10 to-[#2B5395]/5 border border-[#2B5395]/20 shadow-2xl rounded-xl max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30">⏰ Limited Time Offer</Badge>
            <h3 className="text-2xl font-bold text-foreground mb-4">50% Off Your First 3 Months</h3>
            <p className="text-muted-foreground mb-6">
              Join the 847 teams who signed up this month. Offer expires in 48 hours.
            </p>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-foreground">23</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-foreground">45</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-xs text-muted-foreground">Seconds</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300"
            >
              Claim 50% Discount Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
