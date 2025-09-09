import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FAQ() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-medium leading-relaxed text-muted-foreground text-pretty">
            Everything you need to know about IT ROOF.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="backdrop-blur-lg bg-white/50 border border-white/30 shadow-2xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-black">How quickly can I see results?</CardTitle>
              <CardDescription className="text-gray-700">
                Most teams see immediate productivity gains within the first week. Our customers report an average of
                300% productivity increase within 30 days of implementation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/50 border border-white/30 shadow-2xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-black">Is my data secure?</CardTitle>
              <CardDescription className="text-gray-700">
                Absolutely. We use bank-level encryption, SOC 2 compliance, and GDPR compliance. Your data is encrypted
                in transit and at rest, with regular security audits.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/50 border border-white/30 shadow-2xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-black">Can I cancel anytime?</CardTitle>
              <CardDescription className="text-gray-700">
                Yes, you can cancel your subscription at any time with no cancellation fees. We also offer a 30-day
                money-back guarantee if you're not completely satisfied.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="backdrop-blur-lg bg-white/50 border border-white/30 shadow-2xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-black">Do you offer implementation support?</CardTitle>
              <CardDescription className="text-gray-700">
                Yes! All plans include onboarding support. Professional and Enterprise plans include dedicated success
                managers and custom implementation assistance.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
