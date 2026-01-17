import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import {
    bespoke,
    automedicsKirkland,
    iao,
    apihub,
    numble,
    slippyClone,
    dayflow,
    ProjectData
} from "@/app/data/project-data"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// Map slugs to project data
const projectsMap: Record<string, ProjectData> = {
    [bespoke.slug]: bespoke,
    [automedicsKirkland.slug]: automedicsKirkland,
    [iao.slug]: iao,
    [apihub.slug]: apihub,
    [numble.slug]: numble,
    [slippyClone.slug]: slippyClone,
    [dayflow.slug]: dayflow,
}

// Generate static params for all projects
export async function generateStaticParams() {
    return Object.keys(projectsMap).map((slug) => ({
        slug: slug,
    }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = projectsMap[slug]

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    // Convert ReactNode title to string properly if needed, or just use client
    // For simplicity, using client name as fallback or a hardcoded string if complex
    const titleString = typeof project.hero.title === 'string'
        ? project.hero.title
        : `${project.hero.client} Project`

    return {
        title: `Mahir Patel - ${titleString}`,
        description: typeof project.hero.description === 'string'
            ? project.hero.description
            : `Details about the ${project.hero.client} project.`,
        alternates: {
            canonical: `/projects/${project.slug}`,
        }
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projectsMap[slug]

    if (!project) {
        notFound()
    }

    return <ProjectDisplay projectData={project} />
}
