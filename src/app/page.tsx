import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import WorkingExperience from "@/app/components/WorkingExperience";
import TechStack from "@/app/components/TechStack";
import ContactMe from "@/app/components/ContactMe";

export default function Home() {
  return (
    <main className="text-white mx-5">
      <Hero />
      <AboutMe />
      <WorkingExperience />
      <TechStack />
      <ContactMe />
    </main>
  );
}
