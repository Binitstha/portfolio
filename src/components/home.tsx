import { sora, soraBold } from "@/app/fonts/fonts";
import Image from "next/image";
import IconBox from "./ui/iconBox";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className={
        sora.className +
        ` h-[90vh] w-full px-32 flex flex-col gap-14 justify-center items-center`
      }
    >
      <div className="flex justify-between gap-16 items-center ">
        <div className="flex-[45%] flex flex-col gap-5">
          <div className="text-5xl leading-relaxed ">
            <div>
              Hello I&apos;am{" "}
              <span className={soraBold.className}>Binit Shrestha.</span>
            </div>
            <div className={soraBold.className}>
              Fullstack{" "}
              <span
                className={soraBold.className + " text-outline font-extrabold"}
                style={{ letterSpacing: "-.22rem", fontSize: "3.4rem" }}
              >
                Developer
              </span>{" "}
            </div>
            <div>
              Based in
              <span className={soraBold.className}> Nepal</span>.
            </div>
          </div>
          <div className=" text-neutral-600">
            Professional code wrangler by day, meme curator by night. I make
            websites that work... most of the time. If you need something broken
            and fixed quickly, I&apos;m your guy. Let&apos;s build something
            that even your browser can&apos;t break!
          </div>
        </div>
        <div className="flex-[45%] pb-3">
          <Image
            src="hero.svg"
            alt="Boy with computer and laptop"
            height={600}
            width={600}
          ></Image>
        </div>
      </div>
      <div className="flex justify-between w-full items-center h-10">
        <div className="flex gap-5">
          <IconBox link="j">
            <FaFacebook className="text-xl" />
          </IconBox>
          <IconBox link="j">
            <FaInstagram className="text-xl" />
          </IconBox>
          <IconBox link="j">
            <FaGithub className="text-xl" />
          </IconBox>
          <IconBox link="j">
            <FaLinkedin className="text-xl" />
          </IconBox>
        </div>
        <div className="border-4 border-black rounded-md w-[40rem] h-1 mx-32"></div>
      </div>
    </section>
  );
};

export default Home;
