import { sora, soraBold } from "@/app/fonts/fonts";
import ProjectCard from "./Ui/projectCard";

const Projects = () => {
  return (
    <>
      <section
        id="project"
        className={
          sora.className +
          ` h-fit py-20 w-full px-32 bg-black text-white flex flex-col gap-14 justify-center items-center`
        }
      >
        <h1 className="text-5xl">
          My <span className={soraBold.className}>Projects</span>
        </h1>
        <div className="flex mx-5 flex-wrap justify-between gap-16 items-center ">
          <ProjectCard
            gitHubLink="https://github.com/Binitstha/Fitness-tracker"
            projectNumber="01"
            link="https://fitness-tracker-omega-liard.vercel.app/"
            image="project1.png"
            reverse={false}
            title="Horizon Cloud: Streamlined Cloud Management"
            description="Horizon Cloud is a comprehensive web application designed for efficient cloud resource management. Built with Next.js for server-side rendering and seamless navigation, it utilizes Firebase for real-time data management and NextAuth for secure user authentication, including OAuth support for various providers. The application features a modern user interface styled with Tailwind CSS and Material-UI (MUI) components for enhanced usability. Users can easily manage their cloud resources while enjoying a responsive and intuitive experience."
          />
          <ProjectCard
            gitHubLink="https://github.com/Binitstha/Horizon-cloud"
            projectNumber="02"
            link="https://horizon-cloud-gamma.vercel.app/"
            image="project4.jpg"
            reverse={true}
            description="The Fitness Tracker is a full-stack web application that helps users monitor their fitness journey. Built with React and Next.js for the front end and Node.js and Express for the back end, it uses MySQL with Prisma for data management. The app features responsive styling with Tailwind CSS, state management via React Context, and form handling through React Hook Form and Zod for validation. User authentication is secured with JWT (JSON Web Tokens). Key functionalities include workout logging and progress tracking through visual graphs."
            title="Fitness Tracker: Monitor Your Progress"
          />
          <ProjectCard
            gitHubLink="https://github.com/Binitstha/GoalPulse"
            projectNumber="03"
            link="https://goal-pulse-alpha.vercel.app/"
            image="project3.png"
            reverse={false}
            description="GoalPulse is a web application that provides real-time information about the top five European football leagues. Built with Next.js for optimal performance and server-side rendering, this project fetches data from SerpAPI to deliver insights into club statistics, match highlights, and more. The application features a clean and intuitive interface styled with Tailwind CSS, allowing users to easily explore league standings, match results, and club information without the need for user authentication."
            title="GoalPulse: Real-Time League Insights"
          />
          <ProjectCard
            gitHubLink="https://github.com/Binitstha/sorting-visualizer"
            projectNumber="04"
            link="https://sorting-visualizer-rho-beige.vercel.app/"
            image="project2.png"
            reverse={true}
            description="The Sorting Visualizer is an interactive tool designed to illustrate various sorting algorithms, including Bubble Sort, Selection Sort, and Quick Sort. Built with Next.js and utilizing the Context Hook for state management, it allows users to customize array sizes and animation speeds, providing real-time visualizations of the sorting process. This web-based application enhances understanding of algorithm mechanics, making it an invaluable resource for students and educators in computer science. By bridging the gap between theory and practice, the Sorting Visualizer fosters engagement and deeper comprehension of sorting concepts."
            title="Sorting Visualizer: Visualizing the Mechanics of Sorting Algorithms"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
