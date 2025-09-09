import { Button } from "@/components/ui/button"

export function LiveChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300 rounded-full w-14 h-14 shadow-2xl">
        <div className="w-6 h-6 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#2B5395] rounded-full"></div>
          </div>
        </div>
      </Button>
    </div>
  )
}
