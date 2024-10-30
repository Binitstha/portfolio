"use client";
import { useEffect, useState } from "react";
import { sora } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const NavBar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [hamburger, setHamburger] = useState(false);

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

  const handleHamburger = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <main
      onClick={(e) => !e.target && setHamburger(false)}
      className={`z-30 font-semibold sticky top-0 backdrop-blur-2xl transition-colors duration-300 ease-in-out`}
      style={{ backgroundColor: bgColor }}
    >
      <section
        className={`${sora.className} flex justify-between gap-4 items-center h-20 px-4 lg:px-32 relative`}
      >
        <Link href={"/"}>
          <div className="font-bold lg:text-2xl text-4xl flex justify-start items-center">
            <span>
              <Image
                src="iconBlack.svg"
                alt="Binit Shrestha logo"
                width={100}
                height={100}
                className="w-[3.8rem] h-[3.8rem]"
              />
            </span>
            <span>BINIT</span>
          </div>
        </Link>
        <div
          onClick={handleHamburger}
          className="lg:hidden mr-2 flex flex-col gap-1 p-1 w-fit cursor-pointer"
        >
          <span
            className={`bg-black w-7 h-1 rounded-md transition-transform duration-300 ${
              hamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`bg-black w-7 h-1 rounded-md transition-opacity duration-300 ${
              hamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-black w-7 h-1 rounded-md transition-transform duration-300 ${
              hamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
        <nav
          className={`lg:flex flex-col lg:flex-row lg:static absolute right-5 top-16 bg-white lg:bg-inherit shadow-lg lg:shadow-none p-4 lg:p-0 rounded-md lg:rounded-none transition-all duration-300 ease-in-out ${
            hamburger ? "block opacity-100" : "hidden opacity-0 lg:opacity-100"
          }`}
        >
          <ul className="flex lg:flex-row flex-col font-semibold justify-center items-center lg:gap-10 gap-6">
            <li>
              <Link href={"#aboutMe"}>About Me</Link>
            </li>
            <li>
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"#project"}>Project</Link>
            </li>
            <li>
              <Link href={"#contactMe"}>Contact Me</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <button className="relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl transition-transform duration-300 ease-in-out hover:shadow-black">
            <div className="flex justify-center items-center gap-3">
              <span className="flex justify-center items-center gap-3 relative z-10">
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
