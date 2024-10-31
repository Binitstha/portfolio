import { sora, soraBold } from "@/app/fonts/fonts";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <section
        className={
          sora.className +
          ` lg:m-0 mb-7 h-fit lg:h-[90vh] w-full lg:px-32 px-5 flex flex-col lg:flex-row gap-14 justify-between items-center`
        }
        id="aboutMe"
      >
        <div className="flex flex-[20%] mx-5 flex-wrap justify-center gap-16 items-center ">
          <Image
            src="aboutMe.svg"
            alt="about iamge of Binit shrestha"
            width={350}
            height={350}
          ></Image>
        </div>
        <div className=" flex-[50%] flex flex-col gap-10">
          <h1 className="text-5xl">
            About <span className={soraBold.className}>Me</span>
          </h1>
          <div className="text-neutral-600 flex flex-col gap-5">
            <p>
              I am a dedicated web developer with a diverse skill set that spans
              multiple programming languages and frameworks. My journey in
              technology includes proficiency in C, C++, TypeScript, HTML5,
              CSS3, and JavaScript, which I leverage to create dynamic and
              responsive web applications. I have a strong command of cloud
              platforms like Azure and Firebase, enabling me to develop scalable
              and efficient solutions.
            </p>
            <p>
              In the realm of front-end development, I specialize in frameworks
              such as React and Next.js, utilizing libraries like Redux and
              Shadcn to build seamless user experiences. I&apos;m also adept at
              employing TailwindCSS for modern design aesthetics and SASS/SCSS
              for enhanced styling capabilities. On the back end, I have
              extensive experience with Node.js and Express, allowing me to
              create robust server-side applications that handle complex data
              interactions.
            </p>
            <p>
              My database expertise includes both SQL and NoSQL systems, with
              hands-on experience in MySQL, MongoDB, Postgres, and MariaDB,
              ensuring that I can implement effective data management strategies
              tailored to project needs. I prioritize clean, maintainable code,
              and I leverage Git for version control, ensuring collaborative and
              efficient development processes.
            </p>
            <p>
              Additionally, I&apos;m familiar with project management tools like
              Trello and Jira, which help me maintain organization and
              transparency throughout the development lifecycle. I approach each
              project with a problem-solving mindset, striving to deliver
              high-quality web solutions that exceed expectations. I am
              passionate about staying up-to-date with industry trends and
              continuously honing my skills to drive innovation in every project
              I undertake.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
