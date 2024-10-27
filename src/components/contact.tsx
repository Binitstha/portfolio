"use client";

import { sora, soraBold, soraLightBold } from "@/app/fonts/fonts";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import IconBox from "./ui/iconBox";
import { useForm } from "react-hook-form";
import { Form } from "@/schema/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(Form),
    defaultValues: {
      name: "",
      email: "",
      websiteName: "",
      description: "",
    },
  });

  const onSubmit = async (data: Form) => {
    setLoading(true);
    try {
      const response: Response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          description:
            "Your message has been sent successfully! I'll get back to you soon.",
        });
        reset();
      } else {
        toast({
          description: "Oops! Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contactMe"
      className={`${sora.className} h-[90vh] w-full px-32 flex flex-col gap-14 justify-center items-center`}
    >
      <div className="flex mx-5 justify-between gap-32 items-center">
        <div className="flex-[35%] flex flex-col gap-5">
          <div className="relative">
            <form
              className="flex flex-col gap-5 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="border-2 w-full px-4 py-3 border-neutral-700 rounded-md"
                  {...register("name")}
                  disabled={loading}
                />
                {errors.name && (
                  <p className="text-red-500 px-1 ">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="Email"
                  className="border-2 w-full px-4 py-3 border-neutral-700 rounded-md"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-500 px-1 ">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="websiteName"
                  {...register("websiteName")}
                  placeholder="Your website (if exists)"
                  disabled={loading}
                  className="border-2 px-4 w-full py-3 border-neutral-700 rounded-md"
                />
              </div>
              <div>
                <textarea
                  id="description"
                  {...register("description")}
                  placeholder="How can I help you?"
                  disabled={loading}
                  className="border-2 px-4 py-3 h-40 border-neutral-700 resize-none w-full rounded-md"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 px-1 ">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="before:ease relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-100 before:transition-all before:duration-300 hover:shadow-black hover:before:-rotate-180 hover:text-black"
              >
                {!loading ? (
                  <span className="relative z-10">Get In Touch</span>
                ) : (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <CircularProgress size={24} color="inherit" />
                  </div>
                )}
              </button>
            </form>
            <div className="absolute right-0 bottom-0 flex gap-5 justify-between">
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
        </div>
        <div className="flex-[45%] flex flex-col gap-8">
          <h2 className={`${soraBold.className} text-5xl flex flex-col gap-4`}>
            <div>
              Let&apos;s{" "}
              <span
                className={`${soraBold.className} text-outline font-extrabold`}
                style={{ letterSpacing: "-.22rem", fontSize: "3.4rem" }}
              >
                talk
              </span>{" "}
              for
            </div>
            <p> Something special</p>
          </h2>
          <div className="text-neutral-600">
            <p>
              Facing a coding crisis? Don&apos;t worry, I&apos;m on the way!
              🦇💻 Just send a message, and let&apos;s save the day, one line of
              code at a time! ⚡🦸
            </p>
          </div>
          <div className={`${soraLightBold.className} text-xl w-fit`}>
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
  );
};

export default Contact;
