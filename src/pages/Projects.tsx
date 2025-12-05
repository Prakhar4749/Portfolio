import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("featured");

  // Featured projects with additional details
  const featuredProjects = [
    {
      name: "payroll",
      title: "Payroll System – Fullstack Web Application",
      description: "A comprehensive payroll management system that handles employee information and generates monthly payslips. Built with MERN stack featuring JWT authentication and admin panel.",
      techStack: ["React", "Node.js", "Express", "MySQL", "JWT"],
      liveUrl: "https://payroll-frontend-omega.vercel.app/",
      features: ["Employee Management", "Payslip Generation", "JWT Authentication", "Admin Dashboard"]
    },
    {
      name: "cohort_platform_assesment",
      title: "Cohort Platform API",
      description: "Backend API for a cohort-based community platform with comprehensive JWT authentication system and RESTful API design.",
      techStack: ["Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
      liveUrl: "https://cohortplatform.onrender.com/",
      features: ["User Management", "JWT Authentication", "File Upload", "RESTful APIs"]
    }
  ];

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Prakhar4749/repos?sort=updated&per_page=20');
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  const getProjectDetails = (repo: Repository) => {
    const featured = featuredProjects.find(p => p.name === repo.name);
    return featured || {
      name: repo.name,
      title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || "No description available",
      techStack: repo.topics || [repo.language].filter(Boolean),
      liveUrl: repo.homepage,
      features: []
    };
  };

  const filteredRepos = repos.filter(repo => {
    if (filter === "all") return true;
    if (filter === "featured") return featuredProjects.some(p => p.name === repo.name);
    return repo.language?.toLowerCase() === filter.toLowerCase();
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Here are some of my featured projects and contributions. Each project represents a learning journey and showcases different aspects of my development skills.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "featured", "JavaScript", "Python", "C++"].map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className="transition-all duration-300"
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo, index) => {
            const projectDetails = getProjectDetails(repo);
            const isFeatured = featuredProjects.some(p => p.name === repo.name);
            
            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className={`h-full relative overflow-hidden ${isFeatured ? 'ring-2 ring-primary' : ''}`}>
                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{projectDetails.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {projectDetails.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.techStack.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                      {projectDetails.techStack.length > 4 && (
                        <Badge variant="secondary" className="text-sm">
                          +{projectDetails.techStack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-4 w-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                    </div>

                    {/* Features for featured projects */}
                    {isFeatured && projectDetails.features.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <ul className="text-muted-foreground text-xs space-y-1">
                          {projectDetails.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex space-x-2 pt-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1"
                      >
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {projectDetails.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1"
                        >
                          <a href={projectDetails.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {filteredRepos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">No projects found for the selected filter.</p>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="px-8 py-3 rounded-full">
            <a href="https://github.com/Prakhar4749" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;