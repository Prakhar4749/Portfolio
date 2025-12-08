import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { resumeData } from "@/data/resume";
import { 
  Code, 
  Database, 
  Wrench, 
  Brain, 
  Cloud, 
  Server, 
  Layers 
} from "lucide-react";

// 1. Define Precise Skill Levels based on your profile analysis
const getSkillLevel = (skillName) => {
  const levels = {
    // Primary Stack (Your Strongest Area)
    "Java": 95,
    "Spring Boot 3": 92,
    "Microservices Architecture": 90,
    "JDBC (Native SQL)": 90, // High because of your specific optimization work
    "Spring Security (JWT)": 88,
    "MySQL": 88,
    "PostgreSQL": 85,
    "Spring Cloud (Gateway, Eureka)": 85,
    "Hibernate/JPA": 82, // Slightly lower as you prefer JDBC for performance
    "Docker": 80,

    // Secondary (Solid, but not your main focus)
    "React.js": 82,
    "Node.js": 75,
    "MongoDB": 78,
    "Redis": 80, // Used in internship for caching
    "Firebase": 70,

    // Languages
    "SQL": 90,
    "JavaScript (ES6+)": 85,
    "HTML5": 90,
    "CSS3": 85,
    "C++": 75, // Good for DSA, but maybe used less in dev
    "Python": 70,

    // Core Concepts
    "DSA": 88, // Supported by CodeVita & LeetCode stats
    "System Design (HLD/LLD)": 85,
    "REST API Design": 92,
    "OOPS": 95,
    "Agile/Scrum": 85,

    // Tools
    "Git/GitHub": 90,
    "Postman": 95,
    "IntelliJ IDEA": 95,
    "Linux": 80,
    "Maven": 88,
    "VS Code": 90
  };

  // Default fallback if a new skill is added without a defined level
  return levels[skillName] || 75;
};

const skillCategories = [
  {
    title: "Primary Stack",
    icon: Server,
    skills: resumeData.skills.primaryStack.map(skill => ({ 
      name: skill, 
      level: getSkillLevel(skill) 
    })),
    color: "text-blue-500"
  },
  {
    title: "Secondary Technologies",
    icon: Layers,
    skills: resumeData.skills.secondary.map(skill => ({ 
      name: skill, 
      level: getSkillLevel(skill) 
    })),
    color: "text-green-500"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: resumeData.skills.languages.map(skill => ({ 
      name: skill, 
      level: getSkillLevel(skill) 
    })),
    color: "text-purple-500"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: resumeData.skills.tools.map(skill => ({ 
      name: skill, 
      level: getSkillLevel(skill) 
    })),
    color: "text-orange-500"
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: resumeData.skills.coreConcepts.map(skill => ({ 
      name: skill, 
      level: getSkillLevel(skill) 
    })),
    color: "text-pink-500"
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A quantitative breakdown of my technical proficiency, highlighting my specialization in high-performance backend systems.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-muted/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>
                        {category.skills.length} technologies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary / Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden border-muted/50">
            <CardHeader className="text-center bg-muted/20 pb-8">
              <CardTitle className="text-2xl mb-2">Full Technology Stack</CardTitle>
              <CardDescription>
                A comprehensive view of my development ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
                {[
                  ...resumeData.skills.primaryStack,
                  ...resumeData.skills.secondary,
                  ...resumeData.skills.languages,
                  ...resumeData.skills.tools,
                  ...resumeData.skills.coreConcepts
                ].map((tech, index) => (
                  <motion.div
                    key={`${tech}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1.5 px-3 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="border-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Areas of Interest</CardTitle>
              <CardDescription>
                Domains I am actively researching and building in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {resumeData.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="outline" className="text-sm py-2 px-4 border-primary/20 bg-primary/5">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;