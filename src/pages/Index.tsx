import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { resumeData } from "@/data/resume";
import { ArrowDown, Github, Linkedin, Code, Zap, Braces } from "lucide-react";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 25);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="inline-block">
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(yPos, springConfig);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1) 0%, transparent 50%)`
            }}
          />
        </div>

        <FloatingElements />

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 z-10"
          style={{ y, opacity, scale }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Large Screen Layout - Profile and Content Side by Side */}
            <div className="hidden xl:grid xl:grid-cols-5 xl:gap-12 xl:items-center xl:min-h-[70vh]">
              {/* Profile Photo - Left Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="xl:col-span-2 flex justify-center"
              >
                <div className="relative w-64 h-64 2xl:w-80 2xl:h-80">
                  {/* Rotating Border Layer */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/70 to-secondary p-[4px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </motion.div>

                  {/* Pulsing Inner Ring */}
                  <motion.div
                    className="absolute inset-[8px] rounded-full bg-gradient-to-r from-primary/30 to-secondary/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Static Profile Image Layer */}
                  <div className="absolute inset-[8px]">
                    <img
                      src="/profile-photo.png"
                      alt={resumeData.personalInfo.name}
                      className="w-full h-full rounded-full object-cover shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content - Right Side */}
              <div className="xl:col-span-3 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
                    <motion.span
                      className="block text-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Hi, I'm
                    </motion.span>
                    <motion.span
                      className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {resumeData.personalInfo.name}
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6b21a8] via-[#9333ea] to-[#c084fc] bg-clip-text text-transparent animate-gradient mb-4 dark:from-white dark:via-[#d9c8f9] dark:to-[#b49aed]"
                >
                  <Typewriter
                    words={[
                      'Java Full Stack Developer',
                      'Backend Engineer',
                      'Spring Boot Expert',
                      'Microservices Architect'
                    ]}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg 2xl:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
                >
                  {resumeData.hero.intro.substring(0, 200)}...
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex gap-4 mb-8"
                >
                  <Link to="/projects">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      View My Work
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex space-x-6"
                >
                  <motion.a
                    href={`https://github.com/${resumeData.personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={`https://linkedin.com/in/${resumeData.personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href={`https://leetcode.com/u/${resumeData.personalInfo.leetcode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <Braces className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Small to Large Screen Layout - Centered */}
            <div className="xl:hidden text-center">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 sm:mb-6">
                  {/* Rotating Border Layer */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/70 to-secondary p-[2px] sm:p-[3px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </motion.div>

                  {/* Pulsing Inner Ring */}
                  <motion.div
                    className="absolute inset-[4px] sm:inset-[6px] rounded-full bg-gradient-to-r from-primary/30 to-secondary/30"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Static Profile Image Layer */}
                  <div className="absolute inset-[4px] sm:inset-[6px]">
                    <img
                      src="/profile-photo.png"
                      alt={resumeData.personalInfo.name}
                      className="w-full h-full rounded-full object-cover shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  <motion.span
                    className="block text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Hi, I'm
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {resumeData.personalInfo.name}
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 sm:mb-8"
              >
                <TypewriterText text={resumeData.hero.headline} delay={1000} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
              >
                {resumeData.hero.intro.substring(0, 200)}...
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
              >
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-300"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-300"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
              >
                <motion.a
                  href={`https://github.com/${resumeData.personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 sm:p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href={`https://linkedin.com/in/${resumeData.personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 sm:p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.a
                  href={`https://leetcode.com/u/${resumeData.personalInfo.leetcode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 sm:p-4 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg"
                >
                  <Braces className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2 hidden sm:block">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Projects", value: "3+" },
              { label: "LeetCode Problems", value: "150+" },
              { label: "TCS CodeVita Rank", value: "5956" },
              { label: "Technologies", value: "15+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4">
                Let's Connect
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;