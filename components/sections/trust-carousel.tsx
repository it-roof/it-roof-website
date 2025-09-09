"use client"

import { useEffect, useState } from "react"

const companies = [
  { name: "Microsoft", logo: "/microsoft-logo.png" },
  { name: "Google", logo: "/google-logo.png" },
  { name: "Amazon", logo: "/amazon-logo.png" },
  { name: "Apple", logo: "/apple-logo.png" },
  { name: "Meta", logo: "/meta-logo-abstract.png" },
  { name: "Netflix", logo: "/netflix-inspired-logo.png" },
  { name: "Spotify", logo: "/spotify-logo.png" },
  { name: "Uber", logo: "/provider-logos/uber.png" },
]

export function TrustCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">Trusted by industry leaders</p>
        </div>

        {/* Desktop view - all logos visible */}
        <div className="hidden md:flex items-center justify-center gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-8 w-auto filter brightness-0 invert opacity-70"
              />
            </div>
          ))}
        </div>

        {/* Mobile view - rotating carousel */}
        <div className="md:hidden flex justify-center">
          <div className="relative w-48 h-16 flex items-center justify-center">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className={`absolute inset-0 flex items-center justify-center p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-8 w-auto filter brightness-0 invert opacity-70"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators for mobile */}
        <div className="md:hidden flex justify-center mt-6 gap-2">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
