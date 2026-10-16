import { Hero } from "@/components/home/Hero";
import { Values } from "@/components/home/Values";
import { Stats } from "@/components/home/Stats";
import { NewsTeasers } from "@/components/home/NewsTeasers";

export function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Stats />
      <NewsTeasers />
    </>
  );
}
