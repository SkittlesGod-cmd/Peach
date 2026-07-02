import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BlobShape } from "@/components/BlobShape";
import { AudioWaveform } from "@/components/AudioWaveform";
import { MetricCard } from "@/components/MetricCard";

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

const DATA_SOURCES = [
  { label: "Social signals", count: "4.2B", unit: "posts/day" },
  { label: "Search intent", count: "890M", unit: "queries/day" },
  { label: "Cultural media", count: "12M", unit: "articles/day" },
  { label: "Audio & podcasts", count: "3.4M", unit: "episodes/day" },
];

const PIPELINE_STEPS = [
  {
    num: "01",
    title: "Ingest",
    desc: "Aura's sensors monitor over 40,000 sources across social, editorial, search, and audio in real time — ingesting raw, unstructured data at massive scale.",
    tag: "Data Infrastructure",
  },
  {
    num: "02",
    title: "Embed",
    desc: "Every signal is transformed into a semantic vector, capturing meaning, tone, aesthetic language, and cultural context through our proprietary embedding models.",
    tag: "Semantic AI",
  },
  {
    num: "03",
    title: "Cluster",
    desc: "Signals self-organize into emergent themes across a dynamic knowledge graph. Weak signals cluster before they become mainstream noise.",
    tag: "Graph Intelligence",
  },
  {
    num: "04",
    title: "Direct",
    desc: "Insights surface as prescriptive creative briefs, moodboards, and directional prompts — matched to your brand's unique identity.",
    tag: "Brand Alignment",
  },
];

const CAPABILITIES = [
  { title: "Signal Dashboard", desc: "Live stream of categorized cultural signals, filterable by industry, geography, and aesthetic category." },
  { title: "Trend Velocity", desc: "Proprietary momentum scoring that predicts how fast an emergent signal will reach peak culture." },
  { title: "Brand DNA Modeling", desc: "Map your brand's existing aesthetic signature, then align incoming signals against it automatically." },
  { title: "Moodboard Generation", desc: "Transform any signal cluster into a visual direction package ready for creative briefing." },
  { title: "API & Webhooks", desc: "Pipe Aura's intelligence directly into your existing creative tools, CMS, or internal platforms." },
  { title: "Competitive Scanning", desc: "Monitor how competitors are responding to the same signals you're tracking — spot the gaps." },
];

