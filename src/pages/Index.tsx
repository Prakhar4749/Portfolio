import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Terminal, ExternalLink, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonText } from "@/components/ui/neon-text";
import { PageSEO } from "@/components/seo/PageSEO";
import { useRef } from "react";

// Import from your resume data
import { personalInfo, hero } from "@/data/resume";

const socialLinks = [
  {
    icon: Github,
    href: personalInfo.github ? `${personalInfo.github}` : "https://github.com/Prakhar4749",
    label: "GitHub",
    color: "dark:hover:border-white/30 hover:border-slate-400/50",
  },
  {
    icon: Linkedin,
    href: personalInfo.linkedin ? `${personalInfo.linkedin}` : "https://www.linkedin.com/in/prakhar2712/",
    label: "LinkedIn",
    color: "dark:hover:border-blue-400/50 hover:border-blue-500/50",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    color: "dark:hover:border-cyan-400/50 hover:border-cyan-500/50",
  },
];

const floatingStats = [
  { label: "Projects Built", value: "10+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Open Source", value: "Active" },
];

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <>
      <PageSEO 
        title="Home" 
        description="Prakhar — Full Stack Developer. React, TypeScript, and modern web." 
        path="/" 
      />
      <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-6 pt-20 md:pt-24 pb-12 md:pb-16">

      {/* Floating orbs — decorative */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 dark:bg-cyan-500/5 bg-cyan-400/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 dark:bg-violet-500/5 bg-violet-400/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8 relative z-10">

        {/* Profile Picture with Parallax */}
        <motion.div
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 md:mb-10"
        >
          {/* Decorative neon ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-pulse-slow" />
          <div className="absolute -inset-2 rounded-full border border-violet-500/20 blur-sm" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 dark:border-white/10 border-slate-200 shadow-2xl">
            <img 
              src="/profile-photo.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>

          {/* Floating badge icon */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-1 -bottom-1 md:-right-2 md:-bottom-2 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl dark:bg-slate-900 bg-white border dark:border-white/10 border-slate-200 flex items-center justify-center shadow-lg"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full
            dark:bg-cyan-500/10 bg-cyan-500/12 dark:border-cyan-500/20 border-cyan-400/30 border
            font-mono text-[10px] md:text-xs dark:text-cyan-400 text-cyan-600 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
            <Sparkles className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] dark:text-white/40 text-slate-500 uppercase">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight dark:text-white text-slate-900">
            {personalInfo.name || "Prakhar"}
          </h1>
          <div className="text-lg md:text-2xl font-mono h-8 flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4 md:w-5 md:h-5 dark:text-cyan-400/60 text-cyan-600/60 flex-shrink-0" />
            <NeonText color="cyan">
              <Typewriter
                words={hero?.taglines || [
                  "Full Stack Developer",
                  "React Enthusiast",
                  "Problem Solver",
                  "Open Source Contributor",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </NeonText>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg dark:text-white/55 text-slate-600 max-w-2xl mx-auto leading-relaxed px-2"
        >
          {personalInfo.bio || "Building scalable web applications with modern tech stacks. Passionate about clean code and great user experiences."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <Link to="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full group relative px-8 py-3 rounded-xl font-mono text-sm font-medium overflow-hidden
                dark:bg-cyan-500/15 bg-cyan-500/20 dark:border-cyan-500/30 border-cyan-500/40 border
                dark:text-cyan-400 text-cyan-700 hover:shadow-glow-cyan transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View My Work
              </span>
              <div className="absolute inset-0 dark:bg-cyan-500/10 bg-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-8 py-3 rounded-xl font-mono text-sm font-medium
                dark:bg-white/5 bg-slate-900/8 dark:border-white/10 border-slate-300/60 border
                dark:text-white/80 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-900/12
                dark:hover:border-white/20 hover:border-slate-400/60 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                  dark:text-white/60 text-slate-600 dark:hover:text-white hover:text-slate-900
                  transition-all duration-300 ${color}`}
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
          <div className="hidden sm:block w-px h-6 dark:bg-white/10 bg-black/10 mx-1" />
          <a 
            href="tel:+916232625599" 
            className="flex items-center gap-2 font-mono text-xs dark:text-white/30 text-slate-400 hover:dark:text-cyan-400 hover:text-cyan-600 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 62326 25599</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mt-4 px-4"
        >
          {floatingStats.map(({ label, value }) => (
            <GlassCard key={label} glow="none" className="p-4 text-center" hover>
              <div className="text-xl font-bold font-mono dark:text-cyan-400 text-cyan-600">{value}</div>
              <div className="text-xs dark:text-white/40 text-slate-500 mt-0.5 font-mono tracking-wide">{label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs dark:text-white/25 text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 dark:text-white/25 text-slate-400" />
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}
