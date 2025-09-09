import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function HighlightProject() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest innovation - a comprehensive solution that showcases our expertise in modern technology
          </p>
        </div>

        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-500">
            {/* Background Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <img
                src="/modern-cloud-infrastructure-dashboard.jpg"
                alt="Enterprise Cloud Management Platform"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              {/* Category Badge */}
              <div className="mb-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-sm font-medium backdrop-blur-sm">
                  Enterprise Solution
                </div>
              </div>

              {/* Title */}
              <div className="mb-6 p-4 rounded-lg bg-black/40 backdrop-blur-sm">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">Enterprise Cloud Management Platform</h3>
              </div>

              {/* Action Button */}
              <div className="p-4 rounded-lg bg-black/40 backdrop-blur-sm inline-block w-fit">
                <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0 px-8 py-3 text-lg font-medium">
                  View Case Study
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
