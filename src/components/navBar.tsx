import { sora } from "@/app/fonts/font";
import Image from "next/image";

const NavBar = () => {
  return (
    <section
      className={sora.className + ` flex justify-between items-center h-20`}
    >
      <div className=" font-bold flex justify-start items-center">
        <span>
          <Image
            src="iconBlack.svg"
            alt="Binit shrestha logo"
            width={60}
            height={60}
          ></Image>
        </span>{" "}
        Binit
      </div>
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
  );
};

export default NavBar;
