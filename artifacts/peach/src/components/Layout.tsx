import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

interface LayoutProps {
  children: ReactNode;
  darkFooter?: boolean;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-aura-coral/30">
      <GrainOverlay />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
