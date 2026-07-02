import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Plan {
  name: string
  price: string
  desc: string
  features: string[]
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$19",
    desc: "For small teams getting started.",
    features: ["5 team members", "10GB storage", "Basic analytics", "Email support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49",
    desc: "For growing businesses.",
    features: ["Unlimited members", "100GB storage", "Advanced analytics", "Priority support", "Custom domains"],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$149",
    desc: "For large organizations.",
    features: ["Everything in Pro", "Unlimited storage", "SSO & SAML", "Dedicated support", "SLA guarantee", "Custom integrations"],
    cta: "Contact Sales",
  },
]

export default function PricingTable() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">Pricing</Badge>
          <h1 className="text-4xl font-bold text-white mb-3">Simple, transparent pricing</h1>
          <p className="text-slate-400">No hidden fees. No surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl p-8 border relative",
                plan.popular
                  ? "bg-white border-indigo-500 shadow-xl shadow-indigo-500/10 scale-105"
                  : "bg-white/10 border-slate-600/50 backdrop-blur-sm",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-indigo-600 text-white px-4">Most Popular</Badge>
                </div>
              )}
              <div className={cn("mb-6", plan.popular ? "text-slate-900" : "text-white")}>
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-60">/month</span>
                </div>
                <p className={cn("text-sm mt-2", plan.popular ? "text-slate-500" : "text-slate-400")}>{plan.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={cn("flex items-center gap-2 text-sm", plan.popular ? "text-slate-600" : "text-slate-300")}>
                    <span className={cn("w-4 h-4 rounded-full flex items-center justify-center text-xs", plan.popular ? "bg-indigo-100 text-indigo-600" : "bg-slate-600 text-slate-300")}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "w-full",
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-slate-500/50",
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
