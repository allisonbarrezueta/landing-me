import Image from "next/image";
import { education } from "@/data/education";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";

export default function Education(): React.JSX.Element {
  return (
    <Section id="education" title="Education" className="bg-gray-50 dark:bg-gray-950">
      <Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {education.map(({ level, school, detail, logo }) => (
            <li key={school} className="rounded-xl border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-900">
              <Image src={logo} alt="" className="mx-auto size-20 rounded-full object-contain" />
              <p className="mt-4 text-xs font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400">{level}</p>
              <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{school}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
