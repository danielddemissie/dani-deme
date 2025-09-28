import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { Experience } from "@/components/custom/experiences";
import { About } from "@/components/custom/about";
import { Contact } from "@/components/custom/contact";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-10 items-center-safe">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
