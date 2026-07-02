import { useMemo } from "react";
import { motion } from "framer-motion";

interface WaveLayer {
  amplitude: number;
  freqCycles: number; // integer cycles across one tile
  phase: number;
  yCenter: number;
  color: string;
  speed: number; // seconds per full tile scroll
}

function buildPath(tileW: number, h: number, amp: number, cycles: number, phase: number, yCenter: number): string {
  const steps = 240;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * tileW * 2;
    const t = (i / steps) * 2; // 0..2 → two tiles
    const y = yCenter + amp * Math.sin(t * cycles * Math.PI * 2 + phase);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M 0,${h} L ${points.join(" L ")} L ${tileW * 2},${h} Z`;
}

interface HeroWavesProps {
  height?: number;
}

export function HeroWaves({ height = 300 }: HeroWavesProps) {
  const TILE = 1400;
  const H = height;

  const layers = useMemo<WaveLayer[]>(() => [
    // back — orange, slow
    { amplitude: 36, freqCycles: 2, phase: 0,    yCenter: H * 0.42, color: "hsl(22 88% 68% / 0.28)", speed: 20 },
    // mid-back — red, medium
    { amplitude: 28, freqCycles: 3, phase: 1.1,  yCenter: H * 0.52, color: "hsl(8 76% 64% / 0.32)",  speed: 15 },
    // mid-front — purple, slightly faster
    { amplitude: 22, freqCycles: 4, phase: 2.3,  yCenter: H * 0.58, color: "hsl(272 40% 66% / 0.38)", speed: 11 },
    // front — lavender, fast + tall coverage
    { amplitude: 40, freqCycles: 2, phase: 0.5,  yCenter: H * 0.35, color: "hsl(288 34% 72% / 0.22)", speed: 25 },
    // accent fill — deep red, anchors bottom
    { amplitude: 16, freqCycles: 5, phase: 3.8,  yCenter: H * 0.68, color: "hsl(4 72% 58% / 0.25)",  speed: 8  },
  ], [H]);

  const paths = useMemo(() => layers.map((l) => buildPath(TILE, H, l.amplitude, l.freqCycles, l.phase, l.yCenter)), [layers, H]);

  return (
    <div
      className="relative overflow-hidden w-full pointer-events-none"
      style={{ height: H }}
      aria-hidden
    >
      {/* soft background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 70% at 30% 60%, hsl(22 88% 72% / 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 75% 50%, hsl(272 40% 66% / 0.15) 0%, transparent 70%)
          `,
        }}
      />

      {layers.map((layer, i) => (
        <motion.svg
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: TILE * 2,
            height: H,
            willChange: "transform",
          }}
          viewBox={`0 0 ${TILE * 2} ${H}`}
          preserveAspectRatio="none"
          animate={{ x: [0, -TILE] }}
          transition={{
            duration: layer.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path d={paths[i]} fill={layer.color} />
        </motion.svg>
      ))}

      {/* top fade — blends into page bg */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, hsl(24 68% 94%) 0%, transparent 100%)" }}
      />
    </div>
  );
}
