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
        className={`${sora.className} flex justify-between gap-4 items-center h-20 px-4 lg:px-32 relative animate-fadeInDown`}
      >
        {/* Logo with Bounce Animation */}
        <Link href={"/"}>
          <div className="font-bold lg:text-2xl text-4xl flex justify-start items-center animate-bounceIn animate-delay-200">
            <span>
              <Image
                src="iconBlack.svg"
                alt="Binit Shrestha logo"
                width={100}
                height={100}
                className="w-[3.8rem] h-[3.8rem] transform transition-all duration-500"
              />
            </span>
            <span>BINIT</span>
          </div>
        </Link>

        {/* Hamburger Icon with Animation */}
        <div
          onClick={handleHamburger}
          className="lg:hidden mr-2 flex flex-col gap-1 p-1 w-fit cursor-pointer"
        >
          <span
            className={`bg-black w-7 h-1 rounded-md transition-all duration-300 ease-in-out transform ${
              hamburger ? "rotate-45 translate-y-2 scale-110" : ""
            }`}
          ></span>
          <span
            className={`bg-black w-7 h-1 rounded-md transition-opacity duration-300 ${
              hamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-black w-7 h-1 rounded-md transition-all duration-300 ease-in-out transform ${
              hamburger ? "-rotate-45 -translate-y-2 scale-110" : ""
            }`}
          ></span>
        </div>

        {/* Slide-In Navigation Links */}
        <nav
          className={`lg:flex flex-col lg:flex-row lg:static absolute right-5 top-16 bg-white lg:bg-inherit shadow-lg lg:shadow-none p-4 lg:p-0 rounded-md lg:rounded-none transition-all duration-500 ease-out transform ${
            hamburger ? "block opacity-100 animate-slideInUp" : "hidden opacity-0 lg:opacity-100"
          }`}
        >
          <ul className="flex lg:flex-row flex-col font-semibold justify-center items-start lg:items-center lg:gap-10 gap-6">
            <li className="transition-all duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4 hover:text-black animate-delay-200">
              <Link href={"#aboutMe"}>About Me</Link>
            </li>
            <li className="transition-all duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4 hover:text-black animate-delay-300">
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li className="transition-all duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4 hover:text-black animate-delay-400">
              <Link href={"#project"}>Project</Link>
            </li>
            <li className="transition-all duration-300 transform hover:scale-110 hover:underline hover:underline-offset-4 hover:text-black animate-delay-500">
              <Link href={"#contactMe"}>Contact Me</Link>
            </li>
          </ul>
        </nav>

        {/* Resume Button with Interactive Hover Effects */}
        <div className="hidden lg:block">
          <button className="relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black transform hover:scale-110 hover:shadow-2xl hover:shadow-black">
            <div className="flex justify-center items-center gap-3">
              <span className="flex justify-center items-center gap-3 relative z-10 ">
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
