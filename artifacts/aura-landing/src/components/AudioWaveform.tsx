import { useMemo, useId } from "react";
import { motion } from "framer-motion";

interface AudioWaveformProps {
  bars?: number;
  color?: string;
  color2?: string;
  height?: number;
  width?: number;
}

export function AudioWaveform({
  bars = 38,
  color = "var(--color-aura-coral)",
  color2,
  height = 64,
  width = 320,
}: AudioWaveformProps) {
  const gradId = useId().replace(/:/g, "");

  const barData = useMemo(() => {
    return Array.from({ length: bars }, (_, i) => {
      const t = i / (bars - 1);
      const envelope = Math.sin(t * Math.PI);
      const wave = Math.sin(t * Math.PI * 3.2 + 0.4);
      const base = Math.max(0.12, envelope * (0.5 + wave * 0.35));
      return {
        base,
        delay: i * 0.042,
        duration: 1.6 + ((i * 7) % 10) * 0.08,
        variance: base * 0.42,
      };
    });
  }, [bars]);

  const barW = Math.max(2, (width / bars) * 0.55);
  const gap = (width / bars) * 0.45;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      overflow="visible"
      aria-hidden
    >
      <defs>
        <linearGradient id={`wg-${gradId}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color2 ?? color} stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {barData.map((b, i) => {
        const cx = (i / bars) * width + (width / bars) * 0.5;
        const barH = b.base * height;
        const y1 = (height - barH) / 2;
        const y2 = (height + barH) / 2;
        const y1v = (height - (b.base + b.variance) * height) / 2;
        const y2v = (height + (b.base + b.variance) * height) / 2;

        return (
          <motion.line
            key={i}
            x1={cx}
            x2={cx}
            strokeWidth={barW}
            strokeLinecap="round"
            stroke={`url(#wg-${gradId})`}
            initial={{ y1, y2 }}
            animate={{
              y1: [y1, y1v, y1, y1 + b.variance * height * 0.3, y1],
              y2: [y2, y2v, y2, y2 - b.variance * height * 0.3, y2],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}
