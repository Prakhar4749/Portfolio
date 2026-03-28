import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface NeonTextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: "cyan" | "violet";
}

export function NeonText({ className, children, color = "cyan", ...props }: NeonTextProps) {
  return (
    <span
      className={cn(
        color === "cyan" && [
          "dark:text-cyan-400 text-cyan-600",
          "dark:drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]",
          "drop-shadow-[0_0_6px_rgba(0,180,200,0.4)]",
        ],
        color === "violet" && [
          "dark:text-violet-400 text-violet-600",
          "dark:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]",
          "drop-shadow-[0_0_6px_rgba(124,58,237,0.4)]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
