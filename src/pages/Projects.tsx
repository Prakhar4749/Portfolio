import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, RefreshCw, AlertCircle, Filter, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { RepoCard } from "@/components/ui/repo-card";
import { RepoSkeleton } from "@/components/ui/repo-skeleton";
import { GlassCard } from "@/components/ui/glass-card";
import { useGitHubStarred } from "@/hooks/useGitHubStarred";
import { projects as featuredProjects } from "@/data/resume";

import { PageSEO } from "@/components/seo/PageSEO";

type Tab = "featured" | "starred" | "repos";

const tabs: { id: Tab; label: string; icon: any }[] = [
  { id: "featured", label: "Featured", icon: Star },
  { id: "starred", label: "Starred", icon: Github },
  { id: "repos", label: "My Repos", icon: RefreshCw },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("featured");
  const [langFilter, setLangFilter] = useState<string>("All");
  const { starred, ownRepos, loading, error } = useGitHubStarred();

  // Collect unique languages
  const languages = useMemo(() => {
    const source = activeTab === "starred" ? starred : ownRepos;
    const langs = ["All", ...new Set(source.map((r) => r.language).filter(Boolean) as string[])];
    return langs;
  }, [activeTab, starred, ownRepos]);

  // Filtered repos
  const filteredRepos = useMemo(() => {
    const source = activeTab === "starred" ? starred : ownRepos;
    if (langFilter === "All") return source;
    return source.filter((r) => r.language === langFilter);
  }, [activeTab, starred, ownRepos, langFilter]);

  return (
    <>
      <PageSEO 
        title="Projects" 
        description="Explore Prakhar's featured projects, starred GitHub repos and open source work." 
        path="/projects" 
      />
      <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          label="// portfolio"
          title="My"
          highlight="Projects"
          description="Featured work, GitHub starred repositories, and open source contributions."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <GlassCard className="p-1.5 flex gap-1" hover={false}>
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => { setActiveTab(id); setLangFilter("All"); }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-medium transition-all duration-200 ${
                  activeTab === id
                    ? "dark:text-cyan-400 text-cyan-600"
                    : "dark:text-white/50 text-slate-500 dark:hover:text-white/80 hover:text-slate-800"
                }`}
              >
                {activeTab === id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-lg dark:bg-cyan-500/15 bg-cyan-500/15 dark:border-cyan-500/25 border-cyan-400/30 border"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </GlassCard>
        </div>

        {/* Featured Projects Tab */}
        <AnimatePresence mode="wait">
          {activeTab === "featured" && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {featuredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <GlassCard glow="violet" className="p-5 h-full flex flex-col gap-4 group">
                      {/* Project header */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] tracking-widest dark:text-violet-400 text-violet-600 uppercase">
                            Featured Project
                          </span>
                        </div>
                        <h3 className="font-bold text-base dark:text-white text-slate-900 group-hover:dark:text-violet-400 group-hover:text-violet-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm dark:text-white/50 text-slate-600 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech: string) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-full font-mono text-[10px]
                                dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                                dark:text-white/60 text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex gap-2 pt-2 border-t dark:border-white/[0.06] border-black/[0.06]">
                        {!!project.github?.trim() && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-xs
                              dark:text-white/50 text-slate-500 dark:hover:text-white hover:text-slate-900 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        )}
                        {!!project.link?.trim() && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-mono text-xs
                              dark:text-cyan-400/70 text-cyan-600/80 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live
                          </a>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Starred / Repos Tabs */}
          {(activeTab === "starred" || activeTab === "repos") && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Language filter pills */}
              {!loading && !error && (
                <div className="flex flex-wrap gap-2 items-center">
                  <Filter className="w-3.5 h-3.5 dark:text-white/30 text-slate-400" />
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLangFilter(lang)}
                      className={`px-3 py-1 rounded-full font-mono text-xs border transition-all duration-200 ${
                        langFilter === lang
                          ? "dark:bg-cyan-500/20 bg-cyan-500/20 dark:border-cyan-500/40 border-cyan-500/40 dark:text-cyan-400 text-cyan-600"
                          : "dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 dark:text-white/50 text-slate-500 dark:hover:border-white/20 hover:border-black/20"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}

              {/* Error state */}
              {error && (
                <GlassCard className="p-8 flex flex-col items-center gap-3 text-center" hover={false}>
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <p className="font-mono text-sm dark:text-white/60 text-slate-600">{error}</p>
                  <p className="text-xs dark:text-white/30 text-slate-400 font-mono">GitHub API rate limit may apply</p>
                </GlassCard>
              )}

              {/* Loading skeletons */}
              {loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <RepoSkeleton key={i} />
                  ))}
                </div>
              )}

              {/* Repos grid */}
              {!loading && !error && (
                <>
                  <p className="font-mono text-xs dark:text-white/30 text-slate-400">
                    Showing {filteredRepos.length} {activeTab === "starred" ? "starred repos" : "repositories"}
                    {langFilter !== "All" && ` · ${langFilter}`}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredRepos.map((repo, i) => (
                      <RepoCard
                        key={repo.id}
                        repo={repo}
                        index={i}
                        variant={activeTab === "starred" ? "starred" : "own"}
                      />
                    ))}
                  </div>

                  {/* GitHub CTA */}
                  <div className="flex justify-center pt-8">
                    <a
                      href={`https://github.com/Prakhar4749`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm
                        dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                        dark:text-white/60 text-slate-600 dark:hover:text-white hover:text-slate-900
                        dark:hover:border-white/20 hover:border-black/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      View full GitHub profile
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
}
