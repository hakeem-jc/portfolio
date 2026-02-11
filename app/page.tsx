import Hero from "@/components/Hero";
import Grid from "@/components/ui/grid/Grid";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[url(/bg.png)] bg-no-repeat">
      <Hero />
      <Grid />
    </main>
  );
}
