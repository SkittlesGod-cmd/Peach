import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-aura-charcoal text-white/40 py-14 px-8 text-sm font-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10 pb-10 border-b border-white/10">
          <div className="max-w-xs">
            <div className="text-2xl font-serif text-white tracking-tight mb-3">AURA</div>
            <p className="text-white/40 font-light leading-relaxed text-sm">
              The intelligence platform that reads market signals and turns them into creative direction.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="text-white/70 font-medium mb-4">Product</p>
              <ul className="space-y-3">
                <li><Link href="/platform" className="hover:text-white transition-colors" data-testid="link-footer-platform">Platform</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors" data-testid="link-footer-solutions">Solutions</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors" data-testid="link-footer-pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-4">Company</p>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-about">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-blog">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-careers">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-4">Legal</p>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors" data-testid="link-footer-security">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Aura Intelligence, Inc.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-twitter">Twitter</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-linkedin">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
