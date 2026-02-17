import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Grid from "@/components/ui/grid/Grid";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[url(/bg.png)] bg-no-repeat">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>

      <div className="w-full pt-20 pb-5">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            src="/bg-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
            width={2000}
            height={2000}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
