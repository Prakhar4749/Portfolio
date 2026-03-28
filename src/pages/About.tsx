import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Heart, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonText } from "@/components/ui/neon-text";
import { personalInfo, resumeData, hero } from "@/data/resume";

import { PageSEO } from "@/components/seo/PageSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  const { education, experience, achievements, interests } = resumeData;

  // Education is currently an object in resume.ts, normalize to array
  const normalizedEducation = Array.isArray(education) ? education : [education];

  return (
    <>
      <PageSEO 
        title="About" 
        description="Learn about Prakhar's journey, experience, education and achievements." 
        path="/about" 
      />
      <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        <SectionHeader
          label="// about me"
          title="Who I"
          highlight="Am"
          description="A passionate developer who loves building things that live on the internet."
        />

        {/* Bio + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard glow="cyan" className="lg:col-span-2 p-8">
            <h3 className="font-mono text-xs tracking-widest dark:text-cyan-400/60 text-cyan-600/70 uppercase mb-4">
              The Story
            </h3>
            <div className="space-y-4 text-base dark:text-white/65 text-slate-600 leading-relaxed">
              <p>{personalInfo.bio || "I'm a Computer Science student passionate about building scalable, performant web applications."}</p>
              <p>{hero?.intro || ""}</p>
            </div>
            <div className="mt-6 pt-6 border-t dark:border-white/[0.06] border-black/[0.06] flex flex-wrap gap-4">
              <div className="flex items-center gap-2 font-mono text-xs dark:text-white/40 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                Bhopal, M.P., India
              </div>
              <div className="flex items-center gap-2 font-mono text-xs dark:text-white/40 text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </GlassCard>

          <div className="space-y-4">
            {[
              { label: "Projects Completed", value: "10+", color: "cyan" as const },
              { label: "Technologies", value: "15+", color: "violet" as const },
              { label: "GitHub Contributions", value: "Active", color: "cyan" as const },
            ].map(({ label, value, color }) => (
              <GlassCard key={label} glow={color} className="p-6 text-center">
                <div className="text-3xl font-bold font-mono mb-1">
                  <NeonText color={color}>{value}</NeonText>
                </div>
                <div className="font-mono text-xs dark:text-white/40 text-slate-500 uppercase tracking-wider">
                  {label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        {experience && experience.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl dark:bg-cyan-500/10 bg-cyan-500/15 dark:border-cyan-500/20 border-cyan-400/30 border flex items-center justify-center">
                <Briefcase className="w-4 h-4 dark:text-cyan-400 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900">
                Experience <NeonText color="cyan">Timeline</NeonText>
              </h2>
            </div>

            <div className="relative space-y-6 pl-8">
              {/* Vertical line */}
              <div className="absolute left-3.5 top-2 bottom-2 w-px dark:bg-gradient-to-b dark:from-cyan-500/40 dark:via-violet-500/40 dark:to-transparent bg-gradient-to-b from-cyan-500/30 via-violet-500/30 to-transparent" />

              {experience.map((exp: any, i: number) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-5 w-3 h-3 rounded-full dark:bg-cyan-400 bg-cyan-600 shadow-glow-cyan border-2 dark:border-black/80 border-white" />

                  <GlassCard className="p-6 ml-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold dark:text-white text-slate-900">{exp.position}</h3>
                        <p className="dark:text-cyan-400 text-cyan-600 font-mono text-sm">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs dark:text-white/40 text-slate-500 dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-full border dark:border-white/10 border-black/10">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </div>
                    </div>
                    {exp.description && Array.isArray(exp.description) ? (
                      <ul className="space-y-1.5">
                        {exp.description.map((h: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm dark:text-white/50 text-slate-600">
                            <span className="dark:text-cyan-400 text-cyan-600 mt-0.5 flex-shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm dark:text-white/55 text-slate-600 leading-relaxed">{exp.description}</p>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {normalizedEducation.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl dark:bg-violet-500/10 bg-violet-500/15 dark:border-violet-500/20 border-violet-400/30 border flex items-center justify-center">
                <GraduationCap className="w-4 h-4 dark:text-violet-400 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900">
                <NeonText color="violet">Education</NeonText>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {normalizedEducation.map((edu: any, i: number) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <GlassCard glow="violet" className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl dark:bg-violet-500/10 bg-violet-500/15 dark:border-violet-500/20 border-violet-400/30 border flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 dark:text-violet-400 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold dark:text-white text-slate-900 leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="dark:text-violet-400 text-violet-600 font-mono text-sm mt-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-3">
                          <span className="font-mono text-xs dark:text-white/40 text-slate-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl dark:bg-amber-500/10 bg-amber-500/15 dark:border-amber-500/20 border-amber-400/30 border flex items-center justify-center">
                <Award className="w-4 h-4 dark:text-amber-400 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900">
                Achievements & <NeonText color="cyan">Awards</NeonText>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach: any, i: number) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-5 h-full group" hover>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{ach.icon || "🏆"}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold dark:text-white text-slate-900 text-sm leading-snug group-hover:dark:text-cyan-400 group-hover:text-cyan-600 transition-colors">
                          {ach.title}
                        </h3>
                        {ach.description && (
                          <p className="text-xs dark:text-white/50 text-slate-600 mt-1.5 leading-relaxed">
                            {ach.description}
                          </p>
                        )}
                        {ach.link && (
                          <a 
                            href={ach.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 font-mono text-[10px] dark:text-cyan-400/60 text-cyan-600/70 hover:dark:text-cyan-400 hover:text-cyan-600 transition-colors"
                          >
                            View Credential ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {interests && interests.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl dark:bg-pink-500/10 bg-pink-500/15 dark:border-pink-500/20 border-pink-400/30 border flex items-center justify-center">
                <Heart className="w-4 h-4 dark:text-pink-400 text-pink-500" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900">
                Interests & <NeonText color="violet">Passions</NeonText>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest: string, i: number) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full font-mono text-sm
                    dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                    dark:text-white/60 text-slate-700 dark:hover:border-violet-500/30 hover:border-violet-400/40
                    dark:hover:text-violet-400 hover:text-violet-600 transition-all duration-200 cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
    </>
  );
}
