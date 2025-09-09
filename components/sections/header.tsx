"use client"

import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="backdrop-blur-md bg-black/20 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">IT ROOF</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Dienstleistungen
            </a>
            <a
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Referenzen
            </a>
            <a
              href="/company"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Über uns
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 text-white hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 transition-all duration-300 font-medium">
              Jetzt starten
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/30 backdrop-blur-md">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="/services"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dienstleistungen
              </a>
              <a
                href="/projects"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Referenzen
              </a>
              <a
                href="/company"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Über uns
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
