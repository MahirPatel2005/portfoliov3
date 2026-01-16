import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"

const frontend = [
  { name: "React", src: "react" },
  { name: "Next.js", src: "next" },
  { name: "HTML", src: "html5" },
  { name: "Tailwind CSS", src: "tailwindcss" },
  { name: "Figma", src: "figma" },
]

const backend = [
  { name: "Node.js", src: "nodejs" },
  { name: "Express.js", src: "express" },
  { name: "MongoDB", src: "mongodb" },
  { name: "JWT", src: "jwt" },
]

const tools = [
  { name: "Git", src: "github" },
  { name: "GitHub", src: "github" },
  { name: "Postman", src: "postman" },
  { name: "AWS", src: "aws" },
  { name: "Workflows", src: "githubactions" },
]

const services = [
  { name: "Full Stack Development", src: "magic-wand" },
  { name: "React Development", src: "paint-bucket" },
  { name: "Performance Optimization", src: "web" },
  { name: "UI/UX Design", src: "world" },
  { name: "Code Reviews", src: "planet" },
  { name: "Advanced Motion", src: "cube" },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}
export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-10 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>

        {/* Categories */}
        <div className="flex flex-col gap-8 w-full">
          {/* Frontend */}
          <div>
            <Text size="sm" className="mb-4 text-slate-400 font-medium tracking-wide uppercase">
              Frontend
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {frontend.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>

          {/* Backend */}
          <div>
            <Text size="sm" className="mb-4 text-slate-400 font-medium tracking-wide uppercase">
              Backend
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {backend.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>

          {/* Tools */}
          <div>
            <Text size="sm" className="mb-4 text-slate-400 font-medium tracking-wide uppercase">
              Tools & DevOps
            </Text>
            <MotionUl
              className="flex flex-wrap gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {tools.map(({ name, src }) => (
                <SkillItem key={name} name={name} src={src} />
              ))}
            </MotionUl>
          </div>
        </div>
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1 mt-12 md:mt-0"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black">
              <Icon name={src} width={25} height={30} className="object-contain invert" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}

const SkillItem = ({ name, src }: { name: string; src: string }) => (
  <MotionLi variants={element}>
    <div className="group relative">
      <input placeholder={name} type="checkbox" className="peer hidden" id={name} />

      <label
        htmlFor={name}
        className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5 cursor-pointer"
      >
        <Icon name={src} width={30} height={30} className="object-contain" />
      </label>
      {/* optional tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100 pointer-events-none">
        {name}
        {/* arrow */}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-black"></span>
      </span>
    </div>
  </MotionLi>
)

