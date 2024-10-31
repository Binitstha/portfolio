"use client";
import { soraBold, soraLightBold } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  reverse: boolean;
  title: string;
  description: string;
  image: string;
  link: string;
  gitHubLink: string;
  projectNumber: string;
}

const ProjectCard = ({
  reverse,
  projectNumber,
  gitHubLink,
  link,
  image,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <section
      className={
        reverse
          ? "flex flex-row-reverse justify-center items-center gap-10"
          : "flex justify-center items-center gap-16 "
      }
    >
      <figure className="overflow-hidden flex-[35%] rounded-xl z-[-10px]">
        <Image
          alt="Project showcase"
          src={`/${image}`}
          width={1000}
          height={1000}
          unoptimized
          onContextMenu={(e) => e.preventDefault()}
          className="z-[-1px]"
        />
        <figcaption className="sr-only">{title} - Project image</figcaption>
      </figure>

      <div className="flex flex-col justify-center flex-[45%] items-start gap-6">
        <h1 className={soraBold.className + " text-4xl"}>{projectNumber}</h1>
        <h2 className={soraLightBold.className + " text-3xl font-extralight"}>
          {title}
        </h2>
        <p className="text-neutral-300">{description}</p>
        <div className="flex gap-5 justify-between w-full items-center">
          <Link
            href={`${link}`}
            aria-label={`Learn more about ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExternalLink className="text-2xl" />
          </Link>
          <Link
            href={gitHubLink}
            className="flex gap-2 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Source code </span> <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
