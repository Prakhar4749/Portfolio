import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin,
  Send, CheckCircle, AlertCircle, Copy, Check,
  MessageSquare, User, AtSign, FileText
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeader } from "@/components/ui/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { submitContactForm, type ContactFormData } from "@/lib/contactService";
import { personalInfo } from "@/data/resume";

import { PageSEO } from "@/components/seo/PageSEO";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(2, "Message must be at least 2 characters"),
});

type FormValues = z.infer<typeof schema>;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200
        dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border
        dark:text-white/40 text-slate-400 dark:hover:text-cyan-400 hover:text-cyan-600"
      title="Copy to clipboard"
    >
      {copied
        ? <Check className="w-3 h-3 text-green-400" />
        : <Copy className="w-3 h-3" />
      }
    </button>
  );
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone || "+91 62326 25599",
    href: `tel:${personalInfo.phone}`,
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, M.P., India",
    href: null,
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: personalInfo.github ? `{personalInfo.github}` : "https://github.com/Prakhar4749",
    value: personalInfo.github || "Prakhar4749",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: personalInfo.linkedin ? `${personalInfo.linkedin}` : "https://www.linkedin.com/in/prakhar2712/",
    value: personalInfo.linkedin || "prakhar2712" ,
  },
];

const inputBase = `w-full rounded-xl px-4 py-3 font-mono text-sm outline-none transition-all duration-200
  dark:bg-white/5 bg-black/[0.04] dark:border-white/10 border-black/[0.08] border
  dark:text-white text-slate-900 dark:placeholder-white/25 placeholder-slate-400
  focus:dark:border-cyan-500/50 focus:border-cyan-500/50 focus:dark:bg-white/8 focus:bg-white/80
  focus:shadow-[0_0_0_3px_rgba(0,245,255,0.08)]`;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    const result = await submitContactForm(data as ContactFormData);
    if (result.success) {
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <PageSEO 
        title="Contact" 
        description="Get in touch with Prakhar for freelance, collaboration or full-time opportunities." 
        path="/contact" 
      />
      <div className="min-h-screen pt-24 md:pt-28 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          label="// get in touch"
          title="Let's"
          highlight="Connect"
          description="Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Left — Contact Info */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Availability banner */}
            <GlassCard glow="cyan" className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs tracking-widest dark:text-green-400 text-green-600 uppercase">
                  Available for work
                </span>
              </div>
              <p className="text-sm dark:text-white/60 text-slate-600 leading-relaxed">
                Currently open to freelance projects, internships, and full-time opportunities. 
                Response time is typically within 24 hours.
              </p>
            </GlassCard>

            {/* Contact details */}
            <GlassCard className="p-5 space-y-4">
              <h3 className="font-mono text-xs tracking-widest dark:text-white/40 text-slate-500 uppercase mb-4">
                Direct Contact
              </h3>
              {contactDetails.map(({ icon: Icon, label, value, href, copyable }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                    dark:bg-cyan-500/10 bg-cyan-500/12 dark:border-cyan-500/20 border-cyan-400/25 border">
                    <Icon className="w-4 h-4 dark:text-cyan-400 text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] dark:text-white/30 text-slate-400 uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm dark:text-white/80 text-slate-800 dark:hover:text-cyan-400 hover:text-cyan-600 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm dark:text-white/80 text-slate-800">{value}</span>
                    )}
                  </div>
                  {copyable && value && <CopyButton text={value} />}
                </div>
              ))}
            </GlassCard>

            {/* Social links */}
            <GlassCard className="p-5">
              <h3 className="font-mono text-xs tracking-widest dark:text-white/40 text-slate-500 uppercase mb-4">
                Social
              </h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, value }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                      dark:hover:bg-white/5 hover:bg-black/5 group"
                  >
                    <Icon className="w-4 h-4 dark:text-white/40 text-slate-500 group-hover:dark:text-cyan-400 group-hover:text-cyan-600 transition-colors" />
                    <div>
                      <p className="font-mono text-xs dark:text-white/30 text-slate-400">{label}</p>
                      <p className="text-sm dark:text-white/70 text-slate-700 group-hover:dark:text-white group-hover:text-slate-900 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard glow="violet" className="p-6 md:p-8">
              <h3 className="font-mono text-sm dark:text-white/60 text-slate-600 mb-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 dark:text-violet-400 text-violet-600" />
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 md:py-16 gap-4 text-center"
                  >
                    <div className="w-16 h-16 rounded-full dark:bg-green-500/10 bg-green-500/15 dark:border-green-500/20 border-green-400/30 border flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-lg font-bold dark:text-white text-slate-900">Message Sent!</h4>
                    <p className="text-sm dark:text-white/50 text-slate-600 max-w-xs">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <div className="font-mono text-xs dark:text-white/20 text-slate-400">
                      Your message has been saved to my inbox ✓
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-1.5 font-mono text-xs dark:text-white/40 text-slate-500 uppercase tracking-wider">
                          <User className="w-3 h-3" /> Name
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className={inputBase}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 font-mono">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-1.5 font-mono text-xs dark:text-white/40 text-slate-500 uppercase tracking-wider">
                          <AtSign className="w-3 h-3" /> Email
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="your@email.com"
                          className={inputBase}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 font-mono">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 font-mono text-xs dark:text-white/40 text-slate-500 uppercase tracking-wider">
                        <FileText className="w-3 h-3" /> Subject
                      </label>
                      <input
                        {...register("subject")}
                        placeholder="What's this about?"
                        className={inputBase}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 font-mono">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 font-mono text-xs dark:text-white/40 text-slate-500 uppercase tracking-wider">
                        <MessageSquare className="w-3 h-3" /> Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        className={`${inputBase} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 font-mono">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-xl dark:bg-red-500/10 bg-red-500/10 dark:border-red-500/20 border-red-400/30 border"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <p className="text-xs font-mono text-red-400">{errorMsg}</p>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                        font-mono text-sm font-medium transition-all duration-300
                        dark:bg-cyan-500/15 bg-cyan-500/20 dark:border-cyan-500/30 border-cyan-500/40 border
                        dark:text-cyan-400 text-cyan-700 hover:shadow-glow-cyan
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 dark:border-cyan-400/30 border-cyan-600/30 dark:border-t-cyan-400 border-t-cyan-600 rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center font-mono text-[10px] dark:text-white/20 text-slate-400">
                      Your message is saved securely. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
