import Hero from "@/client/components/Hero";
import AboutMe from "@/client/components/AboutMe";
import WorkingExperience from "@/client/components/WorkingExperience";
import TechStack from "@/client/components/TechStack";
import ContactMe from "@/client/components/ContactMe";

export default function Home() {
	return (
		<main className="text-white">
			<Hero />
			<AboutMe />
			<WorkingExperience />
			<TechStack />
			<ContactMe />
		</main>
	);
}
