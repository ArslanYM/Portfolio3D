const portfolio = [
  {
    id: 0,
    projectName: "Starter Hive",
    url: "starter-hive.vercel.app",
    image: "projects/starter-hive.png",
    projectDetail:
      "Developed a user-friendly GitHub organization discovery app, emphasizing first-time and open issues.Enhanced user experience with ReactJS for frontend and TailwindCSS for responsive design.Built a reliable ExpressJS and NodeJS API with web scraping capabilities for GitHub data extraction.Open-sourced the project on GitHub, accumulating 150+ stars and fostering a community of 60+ contributors",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "ExpressJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "TailwindCSS",
      },
      {
        tech: "GithubAPI",
      },
    ],
  },
  {
    id: 1,
    projectName: "Easy Course  ",
    url: "https://github.com/ArslanYM/course-selling-app",
    image: "projects/coursify.png",
    projectDetail:
      "Created a ReactJS web app with TailwindCSS and Material-UI for intuitive course purchasing.Designed admin dashboards for CRUD operations, implemented JWT-based authentication.Streamlined user signup/login, enhancing security and user access.Connected to an ExpressJS/NodeJS server with MongoDB for efficient data handling.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Recoil",
      },
      {
        tech: "JWT Auth",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "MUI ",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 2,
    projectName: "One4 All",
    url: "https://one4-all.vercel.app/",
    image: "projects/one4all.png",
    projectDetail:
      "Designed and developed a user-focused VueJS web app with TailwindCSS, enabling personalized portfolio links.Utilized VueJS for dynamic and responsive frontend, while NuxtJS delivered server-side rendering for enhanced performance.Ensured code integrity with TypeScript, enhancing scalability and type safety.Streamlined frontend design with TailwindCSS, resulting in an attractive and user-friendly interface.",
    technologiesUsed: [
      {
        tech: "VueJS",
      },
      {
        tech: "NuxtJS",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 3,
    projectName: "Google Meet Clone",
    url: "https://github.com/ArslanYM?tab=repositories",
    image: "projects/google-meet-clone.png",
    projectDetail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "NodeJS",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
