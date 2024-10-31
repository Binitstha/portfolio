import AboutMe from "@/components/aboutMe";
import Contact from "@/components/contact";
import Home from "@/components/home";
import Projects from "@/components/project";
import Skills from "@/components/skills";

const Page = () => {
  return (
    <main>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;
