import React from "react";

export function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 w-full h-full opacity-[0.05] mix-blend-multiply">
      <svg className="absolute inset-0 w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
