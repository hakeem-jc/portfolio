import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import Grid from "@/components/ui/grid/Grid";

const GridBG = dynamic(() => import("@/components/ui/GridBG"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[url(/bg.webp)] bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
      <GridBG />
      <Footer />
    </main>
  );
}
