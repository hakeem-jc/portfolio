import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import { navItems } from "@/data";
import Grid from "@/components/ui/grid/Grid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0c] text-white overflow-hidden">
      <FloatingNav navItems={navItems} />

      {/* SVG Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeOpacity="0.15"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Hero */}
      <section className="relative z-10 px-8 pb-16 max-w-6xl mx-auto">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
      </section>
      <Footer />
    </div>
  );
}
