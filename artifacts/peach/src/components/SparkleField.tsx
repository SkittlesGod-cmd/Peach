import { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const COLORS = [
  "var(--color-aura-coral)",
  "var(--color-aura-amber)",
  "var(--color-aura-rose)",
  "var(--color-aura-cream-300)",
];

interface SparkleFieldProps {
  count?: number;
  className?: string;
}

export function SparkleField({ count = 24, className = "" }: SparkleFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: ((i * 41 + 7) % 97),
      y: ((i * 29 + 13) % 95),
      size: 2 + (i % 3),
      duration: 5 + (i % 7),
      delay: (i * 0.35) % 6,
      opacity: 0.25 + (i % 5) * 0.12,
      color: COLORS[i % COLORS.length],
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{
            y: [0, -(40 + (p.id % 30)), 0],
            x: [0, ((p.id % 2 === 0 ? 1 : -1) * (8 + p.id % 12)), 0],
            opacity: [0, p.opacity, p.opacity * 0.6, 0],
            scale: [0.6, 1.2, 0.8, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
