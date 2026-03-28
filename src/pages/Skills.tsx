import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { resumeData } from "@/data/resume";
import { PageSEO } from "@/components/seo/PageSEO";

function normalizeSkills(raw: any): { category: string; items: { name: string; level: number }[] }[] {
  if (!raw) return [];
  
  // If raw is already an array (new format from resume.ts)
  if (Array.isArray(raw)) {
    return raw.map((cat: any) => ({
      category: cat.category || "Skills",
      items: (Array.isArray(cat.items) ? cat.items : []).map((name: string) => ({
        name,
        level: name === "Java" || name === "Spring Boot 3" ? 95 : 85
      }))
    }));
  }

  // If raw is an object (old format handling)
  return Object.entries(raw).map(([key, value]) => {
    const items = Array.isArray(value) 
      ? value 
      : typeof value === 'string' 
        ? value.split(',').map(s => s.trim()) 
        : Object.values(value as any);

    return {
      category: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
      items: (items as string[]).map((name: string) => ({
        name,
        level: name === "Java" || name === "Spring Boot 3" ? 95 : 85
      }))
    };
  });
}

const categoryColors: Record<string, { glow: "cyan" | "violet" | "none"; accent: string }> = {
  "Primary Stack": { glow: "cyan", accent: "dark:bg-cyan-500/20 bg-cyan-500/20 dark:text-cyan-400 text-cyan-600" },
  "Secondary": { glow: "violet", accent: "dark:bg-violet-500/20 bg-violet-500/20 dark:text-violet-400 text-violet-600" },
  "Languages": { glow: "cyan", accent: "dark:bg-blue-500/20 bg-blue-500/20 dark:text-blue-400 text-blue-600" },
  "Tools": { glow: "none", accent: "dark:bg-emerald-500/20 bg-emerald-500/20 dark:text-emerald-400 text-emerald-600" },
  "Core Concepts": { glow: "none", accent: "dark:bg-amber-500/20 bg-amber-500/20 dark:text-amber-400 text-amber-600" },
  default: { glow: "none", accent: "dark:bg-white/10 bg-black/10 dark:text-white/70 text-slate-700" },
};

function getColor(category: string) {
  return categoryColors[category] ?? categoryColors.default;
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm dark:text-white/80 text-slate-800">{name}</span>
        <span className="font-mono text-xs dark:text-white/30 text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full dark:bg-white/[0.06] bg-black/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const normalized = normalizeSkills(resumeData.skills);

  // Collect all skill names for the floating cloud
  const allSkills = normalized.flatMap((cat) => cat.items.map((i) => i.name));

  return (
    <>
      <PageSEO 
        title="Skills" 
        description="Prakhar's technical skills — React, TypeScript, Node.js, Java, and more." 
        path="/skills" 
      />
      <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        <SectionHeader
          label="// expertise"
          title="Technical"
          highlight="Skills"
          description="Technologies and tools I work with to bring ideas to life."
        />

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {normalized.map((cat, ci) => {
            const { glow, accent } = getColor(cat.category);
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
              >
                <GlassCard glow={glow} className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 rounded-full font-mono text-xs font-medium border dark:border-transparent ${accent}`}>
                      {cat.category}
                    </span>
                    <span className="font-mono text-xs dark:text-white/25 text-slate-400">
                      {cat.items.length} skills
                    </span>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        index={si}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Floating skill tag cloud */}
        <section>
          <h3 className="font-mono text-xs tracking-widest dark:text-white/30 text-slate-400 uppercase mb-6 text-center">
            Full Stack at a Glance
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-full font-mono text-xs cursor-default
                  dark:bg-white/[0.04] bg-black/[0.04] dark:border-white/[0.07] border-black/[0.07] border
                  dark:text-white/55 text-slate-600 dark:hover:border-cyan-500/30 hover:border-cyan-400/40
                  dark:hover:text-cyan-400 hover:text-cyan-600 dark:hover:bg-cyan-500/8 hover:bg-cyan-500/10
                  transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
