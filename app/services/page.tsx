import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { BackgroundElements } from "@/components/sections/background-elements"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Database } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      price: "Starting from €5,000",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions and migration services to optimize your business operations and reduce costs.",
      features: ["AWS/Azure Setup", "Cloud Migration", "DevOps Automation", "Performance Optimization"],
      price: "Starting from €3,000",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments and implementations to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance Setup", "Incident Response"],
      price: "Starting from €2,500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics & BI",
      description:
        "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Warehousing", "Dashboard Creation", "Predictive Analytics", "Reporting Systems"],
      price: "Starting from €4,000",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions that save time and reduce errors.",
      features: ["Workflow Automation", "RPA Implementation", "Integration Services", "Custom Bots"],
      price: "Starting from €2,000",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "IT Consulting",
      description:
        "Strategic IT guidance and technical expertise to help your business make informed technology decisions.",
      features: ["Technology Strategy", "Architecture Review", "Team Training", "Project Management"],
      price: "Starting from €150/hour",
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
            🚀 Professional IT Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Comprehensive IT Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            From custom software development to cloud infrastructure, we provide end-to-end IT services that drive
            innovation and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-xl bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of IT services designed to meet the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/20 border border-white/30 p-8 hover:bg-white/25 transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you achieve your business goals. Get a free consultation and
              custom proposal tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#2B5395] to-[#2B5395]/80 hover:from-[#2B5395]/90 hover:to-[#2B5395]/70 text-white border-0"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-xl bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Call +49 123 456 789
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
