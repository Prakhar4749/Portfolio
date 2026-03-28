export const languageColors: Record<string, { bg: string; text: string; dot: string }> = {
  TypeScript: {
    bg: "bg-blue-500/10 border-blue-500/20",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
  JavaScript: {
    bg: "bg-yellow-500/10 border-yellow-500/20",
    text: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  Python: {
    bg: "bg-green-500/10 border-green-500/20",
    text: "text-green-400",
    dot: "bg-green-400",
  },
  Java: {
    bg: "bg-orange-500/10 border-orange-500/20",
    text: "text-orange-400",
    dot: "bg-orange-400",
  },
  "C++": {
    bg: "bg-pink-500/10 border-pink-500/20",
    text: "text-pink-400",
    dot: "bg-pink-400",
  },
  C: {
    bg: "bg-gray-500/10 border-gray-500/20",
    text: "text-gray-400",
    dot: "bg-gray-400",
  },
  Rust: {
    bg: "bg-orange-600/10 border-orange-600/20",
    text: "text-orange-500",
    dot: "bg-orange-500",
  },
  Go: {
    bg: "bg-cyan-500/10 border-cyan-500/20",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  HTML: {
    bg: "bg-red-500/10 border-red-500/20",
    text: "text-red-400",
    dot: "bg-red-400",
  },
  CSS: {
    bg: "bg-purple-500/10 border-purple-500/20",
    text: "text-purple-400",
    dot: "bg-purple-400",
  },
  Shell: {
    bg: "bg-emerald-500/10 border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  default: {
    bg: "bg-slate-500/10 border-slate-500/20",
    text: "dark:text-slate-400 text-slate-500",
    dot: "bg-slate-400",
  },
};

export function getLangColor(language: string | null) {
  if (!language) return languageColors.default;
  return languageColors[language] ?? languageColors.default;
}
