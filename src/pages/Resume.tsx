import { motion } from "framer-motion";
import {
  Download, ExternalLink, Briefcase, GraduationCap,
  Code2, Award, Calendar, ChevronRight, MapPin
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonText } from "@/components/ui/neon-text";
import { PageSEO } from "@/components/seo/PageSEO";
import {
  personalInfo, education, experience,
  skills, projects, achievements
} from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

function ResumeSection({
  icon: Icon,
  title,
  accent = "cyan",
  children,
}: {
  icon: any;
  title: string;
  accent?: "cyan" | "violet";
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center
          ${accent === "cyan"
            ? "dark:bg-cyan-500/10 bg-cyan-500/15 dark:border-cyan-500/20 border-cyan-400/30"
            : "dark:bg-violet-500/10 bg-violet-500/15 dark:border-violet-500/20 border-violet-400/30"
          } border`}>
          <Icon className={`w-4 h-4 ${accent === "cyan" ? "dark:text-cyan-400 text-cyan-600" : "dark:text-violet-400 text-violet-600"}`} />
        </div>
        <h2 className="text-xl font-bold dark:text-white text-slate-900">{title}</h2>
        <div className="flex-1 h-px dark:bg-white/[0.06] bg-black/[0.06]" />
      </div>
      {children}
    </section>
  );
}

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/prakhar_resume.pdf";
    link.download = "Prakhar_Resume.pdf";
    link.click();
  };

  // Normalize skills for display
  const skillCategories = Array.isArray(skills)
    ? (typeof skills[0] === "string"
        ? [{ category: "Skills", items: skills }]
        : skills)
    : [];

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 md:pb-20 px-4 md:px-6">
      <PageSEO title="Resume" description="Prakhar's professional resume — experience, education, and technical expertise." path="/resume" />
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

        <SectionHeader
          label="// curriculum vitae"
          title="My"
          highlight="Resume"
          description="A summary of my education, experience, and technical expertise."
        />

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-medium
              dark:bg-cyan-500/15 bg-cyan-500/20 dark:border-cyan-500/30 border-cyan-500/40 border
              dark:text-cyan-400 text-cyan-700 hover:shadow-glow-cyan transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </motion.button>

          <motion.a
            href="/prakhar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-medium
              dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
              dark:text-white/70 text-slate-700 dark:hover:bg-white/10 hover:bg-black/8
              dark:hover:border-white/20 hover:border-black/20 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Browser
          </motion.a>
        </motion.div>

        {/* Header card — personal info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard glow="cyan" className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
                  {personalInfo.name}
                </h1>
                <p className="dark:text-cyan-400 text-cyan-600 font-mono text-sm mt-1">
                  Full Stack Developer · CS Student
                </p>
                <p className="dark:text-white/50 text-slate-600 text-sm mt-4 max-w-lg leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
              <div className="space-y-2.5 font-mono text-xs flex-shrink-0 border-t md:border-t-0 pt-4 md:pt-0 dark:border-white/5 border-black/5">
                {personalInfo.email && (
                  <div className="flex items-center gap-2 dark:text-white/50 text-slate-600">
                    <span className="w-16 dark:text-cyan-400/60 text-cyan-600/70">email</span>
                    <ChevronRight className="w-3 h-3 dark:text-white/20 text-slate-300" />
                    <span className="truncate">{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-2 dark:text-white/50 text-slate-600">
                    <span className="w-16 dark:text-cyan-400/60 text-cyan-600/70">location</span>
                    <ChevronRight className="w-3 h-3 dark:text-white/20 text-slate-300" />
                    {personalInfo.location}
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center gap-2 dark:text-white/50 text-slate-600">
                    <span className="w-16 dark:text-cyan-400/60 text-cyan-600/70">github</span>
                    <ChevronRight className="w-3 h-3 dark:text-white/20 text-slate-300" />
                    Prakhar4749
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Experience */}
        {experience && experience.length > 0 && (
          <ResumeSection icon={Briefcase} title="Experience" accent="cyan">
            <div className="space-y-4">
              {experience.map((exp: any, i: number) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <GlassCard className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold dark:text-white text-slate-900">
                          {exp.role || exp.position || exp.title}
                        </h3>
                        <p className="dark:text-cyan-400 text-cyan-600 font-mono text-sm">
                          {exp.company || exp.organization}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 font-mono text-xs
                        dark:text-white/40 text-slate-500 dark:bg-white/5 bg-black/5
                        px-3 py-1.5 rounded-full border dark:border-white/10 border-black/10">
                        <Calendar className="w-3 h-3" />
                        {exp.duration || exp.period || exp.date}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-sm dark:text-white/55 text-slate-600 leading-relaxed mb-3">
                        {exp.description}
                      </p>
                    )}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm dark:text-white/50 text-slate-600">
                            <span className="dark:text-cyan-400 text-cyan-600 mt-0.5 flex-shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <ResumeSection icon={GraduationCap} title="Education" accent="violet">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu: any, i: number) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <GlassCard glow="violet" className="p-6">
                    <h3 className="font-semibold dark:text-white text-slate-900 leading-snug">
                      {edu.degree || edu.qualification}
                    </h3>
                    <p className="dark:text-violet-400 text-violet-600 font-mono text-sm mt-1">
                      {edu.institution || edu.school || edu.college}
                    </p>
                    <div className="flex items-center gap-3 mt-3 font-mono text-xs dark:text-white/40 text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.duration || edu.period || edu.year}
                      </span>
                       {edu.location && (
                    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider dark:text-white/40 text-slate-500 bg-white/5 dark:bg-violet-500/5 px-2 py-1 rounded-md border border-violet-500/10">
                      <MapPin className="w-3 h-3 text-violet-500" />
                      {edu.location}
                    </div>
                  )}
                      {/* {(edu.cgpa || edu.gpa || edu.percentage) && (
                        <span className="dark:text-cyan-400/70 text-cyan-600/80">
                          {edu.cgpa || edu.gpa || edu.percentage}
                        </span>
                      )} */}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Skills */}
        {skillCategories.length > 0 && (
          <ResumeSection icon={Code2} title="Technical Skills" accent="cyan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((cat: any, i: number) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <GlassCard className="p-5">
                    <h4 className="font-mono text-xs tracking-widest dark:text-cyan-400/70 text-cyan-600/80 uppercase mb-4">
                      {cat.category || "Skills"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(cat.items || cat.skills || cat).map((skill: any, j: number) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg font-mono text-xs
                            dark:bg-white/[0.05] bg-black/[0.05] dark:border-white/[0.08] border-black/[0.08] border
                            dark:text-white/65 text-slate-700"
                        >
                          {typeof skill === "string" ? skill : skill.name}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <ResumeSection icon={Code2} title="Key Projects" accent="violet">
            <div className="space-y-4">
              {projects.map((proj: any, i: number) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <GlassCard className="p-6 group">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-semibold dark:text-white text-slate-900 group-hover:dark:text-violet-400 group-hover:text-violet-600 transition-colors">
                        {proj.title}
                      </h3>
                      <div className="flex gap-2 flex-shrink-0">
                        {!!proj.github?.trim() && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer"
                            className="font-mono text-xs dark:text-white/40 text-slate-400 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" /> Code
                          </a>
                        )}
                        {!!proj.link?.trim() && (
                          <a href={proj.link} target="_blank" rel="noopener noreferrer"
                            className="font-mono text-xs dark:text-cyan-400/60 text-cyan-600/70 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm dark:text-white/50 text-slate-600 leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    {proj.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {proj.technologies.map((tech: string) => (
                          <span key={tech} className="px-2 py-0.5 rounded-full font-mono text-[10px]
                            dark:bg-violet-500/10 bg-violet-500/12 dark:border-violet-500/20 border-violet-400/25 border
                            dark:text-violet-400 text-violet-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <ResumeSection icon={Award} title="Achievements" accent="cyan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((ach: any, i: number) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <GlassCard className="p-5 flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{ach.icon || "🏆"}</span>
                    <div>
                      <h4 className="font-semibold text-sm dark:text-white text-slate-900">{ach.title}</h4>
                      {ach.description && (
                        <p className="text-xs dark:text-white/45 text-slate-500 mt-1 leading-relaxed">{ach.description}</p>
                      )}
                      {!!ach.link?.trim() && (
                        <a 
                          href={ach.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 font-mono text-[10px] dark:text-cyan-400/60 text-cyan-600/70 hover:dark:text-cyan-400 hover:text-cyan-600 transition-colors"
                        >
                          View Credential ↗
                        </a>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ResumeSection>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t dark:border-white/[0.05] border-black/[0.05]"
        >
          <p className="font-mono text-sm dark:text-white/30 text-slate-400 mb-4">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm
              dark:bg-cyan-500/15 bg-cyan-500/20 dark:border-cyan-500/30 border-cyan-500/40 border
              dark:text-cyan-400 text-cyan-700 hover:shadow-glow-cyan transition-all duration-300"
          >
            Get In Touch ↗
          </a>
        </motion.div>

      </div>
    </div>
  );
}
