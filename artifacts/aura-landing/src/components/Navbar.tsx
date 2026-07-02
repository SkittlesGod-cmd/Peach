import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed top-4 z-40"
        style={{ left: "50%", x: "-50%", width: "min(90%, 64rem)" }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[hsl(40,47%,95%)]/80 backdrop-blur-md border border-white/40 shadow-sm py-3 px-6"
              : "bg-transparent py-4 px-6 border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              data-testid="link-logo"
              className="text-2xl font-serif font-bold tracking-tight text-aura-charcoal shrink-0"
            >
              PEACH
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  data-testid={`link-nav-${label.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    location === href
                      ? "text-aura-charcoal"
                      : "text-aura-charcoal-soft/70 hover:text-aura-charcoal"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                data-testid="link-login"
                className="hidden md:block text-sm font-medium text-aura-charcoal-soft/70 hover:text-aura-charcoal transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/demo"
                data-testid="link-request-demo"
                className="bg-aura-charcoal text-aura-cream-100 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors"
              >
                Request Demo
              </Link>
              <button
                data-testid="button-mobile-menu"
                className="md:hidden p-2 text-aura-charcoal"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-x-4 top-20 z-30 rounded-3xl bg-[hsl(40,47%,95%)]/95 backdrop-blur-xl border border-white/40 shadow-lg p-6 md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  data-testid={`link-mobile-${label.toLowerCase()}`}
                  className="text-xl font-serif text-aura-charcoal hover:text-aura-charcoal/70 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="h-px bg-aura-charcoal/10 my-1" />
              <Link
                href="/demo"
                data-testid="link-mobile-demo"
                className="w-full py-3.5 rounded-full bg-aura-charcoal text-aura-cream-100 text-center text-sm font-medium"
              >
                Request Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
