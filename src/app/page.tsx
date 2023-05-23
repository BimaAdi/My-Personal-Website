import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WorkingExperience from "@/components/WorkingExperience";
import TechStack from "@/components/TechStack";
import ContactMe from "@/components/ContactMe";
import Main from "@/layouts/Main";

export default function Home() {
  return (
    <Main>
      <Hero />
      <AboutMe />
      <WorkingExperience />
      <TechStack />
      <ContactMe />
    </Main>
  )
}
