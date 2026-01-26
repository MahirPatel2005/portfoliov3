export const DOMAIN_URL = "https://mahir-patel.tech"

export const SITE_CONFIG = {
  title: "Mahir Patel - Full-Stack Developer Portfolio | MERN Stack",
  description: "Portfolio of Mahir Patel, a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js), Next.js, and scaling web applications.",
  url: DOMAIN_URL ?? "https://mahir-patel.tech",
  siteName: "Mahir Patel",
  keywords: [
    "Mahir Patel",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "India",
    "Freelance Developer",
    "Software Engineer",
    "Web Development",
    "UI/UX Design",
    "Frontend Developer",
    "Backend Developer",
    "React Developer India",
    "Next.js Expert",
    "Scalable Web Apps",
    "C++",
    "System Design"
  ],
  ogImage: "/assets/bg-home-poster-optimized.webp",
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
