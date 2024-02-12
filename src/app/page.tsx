import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import MyStack from "@/components/my-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <Introduction />
      <MyStack />
      <AboutMe />
    </main>
  );
}
