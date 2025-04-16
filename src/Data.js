import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,

  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,

  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.png";
import work9 from "./assets/work9.png";
import work10 from "./assets/work10.png";
import work11 from "./assets/work11.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaInstagram color="black" />, <FaLinkedin color="black" />, <FaGithub color="black" />];
export const urls = [
  "https://www.instagram.com/luka.benedetti/",
  "https://www.linkedin.com/in/luka-benedetti-66594b172/",
  "https://github.com/benedettix?tab=repositories",
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Luka Benedetti",
    value: "",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    key: "benedetiluka@gmail.com",
    value: "",
  },
];

export const icons = [
  <SiMongodb />,
  <RiSupabaseFill />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <RiNextjsFill />,
  <TbBrandReactNative />,
];

export const experiences = [
  {
    id: 1,
    year: "2021-2022",
    position: "Frontend Developer",
    company: "Fiverr & Upwork",
  },
  {
    di: 2,
    year: "2023",
    position: "Full-stack developer",
    company: "The Darkstar soft",
  },
  {
    id: 3,
    year: "2024-Now",
    position: "Full-stack Developer",
    company: "Loy Digital AG",
  },
  {
    id: 4,
    year: "2024-Now",
    position: "Full-stack Developer",
    company: "Emissium",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
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
    img: work6,
    name: "project 1",
    category: "web",
    url: "https://v2-demo.loy.ch/",
    github: "private",
    fire: true,
  },
  {
    id: 2,
    img: work4,
    name: "project 2",
    category: "web",
    url: "https://api.emissium.io/",
    github: "private",
    fire: true,
  },
  {
    id: 3,
    img: work5,
    name: "project 3",
    category: "web",
    url: "https://test.dashboard.emissium.io/",
    github: "",
    fire: true,
  },
  {
    id: 4,
    img: work7,
    name: "project 4",
    category: "mobile",
    url: "https://notepad.pw/share/s9pqPDd3BBmh2N8Y8if9",
    github: "private",
    fire: true,
  },

  {
    id: 6,
    img: work2,
    name: "project 6",
    category: "web",
    url: "https://sambo-website.netlify.app/",
    github: "private",
  },
  {
    id: 7,
    img: work1,
    name: "project 7",
    category: "web",
    url: "https://onlinewebshopluka.000webhostapp.com/",
    github: "https://github.com/benedettix/Youtube-Copy-app",
  },
  {
    id: 8,
    img: work3,
    name: "project 8",
    category: "web",
    url: "https://watch-shop-benyx.netlify.app/",
    github: "https://github.com/benedettix/Netflix-copy-app",
  },

  {
    id: 10,
    img: work9,
    name: "project 10",
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
];
