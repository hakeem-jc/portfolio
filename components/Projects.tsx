"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image?: string; // optional
};

const projects: Project[] = [
  {
    title: "Banking App Optimization",
    subtitle: "Internal Platform",
    description:
      "Improved performance and reduced load times, increasing user satisfaction from 36% to 84%.",
    tags: ["Next.js", "Performance", "UX"],
    image: "/projects/nuance.png",
  },
  {
    title: "Loan Processing System",
    subtitle: "Enterprise Finance",
    description:
      "Built internal loan processing software that increased lending revenue by 62.6%.",
    tags: ["TypeScript", "Node.js", "FinTech"],
  },
  {
    title: "Credit Analysis Platform",
    subtitle: "Risk Systems",
    description:
      "Modernized API + frontend, reducing failed bureau calls and streamlining workflows.",
    tags: ["React", "API Design", "Optimization"],
  },
  {
    title: "Cloud Migration",
    subtitle: "Core Banking",
    description:
      "Migrated legacy system to Kubernetes cloud, reducing costs by 31% and achieving 99.6% uptime.",
    tags: ["Kubernetes", "Cloud", "DevOps"],
    image: "/projects/nuance.png",
  },
  {
    title: "Restaurant Intranet",
    subtitle: "Nationwide System",
    description:
      "Designed and deployed an internal platform using Next.js and Microsoft Graph.",
    tags: ["Next.js", "Graph API", "Enterprise"],
  },
  {
    title: "Loan Application Portal",
    subtitle: "Customer Platform",
    description:
      "Improved UX and increased loan applications by 26% through a redesigned frontend.",
    tags: ["React", "UX", "Frontend"],
    image: "/projects/nuance.png",
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Personal Projects
        </h2>
        <p className="text-white/60 mt-2">
          Passion projects focused on performance, scalability, and digital excellence
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              group relative rounded-2xl overflow-hidden
              bg-[#111113] border border-white/10
              hover:border-white/20 transition
            "
          >
            {/* Preview */}
            <div className="relative h-36 overflow-hidden">
              {project.image ? (
                <>
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/40" />
                </>
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  {/* Placeholder */}
                  <div className="relative opacity-30">
                    <div className="w-28 h-16 border border-white/10 rounded-md rotate-6" />
                    <div className="w-28 h-16 border border-white/10 rounded-md -rotate-6 absolute top-2 left-2" />
                  </div>
                </div>
              )}

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-xs text-white/40 mb-1">
                {project.subtitle}
              </p>

              <h3 className="text-base font-medium mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
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