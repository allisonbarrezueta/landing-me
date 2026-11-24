import Image from "next/image";
import me from "../../../public/me.png";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/reveal";

export default function Hero(): React.JSX.Element {
  return (
    <section className="bg-linear-to-b from-primary-200 to-white pt-32 pb-20 dark:from-primary-900 dark:to-black">
      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-5 md:flex-row md:justify-between">
        <Reveal from="left" className="max-w-xl text-center md:text-left">
          <p className="text-lg font-medium text-primary-700 dark:text-primary-300">Hello, I&apos;m {profile.shortName} 👋</p>
          <h1 className="mt-2 text-5xl font-bold text-primary-900 md:text-6xl dark:text-white">{profile.role}</h1>
          <p className="mt-5 text-xl text-gray-700 dark:text-gray-200">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#projects" className="rounded-lg bg-primary-700 px-6 py-3 font-medium text-white hover:bg-primary-800">
              View my work
            </a>
            <a href="#contact" className="rounded-lg border border-primary-700 px-6 py-3 font-medium text-primary-800 hover:bg-primary-100 dark:text-white dark:hover:bg-primary-800">
              Get in touch
            </a>
          </div>
        </Reveal>
        <Image
          src={me}
          alt={`Portrait of ${profile.name}`}
          priority
          sizes="(min-width: 768px) 360px, 70vw"
          className="size-64 rounded-full object-cover shadow-lg md:size-80"
        />
      </div>
    </section>
  );
}
