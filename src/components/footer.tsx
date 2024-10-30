import { sora } from "@/app/fonts/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section
        className={
          sora.className +
          ` text-white bg-black flex justify-between items-center h-20 lg:px-32 px-5`
        }
      >
        <div className=" font-bold text-xl gap-2 flex justify-start items-center">
          <span>
            <Image
              src="iconWhite.svg"
              alt="Binit shrestha logo"
              width={60}
              height={60}
            ></Image>
          </span>
          BINIT
        </div>

        <div className=" flex flex-col items-end">
          <span>&#64;2024 Binit shrestha</span>
          <span>Portfolio</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
