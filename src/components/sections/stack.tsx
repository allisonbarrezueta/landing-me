import { stack } from "@/data/stack";
import Section from "@/components/ui/section";
import Reveal from "@/components/ui/reveal";
import Tag from "@/components/ui/tag";

export default function Stack(): React.JSX.Element {
  return (
    <Section id="stack" title="Stack" intro="Tools I reach for across the product, from the interface to the database." className="bg-gray-50 dark:bg-gray-950">
      <Reveal className="grid gap-8 md:grid-cols-3">
        {stack.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
