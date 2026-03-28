import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function glass(opacity = 0.1, blur = "md") {
  return `bg-white/[${opacity}] backdrop-blur-${blur} border border-white/10 shadow-xl`;
}

export const glassStyles = {
  card: "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl",
  navbar: "bg-background/70 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50",
  input: "bg-white/5 backdrop-blur-sm border border-white/10 focus:border-primary/50 transition-all duration-300",
  button: "hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",
};
