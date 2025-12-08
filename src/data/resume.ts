export const resumeData = {
  personalInfo: {
    name: "Prakhar Sakhare",
    email: "prakharsakhare2226@gmail.com",
    phone: "+91-6232625599",
    website: "www.prakhar.life",
    github: "Prakhar4749",
    linkedin: "prakhar2712",
    leetcode: "prakhar_2712"
  },

  hero: {
    headline: "Java Full Stack Developer",
    intro: "Java Full Stack Developer and Backend Engineer specializing in Java, Spring Boot, Microservices, and React. Experienced in designing scalable backend architectures, secure authentication flows, and production-ready deployments. Delivered applications including a payroll automation platform and a real-time B2B marketplace. Strong foundation in DSA, System Design, Docker, Redis, and SQL.",
    tagline: "Building reliable, high-performance systems"
  },

  education: {
    degree: "B.Tech in Information Technology",
    institution: "University Institute of Technology, RGPV",
    location: "Bhopal, M.P.",
    duration: "Nov 2022 – June 2026 (Expected)"
  },

  experience: [
    {
      id: 1,
      company: "Thinkfluence Systems Pvt. Ltd.",
      position: "Full Stack Developer Intern",
      location: "Remote",
      duration: "May 2025 – July 2025",
      current: false,
      description: [
        "Built a real-time B2B marketplace platform enabling instant messaging and seamless user interaction, improving deal cycle efficiency by 25%.",
        "Designed and deployed a modular service that incorporated Redis caching, scheduled data processing, and asynchronous workflows, reducing query latency by 40%."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Retail Sales Management System",
      status: "Completed",
      description: "Developed a high-performance inventory dashboard using Spring Boot and React. Engineered a custom dynamic SQL query builder (JDBC) to handle 10 Lakh+ (1M+) records, achieving <200ms latency via server-side pagination and reducing query overhead by 40% compared to standard JPA.",
      technologies: ["Spring Boot", "React", "JDBC", "SQL", "PostgreSQL", "Context API"],
      github: "https://github.com/Prakhar4749/RetailSalesManagementSystem", // Update this link if different
      liveDemo: "https://retail-manager.prakhar.life/", // Add link if available
      featured: true
    },
    {
      id: 2,
      name: "Payroll Management System",
      status: "Deployed",
      description: "Developed and deployed a production-ready payroll automation platform using Spring Boot, React, and MySQL, reducing manual processing and improving reliability. Implemented secure JWT authentication with role-based access control (RBAC) and optimized data persistence using Hibernate/JPA.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Hibernate/JPA"],
      github: "https://github.com/Prakhar4749/payroll-system",
      liveDemo: "https://payroll.project.prakhar.life/",
      featured: true,
      credentials: "Username: admin, Password: admin"
    },
    {
      id: 3,
      name: "University IT Dept. Portal",
      status: "In Development",
      description: "Architecting a scalable microservices system using Spring Boot and React with polyglot persistence (PostgreSQL + MongoDB) and API Gateway-style routing. Building modules including resume parsing, approval workflows, and Redis-accelerated public data.",
      technologies: ["Spring Boot", "React", "Docker", "PostgreSQL", "MongoDB", "Redis", "Spring Security"],
      github: "https://github.com/Prakhar4749/University-IT-Portal",
      srs: "#",
      featured: true
    }
  ],

  skills: {
    primaryStack: [
      "Java",
      "Spring Boot 3",
      "Spring Cloud (Gateway, Eureka)",
      "Spring Security (JWT)",
      "Hibernate/JPA",
      "JDBC (Native SQL)",
      "Microservices Architecture",
      "PostgreSQL",
      "MySQL",
      "Docker"
    ],
    secondary: ["React.js", "Node.js", "MongoDB", "Redis", "Firebase"],
    languages: ["Java", "SQL", "JavaScript (ES6+)", "C++", "Python", "HTML5", "CSS3"],
    tools: ["Git/GitHub", "Postman", "Maven", "IntelliJ IDEA", "Linux", "VS Code"],
    coreConcepts: ["REST API Design", "System Design (HLD/LLD)", "OOPS", "DSA", "Agile/Scrum"]
  },

  achievements: [
    "TCS CodeVita Season 13: Qualified Round 2 with a Global Rank of 5956",
    "CodeAdept 8.0 (UIT-RGPV): Secured Top 20 Rank in the university-level coding competition",
    "LeetCode Problem Solving: Solved 150+ DSA problems on LeetCode demonstrating consistency in problem solving"
  ],

  interests: [
    "Backend Development",
    "Microservices Architecture",
    "System Design",
    "Data Structures & Algorithms",
    "Cloud Computing"
  ]
};

export type ResumeData = typeof resumeData;