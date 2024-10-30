import { sora, soraBold } from "@/app/fonts/fonts";
import SkillCard from "./ui/skillCard";
import { FaGitAlt, FaJs, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiSocketdotio,
  SiZod,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className={
          sora.className +
          ` lg:h-[90vh]  lg:mb-0 mb-7 h-fit w-full lg:px-32 px-5 flex flex-col gap-14 justify-center items-center`
        }
      >
        <h1 className="text-5xl">
          My <span className={soraBold.className}>skills</span>
        </h1>
        <div className="flex mx-5 flex-wrap justify-between lg:gap-16 gap-5 items-center ">
          <SkillCard skill={"Javascript"} iconName={<FaJs />} />
          <SkillCard skill={"ReactJs"} iconName={<FaReact />} />
          <SkillCard skill={"NextJs"} iconName={<SiNextdotjs />} />
          <SkillCard skill={"NodeJs"} iconName={<FaNodeJs />} />
          <SkillCard skill={"Express"} iconName={<SiExpress />} />
          <SkillCard skill={"Redux"} iconName={<SiRedux />} />
          <SkillCard skill={"Socket.io"} iconName={<SiSocketdotio />} />
          <SkillCard skill={"Scss/Sass"} iconName={<FaSass />} />
          <SkillCard skill={"TailwindCss"} iconName={<RiTailwindCssFill />} />
          <SkillCard skill={"Mysql"} iconName={<GrMysql />} />
          <SkillCard skill={"Firebase"} iconName={<IoLogoFirebase />} />
          <SkillCard skill={"Zod"} iconName={<SiZod />} />
          <SkillCard skill={"Prisma"} iconName={<SiPrisma />} />
          <SkillCard skill={"Git & Github"} iconName={<FaGitAlt />} />
        </div>
      </section>
    </>
  );
};

export default Skills;
