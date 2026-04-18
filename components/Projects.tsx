"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
};

const projects: Project[] = [
  {
    title: "App Design",
    subtitle: "Food Delivery App",
  },
  {
    title: "Web Design",
    subtitle: "Agency Website",
  },
  {
    title: "Branding",
    subtitle: "Startup Identity",
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-8 pb-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            My Latest Work
          </h2>
          <p className="text-white/50 text-sm mt-2">
            Selected work focused on performance, scalability, and digital excellence
          </p>
        </div>

        <button className="text-sm text-white/60 hover:text-white transition">
          Explore More →
        </button>
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
              group relative rounded-2xl p-6 h-64
              bg-[#111113] border border-white/10
              hover:border-white/20 transition
              overflow-hidden
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

            {/* Fake preview block */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-40 h-28 border border-white/10 rounded-lg rotate-6" />
              <div className="w-40 h-28 border border-white/10 rounded-lg -rotate-6 absolute" />
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-sm text-white/50">
                {project.subtitle}
              </p>
              <h3 className="text-lg font-medium mt-1">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}