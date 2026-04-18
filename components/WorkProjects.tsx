"use client";

import { motion } from "framer-motion";

type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Legacy Lending System",
    description:
      "Maintained a core banking application used by loan officers to process end-to-end loan applications, gaining deep exposure to production fintech systems and legacy architecture.",
    tags: ["JavaScript", "Java", "FinTech", "Legacy Systems"],
  },
  {
    title: "Modern Lending System",
    description:
      "Led frontend development of a rebuilt lending platform using React and TypeScript, delivering faster performance, fewer bugs, and a significantly improved user experience.",
    tags: ["React", "TypeScript", "Spring Boot", "Frontend Leadership"],
  },
  {
    title: "Company Intranet",
    description:
      "Designed and developed a nationwide intranet as a solo engineer using Next.js and TypeScript, improving internal communication and operational efficiency.",
    tags: ["Next.js", "TypeScript", "Vercel", "Enterprise"],
  },
  {
    title: "IT Automation & Tooling",
    description:
      "Engineered PowerShell automation and leveraged low-code tools to streamline Office 365 administration and reduce manual workload across teams.",
    tags: ["PowerShell", "Automation", "Power Automate", "DevOps"],
  },
  {
    title: "Infrastructure Modernization",
    description:
      "Supported IT transformation efforts including software procurement research and system improvements for a large restaurant chain.",
    tags: ["System Design", "Research", "IT Strategy"],
  },
  {
    title: "Lunch Ordering System",
    description:
      "Built an internal ordering platform to streamline meal coordination and improve day-to-day operations within the organization.",
    tags: ["Next.js", "TypeScript", "Internal Tools"],
  },
];

export default function WorkProjects() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-8 pb-24">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Work Projects
        </h2>
        <p className="text-white/60 mt-2">
          Real-world systems I've developed, built for impact
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="
              group relative rounded-2xl p-6 
              bg-[#111113] border border-white/10 
              hover:border-white/20
              transition-all duration-300
            "
          >
            {/* subtle glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] rounded-2xl" />

            <div className="relative z-10">
              <h3 className="text-lg font-medium mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-white/60 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}