export interface CourseDuration {
  months: number;
  price: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  fullDescription: string;
  image: string;
  level: string;
  category: string;
  durations: CourseDuration[];
  technologies: string[];
  projects: string[];
  careerPaths: string[];
  requirements: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "frontend-development",
    title: "Frontend Development",

    shortDescription:
      "Become a professional Frontend Developer using modern technologies.",

    description:
      "Master HTML, CSS, JavaScript, TypeScript, React, Next.js and Tailwind CSS through practical projects.",

    fullDescription:
      "This comprehensive Frontend Development program is designed to prepare students for real-world software engineering careers. Students will gain practical experience by building responsive websites, business landing pages, dashboards, e-commerce applications, and production-ready React and Next.js projects while learning industry best practices, teamwork using Git and GitHub, UI/UX implementation, deployment, and professional development workflows. By the end of this course, students will have a strong portfolio and the confidence to work as professional Frontend Developers or freelancers.",

    image: "/images/courses/frontend.jpg",

    level: "Beginner to Advanced",

    category: "Web Development",

    durations: [
      { months: 3, price: 80000 },
      { months: 6, price: 150000 },
      { months: 9, price: 210000 },
      { months: 12, price: 280000 },
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],

    projects: [
      "Portfolio Website",
      "Business Landing Page",
      "Restaurant Website",
      "Admin Dashboard",
      "E-commerce Store",
      "Blog Platform",
      "Capstone Project",
    ],

    careerPaths: [
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "UI Engineer",
      "Freelance Web Developer",
    ],

    requirements: [
      "Laptop (Windows or macOS)",
      "Stable Internet Connection",
      "Commitment to Learn",
      "Basic Computer Knowledge",
    ],
  },

  {
    id: "2",
    slug: "backend-development",

    title: "Backend Development",

    shortDescription:
      "Learn how to build secure APIs and backend systems.",

    description:
      "Master Node.js, Express.js, PostgreSQL, Prisma ORM, REST APIs and Authentication.",

    fullDescription:
      "This Backend Development program teaches students how to design, build, secure, and deploy scalable server-side applications using modern technologies. Students will build real-world APIs, authentication systems, databases, payment integrations, and backend architectures used in production applications.",

    image: "/images/courses/backend.jpg",

    level: "Intermediate",

    category: "Web Development",

    durations: [
      { months: 3, price: 90000 },
      { months: 6, price: 170000 },
      { months: 9, price: 240000 },
      { months: 12, price: 310000 },
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
      "REST API",
      "Cloudinary",
      "Docker",
      "Git",
      "Render",
    ],

    projects: [
      "Authentication API",
      "Blog API",
      "E-commerce Backend",
      "Learning Management API",
      "Payment Integration",
      "Inventory Management System",
    ],

    careerPaths: [
      "Backend Developer",
      "API Developer",
      "Node.js Developer",
      "Software Engineer",
    ],

    requirements: [
      "Laptop",
      "Stable Internet",
      "Basic JavaScript Knowledge",
    ],
  },

  {
    id: "3",

    slug: "fullstack-development",

    title: "Full Stack Development",

    shortDescription:
      "Become a complete Full Stack Developer from beginner to professional level.",

    description:
      "Master both Frontend and Backend Development using modern technologies.",

    fullDescription:
      "This intensive Full Stack Development program combines frontend and backend engineering into one professional learning experience. Students will design, build, deploy, and maintain complete web applications while learning software engineering best practices, teamwork, deployment, authentication, databases, and cloud technologies.",

    image: "/images/courses/fullstack.jpg",

    level: "Beginner to Advanced",

    category: "Software Engineering",

    durations: [
      { months: 6, price: 250000 },
      { months: 9, price: 350000 },
      { months: 12, price: 450000 },
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Git",
      "Docker",
      "Vercel",
      "Render",
    ],

    projects: [
      "Full LMS",
      "Banking Dashboard",
      "Social Media Platform",
      "E-commerce Application",
      "Hospital Management System",
      "Capstone Project",
    ],

    careerPaths: [
      "Full Stack Developer",
      "Software Engineer",
      "Web Application Developer",
      "Technical Consultant",
      "Freelancer",
    ],

    requirements: [
      "Laptop",
      "Internet Connection",
      "Commitment",
      "Willingness to Learn",
    ],
  },
];