import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/data/resume";
import { Download, Mail, Phone, Github, Linkedin, MapPin, Calendar, Building, GraduationCap, Award, Code } from "lucide-react";

const Resume = () => {
  // Download PDF from public folder (React/static hosting)
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Prakhar_Resume.pdf'; // Path to your PDF in public folder
  link.download = 'Prakhar_Resume.pdf'; // Desired filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive overview of my professional experience and qualifications
          </p>
          <Button onClick={handleDownloadResume} size="lg" className="mb-8">
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-lg">
            <CardContent className="p-8">
              {/* Header Section */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{resumeData.hero.headline}</p>
                
                {/* Contact Info */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{resumeData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <span>{resumeData.personalInfo.github}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Linkedin className="w-4 h-4" />
                    <span>{resumeData.personalInfo.linkedin}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="pl-7">
                  <h3 className="text-lg font-semibold">{resumeData.education.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{resumeData.education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{resumeData.education.duration}</span>
                  </div>
                </div>
              </motion.section>

              <Separator className="my-8" />

              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="pl-7 border-l-2 border-muted relative"
                    >
                      <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                      
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold">{exp.position}</h3>
                            <p className="text-muted-foreground font-medium">
                              {exp.company}
                              {exp.type && <span className="text-sm"> • {exp.type}</span>}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                              {exp.current && (
                                <Badge variant="secondary" className="ml-2">Current</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-1 mt-3">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              • {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <Separator className="my-8" />

              {/* Projects */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Projects</h2>
                </div>
                <div className="space-y-6">
                  {resumeData.projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="pl-7"
                    >
                      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.credentials && (
                        <p className="text-xs text-muted-foreground italic">
                          Demo: {project.credentials}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <Separator className="my-8" />

              {/* Skills */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Technologies</h2>
                </div>
                <div className="pl-7 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Languages:</h4>
                    <p className="text-muted-foreground">{resumeData.skills.languages.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <p className="text-muted-foreground">
                      {[...resumeData.skills.frontend, ...resumeData.skills.backend, ...resumeData.skills.databases, ...resumeData.skills.tools].join(", ")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Soft Skills:</h4>
                    <p className="text-muted-foreground">{resumeData.skills.softSkills.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Areas of Interest:</h4>
                    <p className="text-muted-foreground">{resumeData.interests.join(", ")}</p>
                  </div>
                </div>
              </motion.section>

              <Separator className="my-8" />

              {/* Achievements */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <ul className="pl-7 space-y-2">
                  {resumeData.achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </motion.section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;