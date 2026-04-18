"use client";
import { FaFileArrowDown } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { skills } from "@/data";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const Skill = dynamic(() => import("./Skill"), { ssr: false });

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <div className="pb-5 pt-36">
      <div
        className="h-screen w-full bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-15 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center max-w-3xl mb-8 mt-8 text-4xl font-extrabold tracking-wide leading-snug md:text-5xl xl:text-6xl text-white">
            Hakeem Clarke
          </p>

          <p className="text-center md:tracking-wider mb-2 text-sm md:text-lg lg:text-2xl">
            Senior Software Developer
          </p>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Next.js . React . TypeScript . UI/UX
          </p>

          <p className="text-white-200 md:mt-10 my-5 text-center text-lg">
            I build pixel-perfect, attention-grabbing, user-friendly{" "}
            <span className="text-purple-400">digital magic</span>
          </p>

          <a href="/Resume - Hakeem Clarke.pdf" download>
            <MagicButton
              title="Download my CV"
              icon={<FaFileArrowDown />}
              position="right"
            />
          </a>

          <div className="flex flex-col items-center mt-40 text-gray-200">
            <p className="text-center mb-2 text-sm md:text-lg lg:text-2xl">
              I&apos;m Sure You Want to Hear More
            </p>
            <p className="md:mt-10 my-5">
              I&apos;m a{" "}
              <span className="font-bold">Senior Full-Stack Developer</span>{" "}
              with <span className="font-bold">7+</span> years of experience
              building scalable, production-grade systems in the{" "}
              <span className="font-bold">banking and enterprise space</span>. I
              specialize in crafting high-performance, user-focused frontends
              using{" "}
              <span className="font-bold">TypeScript, React, and Next.js</span>,
              while also designing robust backend systems with{" "}
              <span className="font-bold">
                Next.js, Express, and cloud-native architectures
              </span>
              .
              <span className="block mt-2">
                I&apos;ve led and contributed to systems that directly impact
                business outcomes — including building loan processing platforms
                that drove{" "}
                <span className="font-bold">
                  60%+ increases in lending revenue
                </span>
                , optimizing application performance to significantly improve
                user satisfaction, and migrating critical infrastructure to the
                cloud with <span className="font-bold">99.6% uptime</span>.
              </span>
              <span className="block mt-2">
                Beyond delivery, I&apos;ve mentored engineers, introduced
                testing practices that improved deployment stability, and worked
                closely with cross-functional teams across multiple countries to
                ship reliable, scalable software.
              </span>
              <span className="block mt-2">
                Lately, I&apos;ve been expanding into{" "}
                <span className="font-bold">AI engineering</span> — integrating
                LLM APIs, building validation pipelines, and experimenting with
                intelligent systems — while continuing to deliver high-impact
                applications for both startups and large enterprises. Now that
                you&apos;re all caught up, here&apos;s a snapshot of my
                skillset:
              </span>
            </p>
          </div>

          <div ref={ref} className="flex gap-4 flex-wrap mt-12 justify-center">
            {inView &&
              skills.map((skill, i) => (
                <Skill key={i} name={skill.name} image={skill.image} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
