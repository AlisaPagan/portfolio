"use client";

import { TiDeviceDesktop } from "react-icons/ti";
import { CiServer } from "react-icons/ci";
import { PiBrowser } from "react-icons/pi";
import { RiLayoutMasonryLine } from "react-icons/ri";

const skillGroups = [
  {
    title: "Frontend",
    icon: PiBrowser,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "WordPress",
      "Elementor",
    ],
  },

  {
    title: "Backend & APIs",
    icon: CiServer,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Postman",
    ],
  },

  {
    title: "Design & UX",
    icon: RiLayoutMasonryLine,
    skills: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  },

  {
    title: "Dev Tools",
    icon: TiDeviceDesktop,
    skills: ["Git & GitHub", "Vite", "Vercel", "Render", "Trello", "Jira"],
  },
];

export default skillGroups;
