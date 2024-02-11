import Section1 from "@/components/Section1";
import AboutMe from "@/components/about-me";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-32">
      <section className="">
        <h1>hello world</h1>
      </section>
      <Section1 />
      <AboutMe />
    </main>
  );
}
