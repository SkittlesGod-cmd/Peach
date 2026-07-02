import React from "react";
import { motion } from "framer-motion";

interface AudioWaveformProps {
  bars?: number;
  color?: string;
  height?: number;
}

export function AudioWaveform({ 
  bars = 40, 
  color = "var(--color-aura-charcoal)", 
  height = 64 
}: AudioWaveformProps) {
  return (
    <div className="flex items-center gap-1 h-16" style={{ height }}>
      {Array.from({ length: bars }).map((_, i) => {
        // Create an organic wave-like height distribution
        const waveHeight = Math.sin((i / bars) * Math.PI) * 0.8 + 0.2;
        const baseHeight = Math.max(10, waveHeight * 100);
        
        return (
          <motion.div
            key={i}
            className="w-1.5 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ height: `${baseHeight}%` }}
            animate={{ 
              height: [`${baseHeight}%`, `${Math.max(10, baseHeight * (Math.random() * 0.5 + 0.5))}%`, `${baseHeight}%`] 
            }}
            transition={{
              duration: 1.5 + Math.random() * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
          />
        );
      })}
    </div>
  );
}
