import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { NeonText } from "./neon-text";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, title, highlight, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("text-center mb-16", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/70 uppercase mb-4 block">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4">
        {title}{" "}
        {highlight && <NeonText color="cyan">{highlight}</NeonText>}
      </h2>
      {description && (
        <p className="dark:text-white/50 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
        <div className="h-px w-24 bg-gradient-to-r from-cyan-500/60 to-violet-500/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-glow-violet" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/60" />
      </div>
    </motion.div>
  );
}
