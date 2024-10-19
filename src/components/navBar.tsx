import { sora } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <main className=" font-semibold sticky top-0 bg-transparent backdrop-blur-md">
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
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Me</li>
          </ul>
        </nav>
        <div>
          <button className=" bg-black px-4 py-2 flex justify-center items-center gap-2 rounded-md text-white">
            Resume
            <span>
              <Image
                src="download.svg"
                alt="resume download"
                height={16}
                width={16}
              ></Image>
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default NavBar;
