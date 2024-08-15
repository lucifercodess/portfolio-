import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  chess,
  video,
  chat,
  ChatApp,
  net
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Video Streaming WebApp",
    company_name: "Personal",
    icon: video,
    iconBg: "#383E56",
    date: "april 2024",
    points: [
      "Made a full stack video streaming application",
      "Used Reactjs, as the frontend library and Zustand for global state management",
      "implemented authentication from scratch using jet and bcrypt in nodejs, expressjs",
      "used MongoDb as the database manangment",
    ],
  },
  {
    title: "Chess website",
    company_name: "personal",
    icon: chess,
    iconBg: "#E6DEDD",
    date: "may 2024",
    points: [
      "Developed and maintained web application using React.js and other related technologies.",
     "Used nodejs and expressjs as the backend framework",
     "Implemented real time play by using webSockets and a library called socket.io",
     "Implemented a virtual queue for the waiting players"
    ],
  },
  {
    title: "Chat App",
    company_name: "personal",
    icon: chat,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "implemented a full stack real time chat application",
      "Did authentication and made a backend server from scratch using node js and express js",
      "Used Reactjs as the frontend library and zustand for global state management",
      "Used Mongodb as the database",
      "Implemented a real time chat communication between users with socket.io in nodejs"
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "Realtime chat aaplication that enables users to register and chat with each other",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      }
    ],
    image: ChatApp,
    source_code_link: "https://github.com/lucifercodess/chat-app",
  },
  {
    name: "Video Streaming App ",
    description:
      "Video streaming application that enable users to login and signup and watch movies and tv shows trailers and sort by top rated,latest,most streamed movies and tvshows",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Expressjs",
        color: "red-text-gradient",
      },
    ],
    image: net,
    source_code_link: "https://github.com/lucifercodess/NETFLIX_CLONE",
  },
  
];

export { services, technologies, experiences, testimonials, projects };