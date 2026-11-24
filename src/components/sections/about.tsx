import Image from "next/image";
import jumpingMe from "../../../public/jumpl.svg";
import { profile } from "@/data/profile";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";

export default function About(): React.JSX.Element {
  return (
    <Section id="about" title="About me">
      <Reveal className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-200">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <blockquote className="border-l-4 border-primary-500 pl-4 text-xl italic text-primary-700 dark:text-primary-300">
            “{profile.quote}”
          </blockquote>
        </div>
        <Image src={jumpingMe} alt="" loading="lazy" className="floating mx-auto hidden w-64 md:block" />
      </Reveal>
    </Section>
  );
}
