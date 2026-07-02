import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaSitemap } from "react-icons/fa";


export const skills = {
  programming: [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],

  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  ],

  databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ],

  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],

  currentlyLearning: [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "System Design", icon: FaSitemap, color: "#8B5CF6" },
    { name: "Data Structures & Algorithms", icon: FaSitemap, color: "#22C55E" },
  ],
};