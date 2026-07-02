import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlobShapeProps {
  color: string;
  size: number;
  top: string;
  left: string;
  blur?: number;
  opacity?: number;
  parallaxOffset?: number;
}

export function BlobShape({
  color,
  size,
  top,
  left,
  blur = 80,
  opacity = 0.4,
  parallaxOffset = 50,
}: BlobShapeProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxOffset]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        borderRadius: "60% 40% 70% 30%",
        filter: `blur(${blur}px)`,
        opacity,
        y,
      }}
      animate={{
        borderRadius: [
          "60% 40% 70% 30%",
          "30% 70% 40% 60%",
          "70% 30% 60% 40%",
          "60% 40% 70% 30%",
        ],
        rotate: [0, 90, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
