import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import automedicsPreview from "@/app/images/automedics-preview-v2.webp"
import entitledPreview from "@/app/images/entitled-preview-v2.webp"
import IconSpritePreview from "@/app/images/zero-icon-sprite-preview.jpg"
import zeroPreview from "@/app/images/react-zero-ui-preview.jpg"
import vetsChoiceInsurancePreview from "@/images/vets-choice-insurance-preview.webp"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  title: string // Project Name
  href: string // Live Preview
  githubUrl: string // GitHub Repo
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "apihub",
    src: zeroPreview, // Placeholder
    alt: "APIHub Preview",
    color: "#3B06D1",
    type: "API Discovery Platform",
    text: "View on GitHub",
    title: "APIHub",
    href: "https://github.com/mahirpatel2005", // User can update this to live URL
    githubUrl: "https://github.com/mahirpatel2005",
    ariaLabel: "View APIHub on GitHub",
    isExternal: true,
  },
  {
    id: "numble",
    src: bespokePreview, // Placeholder
    alt: "Numble Preview",
    color: "#024EFC",
    type: "Web Game (Number Guessing)",
    text: "View on GitHub",
    title: "Numble",
    href: "https://github.com/mahirpatel2005",
    githubUrl: "https://github.com/mahirpatel2005",
    ariaLabel: "View Numble on GitHub",
    isExternal: true,
  },
  {
    id: "slippy-clone",
    src: iaoPreview, // Placeholder
    alt: "Slippy Clone Preview",
    color: "#13739C",
    type: "UI Clone / Frontend",
    text: "View on GitHub",
    title: "Slippy Clone",
    href: "https://github.com/mahirpatel2005",
    githubUrl: "https://github.com/mahirpatel2005",
    ariaLabel: "View Slippy Clone on GitHub",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            return (
              <div key={project.id} className="h-full w-full">
                <Card
                  src={project.src}
                  alt={project.alt}
                  liveUrl={project.href}
                  githubUrl={project.githubUrl}
                  title={project.title}
                  detailUrl={`${SITE_SLUGS.projects}/${project.id}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
