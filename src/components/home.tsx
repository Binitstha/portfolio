import { sora, soraBold } from "@/app/fonts/fonts";
import Image from "next/image";
import IconBox from "./ui/iconBox";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Home = () => {
  return (
    <section
      className={
        sora.className +
        ` lg:h-[90vh] h-screen px-5 w-full lg:px-32 flex flex-col gap-14 justify-center items-center`
      }
    >
      <div className="flex-col-reverse gap-5 lg:flex-row flex justify-between lg:gap-16 items-center">
        <div className="lg:flex-[45%] flex flex-col gap-8 ">
          <div className="lg:text-5xl text-3xl flex flex-col gap-5">
            <div className="fade-slide">
              Hello I&apos;m{" "}
              <span className={soraBold.className}>Binit Shrestha.</span>
            </div>
            <div className={soraBold.className}>
              Fullstack{" "}
              <span
                className={`${soraBold.className} scale-bounce text-outline font-extrabold lg:text-[3.4rem] text-[2.3rem] animate-scaleIn`}
                style={{ letterSpacing: "-.22rem" }}
              >
                Developer
              </span>
            </div>
            <div className="fade-right">
              Based in <span className={soraBold.className}>Nepal</span>.
            </div>
          </div>

          <div className="text-neutral-600">
            Professional code wrangler by day, meme curator by night. I make
            websites that work... most of the time. If you need something broken
            and fixed quickly, I&apos;m your guy. Let&apos;s build something
            that even your browser can&apos;t break!
          </div>
        </div>

        <div className="lg:flex-[45%] pb-3">
          <Image
            loading="eager"
            src="hero.svg"
            className="z-[-1]"
            alt="Boy with computer and laptop"
            height={600}
            width={600}
          ></Image>
        </div>
      </div>

      <div className="flex justify-between w-full items-center h-10">
        <div className="flex gap-5 animate-fadeInUp">
          <IconBox link="https://www.facebook.com/imbinit57">
            <FaFacebook className="text-xl hover:scale-110 transition-transform" />
          </IconBox>
          <IconBox link="https://www.instagram.com/binit_shrestha_7">
            <FaInstagram className="text-xl hover:scale-110 transition-transform" />
          </IconBox>
          <IconBox link="https://github.com/Binitstha">
            <FaGithub className="text-xl hover:scale-110 transition-transform" />
          </IconBox>
          <IconBox link="https://www.linkedin.com/in/binit-shrestha-5b1174278/">
            <FaLinkedin className="text-xl hover:scale-110 transition-transform" />
          </IconBox>
        </div>
        <div className="hidden lg:block border-4 border-black rounded-md w-[40rem] h-1 mx-32"></div>
      </div>
    </section>
  );
};

export default Home;
