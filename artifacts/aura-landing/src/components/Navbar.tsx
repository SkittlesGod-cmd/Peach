import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-5xl rounded-full transition-all duration-300 ${
        isScrolled 
          ? "bg-aura-cream-100/70 backdrop-blur-md border border-white/30 py-3 px-6 shadow-sm" 
          : "bg-transparent py-4 px-6 border border-transparent"
      }`}
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-aura-charcoal">
          AURA
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-aura-charcoal-soft hover:text-aura-charcoal transition-colors">Platform</a>
          <a href="#solutions" className="text-sm font-medium text-aura-charcoal-soft hover:text-aura-charcoal transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-aura-charcoal-soft hover:text-aura-charcoal transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#login" className="hidden md:block text-sm font-medium text-aura-charcoal-soft hover:text-aura-charcoal transition-colors">
            Log in
          </a>
          <button className="bg-aura-charcoal text-aura-cream-100 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}
