import { soraBold, soraLightBold } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  reverse: boolean;
  title: string;
  description: string;
}

const ProjectCard = ({ reverse, title, description }: ProjectCardProps) => {
  return (
    <section
      className={
        reverse
          ? "flex flex-row-reverse justify-center items-center gap-10"
          : "flex justify-center items-center gap-16"
      }
    >
      <figure className="overflow-hidden flex-[35%] rounded-xl">
        <Image
          alt="Project showcase"
          src={"/wallpaper1.jpg"}
          width={1000}
          height={1000}
          unoptimized
        //   className="w-[40rem] h-auto"
        />
        <figcaption className="sr-only">{title} - Project image</figcaption>
      </figure>

      <div className="flex flex-col justify-center flex-[45%] items-start gap-6">
        <h1 className={soraBold.className + " text-4xl"}>01</h1>
        <h2 className={soraLightBold.className + " text-3xl font-extralight"}>
          {title}
        </h2>
        <p>{description}</p>
        <Link href={"#"} aria-label={`Learn more about ${title}`}>
          <HiOutlineExternalLink className="text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
