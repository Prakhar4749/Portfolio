import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { resumeData } from "@/data/resume";
import { Code, Database, Wrench, Brain, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: resumeData.skills.languages.map(skill => ({ name: skill, level: 85 })),
    color: "text-blue-500"
  },
  {
    title: "Frontend Technologies",
    icon: Terminal,
    skills: resumeData.skills.frontend.map(skill => ({ name: skill, level: 80 })),
    color: "text-green-500"
  },
  {
    title: "Backend Technologies",
    icon: Database,
    skills: resumeData.skills.backend.map(skill => ({ name: skill, level: 82 })),
    color: "text-purple-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: resumeData.skills.databases.map(skill => ({ name: skill, level: 75 })),
    color: "text-orange-500"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: resumeData.skills.tools.map(skill => ({ name: skill, level: 78 })),
    color: "text-red-500"
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    skills: resumeData.skills.cloudComputing.map(skill => ({ name: skill, level: 70 })),
    color: "text-cyan-500"
  }
];

const softSkillsData = resumeData.skills.softSkills.map(skill => ({
  name: skill,
  description: getSkillDescription(skill)
}));

function getSkillDescription(skill: string): string {
  const descriptions: { [key: string]: string } = {
    "Adaptability": "Quick to learn new technologies and adapt to changing requirements",
    "Problem-Solving": "Strong analytical thinking and systematic approach to complex challenges",
    "Collaboration": "Effective team player with excellent communication skills",
    "Efficient use of AI": "Leveraging AI tools to enhance productivity and code quality"
  };
  return descriptions[skill] || "";
}

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
            A comprehensive overview of my technical skills and areas of expertise.
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

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-pink-500" />
                <CardTitle className="text-2xl">Soft Skills</CardTitle>
              </div>
              <CardDescription>
                Personal qualities that enhance my technical abilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softSkillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Technology Stack</CardTitle>
              <CardDescription>
                All technologies I work with regularly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  ...resumeData.skills.languages,
                  ...resumeData.skills.frontend,
                  ...resumeData.skills.backend,
                  ...resumeData.skills.databases,
                  ...resumeData.skills.tools.slice(0, 5), // Limit tools to avoid clutter
                  ...resumeData.skills.cloudComputing
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
      </div>
    </div>
  );
};

export default Skills;