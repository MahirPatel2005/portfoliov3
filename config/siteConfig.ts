export const DOMAIN_URL = "https://mahir-patel.tech"

export const SITE_CONFIG = {
  title: "Mahir Patel | Full-Stack Developer & MERN Specialist",
  description: "Mahir Patel is a skilled Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js) and Next.js. Explore his portfolio of scalable web applications and software engineering projects.",
  url: DOMAIN_URL ?? "https://mahir-patel.tech",
  siteName: "Mahir Patel",
  keywords: [
    "Mahir Patel",
    "Mahir Rakesh Patel",
    "Mahir Patel Portfolio",
    "Mahir Patel Developer",
    "Full-Stack Developer India",
    "MERN Stack Specialist",
    "Next.js Developer India",
    "React.js Expert",
    "Node.js Backend Developer",
    "MongoDB Portfolio",
    "Software Engineer India",
    "Freelance Web Developer India",
    "Frontend Engineer",
    "Scalable Web Architecture",
    "C++ Programmer",
    "System Design Portfolio",
    "APIHub Project",
    "Numble Game Developer",
    "developer",
    "freelancer",
    "portfolio",
    "mahir patel",
    "mahir rakesh patel",
    "mahir r patel",
    "mahir rakesh",
    "mahir",
    "Backend Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "MERN Stack Specialist",
    "MongoDB Developer",
    "MongoDB Specialist",
    "Express.js Developer",
    "Express.js Specialist",
    "Node.js Developer",
    "Node.js Specialist",
    "React.js Developer",
    "React.js Specialist",
    "Next.js Developer",
    "Next.js Specialist",
    "Web Developer",
    "Web Designer",
    "Software Engineer",
    "Freelance Web Developer India"
  ],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  ogImageAlt: "Mahir Patel - Full-Stack Developer Portfolio Hero Image",
  logo: "/serbyte-logo.png",
  authors: [{ name: "Mahir Patel", url: DOMAIN_URL }],
  creator: "Mahir Patel",
  publisher: "Mahir Patel",
} as const

export const SITE_NAP = {
  name: "Mahir Patel",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Mahir Patel",
  contactTitle: "Full-Stack Developer",
  email: "mahir.patel.cg@gmail.com",
  phone: "9558787386", // Phone not provided in resume public section, leaving empty or placeholder if needed
  formattedPhone: "",
  addressLink: "", // Removing specific address link
  street: "",
  city: "",
  state: "India", // Location from resume
  zipCode: "",
  openingHours: [{ days: "Mon - Sat", hours: "9am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    linkedIn: "https://linkedin.com/in/mahir-r-patel",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/mahirpatel2005",
    leetcode: "https://leetcode.com/u/Mahir_R_Patell/",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
    iao: "/projects/iron-and-oak",
    hrms: "/projects/hrms",
    codingProfiles: "/coding-profiles",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
