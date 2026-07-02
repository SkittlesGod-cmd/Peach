import React from "react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        px-5 py-4 
        bg-aura-cream-200/60 backdrop-blur-[20px] 
        border border-white/40 
        rounded-2xl shadow-sm
        flex flex-col gap-1
        ${className}
      `}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-aura-charcoal-soft/60">
        {label}
      </span>
      <div className="flex items-end gap-3">
        <span className="text-2xl font-serif font-medium text-aura-charcoal">
          {value}
        </span>
        {trend && (
          <span className="text-sm font-medium text-aura-sage mb-1">
            {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
}