export default function Platform() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden px-4 md:px-8">
        <BlobShape color="var(--color-aura-amber)" size={700} top="-20%" left="30%" opacity={0.25} parallaxOffset={80} />
        <BlobShape color="var(--color-aura-sage)" size={400} top="40%" left="-5%" opacity={0.2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/40 backdrop-blur-sm mb-8"
          >
            <span className="text-xs font-medium tracking-wide uppercase text-aura-charcoal-soft/70">The Platform</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-aura-charcoal mb-8 max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            The engine behind <br className="hidden md:block" />
            <span className="italic font-light text-aura-charcoal/70">every insight.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-aura-charcoal-soft/80 max-w-2xl mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            A continuously learning intelligence system built to detect cultural signals before they reach mainstream consciousness — then connect them directly to your creative process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/demo"
              data-testid="button-platform-cta"
              className="inline-block px-8 py-4 rounded-full bg-aura-charcoal text-aura-cream-100 font-medium hover:bg-black transition-colors"
            >
              Request a demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Live data stats */}
      <section className="py-16 border-y border-aura-charcoal/5 bg-aura-cream-100/40 backdrop-blur-sm relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {DATA_SOURCES.map((src, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-aura-charcoal mb-1">{src.count}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/50 mb-1">{src.unit}</div>
                <div className="text-sm text-aura-charcoal-soft/70 font-light">{src.label}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-24 md:py-32 relative px-4 md:px-8">
        <BlobShape color="var(--color-aura-coral)" size={500} top="20%" left="70%" opacity={0.2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-aura-charcoal tracking-tight mb-6 max-w-3xl">
              From raw signal to <span className="italic font-light">creative direction.</span>
            </h2>
            <p className="text-lg text-aura-charcoal-soft/70 font-light max-w-2xl">
              Our four-stage pipeline turns unstructured noise into precise, actionable intelligence — without losing nuance.
            </p>
          </SectionReveal>

          <div className="space-y-px">
            {PIPELINE_STEPS.map((step, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="flex flex-col md:flex-row gap-6 md:gap-16 p-8 md:p-10 rounded-3xl bg-aura-cream-100/60 hover:bg-aura-cream-100/90 border border-white/40 transition-colors group"
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4 md:w-48 shrink-0">
                    <span className="text-sm font-medium text-aura-charcoal-soft/40 font-sans">{step.num}</span>
                    <span className="inline-block px-3 py-1 rounded-full bg-aura-charcoal/5 text-xs font-medium text-aura-charcoal-soft/60 border border-aura-charcoal/8">
                      {step.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif text-aura-charcoal mb-3 group-hover:text-aura-charcoal transition-colors">{step.title}</h3>
                    <p className="text-aura-charcoal-soft/70 font-light leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signal showcase */}
      <section className="py-24 relative px-4 md:px-8 overflow-hidden bg-aura-cream-100/30">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal mb-4">Live signal preview</h2>
            <p className="text-lg text-aura-charcoal-soft/70 font-light">A glimpse of what Aura is sensing right now.</p>
          </SectionReveal>

          <div className="relative bg-aura-cream-100/80 border border-white/50 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
            <BlobShape color="var(--color-aura-rose)" size={300} top="-20%" left="60%" opacity={0.3} />
            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
              <div className="flex-1">
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/60">
                  <span className="w-2 h-2 rounded-full bg-aura-coral animate-pulse" />
                  <span className="text-xs font-medium uppercase tracking-wide">Live feed</span>
                </div>
                <div className="space-y-4">
                  {[
                    { signal: "Quiet luxury resurfaces in workwear adjacent styling", velocity: "Fast", cat: "Fashion" },
                    { signal: "Biophilic textures expanding from interiors into packaging", velocity: "Rising", cat: "Design" },
                    { signal: "Deceleration aesthetics gaining traction in tech brand visual language", velocity: "Emerging", cat: "Tech" },
                  ].map((item, i) => (
                    <SectionReveal key={i} delay={0.1 + i * 0.1}>
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white/40">
                        <span className={`mt-1 shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${
                          item.velocity === "Fast" ? "bg-aura-coral/20 text-aura-coral" :
                          item.velocity === "Rising" ? "bg-aura-amber/20 text-aura-charcoal" :
                          "bg-aura-sage/20 text-aura-charcoal-soft"
                        }`}>{item.velocity}</span>
                        <div>
                          <p className="text-sm font-medium text-aura-charcoal">{item.signal}</p>
                          <p className="text-xs text-aura-charcoal-soft/50 mt-1">{item.cat}</p>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center md:items-end">
                <MetricCard label="Active Signals" value="4,821" trend="+43" />
                <MetricCard label="Velocity Index" value="8.4" trend="+0.2" />
                <AudioWaveform bars={18} height={50} color="var(--color-aura-coral)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal mb-4">Built-in capabilities</h2>
            <p className="text-lg text-aura-charcoal-soft/70 font-light max-w-xl">
              Every feature is designed around how creative teams actually work.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <SectionReveal key={i} delay={i * 0.07}>
                <div className="p-7 rounded-3xl bg-aura-cream-100/60 border border-white/50 hover:bg-aura-cream-100 transition-colors h-full">
                  <h3 className="text-xl font-serif text-aura-charcoal mb-3">{cap.title}</h3>
                  <p className="text-aura-charcoal-soft/70 font-light text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-aura-charcoal text-aura-cream-100 relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-amber rounded-full mix-blend-overlay filter blur-[100px] opacity-20" />
        <SectionReveal className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Ready to go deeper?</h2>
          <p className="text-white/60 text-lg font-light mb-10">See the full intelligence pipeline in a live walkthrough.</p>
          <Link
            href="/demo"
            data-testid="button-platform-bottom-cta"
            className="inline-block px-10 py-5 rounded-full bg-aura-cream-100 text-aura-charcoal font-medium hover:scale-105 transition-transform duration-300"
          >
            Schedule a walkthrough
          </Link>
        </SectionReveal>
      </section>
    </Layout>
  );
}
