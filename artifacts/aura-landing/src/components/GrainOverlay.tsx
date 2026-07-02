export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 w-full h-full"
      style={{ mixBlendMode: "multiply", opacity: 0.055 }}
      aria-hidden
    >
      <svg className="absolute inset-0 w-full h-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
