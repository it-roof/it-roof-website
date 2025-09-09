import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { BackgroundElements } from "@/components/sections/background-elements"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Target, Heart, Zap } from "lucide-react"

export default function CompanyPage() {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      image: "/professional-man.png",
      bio: "15+ years in enterprise software development and digital transformation.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/professional-woman-diverse.png",
      bio: "Former Google engineer specializing in cloud architecture and AI solutions.",
    },
    {
      name: "Michael Thompson",
      role: "Head of Development",
      image: "/professional-man.png",
      bio: "Full-stack expert with expertise in modern web technologies and DevOps.",
    },
    {
      name: "Emily Liu",
      role: "Lead Designer",
      image: "/professional-woman-glasses.png",
      bio: "Award-winning UX/UI designer focused on creating intuitive digital experiences.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through trust and transparency.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to solve complex challenges creatively.",
    },
  ]

  const milestones = [
    { year: "2018", event: "IT ROOF founded with a vision to transform businesses through technology" },
    { year: "2019", event: "Completed first major enterprise cloud migration project" },
    { year: "2020", event: "Expanded team to 25+ developers and launched AI division" },
    { year: "2021", event: "Achieved AWS Advanced Consulting Partner status" },
    { year: "2022", event: "Opened second office and reached 50+ successful projects" },
    { year: "2023", event: "Launched cybersecurity division and achieved ISO 27001 certification" },
    { year: "2024", event: "Expanded internationally and reached 100+ team members" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundElements />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 backdrop-blur-xl bg-white text-black border border-white/50 rounded-lg">
            🏢 About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            About <span className="text-primary">IT ROOF</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We're a team of passionate technologists dedicated to building innovative solutions that drive business
            growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded in 2018, IT ROOF began with a simple mission: to bridge the gap between complex technology and
                business success. What started as a small team of passionate developers has grown into a comprehensive
                IT solutions provider serving clients across the globe.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to
                excellence. We've helped startups scale their operations, assisted enterprises in digital
                transformation, and enabled organizations to harness the power of emerging technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we're proud to be a trusted partner for businesses looking to innovate, optimize, and grow
                through technology. Our diverse team brings together expertise from various domains, ensuring we can
                tackle any challenge with creativity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/20 border border-white/30 p-8 text-center hover:bg-white/25 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/20 border border-white/30 p-6 text-center hover:bg-white/25 transition-all duration-300"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">{member.role}</Badge>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl p-6 flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 p-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to partner with us, join our team, or learn more about our company, we'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="backdrop-blur-xl bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                View Careers
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
