import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Grid from "@/components/ui/grid/Grid";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[url(/bg.png)] bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
      <Footer />
    </main>
  );
}
