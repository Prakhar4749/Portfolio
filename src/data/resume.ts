

export const resumeData = {
  personalInfo: {
    name: "Prakhar Sakhare",
    email: "prakharsakhare2226@gmail.com",
    phone: "+91 6232625599",
    github: "Prakhar4749",
    linkedin: "prakhar2712",
    instagram: "prakhar_.2712",
    leetcode: "prakhar2712"
  },
  
  hero: {
    headline: "Full Stack Developer",
    intro: "Passionate developer building scalable web applications with modern technologies. Experience in both frontend and backend development with a focus on creating efficient, user-friendly solutions.",
    tagline: "Turning ideas into digital reality"
  },

  education: {
    degree: "B.Tech in Information Technology",
    institution: "University Institute of Technology RGPV",
    duration: "2022 – Present"
  },

  experience: [
    {
      id: 1,
      company: "Thinkfluence Systems Private Limited",
      position: "Full Stack Developer Intern",
      duration: "May 2025 - Present",
      current: true,
      description: [
        "Working on BoostExpo- the world's first marketplace for the event and exhibition industry.",
        "Developing full-stack features for a B2B digital platform under mentorship of CTO and senior developers.",
        "Performance-based internship with continuous learning and exposure to scaling digital platforms."
      ]
    },
    {
      id: 2,
      company: "Evolve",
      position: "Full Stack Developer Intern",
      duration: "Feb 2025 - May 2025",
      current: false,
      description: [
        "Worked as a Full Stack Developer developing both frontend and backend components for client projects.",
        "Built responsive web applications using modern JavaScript frameworks and libraries."
      ]
    },
    {
      id: 3,
      company: "ASPER",
      position: "Junior Web Developer",
      duration: "March 2023 - Jul 2023",
      current: false,
      type: "College's technical club",
      description: [
        "Previously worked as a Junior Web Developer, where I developed skills in frontend technologies including HTML, CSS, and JavaScript."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "Payroll System Fullstack Web Application",
      description: "This application manages employee information and generates monthly payslips for each employee. Built a Fullstack Payroll system in MERN for college Accounts department.",
      technologies: ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MySQL", "JWT"],
      github: "https://github.com/Prakhar4749",
      liveDemo: "#",
      featured: true,
      credentials: "Username: admin, Password: admin"
    },
    {
      id: 2,
      name: "Cohort Platform API",
      description: "Developed a backend API system for a cohort-based Community platform with JWT authentication. Created RESTful APIs for user management and deployed on Render with Postman documentation.",
      technologies: ["NodeJS", "ExpressJS", "MongoDB Atlas", "Cloudinary", "Postman"],
      github: "https://github.com/Prakhar4749",
      liveDemo: "#",
      postman: "#",
      featured: true
    }
  ],

  skills: {
    languages: ["JavaScript", "Python", "C++"],
    frontend: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["NodeJS", "ExpressJS", "RESTful APIs"],
    databases: ["MongoDB", "MySQL", "MongoDB Atlas"],
    tools: ["Git", "Postman", "Firebase", "Cloudinary", "Context API", "Brevo"],
    cloudComputing: ["Render", "MongoDB Atlas", "Firebase"],
    softSkills: ["Adaptability", "Problem-Solving", "Collaboration", "Efficient use of AI"]
  },

  achievements: [
    "Ranked among Top 20 coders in CodeAdept 8.0 (Coding Competition hosted by DoIT, UIT-RGPV)",
    "Solved 100+ DSA Problems in C++ on Leetcode"
  ],

  interests: [
    "Frontend Development",
    "Backend Development", 
    "Cloud Computing",
    "Data Structures & Algorithms",
    "Web Performance Optimization"
  ]
};

export type ResumeData = typeof resumeData;