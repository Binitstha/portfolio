import { sora, soraBold } from "@/app/fonts/fonts";

const Projects = () => {
  return (
    <>
      <section
        id="project"
        className={
          sora.className +
          ` h-[90vh] w-full px-32 bg-black text-white flex flex-col gap-14 justify-center items-center`
        }
      >
        <h1 className="text-5xl">
          My <span className={soraBold.className}>Projects</span>
        </h1>
        <div className="flex mx-5 flex-wrap justify-between gap-16 items-center ">
          Hllo
        </div>
      </section>
    </>
  );
};

export default Projects;

// "use client";
// import { useEffect, useState } from "react";
// import { sora } from "@/app/fonts/fonts";
// import Image from "next/image";
// import Link from "next/link";
// import { FiDownload } from "react-icons/fi";

// const NavBar = () => {
//   const [bgColor, setBgColor] = useState("transparent");

//   useEffect(() => {
//     const handleScroll = () => {
//       const projectSection = document.getElementById("project");
//       if (projectSection) {
//         const sectionTop = projectSection.offsetTop;
//         const sectionHeight = projectSection.offsetHeight;
//         const scrollPosition = window.scrollY;

//         // Check if scrolling down
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight * 0.9) {
//           setBgColor("white"); // More than 90% visible
//         } else if (scrollPosition < sectionTop) {
//           setBgColor("transparent"); // Above the project section
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <main
//       className={`z-30 font-semibold sticky top-0 backdrop-blur-2xl transition-colors duration-300`}
//       style={{ backgroundColor: bgColor }}
//     >
//       <section
//         className={`${sora.className} flex justify-between items-center h-20 px-32`}
//       >
//         <Link href={"/"}>
//           <div className="font-bold text-xl flex justify-start items-center">
//             <span>
//               <Image
//                 src="iconBlack.svg"
//                 alt="Binit Shrestha logo"
//                 width={60}
//                 height={60}
//               />
//             </span>
//             BINIT
//           </div>
//         </Link>
//         <nav>
//           <ul className="flex font-semibold justify-center items-center gap-10">
//             <Link href={"#aboutMe"}>
//               <li>About Me</li>
//             </Link>
//             <Link href={"#skills"}>
//               <li>Skills</li>
//             </Link>
//             <Link href={"#project"}>
//               <li>Project</li>
//             </Link>
//             <Link href={"#contactMe"}>
//               <li>Contact Me</li>
//             </Link>
//           </ul>
//         </nav>
//         <div>
//           <button className="before:ease relative bg-black text-white rounded-md h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-100 before:transition-all before:duration-300 hover:shadow-black hover:before:-rotate-180 hover:text-black">
//             <div className="flex justify-center items-center gap-3">
//               <span className="relative z-10">Resume</span>
//               <FiDownload />
//             </div>
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default NavBar;
