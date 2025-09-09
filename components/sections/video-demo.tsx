import { Button } from "@/components/ui/button"

export function VideoDemo() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#2B5395]/20 to-[#2B5395]/5 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300 relative z-10"
              >
                <div className="w-6 h-6 mr-2 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                </div>
                Watch 2-Minute Demo
              </Button>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                See how IT ROOF saves 5+ hours per week
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
