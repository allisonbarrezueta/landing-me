import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Stack from "@/components/sections/stack";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Education />
      <Contact />
    </main>
  );
}
