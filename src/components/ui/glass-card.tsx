import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "violet" | "none";
  hover?: boolean;
  motionProps?: MotionProps;
}

export function GlassCard({
  className,
  children,
  glow = "none",
  hover = true,
  motionProps,
  ...props
}: GlassCardProps) {
  const glowClass = {
    cyan: "shadow-glow-cyan dark:border-cyan-500/20 dark:hover:border-cyan-400/40 border-cyan-400/30 hover:border-cyan-500/50",
    violet: "shadow-glow-violet dark:border-violet-500/20 dark:hover:border-violet-400/40 border-violet-400/30 hover:border-violet-500/50",
    none: "dark:border-white/[0.06] dark:hover:border-white/[0.12] border-black/[0.07] hover:border-black/[0.13]",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-xl border backdrop-blur-xl transition-all duration-300 shadow-glass",
        hover && "hover:-translate-y-0.5",
        glowClass[glow],
        className
      )}
      style={{ background: 'var(--glass-bg)' }}
      whileHover={hover ? { background: 'var(--glass-hover)' } : undefined}
      {...motionProps}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
