import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BlobShape } from "@/components/BlobShape";
import { AudioWaveform } from "@/components/AudioWaveform";
import { MetricCard } from "@/components/MetricCard";

const MARQUEE_ITEMS = [
  "Consumer Sentiment", "Aesthetic Shifts", "Voice Analysis",
  "Cultural Momentum", "Trend Velocity", "Brand Resonance",
];

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

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden px-4 md:px-8">
        <BlobShape color="var(--color-aura-coral)" size={600} top="-10%" left="-10%" opacity={0.3} parallaxOffset={100} />
        <BlobShape color="var(--color-aura-amber)" size={500} top="20%" left="60%" opacity={0.25} parallaxOffset={150} />

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aura-charcoal/10 bg-white/40 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-aura-coral animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">Aura Engine 2.0 Live</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-tight text-aura-charcoal mb-8 max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Anticipate culture <br className="hidden md:block" />
            <span className="italic font-light text-aura-charcoal/80">before it happens.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-aura-charcoal-soft/80 max-w-2xl mb-12 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            The intelligence platform that reads market signals in real time and translates them into actionable creative direction.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/demo"
              data-testid="button-hero-cta-primary"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-aura-charcoal text-aura-cream-100 font-medium text-base hover:bg-black transition-colors text-center"
            >
              Start your analysis
            </Link>
            <Link
              href="/platform"
              data-testid="button-hero-cta-secondary"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-aura-charcoal/20 text-aura-charcoal font-medium text-base hover:bg-aura-charcoal/5 transition-colors text-center"
            >
              Explore capabilities
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl relative h-64 md:h-80 flex items-center justify-center border border-white/40 bg-white/10 backdrop-blur-md rounded-[2rem] shadow-sm"
          >
            <div className="absolute top-4 md:top-8 left-4 md:left-8">
              <MetricCard label="Signal Accuracy" value="94.2%" trend="+2.4%" delay={0.6} />
            </div>
            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
              <MetricCard label="Trends Detected" value="1,247" trend="+127" delay={0.8} />
            </div>
            <div className="absolute top-4 md:top-12 right-12 hidden md:block">
              <MetricCard label="Brands Analyzed" value="2,840" delay={0.7} />
            </div>
            <AudioWaveform bars={40} height={120} color="var(--color-aura-charcoal)" />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 border-y border-aura-charcoal/5 overflow-hidden bg-aura-cream-100/50 backdrop-blur-sm relative z-10">
        <div className="flex w-fit animate-[marquee_40s_linear_infinite] opacity-60 mix-blend-multiply">
          {Array.from({ length: 8 }).flatMap((_, i) =>
            MARQUEE_ITEMS.map((item, j) => (
              <div key={`${i}-${j}`} className="flex items-center gap-12 px-8 text-2xl md:text-3xl font-serif italic text-aura-charcoal whitespace-nowrap">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-aura-coral" />
              </div>
            ))
          )}
        </div>
      </section>

      {/* How it works */}
      <section id="platform" className="py-24 md:py-32 relative px-4 md:px-8">
        <BlobShape color="var(--color-aura-sage)" size={400} top="10%" left="-5%" opacity={0.2} />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-aura-charcoal tracking-tight mb-6">
              Intelligence that <span className="italic font-light">feels intuitive.</span>
            </h2>
            <p className="text-lg text-aura-charcoal-soft/80 font-light">
              We process millions of unstructured data points across social, search, and cultural discourse — distilling them into clear, directive insights.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Listen", desc: "Aura continuously ingests raw cultural data across formats — text, audio, and visual signals from thousands of sources." },
              { num: "02", title: "Synthesize", desc: "Our engine identifies emerging patterns before they reach mainstream adoption, mapping weak signals to cultural momentum." },
              { num: "03", title: "Direct", desc: "Get prescriptive creative direction tailored to your brand's specific DNA — not generic trend reports." },
            ].map((step, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="bg-aura-cream-100/80 backdrop-blur-sm border border-white/60 p-8 rounded-3xl h-full">
                  <div className="w-12 h-12 rounded-full border border-aura-charcoal/10 flex items-center justify-center text-sm font-medium font-sans mb-6 bg-white/50 text-aura-charcoal-soft/60">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-serif text-aura-charcoal mb-4">{step.title}</h3>
                  <p className="text-aura-charcoal-soft/70 leading-relaxed font-light">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-12 text-center" delay={0.3}>
            <Link
              href="/platform"
              data-testid="link-platform-deeper"
              className="inline-flex items-center gap-2 text-sm font-medium text-aura-charcoal border-b border-aura-charcoal/20 pb-0.5 hover:border-aura-charcoal transition-colors"
            >
              Explore the full platform
              <span aria-hidden>→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 relative px-4 md:px-8 overflow-hidden">
        <BlobShape color="var(--color-aura-rose)" size={600} top="-20%" left="50%" opacity={0.25} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <SectionReveal>
            <div className="mb-12 flex justify-center">
              <AudioWaveform bars={15} height={40} color="var(--color-aura-coral)" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-aura-charcoal leading-tight mb-8">
              "It's like having a crystal ball. Aura doesn't just tell us what's happening now — it tells us what we should design for tomorrow."
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-aura-charcoal">Elena Rostova</p>
              <p className="text-aura-charcoal-soft/60 font-light">Creative Director, Studio N</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-24 relative px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end border-b border-aura-charcoal/10 pb-8 gap-4">
            <SectionReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal">Access levels</h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <Link href="/pricing" data-testid="link-full-pricing" className="text-sm font-medium text-aura-charcoal/60 hover:text-aura-charcoal transition-colors underline underline-offset-4">
                See full pricing
              </Link>
            </SectionReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="p-10 rounded-[2rem] bg-aura-cream-100/50 backdrop-blur-sm border border-white/50 h-full flex flex-col">
                <h3 className="text-2xl font-serif text-aura-charcoal mb-2">Boutique</h3>
                <p className="text-aura-charcoal-soft/60 mb-8 font-light">For independent studios</p>
                <div className="text-4xl font-serif mb-8">$499<span className="text-lg text-aura-charcoal-soft/50 font-sans">/mo</span></div>
                <ul className="space-y-4 mb-10 text-aura-charcoal-soft/80 font-light flex-1">
                  <li className="flex gap-3"><span className="text-aura-coral">•</span> Real-time signal dashboard</li>
                  <li className="flex gap-3"><span className="text-aura-coral">•</span> 3 industry deep-dives/month</li>
                  <li className="flex gap-3"><span className="text-aura-coral">•</span> Exportable moodboards</li>
                </ul>
                <Link
                  href="/demo"
                  data-testid="button-pricing-boutique"
                  className="w-full py-4 rounded-full border border-aura-charcoal/20 text-aura-charcoal hover:bg-aura-charcoal hover:text-aura-cream-100 transition-colors text-center text-sm font-medium"
                >
                  Select Boutique
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="p-10 rounded-[2rem] bg-aura-charcoal text-aura-cream-100 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-aura-amber rounded-full mix-blend-overlay filter blur-[60px] opacity-40 translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-2xl font-serif mb-2 relative z-10">Enterprise</h3>
                <p className="text-white/60 mb-8 font-light relative z-10">For global agencies</p>
                <div className="text-4xl font-serif mb-8 relative z-10">Custom</div>
                <ul className="space-y-4 mb-10 text-white/80 font-light relative z-10 flex-1">
                  <li className="flex gap-3"><span className="text-aura-amber">•</span> Unlimited data streams</li>
                  <li className="flex gap-3"><span className="text-aura-amber">•</span> Custom brand DNA modeling</li>
                  <li className="flex gap-3"><span className="text-aura-amber">•</span> API access</li>
                  <li className="flex gap-3"><span className="text-aura-amber">•</span> Dedicated strategist</li>
                </ul>
                <Link
                  href="/demo"
                  data-testid="button-pricing-enterprise"
                  className="w-full py-4 rounded-full bg-aura-cream-100 text-aura-charcoal hover:bg-white transition-colors relative z-10 text-center text-sm font-medium"
                >
                  Contact Sales
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="py-32 px-4 md:px-8 bg-aura-charcoal text-aura-cream-100 relative overflow-hidden mt-12 rounded-t-[3rem]">
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay" aria-hidden>
            <filter id="noiseFilterDark">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterDark)" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-coral rounded-full mix-blend-overlay filter blur-[120px] opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionReveal>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              See the future of <br /><span className="italic font-light">your brand.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
              Join leading creative studios relying on Aura's predictive intelligence.
            </p>
            <Link
              href="/demo"
              data-testid="button-dark-cta"
              className="inline-block px-10 py-5 rounded-full bg-aura-cream-100 text-aura-charcoal text-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Request Early Access
            </Link>
          </SectionReveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      ` }} />
    </Layout>
  );
}
