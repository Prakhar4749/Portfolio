import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 backdrop-blur-2xl dark:bg-black/30 bg-white/60 border-b dark:border-white/[0.06] border-black/[0.07] shadow-glass"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-lg dark:bg-cyan-500/10 bg-cyan-500/15 border dark:border-cyan-500/20 border-cyan-500/30 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow-cyan">
              <Code2 className="w-4.5 h-4.5 dark:text-cyan-400 text-cyan-600" />
              <div className="absolute inset-0 rounded-lg dark:bg-cyan-400/5 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-wider dark:text-white text-slate-900">
              Prakhar<span className="dark:text-cyan-400 text-cyan-600">.</span>dev
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-mono tracking-wide",
                    isActive
                      ? "dark:text-cyan-400 text-cyan-600"
                      : "dark:text-white/60 text-slate-600 dark:hover:text-white hover:text-slate-900"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg dark:bg-cyan-500/10 bg-cyan-500/12 dark:border border dark:border-cyan-500/20 border-cyan-400/25"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/prakhar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium
                dark:bg-cyan-500/10 bg-cyan-500/15 dark:border-cyan-500/20 border-cyan-500/30 border
                dark:text-cyan-400 text-cyan-600 transition-all duration-300
                hover:shadow-glow-cyan dark:hover:bg-cyan-500/20 hover:bg-cyan-500/25"
            >
              <span>Resume</span>
              <span className="text-xs opacity-60">↗</span>
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border flex items-center justify-center dark:text-white/70 text-slate-700 hover:dark:text-white hover:text-slate-900 transition-colors"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl backdrop-blur-2xl
              dark:bg-black/60 bg-white/80 dark:border-white/[0.08] border-black/[0.08] border shadow-glass"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all",
                        isActive
                          ? "dark:bg-cyan-500/10 bg-cyan-500/12 dark:text-cyan-400 text-cyan-600 dark:border-cyan-500/20 border-cyan-400/30 border"
                          : "dark:text-white/60 text-slate-600 dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-slate-900"
                      )}
                    >
                      {isActive && (
                        <div className="w-1 h-1 rounded-full dark:bg-cyan-400 bg-cyan-600 shadow-glow-cyan" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
