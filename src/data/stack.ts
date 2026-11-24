export interface StackGroup {
  title: string;
  items: readonly string[];
}

export const stack: readonly StackGroup[] = [
  { title: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vue.js"] },
  { title: "Mobile", items: ["React Native", "iOS", "Android"] },
  { title: "Backend", items: ["Node.js", "Express", "Python", "GraphQL", "Microservices"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB"] },
];
