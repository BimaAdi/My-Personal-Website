import Hero from "@/client/components/Hero";
import AboutMe from "@/client/components/AboutMe";
import WorkingExperience from "@/client/components/WorkingExperience";
import TechStack from "@/client/components/TechStack";
import ContactMe from "@/client/components/ContactMe";
import Main from "@/client/layouts/Main";

export default function Home() {
	return (
		<Main>
			<main className="text-white">
				<Hero />
				<AboutMe />
				<WorkingExperience />
				<TechStack />
				<ContactMe />
			</main>
		</Main>
	);
}
