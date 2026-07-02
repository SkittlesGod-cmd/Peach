import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { BlobShape } from "@/components/BlobShape";

function SectionReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TIERS = [
  {
    id: "boutique",
    name: "Boutique",
    tagline: "For independent studios",
    monthly: 499,
    annual: 399,
    highlight: false,
    features: [
      { text: "Real-time signal dashboard", included: true },
      { text: "3 industry deep-dives / month", included: true },
      { text: "Exportable moodboards", included: true },
      { text: "Up to 2 team members", included: true },
      { text: "Brand DNA profile (1 brand)", included: true },
      { text: "API access", included: false },
      { text: "Competitive scanning", included: false },
      { text: "Dedicated strategist", included: false },
    ],
    cta: "Get started",
    ctaStyle: "border",
  },
  {
    id: "studio",
    name: "Studio",
    tagline: "For growing agencies",
    monthly: 999,
    annual: 799,
    highlight: true,
    features: [
      { text: "Everything in Boutique", included: true },
      { text: "Unlimited deep-dives", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Brand DNA profiles (5 brands)", included: true },
      { text: "API access (read-only)", included: true },
      { text: "Competitive scanning (3 competitors)", included: true },
      { text: "Velocity forecasting", included: true },
      { text: "Dedicated strategist", included: false },
    ],
    cta: "Start free trial",
    ctaStyle: "solid",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For global teams",
    monthly: null,
    annual: null,
    highlight: false,
    features: [
      { text: "Everything in Studio", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Unlimited brand profiles", included: true },
      { text: "Full API + webhooks", included: true },
      { text: "Competitive scanning (unlimited)", included: true },
      { text: "White-label dashboards", included: true },
      { text: "Custom data integrations", included: true },
      { text: "Dedicated strategist", included: true },
    ],
    cta: "Contact sales",
    ctaStyle: "border",
  },
];

const FAQS = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences.",
  },
  {
    q: "What counts as a 'brand DNA profile'?",
    a: "A brand DNA profile is Peach's deep analysis of a single brand's existing aesthetic signatures, values, and audience resonance patterns. It's the lens through which signals are filtered and scored for relevance.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Studio plans include a 14-day free trial, no credit card required. Boutique plans can be evaluated through a 45-minute live demo with full feature access.",
  },
  {
    q: "What integrations are available?",
    a: "Peach connects to Slack, Notion, Figma, and most CMSs via webhook. API access is available on Studio (read) and Enterprise (full). Custom integrations are built as part of Enterprise onboarding.",
  },
  {
    q: "How does annual billing work?",
    a: "Annual plans are billed as a single upfront payment at the discounted rate. You save approximately 20% compared to monthly billing. We offer invoicing for Enterprise contracts.",
  },
  {
    q: "Is my data kept private?",
    a: "Completely. Your brand profiles, internal signals, and usage data are never used to train shared models or shared with other customers. See our security page for details.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-aura-charcoal/10 last:border-b-0">
      <button
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-base md:text-lg font-medium text-aura-charcoal">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="shrink-0 text-aura-charcoal-soft/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-aura-charcoal-soft/70 font-light leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-12 md:pt-52 md:pb-16 overflow-hidden px-4 md:px-8">
        <BlobShape color="var(--color-aura-amber)" size={600} top="-20%" left="50%" opacity={0.25} parallaxOffset={60} />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/40 backdrop-blur-sm mb-8"
          >
            <span className="text-xs font-medium tracking-wide uppercase text-aura-charcoal-soft/70">Pricing</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl leading-[1.05] tracking-tight text-aura-charcoal mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Simple, transparent <span className="italic font-light">pricing.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-aura-charcoal-soft/70 font-light mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start with what you need. Scale as your intelligence practice grows.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 p-1.5 rounded-full bg-aura-cream-100/80 backdrop-blur-sm border border-white/50"
          >
            <button
              data-testid="toggle-monthly"
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-aura-charcoal text-aura-cream-100" : "text-aura-charcoal-soft/60"}`}
            >
              Monthly
            </button>
            <button
              data-testid="toggle-annual"
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-aura-charcoal text-aura-cream-100" : "text-aura-charcoal-soft/60"}`}
            >
              Annual
              <span className="px-2 py-0.5 rounded-full text-xs bg-aura-sage/30 text-aura-charcoal font-medium">Save 20%</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="pb-24 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <SectionReveal key={tier.id} delay={i * 0.1}>
              <motion.div
                className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 overflow-hidden h-full ${
                  tier.highlight
                    ? "bg-aura-charcoal text-aura-cream-100"
                    : "bg-aura-cream-100/60 backdrop-blur-sm border border-white/50"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {tier.highlight && (
                  <>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-aura-amber rounded-full mix-blend-overlay filter blur-[60px] opacity-40 translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-aura-coral rounded-full mix-blend-overlay filter blur-[60px] opacity-30 -translate-x-1/3 translate-y-1/3" />
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-white/80">
                      Most popular
                    </div>
                  </>
                )}

                <div className="relative z-10 flex-1">
                  <h3 className={`text-2xl font-serif mb-1 ${tier.highlight ? "" : "text-aura-charcoal"}`}>{tier.name}</h3>
                  <p className={`text-sm font-light mb-8 ${tier.highlight ? "text-white/60" : "text-aura-charcoal-soft/60"}`}>
                    {tier.tagline}
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mb-8"
                    >
                      {tier.monthly ? (
                        <div>
                          <span className={`text-4xl font-serif ${tier.highlight ? "" : "text-aura-charcoal"}`}>
                            ${annual ? tier.annual : tier.monthly}
                          </span>
                          <span className={`text-base font-sans font-light ml-1 ${tier.highlight ? "text-white/50" : "text-aura-charcoal-soft/50"}`}>
                            /mo
                          </span>
                          {annual && (
                            <p className={`text-xs mt-1 font-light ${tier.highlight ? "text-white/40" : "text-aura-charcoal-soft/40"}`}>
                              Billed annually
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className={`text-4xl font-serif ${tier.highlight ? "" : "text-aura-charcoal"}`}>Custom</div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <ul className="space-y-3 mb-10">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className={`flex items-start gap-3 text-sm font-light ${
                        tier.highlight
                          ? f.included ? "text-white/80" : "text-white/25"
                          : f.included ? "text-aura-charcoal-soft/80" : "text-aura-charcoal-soft/30"
                      }`}>
                        <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                          f.included
                            ? tier.highlight ? "bg-white/15 text-white" : "bg-aura-charcoal/8 text-aura-charcoal"
                            : "opacity-40"
                        }`}>
                          {f.included ? "✓" : "–"}
                        </span>
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/demo"
                  data-testid={`button-tier-${tier.id}`}
                  className={`relative z-10 w-full py-4 rounded-full text-sm font-medium text-center transition-colors ${
                    tier.highlight
                      ? "bg-aura-cream-100 text-aura-charcoal hover:bg-white"
                      : "border border-aura-charcoal/20 text-aura-charcoal hover:bg-aura-charcoal hover:text-aura-cream-100"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Comparison note */}
      <section className="py-8 px-4 md:px-8 border-t border-aura-charcoal/5">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-aura-cream-100/60 border border-white/50">
            <p className="text-aura-charcoal-soft/70 font-light text-sm">
              All plans include a 30-day money-back guarantee. No lock-in contracts.
            </p>
            <Link
              href="/demo"
              data-testid="link-pricing-enterprise-contact"
              className="text-sm font-medium text-aura-charcoal border-b border-aura-charcoal/20 pb-0.5 hover:border-aura-charcoal shrink-0 transition-colors"
            >
              Need a custom arrangement? Talk to us
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8">
        <BlobShape color="var(--color-aura-coral)" size={400} top="10%" left="70%" opacity={0.15} />
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionReveal className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal">Frequently asked</h2>
          </SectionReveal>

          <div className="divide-y divide-aura-charcoal/10">
            {FAQS.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <FaqItem q={faq.q} a={faq.a} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-aura-charcoal text-aura-cream-100 relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-aura-sage rounded-full mix-blend-overlay filter blur-[100px] opacity-20" />
        <SectionReveal className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Still have questions?
          </h2>
          <p className="text-white/60 text-lg font-light mb-10">
            Our team will walk you through the right plan for your team in under 20 minutes.
          </p>
          <Link
            href="/demo"
            data-testid="button-pricing-cta"
            className="inline-block px-10 py-5 rounded-full bg-aura-cream-100 text-aura-charcoal font-medium hover:scale-105 transition-transform duration-300"
          >
            Talk to us
          </Link>
        </SectionReveal>
      </section>
    </Layout>
  );
}
