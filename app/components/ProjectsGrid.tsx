"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import iaoPreview from "@/app/images/iao-preview-v2.webp"
import bespokePreview from "@/app/images/bespoke-preview-v2.webp"
import reactZeroUIPreview from "@/app/images/react-zero-ui-preview.jpg"
import apiHubScreenshot from "@/public/assets/apihub-screenshot.png"
import numbleScreenshot from "@/public/assets/numble-screenshot.png"
import slippyScreenshot from "@/public/assets/slippy-screenshot.png"
import hrmsScreenshot from "@/public/assets/hrms-screenshot.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["apihub", "numble", "slippy-clone", "hrms"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    apihub: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    numble: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    "slippy-clone": { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    hrms: { rot: -3, s: responsiveScale, dx: isMobile ? -220 : -50, dy: isMobile ? -110 : -35 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"apihub"}
          src={apiHubScreenshot}
          alt={"APIHub Preview"}
          offset={offsets["apihub"]}
          gridId="apihub"
          color="#3B06D1"
          type="API Discovery Platform"
          progress={progress}
          href="http://apihub-pi.vercel.app/"
          githubUrl="https://github.com/MahirPatel2005/0412"
          title="APIHub"
          priority={true}
        />
        <AnimatedCard
          key="numble"
          src={numbleScreenshot}
          alt={"Numble Preview"}
          offset={offsets["numble"]}
          gridId="numble"
          color="#024EFC"
          type="Web Game (Number Guessing)"
          progress={progress}
          href="http://numble0412.netlify.app/"
          githubUrl="https://github.com/MahirPatel2005/0412"
          title="Numble"
        />

        <AnimatedCard
          key="slippy-clone"
          src={slippyScreenshot}
          alt={"Slippy Clone Preview"}
          offset={offsets["slippy-clone"]}
          gridId="slippy-clone"
          color="#13739C"
          type="UI Clone / Frontend"
          progress={progress}
          href="https://slippy1.netlify.app"
          githubUrl="https://github.com/MahirPatel2005/slippy"
          title="Slippy Clone"
        />

        <AnimatedCard
          key="hrms"
          src={hrmsScreenshot}
          alt={"HRMS Preview"}
          offset={offsets["hrms"]}
          gridId="hrms"
          color="#FF5733"
          type="Dashboard / Management"
          progress={progress}
          href="https://dayflow-final.netlify.app/"
          githubUrl="https://github.com/MahirPatel2005/HRMS"
          title="HRMS"
        />
      </div>
    </section>
  )
}
