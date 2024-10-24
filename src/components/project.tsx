import { sora, soraBold } from "@/app/fonts/fonts";
import ProjectCard from "./Ui/projectCard";

const Projects = () => {
  return (
    <>
      <section
        id="project"
        className={
          sora.className +
          ` h-fit py-20 w-full px-32 bg-black text-white flex flex-col gap-14 justify-center items-center`
        }
      >
        <h1 className="text-5xl">
          My <span className={soraBold.className}>Projects</span>
        </h1>
        <div className="flex mx-5 flex-wrap justify-between gap-16 items-center ">
          <ProjectCard
            reverse={false}
            description="loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso"
            title="skjndans odsaj odsaoj dsajd"
          />
          <ProjectCard
            reverse={true}
            description="loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso"
            title="skjndans odsaj odsaoj dsajd"
          />
          <ProjectCard
            reverse={false}
            description="loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso"
            title="skjndans odsaj odsaoj dsajd"
          />
          <ProjectCard
            reverse={true}
            description="loremsakduishaiudhiohas iuahdoi ashiodhjoasij doisaj ofhasoihfd oiasjodi jasiohjd oasj odhjaso"
            title="skjndans odsaj odsaoj dsajd"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
