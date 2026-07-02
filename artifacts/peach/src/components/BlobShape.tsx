import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface BlobShapeProps {
  color: string;
  color2?: string;
  size: number;
  top: string;
  left: string;
  blur?: number;
  opacity?: number;
  parallaxOffset?: number;
  speed?: number;
}

export function BlobShape({
  color,
  color2,
  size,
  top,
  left,
  blur = 90,
  opacity = 0.45,
  parallaxOffset = 50,
  speed = 22,
}: BlobShapeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);
  const y = useSpring(rawY, { stiffness: 30, damping: 20 });

  const bg = color2
    ? `radial-gradient(ellipse at 40% 40%, ${color} 0%, ${color2} 50%, transparent 75%)`
    : `radial-gradient(ellipse at 40% 40%, ${color} 0%, transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        background: bg,
        filter: `blur(${blur}px)`,
        opacity,
        y,
        willChange: "transform",
      }}
      animate={{
        borderRadius: [
          "62% 38% 55% 45% / 45% 62% 38% 55%",
          "38% 62% 45% 55% / 55% 38% 62% 45%",
          "55% 45% 62% 38% / 38% 55% 45% 62%",
          "62% 38% 55% 45% / 45% 62% 38% 55%",
        ],
        scale: [1, 1.06, 0.97, 1.03, 1],
        rotate: [0, 60, 130, 200, 360],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
