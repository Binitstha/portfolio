import { sora } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const NavBar = () => {
  return (
    <main className=" z-30 font-semibold sticky top-0 bg-transparent backdrop-blur-md">
      <section
        className={
          sora.className + ` flex justify-between items-center h-20 px-32`
        }
      >
        <Link href={"/"}>
          <div className=" font-bold text-xl flex justify-start items-center">
            <span>
              <Image
                src="iconBlack.svg"
                alt="Binit shrestha logo"
                width={60}
                height={60}
              ></Image>
            </span>
            BINIT
          </div>
        </Link>
        <nav>
          <ul className="flex font-semibold justify-center items-center gap-10">
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
        <div>
          <button className="before:ease relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-100 before:transition-all before:duration-300 hover:shadow-black hover:before:-rotate-180 hover:text-black">
            <div className="flex justify-center items-center gap-3">
              <span className="relative z-10">Resume</span>
              <FiDownload />
            </div>
          </button>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
