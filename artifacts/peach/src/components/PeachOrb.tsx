import { useId } from "react";
import { motion } from "framer-motion";

interface PeachOrbProps {
  size?: number;
  className?: string;
}

export function PeachOrb({ size = 260, className = "" }: PeachOrbProps) {
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {/* Outer glow rings */}
      {[1.8, 1.5, 1.25].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: size * scale,
            height: size * scale,
            borderColor: `hsl(18 72% 68% / ${0.1 - i * 0.02})`,
          }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4 + i * 1.2,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full"
          style={{
            width: size * 0.85,
            height: size * 0.85,
            border: "1px solid hsl(18 72% 68% / 0.3)",
          }}
          animate={{
            scale: [1, 2.2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3.5,
            delay: i * 1.15,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Core orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.72,
          height: size * 0.72,
          background: `radial-gradient(circle at 38% 35%,
            hsl(28 90% 88%) 0%,
            hsl(18 72% 72%) 40%,
            hsl(12 60% 58%) 75%,
            hsl(10 50% 42%) 100%
          )`,
          boxShadow: `
            0 0 ${size * 0.3}px hsl(18 72% 68% / 0.45),
            0 0 ${size * 0.6}px hsl(18 72% 68% / 0.2),
            inset 0 ${size * 0.05}px ${size * 0.15}px hsl(28 100% 95% / 0.5)
          `,
        }}
        animate={{
          scale: [1, 1.025, 0.985, 1.015, 1],
          rotate: [0, 8, -4, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute rounded-full"
          style={{
            width: "35%",
            height: "22%",
            top: "15%",
            left: "20%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 100%)",
            filter: "blur(4px)",
            transform: "rotate(-20deg)",
          }}
        />
      </motion.div>

      {/* SVG gradient overlay for depth */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <radialGradient id={`orbGlow-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(28 90% 80%)" stopOpacity="0" />
            <stop offset="70%" stopColor="hsl(18 72% 68%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(18 72% 68%)" stopOpacity="0.18" />
          </radialGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#orbGlow-${id})`} />
      </svg>
    </div>
  );
}
