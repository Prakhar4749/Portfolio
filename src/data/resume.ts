export const personalInfo = {
  name: "Prakhar Sakhare",
  email: "prakharsakhare2226@gmail.com",
  phone: "+91-6232625599",
  website: "https://www.prakhar.life",
  github: "https://github.com/Prakhar4749",
  location: "Bhopal, India",
  linkedin: "https://linkedin.com/in/prakhar2712/",
  leetcode: "https://leetcode.com/u/prakhar_2712/",
  bio: "GATE CSE 2026 Qualified. I build and self-host high-performance Java backend systems using Spring Boot, Microservices, and Kafka."
};

export const hero = {
  headline: "Java Full Stack Developer",
  intro: "I bridge the gap between academic rigor and production-grade engineering. As a GATE CSE 2026 qualified developer, I specialize in building scalable Microservices and AI-integrated workflows, with a focus on self-hosted infrastructure and system reliability.",
  tagline: "Engineering resilient, high-performance systems from code to cloud.",
  taglines: [
    "GATE CSE 2026 Qualified",
    "Java Full Stack Developer",
    "Spring Boot & Microservices",
    "300+ DSA Problems Solved",
    "System Design Enthusiast",
  ],
};
export const projects = [
  {
    title: "Coindesk: Crypto Trading Simulator",
    description: "Architected a production-grade Microservices trading simulator leveraging Apache Kafka as an asynchronous message handler for non-critical tasks.",
    technologies: ["Spring Boot", "Kafka", "AOP", "Allure"],
    github: "https://github.com/Prakhar4749/Crypto-Trading-Simulator",
    link: "https://coindesk.prakhar.life/",
    highlights: [
      "Ensured zero bottleneck on core trading workflows under high-concurrency loads using Kafka.",
      "Implemented AOP for centralized, human-readable structured logging across all services.",
      "Enforced quality with comprehensive test suites generating automated Allure Reports.",
      "Self-hosted the entire stack on a personal Virtual Machine from scratch, eliminating cloud costs."
    ]
  },
  {
    title: "Jobby: End-to-End AI Job Application Automation Bot",
    description: "Developed a personal AI automation bot integrated directly with Slack as a trigger interface, capable of parsing job descriptions from various URLs and images.",
    technologies: ["Node.js", "Slack API", "AI/LLM"],
    
    highlights: [
      "Eliminated manual job application overhead by parsing LinkedIn posts, career portals, and raw text.",
      "Automated the pipeline to generate and dispatch personalized emails with resume attachments.",
      "Self-deployed on a personal Virtual Machine to ensure 24/7 availability."
    ]
  },
  {
    title: "Retail Sales Management System",
    description: "Engineered a high-performance inventory dashboard capable of processing 1M+ records with <200ms latency.",
    technologies: ["Spring Boot", "React", "SQL", "PostgreSQL", "JDBC", "Context API"],
    github: "https://github.com/Prakhar4749/RetailSalesManagementSystem",
    link: "https://retail-manager.prakhar.life/",
    highlights: [
      "Optimized performance via custom SQL indexing and a dynamic query builder supporting 15+ filters.",
      "Improved UI responsiveness by 30% by optimizing frontend state management with Context API."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "University Institute of Technology, RGPV",
    location: "Bhopal, M.P.",
    duration: "2022 – 2026",
    cgpa: "8.5 CGPA (Current)"
  }
];

export const experience = [
  {
    company: "Thinkfluence Systems Pvt. Ltd. (BoostExpo)",
    role: "Full Stack Developer Intern",
    location: "Remote",
    duration: "May 2025 – July 2025",
    description: "Built an automated email notification module and optimized backend API performance.",
    highlights: [
      "Reduced manual communication efforts by 40% using Java Cron Jobs for automated notifications.",
      "Cut average response latency from 500ms to 200ms on high-traffic endpoints via Redis Caching.",
      "Improved system stability and reduced bug reports by 15% through legacy code refactoring."
    ]
  }
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript (ES6+)", "SQL", "C++"]
  },
  {
    category: "Frameworks",
    items: ["Spring Boot 3", "Spring Cloud", "Hibernate/JPA", "Node.js", "React.js"]
  },
  {
    category: "Distributed Systems",
    items: ["Apache Kafka", "Microservices", "REST APIs", "WebSockets (STOMP)"]
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "Linux (VM Self-Hosting)", "Postman", "Maven", "Allure Reports"]
  }
];

export const achievements = [
  {
    title: "GATE CSE 2026 Qualified",
    description: "Secured a Score of 461, demonstrating a strong grasp of core Computer Science fundamentals and engineering principles.",
    icon: "🎓"
  },
  {
    title: "TCS CodeVita Season 13",
    description: "Advanced to Round 2 with a Global Rank of 5956, placing within the Top 5% of participants worldwide.",
    icon: "🏅"
  },
  {
    title: "Claude Code in Action",
    description: "Completed official certification by Anthropic, focusing on AI-assisted development and production-ready workflows.",
    link: "https://drive.google.com/file/d/1ru_6rURA8ite4ASGzEqZrb7SwfQW-8v6/view?usp=sharing",
    icon: "🏆"
  },
  {
    title: "300+ DSA Problems",
    description: "Solved across all major competitive platforms; secured a Top 20 University Rank in CodeAdept 8.0.",
    icon: "💻"
  }
];

export const interests = [
  "Backend Development",
  "Microservices Architecture",
  "System Design",
  "Open Source",
  "Cloud Computing",
  "Tech Blogging"
];

export const resumeData = {
  personalInfo,
  hero,
  projects,
  education,
  experience,
  skills,
  achievements,
  interests
};
