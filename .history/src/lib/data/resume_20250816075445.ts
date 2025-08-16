import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export const DATA = {
  name: "Dhruv Aggarwal",
  initials: "DA",
  url: "https://dhruv-agg.netlify.app", // replace with your actual portfolio URL if different
  location: "India / Malta",
  locationLink: "https://www.google.com/maps/place/Malta",
  description:
    "Self-taught programmer & entrepreneur with 8+ years of experience. Co-founder of Sheetsway, building AI-powered audit automation. Passionate about startups, AI, and solving hard problems.",
  summary:
    "I’m a full-stack developer and ML engineer with deep expertise in React, Next.js, TypeScript, Python, and cloud platforms (AWS, Azure, GCP). I co-founded Sheetsway, an AI audit automation platform backed by Malta’s Ministry of Finance and adopted by 20+ audit firms, including Big 4. I’ve built multiple products from scratch, won hackathons, and thrive at the intersection of business and technology.",
  avatarUrl: "https://avatars.githubusercontent.com/u/16366", // update with your GitHub or actual image
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "Cloud (AWS, Azure, GCP)",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "React Native",
    "Flutter",
  ],
  navbar: [
    { href: "/", icon: "home", label: "Home" },
    { href: "/blog", icon: "blog", label: "Blog" },
    { href: "/projects", icon: "work", label: "Projects" },
    { href: "/contact", icon: "contact", label: "Contact" },
  ],
  contact: {
    email: "dhruvagg16366@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhruvagg16366",
        icon: GithubIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruv-agg16366",
        icon: LinkedinIcon,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/dhruvagg16366",
        icon: TwitterIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Sheetsway",
      href: "https://sheetsway.com",
      badges: ["Co-founder", "AI"],
      location: "Malta",
      title: "Co-founder & CEO",
      logoUrl: "https://sheetsway.com/logo.png", // replace if you have an actual logo asset
      start: "2023",
      end: "Present",
      description:
        "Built Sheetsway, an EU-based AI automated audit platform reducing audit costs by 63% and increasing efficiency by 50%. Gained adoption from 20+ large audit firms including Big 4. Partnered with Malta’s Ministry of Finance. Led product vision, ML model development, and client adoption strategy.",
    },
    {
      company: "Freelancing",
      href: "",
      badges: ["React", "Full-stack"],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "2020",
      end: "2023",
      description:
        "Worked as a freelance developer on multiple projects across React, Next.js, Node.js, and mobile apps. Delivered solutions for startups and individual clients, with a focus on performance and scalability.",
    },
  ],
  education: [
    {
      school: "B.Tech in Artificial Intelligence & Machine Learning",
      href: "",
      degree: "Bachelor of Technology",
      logoUrl: "",
      start: "2021",
      end: "Present",
    },
    {
      school: "Self-Taught Programming Journey",
      href: "",
      degree: "Full-stack development & ML specialization",
      logoUrl: "",
      start: "2015",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Sheetsway",
      href: "https://sheetsway.com",
      dates: "2023 – Present",
      active: true,
      description:
        "An AI audit automation platform that streamlines audit workflows, automatically extracts, verifies, and organizes financial data directly in Excel.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Python",
        "PyTorch",
        "Azure",
      ],
      links: [{ type: "Website", href: "https://sheetsway.com", icon: "globe" }],
      image: "",
      video: "",
    },
    {
      title: "AI Avatar Interaction",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Hackathon-winning project: Developed a real-time AI Avatar plugin for Google Meet & Zoom, enabling live full-body motion, facial sync, and instant voice translation into 197 languages.",
      technologies: ["Python", "TensorFlow", "React", "WebRTC"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Onelang",
      href: "",
      dates: "2022",
      active: false,
      description:
        "Attempted a universal programming language project. Gained valuable lessons in product development, community building, and handling technical complexity.",
      technologies: ["C++", "Compiler Design"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Dron Hackathon",
      dates: "2024",
      location: "India",
      description:
        "Won 1st place for building an AI Avatar plugin for Google Meet/Zoom with real-time translation into 197 languages. Recognized for technical innovation and real-world usability.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
};
