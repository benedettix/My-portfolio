import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.png";
import work9 from "./assets/work9.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaInstagram />, <FaLinkedin />, <FaGithub />];
export const urls = [
  "https://www.instagram.com/luka.benedetti/",
  "https://www.linkedin.com/in/luka-benedetti-66594b172/",
  "https://github.com/benedettix?tab=repositories",
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Luka",
    value: "Benedetti",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+381616087587",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "benedetiluka@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaReact />,
];

export const experiences = [
  {
    id: 1,
    year: "2021",
    position: "DaniloVesovic Course Mentorship",
    company: "danilovesovic.com",
  },
  {
    di: 2,
    year: "2022",
    position: "Freelancing",
    company: "upwork.com",
  },
  {
    id: 3,
    year: "2019-2023",
    position: "Udemy Courses & Youtube videos",
    company: "yt.com&udemy.com",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "10+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "100+",
    itemName: "Designed Projects",
  },
  {
    id: 4,
    number: "10+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    url: "https://moder-quiz-app.netlify.app/index.html",
    github: "https://github.com/benedettix/Modern-Quizz",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    url: "https://sambo-website.netlify.app/",
    github: "https://github.com/benedettix/Sambo-app",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    url: "https://watch-shop-benyx.netlify.app/",
    github: "https://github.com/benedettix/Benyx-shop",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    url: "https://uservision-site.netlify.app/",
    github: "https://github.com/benedettix/Uservision-Landing-Page",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "web",
    github: "https://github.com/benedettix/Felib-Map",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "web",
    github: "https://github.com/benedettix/Youtube-Copy-app",
  },
  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "web",
    github: "https://github.com/benedettix/Netflix-copy-app",
  },
  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "mobile",
    github: "https://github.com/benedettix/Food-React-native-app",
  },
  {
    id: 9,
    img: work9,
    name: "project 9",
    category: "web",
    github: "https://github.com/benedettix/Online-SHOP-SInglepage-app",
  },
];

export const workNavs = ["All", "Web", "Mobile"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Krusevac, Serbia",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "benedetiluka@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+381616087587",
  },
];
