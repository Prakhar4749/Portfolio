import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonText } from "@/components/ui/neon-text";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md w-full"
      >
        <GlassCard glow="cyan" className="p-12 flex flex-col items-center gap-6">
          <div className="font-mono text-8xl font-bold">
            <NeonText color="cyan">404</NeonText>
          </div>
          <div>
            <h1 className="text-2xl font-bold dark:text-white text-slate-900 mb-2">
              Page Not Found
            </h1>
            <p className="dark:text-white/50 text-slate-500 text-sm font-mono">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-sm
                  dark:bg-cyan-500/15 bg-cyan-500/20 dark:border-cyan-500/30 border-cyan-500/40 border
                  dark:text-cyan-400 text-cyan-700 hover:shadow-glow-cyan transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Home
              </motion.button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-sm
                dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
                dark:text-white/60 text-slate-600 dark:hover:bg-white/10 hover:bg-black/8
                transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
