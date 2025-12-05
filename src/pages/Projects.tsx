import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/data/resume";

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

  // Featured projects from resume data
  const featuredProjects = resumeData.projects.map(project => ({
    name: project.name.toLowerCase().replace(/\s+/g, '-'),
    repoName: project.github?.split('/').pop() || '',
    title: project.name,
    description: project.description,
    techStack: project.technologies,
    liveUrl: project.liveDemo || '',
    githubUrl: project.github || '',
    status: project.status,
    features: [],
    credentials: project.credentials
  }));

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async (): Promise<void> => {
  try {
    setLoading(true);

    const response = await fetch(
      "https://api.github.com/users/Prakhar4749/repos?sort=updated&per_page=20",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "prakhar-portfolio", // any string is fine
        },
      }
    );

    if (!response.ok) {
      console.error("GitHub API error:", response.status, response.statusText);
      return;
    }

    const data = (await response.json()) as Repository[];

    // Optional: sort again just to be sure
    const sorted = [...data].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    setRepos(sorted);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  } finally {
    setLoading(false);
  }
};


  const getProjectDetails = (repo: Repository) => {
    const featured = featuredProjects.find(p => 
      p.repoName.toLowerCase() === repo.name.toLowerCase() ||
      repo.name.toLowerCase().includes('payroll') ||
      repo.name.toLowerCase().includes('cohort')
    );
    
    return featured || {
      name: repo.name,
      title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || "No description available",
      techStack: repo.topics?.length > 0 ? repo.topics : [repo.language].filter(Boolean),
      liveUrl: repo.homepage,
      githubUrl: repo.html_url,
      status: '',
      features: [],
      credentials: ''
    };
  };

  const isFeaturedRepo = (repo: Repository) => {
    return featuredProjects.some(p => 
      p.repoName.toLowerCase() === repo.name.toLowerCase() ||
      repo.name.toLowerCase().includes('payroll') ||
      repo.name.toLowerCase().includes('cohort')
    );
  };

  const filteredRepos = repos.filter(repo => {
    if (filter === "all") return true;
    if (filter === "featured") return isFeaturedRepo(repo);
    return repo.language?.toLowerCase() === filter.toLowerCase();
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading projects...</p>
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
            Here are some of my featured projects showcasing my expertise in Java, Spring Boot, Microservices, and React development.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "featured", "Java", "JavaScript", "TypeScript"].map((filterOption) => (
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

        {/* Featured Projects from Resume */}
        {filter === "featured" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full ring-2 ring-primary relative overflow-hidden">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="default" className="text-xs">
                      Featured
                    </Badge>
                    {project.status && (
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pt-12">
                    <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Credentials if available */}
                    {project.credentials && (
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-xs text-muted-foreground">
                          <strong>Demo Credentials:</strong> {project.credentials}
                        </p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.github && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveDemo && (
                        <Button
                          asChild
                          size="sm"
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub Repositories */}
        {filter !== "featured" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo, index) => {
              const projectDetails = getProjectDetails(repo);
              const isFeatured = isFeaturedRepo(repo);
              
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
        )}

        {filteredRepos.length === 0 && filter !== "featured" && (
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
            <a href={`https://github.com/${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer">
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