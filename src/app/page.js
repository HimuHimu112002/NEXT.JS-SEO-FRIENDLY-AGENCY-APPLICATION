import Brands from "@/components/Brands";
import BuildProblems from "@/components/BuildProblems";
import Contact from "@/components/Contact";
import Count from "@/components/Count";
import FeturedProject from "@/components/FeturedProject";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <Count/>
      <BuildProblems/>
      <FeturedProject/>
      <Contact/>
      <Brands/>
    </>
  )
}
