"use client";

import { motion } from "framer-motion";

type CaseStudy = {
  title: string;
  description: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Banking OS",
    description:
      "Built a scalable system to simulate core banking APIs for testing financial integrations.",
    tags: ["Next.js", "Prisma", "Playwright"],
  },
  {
    title: "Auction Scraper Platform",
    description:
      "Automated scraping and persistence of government auction data with scheduled jobs.",
    tags: ["Node.js", "Cheerio", "GitHub Actions"],
  },
  {
    title: "E-Wallet System",
    description:
      "Designed a secure digital wallet with transaction tracking and real-time balance updates.",
    tags: ["TypeScript", "Next.js", "Redis"],
  },
];

export default function Portfolio() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-8 py-20">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Work Projects
        </h2>
        <p className="text-white/60 mt-2 max-w-xl">
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