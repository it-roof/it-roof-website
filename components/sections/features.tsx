import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Shield, CheckCircle } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground mb-4 text-balance">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl font-medium leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to automate, optimize, and scale your business processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Smart Automation</CardTitle>
              <CardDescription className="text-muted-foreground">
                Automate repetitive tasks with AI-powered workflows that learn and adapt to your business needs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Real-time Analytics</CardTitle>
              <CardDescription className="text-muted-foreground">
                Get instant insights into your workflow performance with comprehensive dashboards and reports.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Enterprise Security</CardTitle>
              <CardDescription className="text-muted-foreground">
                Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-xl hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-foreground" />
              </div>
              <CardTitle className="text-foreground">Easy Integration</CardTitle>
              <CardDescription className="text-muted-foreground">
                Connect with 500+ apps and services through our robust API and pre-built integrations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
