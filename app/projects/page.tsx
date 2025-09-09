import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { BackgroundElements } from "@/components/sections/background-elements"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Calendar, Users, Code } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      category: "Cloud Infrastructure",
      description:
        "Complete migration of legacy systems to AWS cloud infrastructure for a Fortune 500 company, resulting in 40% cost reduction and improved scalability.",
      image: "/modern-cloud-infrastructure-dashboard.jpg",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      duration: "8 months",
      teamSize: "12 developers",
      status: "Completed",
      client: "Fortune 500 Manufacturing",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Platform",
      category: "Data Analytics",
      description:
        "Custom machine learning platform for real-time business intelligence and predictive analytics, processing over 1M data points daily.",
      image: "/ai-analytics-dashboard.png",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      duration: "6 months",
      teamSize: "8 developers",
      status: "Completed",
      client: "Tech Startup",
    },
    {
      id: 3,
      title: "Digital Banking Solution",
      category: "Fintech",
      description:
        "Secure mobile banking application with advanced fraud detection and seamless user experience for modern financial services.",
      image: "/modern-banking-app.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      duration: "10 months",
      teamSize: "15 developers",
      status: "Completed",
      client: "Regional Bank",
    },
    {
      id: 4,
      title: "IoT Manufacturing Dashboard",
      category: "Industrial IoT",
      description:
        "Real-time monitoring and control system for smart manufacturing with predictive maintenance capabilities.",
      image: "/industrial-iot-dashboard-with-sensors.jpg",
      technologies: ["IoT", "React", "Node.js", "InfluxDB"],
      duration: "5 months",
      teamSize: "6 developers",
      status: "In Progress",
      client: "Manufacturing Corp",
    },
    {
      id: 5,
      title: "E-commerce Marketplace",
      category: "E-commerce",
      description:
        "Multi-vendor marketplace platform with advanced search, payment processing, and vendor management capabilities.",
      image: "/modern-e-commerce-marketplace-interface.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      duration: "7 months",
      teamSize: "10 developers",
      status: "Completed",
      client: "Retail Startup",
    },
    {
      id: 6,
      title: "Healthcare Management System",
      category: "Healthcare",
      description: "HIPAA-compliant patient management system with telemedicine capabilities and integrated billing.",
      image: "/healthcare-management-dashboard.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      duration: "9 months",
      teamSize: "11 developers",
      status: "Completed",
      client: "Healthcare Provider",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundElements />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 backdrop-blur-xl bg-white text-black border border-white/50 rounded-lg">
            🚀 Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Successful <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Discover our portfolio of successful IT solutions that have transformed businesses across various
            industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 hover:bg-white/25 transition-all duration-300"
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Content */}
                    <div className="flex items-start justify-between">
                      <div className="bg-white text-black px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-lg">
                        {project.category}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-lg ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{project.description}</p>
                      </div>

                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.teamSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-black/60 text-white rounded-md backdrop-blur-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-black/60 text-white rounded-md backdrop-blur-lg">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <Button className="w-full bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-lg">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="backdrop-blur-xl bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
