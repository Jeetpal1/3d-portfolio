import {
  arrow,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  sse,
  summiz,
  tailwindcss,
  threads,
  typescript,
  uofw,
} from "../assets/icons";
import { meta, shopify, starbucks, tesla } from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Software Developer",
    company_name: "Strategic Systems Engineering Inc.",
    icon: sse,
    iconBg: "#0d9488", // Tailwind CSS green-600
    date: "Sept 2022 - Present",
    points: [
      "Spearheaded the development of a 3D Visualization Web Portal enhancing client engagement by 30%.",
      "Integrated NextJS, Express (NodeJS), and AWS to boost platform scalability and performance.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company_name: "Strategic Systems Engineering Inc.",
    icon: sse,
    iconBg: "#0d9488", // Tailwind CSS green-600
    date: "May 2022 – Sept 2022",
    points: [
      "Played a key role in backend and frontend system enhancements, contributing to improved user experience and infrastructure tooling.",
    ],
  },
  {
    title: "Computer Science Tutor, Marker, Student Coach",
    company_name: "University of Winnipeg",
    icon: uofw,
    iconBg: "#9333ea", // Tailwind CSS purple-600
    date: "Sept 2021 – Feb 2023",
    points: [
      "Provided academic support and coaching, contributing to the success of numerous students in computer science.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Jeetpal1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jeetpal-singh-8630a61aa/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "Portfolio Dark Edition",
    description:
      "The latest personal website that I designed and developed over a weekend. The UI inspiration is taken from Ben 10 series.",
    link: "https://jeetpalsingh.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Joogle Web Search",
    description:
      "It is a clone of the Google Web Search UI and is using Google API, to make the search calls. Pagination is also implemented to navigate across thousands of search results.",
    link: "https://jooglewebsearch.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Web Cinema",
    description:
      "This web cinema works like NetFlix. It uses lazy loading to make the app faster by not loading all the data at once. This app is highly responsive, it can open from small phones upto 4k big monitors and style itself accordingly. I am using Tailwind-css for the amazing responsiveness.",
    link: "https://jeetpal-web-cinema.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "FunChat",
    description:
      "FunChat is a chat application, which allows you to login with your Google account (Google Authentication), and send messages back and forth between friends in different chat rooms (just like Discord or Slack). Fully Responsive to all sized screens. Real-Time Chat Messaging.",
    link: "https://fun-chat-acc4a.web.app/",
  },

  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "Screen Recorder",
    description:
      "A screen recorder software, which can be installed on your computer. Motivation, I found some of the desktop screen recorder software very cheap (not reliable) and I didn't want their premium version. So, I created my own screen recorder app. Features, it lets you choose which opened app window(record a specific app), or monitor's whole screen (if you have >1 monitor) to record. And saves the recorded video in your local directory (as directed by you). Technologies: Electron, Node.js, HTML, CSS.",
    link: "https://github.com/Jeetpal1/desktop-screen-recorder",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Jopify",
    description:
      "This Spotify clone is crafted using React and interfaces with the Spotify API to enable real-time music streaming. Ideal for you if you are looking to explore a modern React application. Ensure to update the src/config.js with your Spotify credentials before use. Caution: This client-side app may expose credentials when deployed",
    link: "https://github.com/Jeetpal1/spotify-clone",
  },
];
