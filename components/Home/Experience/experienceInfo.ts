export type Experience = {
  id: string;
  company: string;
  position: string;
  years: string;
  location: string;
  responsibilities: string[];
};

export type Certification = {
  id: string;
  name: string;
  company: string;
  year: string;
};

export const jobs: Experience[] = [
  {
    id: "front-end-developer",
    company: "Independent",
    position: "Front-End Developer",
    years: "2025 - present",
    location: "Remote",
    responsibilities: [
      "Developed frontend projects focused on reusable components, responsive layouts, API-connected interfaces.",
      "Built projects using React, Next.js, TypeScript, Node.js, Express, MongoDB, and REST API workflows.",
      "Applied UX/UI design experience to create clean user flows, accessible layouts, mobile-first interfaces, and polished visual systems.",
    ],
  },

  {
    id: "graphic-designer",
    company: "Enjoy Games",
    position: "Graphic Designer / Level Designer",
    years: "2021 - present",
    location: "Remote",
    responsibilities: [
      "Created ad banners, video creatives, and store assets for paid advertising platforms.",
      "Assisted with level assembly and playable ad content for mobile games.",
      "Collaborated with developers on JavaScript-based playable ad formats.",
    ],
  },

  {
    id: "web-designer",
    company: "DigitalianLab",
    position: "Web Designer / Graphic Designer",
    years: "2019 - 2025",
    location: "Remote",
    responsibilities: [
      "Built client websites using WordPress and Elementor.",
      "Designed logos, brand assets, and print materials for small businesses.",
      "Created content and digital marketing materials for client projects.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "full-stack-dev",
    name: "Full-Stack Developer Certificate",
    company: "GoIT",
    year: "2026",
  },

  {
    id: "digital-marketing",
    name: "Google Digital Marketing & E-commerce Certificate",
    company: "Google",
    year: "2024",
  },
];
