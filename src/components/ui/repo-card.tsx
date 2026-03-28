import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Globe, Github } from "lucide-react";
import { GlassCard } from "./glass-card";
import { getLangColor } from "@/lib/languageColors";
import type { GitHubRepo } from "@/hooks/useGitHubStarred";

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
  variant?: "starred" | "own";
}

export function RepoCard({ repo, index, variant = "own" }: RepoCardProps) {
  const lang = getLangColor(repo.language);
  const isStarred = variant === "starred";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <GlassCard
        glow={isStarred ? "cyan" : "none"}
        className="p-5 h-full flex flex-col gap-4 group transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-mono text-[10px] tracking-widest uppercase ${isStarred ? "text-amber-400" : "dark:text-cyan-400/60 text-cyan-600/70"}`}>
                {isStarred ? "★ Starred Repo" : "📦 Repository"}
              </span>
            </div>
            <h3 className="font-bold text-base dark:text-white text-slate-900 group-hover:dark:text-cyan-400 group-hover:text-cyan-600 transition-colors truncate">
              {repo.name}
            </h3>
            {isStarred && (
              <p className="text-xs dark:text-white/30 text-slate-500 font-mono mt-1 flex items-center gap-1">
                <span className="dark:text-white/10 text-slate-300">by</span> {repo.owner.login}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                  flex items-center justify-center dark:text-white/40 text-slate-400
                  dark:hover:text-cyan-400 hover:text-cyan-600 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repo"
              className="w-8 h-8 rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                flex items-center justify-center dark:text-white/40 text-slate-400
                dark:hover:text-cyan-400 hover:text-cyan-600 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm dark:text-white/50 text-slate-600 leading-relaxed flex-1 line-clamp-2">
          {repo.description || "Exploration and development of modern web technologies and scalable architectures."}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 rounded-full font-mono text-[9px]
                  dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                  dark:text-white/40 text-slate-500"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t dark:border-white/[0.06] border-black/[0.06]">
          <div className="flex items-center gap-3">
            {repo.language && (
              <div className="flex items-center gap-2 font-mono text-[11px] dark:text-white/60 text-slate-600">
                <div className={`w-2 h-2 rounded-full ${lang.dot.replace('bg-', 'dark:bg-')} shadow-[0_0_8px_rgba(0,0,0,0.2)]`} style={{ backgroundColor: lang.dot.startsWith('bg-[') ? lang.dot.slice(4, -1) : undefined }} />
                {repo.language}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[11px] dark:text-white/40 text-slate-500 group-hover:dark:text-amber-400/70 transition-colors">
              <Star className="w-3.5 h-3.5" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] dark:text-white/40 text-slate-500 group-hover:dark:text-violet-400/70 transition-colors">
              <GitFork className="w-3.5 h-3.5" />
              {repo.forks_count}
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
