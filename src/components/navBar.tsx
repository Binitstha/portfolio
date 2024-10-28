"use client";
import { useEffect, useState } from "react";
import { sora } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const NavBar = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        const sectionTop = projectSection.offsetTop;
        const sectionHeight = projectSection.offsetHeight;
        const scrollPosition = window.scrollY;

        const isVisible90 = scrollPosition >= sectionTop - sectionHeight * 0.1;

        const isVisible1 = scrollPosition < sectionTop + sectionHeight * 0.01;

        if (isVisible90 && scrollPosition < sectionTop + sectionHeight) {
          setBgColor("white");
        } else if (scrollPosition > sectionTop + sectionHeight || isVisible1) {
          setBgColor("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`z-30 font-semibold sticky top-0 backdrop-blur-2xl transition-colors`}
      style={{ backgroundColor: bgColor }}
    >
      <section
        className={
          sora.className + " flex justify-between gap-4 items-center h-20 px-2 lg:px-32"
        }
      >
        <Link href={"/"}>
          <div className="font-bold lg:text-2xl text-4xl flex justify-start items-center">
            <span>
              <Image
                src="iconBlack.svg"
                alt="Binit Shrestha logo"
                width={100}
                height={100}
                className="w-[3.8rem] h-[3.8rem] border-red-500 "
              />
            </span>
            <span>BINIT</span>
          </div>
        </Link>
        <nav>
          <ul className=" hidden lg:flex font-semibold justify-center items-center gap-10">
            <Link href={"#aboutMe"}>
              <li>About Me</li>
            </Link>
            <Link href={"#skills"}>
              <li>Skills</li>
            </Link>
            <Link href={"#project"}>
              <li>Project</li>
            </Link>
            <Link href={"#contactMe"}>
              <li>Contact Me</li>
            </Link>
          </ul>
        </nav>
        <div className=" hidden lg:block">
          <button className="before:ease relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-100 before:transition-all before:duration-300 hover:shadow-black hover:before:-rotate-180 hover:text-black">
            <div className="flex justify-center items-center gap-3">
              <span className=" flex justify-center items-center gap-3 relative z-10">
                <p>Resume</p>
                <FiDownload />
              </span>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
