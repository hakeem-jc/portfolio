import { FaFileArrowDown } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { skills } from "@/data";

const Hero = () => {
  const downloadFile = (fileName: string, fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center max-w-3xl mb-8 mt-8 text-4xl font-extrabold tracking-wide leading-snug md:text-5xl xl:text-6xl text-purple">
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
            <span className="text-purple">digital magic</span>
          </p>

          <div
            onClick={() =>
              downloadFile(
                "Resume - Hakeem Clarke.pdf",
                "/Resume - Hakeem Clarke.pdf"
              )
            }
          >
            <MagicButton
              title="Download my CV"
              icon={<FaFileArrowDown />}
              position="right"
            />
          </div>

          <div className="flex flex-col items-center mt-40">
            <p className="text-center mb-2 text-sm md:text-lg lg:text-2xl">
              I&apos;m Guessing You Want to Hear More
            </p>
            <p className="text-white-200 md:mt-10 my-5">
              I&apos;m a Full-Stack Developer with 6+ years of experience
              crafting production-grade applications for the banking industry. I
              specialize in designing and building responsive, user-friendly
              front-ends using TypeScript and Next.js / React.
              <span className="block mt-2">
                I&apos;ve built and maintained a critical commercial lending
                platform. I worked closely with international cross-functional
                agile teams of developers, designers, testers, and product
                managers where I built reusable React components and Spring Boot
                APIs.
              </span>
              <span className="block mt-2">
                My main focus these days is building applications for clients
                from start-ups to large Jamaican corporations at work while
                experimenting with fintech and AI engineering in my free time.
                Now that you&apos;re all caught up, here&apos;s a a snapshot of
                my skillset:
              </span>
            </p>
          </div>

          <div className="flex gap-4 flex-wrap mt-12">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 mb-4 text-sm text-blue-800 rounded-3xl bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
