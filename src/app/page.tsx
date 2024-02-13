import AboutMe from "@/components/about-me";
import Biography from "@/components/biography";
import Introduction from "@/components/introduction";
import MyPortfolio from "@/components/my-portfolio";
import MyStack from "@/components/my-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36 md:pt-20">
      <Introduction />
      <MyStack />
      <MyPortfolio />
      <Biography />
      <AboutMe />
    </main>
  );
}
