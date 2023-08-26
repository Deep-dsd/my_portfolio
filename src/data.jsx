import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import project1 from "./assets/projects/project-1.png";
import project2 from "./assets/projects/project-2.png";
import project3 from "./assets/projects/project-3.png";
import project4 from "./assets/projects/project-4.png";

import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import javascriptImg from "./assets/javascript.png";
import reactImg from "./assets/react.png";
import githubImg from "./assets/github.png";

export const socialLinks = [
  {
    id: 1,
    icon: <FaGithubSquare />,
    link: "https://github.com/Deep-dsd",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    link: "mailto:deepde593@gmail.com",
  },
  {
    id: 3,
    icon: <BsFillPersonLinesFill />,
    link: "/cv/my_resume.pdf",
    download: true,
    title: "Download CV",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/deepsankarde2000/?trk=public-profile-join-page",
  },
];

export const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "projects" },
  { id: 4, link: "expertise" },
  { id: 5, link: "contact" },
];

export const projects = [
  {
    id: 1,
    img: project1,
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    demoLink: "https://devaryacom.netlify.app/",
    codeLink: "https://github.com/Deep-dsd/Portfolio",
  },
  {
    id: 2,
    img: project2,
    techStack: ["CSS", "REACT"],
    demoLink: "https://serveyourowncocktail.netlify.app/",
    codeLink: "https://github.com/Deep-dsd/cocktail_project-react",
  },
  {
    id: 3,
    img: project3,
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
    demoLink: "https://walterwhitecom.netlify.app/",
    codeLink: "",
  },
  {
    id: 4,
    img: project4,
    techStack: ["CSS", "REACT"],
    demoLink: "https://backroadsinitiative.netlify.app/",
    codeLink: "",
  },
];

export const skills = [
  { id: 1, img: htmlImg, name: "HTML", percentage: 80 },
  { id: 2, img: cssImg, name: "CSS", percentage: 70 },
  { id: 3, img: javascriptImg, name: "JAVASCRIPT", percentage: 65 },
  { id: 4, img: reactImg, name: "REACT", percentage: 60 },
  { id: 5, img: githubImg, name: "GITGUB", percentage: 70 },
];
