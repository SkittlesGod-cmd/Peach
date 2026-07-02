import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  className?: string;
  delay?: number;
}

export function MetricCard({ label, value, trend, className = "", delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative overflow-hidden
        px-5 py-4
        flex flex-col gap-1
        ${className}
      `}
      style={{
        background: "linear-gradient(135deg, rgba(254,249,240,0.75) 0%, rgba(250,243,230,0.55) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.55)",
        borderRadius: "1rem",
        boxShadow: "0 4px 24px rgba(232,144,112,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPositionX: ["-100%", "200%"] }}
        transition={{ duration: 3.5, delay: delay + 1, repeat: Infinity, repeatDelay: 4 }}
      />

      <span className="text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/55 relative z-10">
        {label}
      </span>
      <div className="flex items-end gap-3 relative z-10">
        <span className="text-2xl font-serif font-medium text-aura-charcoal">
          {value}
        </span>
        {trend && (
          <span className="text-sm font-medium text-aura-coral mb-0.5">
            {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
}
