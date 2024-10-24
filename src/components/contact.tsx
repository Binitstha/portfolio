import { sora, soraBold, soraLightBold } from "@/app/fonts/fonts";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import IconBox from "./Ui/iconBox";

const Contact = () => {
  return (
    <>
      <section
        id="contactMe"
        className={
          sora.className +
          ` h-[90vh] w-full px-32 flex flex-col gap-14 justify-center items-center`
        }
      >
        <div className="flex mx-5 justify-between gap-32 items-center ">
          <div className="flex-[35%] flex flex-col gap-5">
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className=" border-2 px-4 py-3 border-neutral-700 rounded-md"
                required
              />
              <input
                type="text"
                id="email"
                placeholder="Email"
                className=" border-2 px-4 py-3 border-neutral-700 rounded-md"
                required
              />
              <input
                type="text"
                id="name"
                placeholder="Your website(if exist)"
                className=" border-2 px-4 py-3 border-neutral-700 rounded-md"
              />
              <textarea
                name="description"
                id="description"
                placeholder="How can i help you?"
                className=" border-2 px-4 py-3 h-40 border-neutral-700 resize-none rounded-md"
              ></textarea>
            </form>
            <div className=" flex gap-5 justify-between">
              <button
                type="submit"
                className="before:ease relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-100 before:transition-all before:duration-300 hover:shadow-black hover:before:-rotate-180 hover:text-black"
              >
                <div className="flex justify-center items-center gap-3">
                  <span className={soraLightBold.className + " relative z-10"}>
                    Get In Touch
                  </span>
                </div>
              </button>
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
            </div>
          </div>
          <div className="flex-[45%] flex flex-col gap-8">
            <div>
              <h2
                className={soraBold.className + " text-5xl flex flex-col gap-4"}
              >
                <div>
                  Let&apos;s{" "}
                  <span
                    className={
                      soraBold.className + " text-outline font-extrabold"
                    }
                    style={{ letterSpacing: "-.22rem", fontSize: "3.4rem" }}
                  >
                    talk
                  </span>{" "}
                  for
                </div>
                <p> Something special</p>
              </h2>
            </div>
            <div className="text-neutral-600">
              <p>
                Facing a coding crisis? Don&apos;t worry, I&apos;m on the way!
                🦇💻 Just send a message, and let&apos;s save the day, one line
                of code at a time! ⚡🦸‍♂️
              </p>
            </div>

            <div className={soraLightBold.className + " text-xl w-fit"}>
              <Link href={"mailto:imbinit54@gmail.com"}>
                <p className="w-fit">imbinit54@gmail.com</p>
              </Link>
              <Link href={"tel:9813599563"}>
                <p className="w-fit">9813599563</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
