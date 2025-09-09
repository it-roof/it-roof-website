import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ROICalculator() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">Calculate Your ROI</CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                See how much time and money IT ROOF can save your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#2B5395] mb-2">5.2</div>
                  <div className="text-muted-foreground">Hours saved per employee per week</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2B5395] mb-2">$2,400</div>
                  <div className="text-muted-foreground">Average monthly savings per team</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2B5395] mb-2">3 weeks</div>
                  <div className="text-muted-foreground">Average payback period</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300 backdrop-blur-lg bg-[#2B5395]/90 border border-white/20">
                  Get Your Custom ROI Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
