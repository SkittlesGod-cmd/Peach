import { useMemo } from "react";
import { motion } from "framer-motion";

interface WaveLayer {
  amplitude: number;
  freqCycles: number; // integer cycles across one tile for seamless looping
  phase: number;
  yCenter: number;
  color: string;
  speed: number;
}

function buildPath(tileW: number, h: number, amp: number, cycles: number, phase: number, yCenter: number): string {
  const steps = 280;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * tileW * 2;
    const t = (i / steps) * 2; // 0..2 tiles
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

  const layers = useMemo<WaveLayer[]>(
    () => [
      // backmost — wide orange, slowest
      { amplitude: 38, freqCycles: 2, phase: 0,   yCenter: H * 0.38, color: "hsl(24 82% 68% / 0.22)", speed: 22 },
      // mid-back — red-coral
      { amplitude: 26, freqCycles: 3, phase: 1.0, yCenter: H * 0.50, color: "hsl(6 72% 62% / 0.28)",  speed: 16 },
      // mid — soft purple
      { amplitude: 20, freqCycles: 4, phase: 2.2, yCenter: H * 0.57, color: "hsl(268 36% 65% / 0.32)", speed: 12 },
      // mid-front — lavender, wider swing
      { amplitude: 44, freqCycles: 2, phase: 0.6, yCenter: H * 0.32, color: "hsl(284 30% 70% / 0.18)", speed: 28 },
      // front accent — deep red, anchors bottom
      { amplitude: 14, freqCycles: 5, phase: 3.7, yCenter: H * 0.66, color: "hsl(4 68% 56% / 0.22)",  speed: 9  },
    ],
    [H]
  );

  const paths = useMemo(
    () => layers.map((l) => buildPath(TILE, H, l.amplitude, l.freqCycles, l.phase, l.yCenter)),
    [layers, H]
  );

  /* page bg colour: hsl(22 60% 95%) ≈ #F8EDE0 */
  const BG = "hsl(22, 60%, 95%)";

  return (
    <div
      className="relative overflow-hidden w-full pointer-events-none"
      style={{ height: H }}
      aria-hidden
    >
      {/* ambient colour washes blending with page bg */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 65% at 28% 60%, hsl(24 82% 72% / 0.16) 0%, transparent 70%),
            radial-gradient(ellipse 45% 55% at 76% 48%, hsl(268 36% 65% / 0.14) 0%, transparent 70%)
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
          transition={{ duration: layer.speed, repeat: Infinity, ease: "linear" }}
        >
          <path d={paths[i]} fill={layer.color} />
        </motion.svg>
      ))}

      {/* top & bottom fades — seamlessly blends into page cream */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, ${BG} 0%, transparent 100%)` }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${BG} 0%, transparent 100%)` }}
      />
    </div>
  );
}
