import React from "react";
import { Navbar } from "@/components/Navbar";
import { GrainOverlay } from "@/components/GrainOverlay";
import { BlobShape } from "@/components/BlobShape";
import { AudioWaveform } from "@/components/AudioWaveform";
import { MetricCard } from "@/components/MetricCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-aura-coral/30">
      <GrainOverlay />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8">
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
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-aura-charcoal text-aura-cream-100 font-medium text-base hover:bg-black transition-colors">
              Start your analysis
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-aura-charcoal/20 text-aura-charcoal font-medium text-base hover:bg-aura-charcoal/5 transition-colors">
              Explore capabilities
            </button>
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

      {/* Marquee Section */}
      <section className="py-12 border-y border-aura-charcoal/5 overflow-hidden bg-aura-cream-100/50 backdrop-blur-sm relative z-10">
        <div className="flex w-fit animate-[marquee_40s_linear_infinite] opacity-60 mix-blend-multiply">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 text-2xl md:text-3xl font-serif italic text-aura-charcoal whitespace-nowrap">
              <span>Consumer Sentiment</span>
              <span className="w-2 h-2 rounded-full bg-aura-coral" />
              <span>Aesthetic Shifts</span>
              <span className="w-2 h-2 rounded-full bg-aura-amber" />
              <span>Voice Analysis</span>
              <span className="w-2 h-2 rounded-full bg-aura-sage" />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="platform" className="py-24 md:py-32 relative px-4 md:px-8">
        <BlobShape color="var(--color-aura-sage)" size={400} top="10%" left="-5%" opacity={0.2} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-aura-charcoal tracking-tight mb-6">
              Intelligence that <span className="italic font-light">feels intuitive.</span>
            </h2>
            <p className="text-lg text-aura-charcoal-soft/80 font-light">
              We process millions of unstructured data points across social, search, and cultural discourse, distilling them into clear, directive insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Listen", desc: "Aura continuously ingests raw cultural data across formats—text, audio, and visual." },
              { title: "Synthesize", desc: "Our engine identifies emerging patterns before they reach mainstream adoption." },
              { title: "Direct", desc: "Get prescriptive creative direction tailored to your brand's specific DNA." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-aura-cream-100/80 backdrop-blur-sm border border-white/60 p-8 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-full border border-aura-charcoal/10 flex items-center justify-center text-xl font-serif mb-6 bg-white/50">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-serif text-aura-charcoal mb-4">{step.title}</h3>
                <p className="text-aura-charcoal-soft/70 leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 relative px-4 md:px-8 overflow-hidden">
        <BlobShape color="var(--color-aura-rose)" size={600} top="-20%" left="50%" opacity={0.25} />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <AudioWaveform bars={15} height={40} color="var(--color-aura-coral)" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-aura-charcoal leading-tight mb-8">
              "It's like having a crystal ball. Aura doesn't just tell us what's happening now; it tells us what we should design for tomorrow."
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium text-aura-charcoal">Elena Rostova</p>
              <p className="text-aura-charcoal-soft/60">Creative Director, Studio N</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section id="pricing" className="py-24 relative px-4 md:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-24 flex justify-between items-end border-b border-aura-charcoal/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal">Access levels</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2rem] bg-aura-cream-100/50 backdrop-blur-sm border border-white/50"
            >
              <h3 className="text-2xl font-serif text-aura-charcoal mb-2">Boutique</h3>
              <p className="text-aura-charcoal-soft/60 mb-8 font-light">For independent studios</p>
              <div className="text-4xl font-serif mb-8">$499<span className="text-lg text-aura-charcoal-soft/50 font-sans">/mo</span></div>
              <ul className="space-y-4 mb-10 text-aura-charcoal-soft/80 font-light">
                <li className="flex gap-3"><span className="text-aura-coral">•</span> Real-time signal dashboard</li>
                <li className="flex gap-3"><span className="text-aura-coral">•</span> 3 industry deep-dives/month</li>
                <li className="flex gap-3"><span className="text-aura-coral">•</span> Exportable moodboards</li>
              </ul>
              <button className="w-full py-4 rounded-full border border-aura-charcoal/20 text-aura-charcoal hover:bg-aura-charcoal hover:text-aura-cream-100 transition-colors">
                Select Boutique
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[2rem] bg-aura-charcoal text-aura-cream-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-aura-amber rounded-full mix-blend-overlay filter blur-[60px] opacity-40 translate-x-1/2 -translate-y-1/2" />
              
              <h3 className="text-2xl font-serif mb-2 relative z-10">Enterprise</h3>
              <p className="text-white/60 mb-8 font-light relative z-10">For global agencies</p>
              <div className="text-4xl font-serif mb-8 relative z-10">Custom</div>
              <ul className="space-y-4 mb-10 text-white/80 font-light relative z-10">
                <li className="flex gap-3"><span className="text-aura-amber">•</span> Unlimited data streams</li>
                <li className="flex gap-3"><span className="text-aura-amber">•</span> Custom brand DNA modeling</li>
                <li className="flex gap-3"><span className="text-aura-amber">•</span> API access</li>
                <li className="flex gap-3"><span className="text-aura-amber">•</span> Dedicated strategist</li>
              </ul>
              <button className="w-full py-4 rounded-full bg-aura-cream-100 text-aura-charcoal hover:bg-white transition-colors relative z-10">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="py-32 px-4 md:px-8 bg-aura-charcoal text-aura-cream-100 relative overflow-hidden mt-12 rounded-t-[3rem]">
        <div className="absolute inset-0 z-0">
           <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay">
            <filter id="noiseFilterDark">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterDark)" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-coral rounded-full mix-blend-overlay filter blur-[120px] opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            See the future of <br/><span className="italic font-light">your brand.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light">
            Join leading creative studios relying on Aura's predictive intelligence.
          </p>
          <button className="px-10 py-5 rounded-full bg-aura-cream-100 text-aura-charcoal text-lg font-medium hover:scale-105 transition-transform duration-300">
            Request Early Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aura-charcoal text-white/40 py-12 px-8 text-sm font-light">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif text-white tracking-tight">AURA</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div>© {new Date().getFullYear()} Aura Intelligence.</div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
