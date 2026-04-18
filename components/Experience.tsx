"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  period: string;
  side: "left" | "right";
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Developer · Speur Professional Services",
    period: "Jun 2022 – Present",
    side: "left",
    highlights: [
      "Improved banking app performance, increasing user satisfaction from 36% → 84%",
      "Built loan processing system driving 62.6% revenue growth",
      "Led large-scale refactor across teams, boosting developer satisfaction by 54%",
      "Reduced onboarding time from 6 weeks → 2 through mentorship",
      "Introduced testing (Jest + RTL), improving deployment stability",
      "Delivered nationwide intranet (Next.js, TypeScript, Vercel)",
    ],
  },
  {
    title: "Software Developer · Speur Professional Services",
    period: "Jan 2022 – Jun 2022",
    side: "right",
    highlights: [
      "Refactored React banking app for maintainability and fewer production issues",
      "Modernized credit analysis system, reducing failed bureau calls by 8%",
    ],
  },
  {
    title: "Junior Software Developer · Speur Professional Services",
    period: "May 2018 – Jan 2022",
    side: "left",
    highlights: [
      "Migrated core banking system to Kubernetes cloud (99.6% uptime, -31% cost)",
      "Built scalable React/TypeScript frontend for €257M lending platform",
      "Improved loan applications by 26% via customer-facing portal",
      "Reduced approval time with automated underwriting",
      "Created 40+ pages of docs improving onboarding across teams",
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 pt-24 pb-24">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Work Experience
        </h2>
        <p className="text-white/60 mt-2">
          A high-level summary of my career, key achievements, and technical contributions
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-20">
          {experiences.map((item, i) => (
            <div
              key={i}
              className={`relative flex ${
                item.side === "left"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

              <motion.div
                initial={{
                  opacity: 0,
                  x: item.side === "left" ? -40 : 40,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="
                  w-full md:w-[45%] 
                  bg-[#111113] border border-white/10 
                  rounded-2xl p-6
                  hover:border-white/20 transition
                "
              >
                <p className="text-sm text-white/50 mb-1">
                  {item.period}
                </p>

                <h3 className="text-lg font-medium mb-3">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-sm text-white/70">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}