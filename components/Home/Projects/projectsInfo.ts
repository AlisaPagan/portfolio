import type { Project } from "./project";

export const projects: Project[] = [
  {
    id: "relax-map",
    title: "Relax Map",
    year: "2026",
    type: "Full-stack app",
    status: "completed",
    categories: ["dev"],
    featured: true,

    shortDescription:
      "Full-stack platform for discovering, reviewing, creating, and editing relaxation locations.",
    description:
      "Relax Map is a full-stack web platform where users can discover relaxation locations, read reviews, share their own places, and manage public user profiles. The project includes location browsing, filtering, content creation, editing flows, and profile-related functionality.",

    role: [
      "Scrum Master",
      "Full-Stack Developer",
      "Organized team calls, workflow, and sprint communication",
      "Collaborated with the Team Lead on code review, debugging, and final cleanup",
      "Developed backend user endpoints for current user data and profile updates",
      "Built frontend API utilities and proxy setup for frontend-backend communication",
      "Worked on the frontend user profile experience",
    ],

    problem:
      "Users need a simple way to find relaxing places, compare options, read real feedback, and share their own recommendations.",
    solution:
      "A searchable relaxation location platform with reviews, profiles, and tools for creating and editing user-generated content.",

    keyFeatures: [
      "Location discovery",
      "Reviews",
      "User profiles",
      "Create and edit content",
      "Filtering",
      "Frontend-backend API integration",
      "Profile update functionality",
    ],

    techStack: [
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Axios",
      "Vercel",
      "Render",
    ],

    image: "/relax-map.webp",
    imageAlt: "Relax Map project preview",

    links: {
      live: "https://chillscape-frontend.vercel.app/",
      frontend: "https://github.com/AlisaPagan/chillscape-frontend",
      backend: "https://github.com/AlisaPagan/chillscape-backend",
    },
  },

  {
    id: "go-raiding",
    title: "Go Raiding",
    year: "2026",
    type: "Full-stack app",
    status: "in progress",
    categories: ["dev", "ux", "ongoing"],

    shortDescription:
      "Mobile-first raid organization platform for World of Warcraft players.",
    description:
      "Go Raiding is a mobile-first web app for creating, browsing, and joining World of Warcraft raid groups. The project focuses on raid discovery, approval-based joining, character selection, item-level validation, and future Blizzard OAuth integration.",

    role: [
      "Product idea",
      "UX/UI Designer",
      "Full-Stack Developer",
      "Designed mobile-first app flows in Figma",
      "Planned raid discovery, join request, and character validation flows",
      "Built the project architecture with Next.js, TypeScript, Express, and MongoDB",
      "Collaborating with two other developers while owning the product direction",
    ],

    problem:
      "Raid organization can be messy when players need to coordinate roles, character requirements, approvals, and event details across scattered tools.",
    solution:
      "A focused raid-planning platform with raid cards, detail modals, role slots, join requests, character selection, and future Blizzard account integration.",

    keyFeatures: [
      "Browse raids",
      "Create raid events",
      "Raid details modal",
      "Role-based join requests",
      "Character selection",
      "Item-level validation planning",
      "Approval-based raid joining",
      "Mobile-first navigation",
      "Future Blizzard OAuth integration",
    ],

    techStack: [
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "CSS Modules",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Figma",
    ],

    image: "/go-raiding.webp",
    imageAlt: "Go Raiding mobile app preview",

    links: {
      github: "https://github.com/AlisaPagan/go-raiding",
    },
  },

  {
    id: "mebleria",
    title: "Mebleria",
    year: "2025",
    type: "Frontend app",
    status: "completed",
    categories: ["dev"],

    shortDescription:
      "Responsive furniture store web app built with vanilla JavaScript and API integration.",
    description:
      "Mebleria is a student team project for an online furniture store. The app uses a provided Furniture Store API and includes product browsing, interactive UI components, notifications, sliders, FAQ accordion behavior, rating display, and HTTP requests through Axios.",

    role: [
      "Scrum Master",
      "Frontend Developer",
      "Supported team workflow and communication",
      "Worked with JavaScript-based frontend functionality",
      "Helped connect interface behavior with API-driven content",
    ],

    problem:
      "Furniture shoppers need a fast, mobile-friendly way to browse products, filter options, compare details, and interact with store content without unnecessary friction.",
    solution:
      "A responsive furniture storefront with API-powered product data, interactive UI elements, notifications, ratings, and user-friendly browsing behavior.",

    keyFeatures: [
      "Product browsing",
      "REST API integration",
      "Axios HTTP requests",
      "Interactive notifications",
      "Reviews slider",
      "FAQ accordion",
      "Rating display",
      "Responsive layout",
    ],

    techStack: [
      "JavaScript",
      "REST API",
      "HTML5",
      "CSS3",
      "SCSS",
      "Vite",
      "Axios",
      "Swiper.js",
      "iziToast",
      "Accordion.js",
      "Raty.js",
    ],

    image: "/mebleria.webp",
    imageAlt: "Mebleria furniture store project preview",

    links: {
      github: "https://github.com/AlisaPagan/QuantumJS",
    },
  },

  {
    id: "flowbloom",
    title: "FlowBloom",
    year: "2025",
    type: "Landing page",
    status: "completed",
    categories: ["dev"],

    shortDescription:
      "Responsive yoga studio landing page built as a team HTML/CSS project.",
    description:
      "FlowBloom is a one-page yoga studio landing page focused on clean semantic markup, adaptive layout, optimized assets, SVG sprite icons, and structured landing page sections. The project includes sections for classes, team, gallery, about, testimonials, pricing, and footer content.",

    role: [
      "Team Lead",
      "Frontend Developer",
      "Helped organize team implementation",
      "Worked on HTML/CSS layout and responsive structure",
      "Followed project technical requirements and code quality standards",
    ],

    problem:
      "A yoga studio needs a simple landing page that explains the offer, presents classes and trainers, builds trust, and drives users toward joining a pricing package.",
    solution:
      "A structured one-page website with anchor navigation, service sections, team content, gallery, testimonials, pricing, and footer subscription/contact areas.",

    keyFeatures: [
      "One-page landing page",
      "Anchor navigation",
      "Responsive layout",
      "Semantic HTML5 structure",
      "Optimized images",
      "SVG sprite icons",
      "Retina image support",
      "Pricing section",
      "Footer subscription form",
    ],

    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "modern-normalize",
      "Prettier",
      "SVG Sprite",
      "Responsive Design",
    ],

    image: "/flowbloom.webp",
    imageAlt: "FlowBloom yoga studio landing page preview",

    links: {
      live: "https://alisapagan.github.io/FlowBloom/",
      github: "https://github.com/AlisaPagan/FlowBloom",
    },
  },

  {
    id: "artisan-shop",
    title: "Artisan Home Decor Shop",
    year: "2025",
    type: "UX case study",
    status: "completed",
    categories: ["ux"],

    shortDescription:
      "E-commerce website concept for an artisan home decor shop.",
    description:
      "A desktop website concept for a small artisan home decor shop, focused on warm visual direction, product browsing, brand storytelling, and a polished boutique shopping experience. This is a design concept, not a live product.",

    role: [
      "UX/UI Designer",
      "Visual Designer",
      "Created desktop page designs",
      "Designed product, category, story, FAQ, and contact-focused screens",
      "Built the visual direction and layout system",
    ],

    problem:
      "Small artisan shops need to present products in a way that feels trustworthy, curated, and personal without looking like a generic marketplace.",
    solution:
      "A boutique-style e-commerce concept with editorial layouts, product-focused pages, brand storytelling, and clear shopping paths.",

    keyFeatures: [
      "Homepage concept",
      "Product listing pages",
      "Product detail page",
      "Category page",
      "Brand story page",
      "Contact page",
      "FAQ page",
      "Editorial-style visual direction",
    ],

    techStack: ["Adobe XD", "UX Research", "UI Design", "Visual Design"],

    image: "/artisan-shop.webp",
    imageAlt: "Artisan home decor shop website design preview",
  },

  {
    id: "wildcatworks",
    title: "WildcatWorks",
    year: "2025",
    type: "Concept app",
    status: "planned",
    categories: ["ux", "ongoing"],

    shortDescription:
      "Oilfield formula calculator app concept for field and production workflows.",
    description:
      "WildcatWorks is an app concept for oilfield-related calculations, formula lookup, unit conversion, and workflow support. The design focuses on helping users find formulas by asset type, calculate results, save history, and work with practical field data. Development is planned for the future.",

    role: [
      "Product idea",
      "UX/UI Designer",
      "Created app concept and flow planning",
      "Designed formula discovery and calculation experience",
      "Planned future development direction",
    ],

    problem:
      "Oilfield calculations can be scattered across spreadsheets, notes, and manuals, which slows down field workflows and increases the chance of input mistakes.",
    solution:
      "A structured calculator app with formula categories, guided inputs, unit conversion, saved history, and learning/reference content.",

    keyFeatures: [
      "Formula lookup",
      "Calculation flow",
      "Asset-based formula categories",
      "Unit conversion",
      "Saved history planning",
      "Offline/online workflow planning",
      "Learning/reference section planning",
    ],

    techStack: [
      "Adobe XD",
      "UX Research",
      "UI Design",
      "Product Planning",
      "Python planned",
    ],

    image: "/wildcatworks.webp",
    imageAlt: "WildcatWorks app concept preview",
  },
];

export const featuredProject = projects.find((project) => project.featured);

export const devProjects = projects.filter((project) =>
  project.categories.includes("dev"),
);

export const uxProjects = projects.filter((project) =>
  project.categories.includes("ux"),
);

export const ongoingProjects = projects.filter((project) =>
  project.categories.includes("ongoing"),
);
