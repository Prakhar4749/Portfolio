import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { resumeData } from "@/data/resume";
import { Code, Database, Wrench, Brain, Cloud, Terminal, Server, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Primary Stack",
    icon: Server,
    skills: resumeData.skills.primaryStack.map(skill => ({ name: skill, level: 90 })),
    color: "text-blue-500"
  },
  {
    title: "Secondary Technologies",
    icon: Layers,
    skills: resumeData.skills.secondary.map(skill => ({ name: skill, level: 80 })),
    color: "text-green-500"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: resumeData.skills.languages.map(skill => ({ name: skill, level: 85 })),
    color: "text-purple-500"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: resumeData.skills.tools.map(skill => ({ name: skill, level: 82 })),
    color: "text-orange-500"
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: resumeData.skills.coreConcepts.map(skill => ({ name: skill, level: 85 })),
    color: "text-pink-500"
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
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
            A comprehensive overview of my technical skills specializing in Java, Spring Boot, Microservices, and Full Stack Development.
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
              <Card className="h-full">
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
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
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

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Full Technology Stack</CardTitle>
              <CardDescription>
                All technologies I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  ...resumeData.skills.primaryStack,
                  ...resumeData.skills.secondary,
                  ...resumeData.skills.languages,
                  ...resumeData.skills.tools,
                  ...resumeData.skills.coreConcepts
                ].map((tech, index) => (
                  <motion.div
                    key={`${tech}-${index}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
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
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Areas of Interest</CardTitle>
              <CardDescription>
                Technologies and domains I'm passionate about
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
                    <Badge variant="outline" className="text-sm py-2 px-4">
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