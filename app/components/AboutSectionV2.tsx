import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/mahir.jpeg"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Mahir Patel
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Mahir Patel" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Mahir Patel
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Developer (MERN + Next.js)</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I build responsive, developer-focused platforms.</strong> I developed
              <a href="https://github.com/mahirpatel2005" target="_blank" rel="noopener">
                {" "}
                APIHub
              </a>
              , a centralized platform to discover and explore public APIs, featuring search, category-based filtering, and detailed endpoint views.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I specialize in the MERN stack</strong> (MongoDB, Express, React, Node.js) and Next.js.
              I have experience building web games like "Numble" and optimizing UI/UX for dashboards. I focus on clean code, responsive design, and smooth user interactions.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My core philosophy is simplicity</strong>. if complexity balloons, I delete it and design the
              simpler path.
            </p>

            {/* signature */}
            {/* <Image src={signature} alt="Signature" className="relative mt-6 -ml-3 h-12 w-auto" /> */}
          </Typography>
        </div>
      </div>
    </section>
  )
}
