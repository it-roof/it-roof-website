"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    description:
      "Complete infrastructure modernization for a Fortune 500 company, migrating legacy systems to cloud-native architecture.",
    category: "Cloud Infrastructure",
    duration: "8 months",
    teamSize: "12 specialists",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    status: "Completed",
    image: "/modern-cloud-infrastructure-dashboard.jpg",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Platform",
    description:
      "Custom machine learning platform for real-time data analysis and predictive insights across multiple business units.",
    category: "AI & Machine Learning",
    duration: "6 months",
    teamSize: "8 specialists",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    status: "In Progress",
    image: "/ai-analytics-dashboard.png",
  },
  {
    id: 3,
    title: "Digital Banking Solution",
    description:
      "Secure, scalable banking platform with mobile-first design and advanced fraud detection capabilities.",
    category: "FinTech",
    duration: "12 months",
    teamSize: "15 specialists",
    technologies: ["Node.js", "React Native", "MongoDB", "Blockchain"],
    status: "Completed",
    image: "/modern-banking-app.png",
  },
  {
    id: 4,
    title: "IoT Manufacturing System",
    description:
      "Smart factory solution with real-time monitoring, predictive maintenance, and automated quality control.",
    category: "IoT & Manufacturing",
    duration: "10 months",
    teamSize: "10 specialists",
    technologies: ["Azure IoT", "C#", ".NET", "Power BI"],
    status: "Completed",
    image: "/industrial-iot-dashboard-with-sensors.jpg",
  },
  {
    id: 5,
    title: "E-Commerce Marketplace",
    description:
      "Multi-vendor marketplace platform with advanced search, payment processing, and vendor management tools.",
    category: "E-Commerce",
    duration: "9 months",
    teamSize: "14 specialists",
    technologies: ["Next.js", "Stripe", "Redis", "Elasticsearch"],
    status: "In Progress",
    image: "/modern-e-commerce-marketplace-interface.jpg",
  },
  {
    id: 6,
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with telemedicine capabilities and integrated billing.",
    category: "Healthcare",
    duration: "11 months",
    teamSize: "13 specialists",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    status: "Completed",
    image: "/healthcare-management-dashboard.png",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / projects.length
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how IT ROOF has transformed businesses across industries with innovative technology solutions
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className="relative overflow-hidden rounded-lg group aspect-[4/5] border-0 flex-shrink-0 w-80"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-300" />
                </div>

                <div className="relative z-10 h-full flex flex-col p-6">
                  <div className="flex justify-start mb-auto">
                    <div className="inline-flex items-center rounded-md bg-white px-3 py-1 text-xs font-medium text-black shadow-sm border-0">
                      {project.category}
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full bg-black/40 backdrop-blur-md border border-white/30 text-white hover:bg-black/60 hover:border-white/50 transition-all duration-300 group/btn"
                    >
                      <span className="text-sm font-medium">View Details</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
