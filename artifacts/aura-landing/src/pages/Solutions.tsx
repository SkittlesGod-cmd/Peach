import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
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

const SOLUTIONS = [
  {
    id: "agencies",
    label: "Agencies",
    headline: "Win every pitch with intelligence.",
    subhead: "Give your strategists and planners an unfair advantage — arriving at briefs with cultural context that competitors don't have yet.",
    features: [
      "Real-time competitor trend monitoring",
      "Pitch-ready signal summaries",
      "Multi-market cultural mapping",
      "Client brand DNA profiles",
      "Trend velocity forecasting",
      "Exportable creative briefs",
    ],
    testimonial: {
      quote: "We started winning pitches we had no right to win. Clients couldn't believe we understood their audience better than they did.",
      name: "Marcus Webb",
      role: "Strategy Director, Fold Agency",
    },
    color: "var(--color-aura-coral)",
  },
  {
    id: "inhouse",
    label: "In-house teams",
    headline: "Always ahead of your category.",
    subhead: "Give your internal creative team the same intelligence advantages that the best agencies have — without the overhead.",
    features: [
      "Category-specific signal feeds",
      "Internal brief automation",
      "Seasonal trend calendars",
      "Cross-functional insight sharing",
      "Custom brand guardrails",
      "Slack & Notion integrations",
    ],
    testimonial: {
      quote: "Aura replaced three separate trend research subscriptions and gave us something better — intelligence that's specific to us.",
      name: "Priya Nair",
      role: "VP Brand, Halcyon Consumer",
    },
    color: "var(--color-aura-amber)",
  },
  {
    id: "consultancies",
    label: "Consultancies",
    headline: "Charge for what you actually know.",
    subhead: "Transform your consulting practice with a proprietary intelligence layer — and deliver recommendations backed by living data.",
    features: [
      "White-label client dashboards",
      "Custom scoring methodologies",
      "Quantified cultural risk assessment",
      "Portfolio-wide brand monitoring",
      "API for bespoke tooling",
      "Dedicated research support",
    ],
    testimonial: {
      quote: "We built an entire product offering around Aura. Our clients now expect live intelligence as a deliverable, not just a report.",
      name: "Sofia Chen",
      role: "Founder, Cadence Advisory",
    },
    color: "var(--color-aura-sage)",
  },
];

export default function Solutions() {
  const [active, setActive] = useState("agencies");
  const activeSolution = SOLUTIONS.find((s) => s.id === active)!;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-28 overflow-hidden px-4 md:px-8">
        <BlobShape color="var(--color-aura-rose)" size={600} top="-20%" left="40%" opacity={0.25} parallaxOffset={80} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/40 backdrop-blur-sm mb-8"
          >
            <span className="text-xs font-medium tracking-wide uppercase text-aura-charcoal-soft/70">Solutions</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-aura-charcoal mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Built for the <br className="hidden md:block" />
            <span className="italic font-light text-aura-charcoal/70">creative economy.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-aura-charcoal-soft/80 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're a boutique agency or a global brand team, Aura adapts to the way you work and the questions you actually need answered.
          </motion.p>
        </div>
      </section>

      {/* Tab selector */}
      <section className="py-4 sticky top-20 z-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-aura-cream-100/80 backdrop-blur-md border border-white/50 shadow-sm">
            {SOLUTIONS.map((sol) => (
              <button
                key={sol.id}
                data-testid={`tab-solution-${sol.id}`}
                onClick={() => setActive(sol.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === sol.id
                    ? "bg-aura-charcoal text-aura-cream-100 shadow-sm"
                    : "text-aura-charcoal-soft/60 hover:text-aura-charcoal"
                }`}
              >
                {sol.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution detail */}
      <section className="py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-12 md:gap-20 items-start"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal mb-6 leading-tight">
                  {activeSolution.headline}
                </h2>
                <p className="text-lg text-aura-charcoal-soft/70 font-light mb-10 leading-relaxed">
                  {activeSolution.subhead}
                </p>

                <ul className="space-y-3 mb-10">
                  {activeSolution.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-aura-charcoal-soft/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeSolution.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <Link
                    href="/demo"
                    data-testid={`button-solution-${active}-demo`}
                    className="px-7 py-3.5 rounded-full bg-aura-charcoal text-aura-cream-100 text-sm font-medium hover:bg-black transition-colors"
                  >
                    Request demo
                  </Link>
                  <Link
                    href="/pricing"
                    data-testid={`button-solution-${active}-pricing`}
                    className="px-7 py-3.5 rounded-full border border-aura-charcoal/20 text-aura-charcoal text-sm font-medium hover:bg-aura-charcoal/5 transition-colors"
                  >
                    View pricing
                  </Link>
                </div>
              </div>

              <div>
                {/* Visual card */}
                <div className="relative p-8 rounded-[2rem] bg-aura-cream-100/70 backdrop-blur-md border border-white/50 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-[80px] opacity-30 translate-x-1/3 -translate-y-1/3"
                    style={{ background: `radial-gradient(circle, ${activeSolution.color} 0%, transparent 70%)` }}
                  />
                  <blockquote className="relative z-10">
                    <p className="text-xl md:text-2xl font-serif text-aura-charcoal leading-relaxed mb-8 italic font-light">
                      "{activeSolution.testimonial.quote}"
                    </p>
                    <footer>
                      <p className="text-base font-medium text-aura-charcoal">{activeSolution.testimonial.name}</p>
                      <p className="text-sm text-aura-charcoal-soft/60 font-light">{activeSolution.testimonial.role}</p>
                    </footer>
                  </blockquote>
                </div>

                {/* Stat strip */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-aura-cream-100/60 border border-white/40 text-center">
                    <div className="text-3xl font-serif text-aura-charcoal mb-1">3.2×</div>
                    <div className="text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50">Faster briefing</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-aura-cream-100/60 border border-white/40 text-center">
                    <div className="text-3xl font-serif text-aura-charcoal mb-1">91%</div>
                    <div className="text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50">Signal accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case study strip */}
      <section className="py-20 px-4 md:px-8 bg-aura-cream-100/40 border-y border-aura-charcoal/5">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-aura-charcoal">Trusted by creative teams at</h2>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Fold Agency", "Halcyon Consumer", "Cadence Advisory", "Studio North", "Prism Works", "Signal Bureau", "Arc Creative", "Venn Strategy"].map((name, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="h-16 rounded-2xl bg-aura-cream-100/80 border border-white/50 flex items-center justify-center">
                  <span className="text-sm font-medium text-aura-charcoal-soft/60 font-sans">{name}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-aura-charcoal text-aura-cream-100 relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-rose rounded-full mix-blend-overlay filter blur-[100px] opacity-20" />
        <SectionReveal className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Find your <span className="italic font-light">advantage.</span>
          </h2>
          <p className="text-white/60 text-lg font-light mb-10 max-w-xl mx-auto">
            See how Aura adapts to your team's specific workflow in a 30-minute live session.
          </p>
          <Link
            href="/demo"
            data-testid="button-solutions-cta"
            className="inline-block px-10 py-5 rounded-full bg-aura-cream-100 text-aura-charcoal font-medium hover:scale-105 transition-transform duration-300"
          >
            Talk to a specialist
          </Link>
        </SectionReveal>
      </section>
    </Layout>
  );
}
