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
              I&apos;m Guessing You Want to Hear More
            </p>
            <p className="md:mt-10 my-5">
              I&apos;m a <span className="font-bold">Full-Stack Developer</span>{" "}
              with <span className="font-bold">7+</span> years of experience
              crafting production-grade applications for the banking industry. I
              specialize in designing and building responsive, user-friendly
              front-ends using{" "}
              <span className="font-bold">TypeScript and Next.js / React.</span>
              <span className="block mt-2">
                I&apos;ve built and maintained a critical commercial lending
                platform, maintained and upgraded a legacy one, modernized the
                IT infrastructure of a major restaurant chain, and worked
                closely with multiple international cross-functional agile teams
                of developers, designers, testers, product managers, and other
                stakeholders.
              </span>
              <span className="block mt-2">
                My main focus these days is building applications for clients
                from start-ups to large Jamaican corporations at work while
                experimenting with fintech and AI engineering in my free time.
                Now that you&apos;re all caught up, here&apos;s a snapshot of my
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
