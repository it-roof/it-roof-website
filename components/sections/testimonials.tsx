import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground mb-4 text-balance">
            Trusted by 10,000+ Teams Worldwide
          </h2>
          <p className="text-xl font-medium leading-relaxed text-muted-foreground text-pretty">
            See what our customers have to say about IT ROOF.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          <div className="text-muted-foreground font-semibold text-lg">TechCorp</div>
          <div className="text-muted-foreground font-semibold text-lg">GrowthCo</div>
          <div className="text-muted-foreground font-semibold text-lg">InnovateLab</div>
          <div className="text-muted-foreground font-semibold text-lg">StartupXYZ</div>
          <div className="text-muted-foreground font-semibold text-lg">Enterprise Inc</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-xl">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                "IT ROOF transformed our operations. We've reduced manual work by 80% and our team can focus on
                strategic initiatives."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/professional-woman-diverse.png" />
                  <AvatarFallback className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-lg text-black">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm leading-normal text-muted-foreground">CEO, TechCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-xl">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                "The ROI was immediate. IT ROOF paid for itself within the first month through efficiency gains alone."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/professional-man.png" />
                  <AvatarFallback className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-lg text-black">
                    MR
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Michael Rodriguez</p>
                  <p className="text-sm leading-normal text-muted-foreground">Operations Director, GrowthCo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-xl">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                "Incredible platform! The automation capabilities are game-changing. Our productivity has never been
                higher."
              </p>
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/professional-woman-with-glasses.png" />
                  <AvatarFallback className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-lg text-black">
                    EL
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">Emily Liu</p>
                  <p className="text-sm leading-normal text-muted-foreground">CTO, InnovateLab</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
