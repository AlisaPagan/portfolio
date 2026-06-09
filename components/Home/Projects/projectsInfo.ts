import type { Project } from "./project";

const projects: Project[] = [
  {
    id: "relax-map",
    title: "Relax Map",
    year: "2026",
    type: "Full-stack app",
    status: "completed",
    categories: ["dev"],
    featured: true,

    shortDescription:
      "Team-built full-stack platform for discovering, reviewing, creating, and editing relaxation locations.",
    description:
      "Relax Map is a full-stack team project where users can discover relaxation locations, filter and browse places, read reviews, share their own locations, and manage public user profiles. My work focused on connecting frontend features to backend data, replacing mock-data flows with real API calls, improving location and profile experiences, and helping coordinate the team through final implementation and cleanup.",

    role: [
      "Full-Stack Developer",
      "Scrum Master",
      "Built backend user endpoints for profile-related functionality",
      "Created frontend API utilities and proxy setup for backend communication",
      "Built the populated user profile view with user-specific locations",
      "Improved the locations page with real API data, filters, layout fixes, and show-more behavior",
      "Fixed homepage reviews, popular locations, and location card data display",
      "Finished create/edit location flows, including image upload handling with Cloudinary",
      "Tested and debugged backend endpoints with Postman",
      "Reviewed and fixed code across teammate contributions",
      "Organized team calls, task coordination, and final cleanup with the Team Lead",
    ],

    mainRole: "Full-Stack Developer / Scrum Master",

    featuredRole: [
      "Built backend user endpoints and frontend API utilities",
      "Connected location/profile features to real backend data",
      "Improved locations, reviews, cards, filters, and create/edit flows",
    ],

    problem:
      "Users need a simple way to discover relaxing places, compare options, read real feedback, and share their own recommendations without relying on scattered lists or generic travel content.",
    solution:
      "A full-stack location platform with searchable places, filters, reviews, user profiles, and create/edit flows for user-generated relaxation locations.",

    devFocus: [
      "Relax Map was built as a full-stack team project with a Next.js frontend and an Express/MongoDB backend. My main development work focused on making frontend features communicate correctly with backend data: user-related backend endpoints, frontend API utilities, proxy setup, profile functionality, location data display, filters, and create/edit location flows.",
      "A large part of my contribution was turning incomplete or mock-data-based sections into working user-facing features. I fixed homepage reviews, popular locations, location cards, the all-locations page, image upload behavior, modal interactions, responsive styling issues, and several data display bugs. I also helped coordinate team workflow as Scrum Master, reviewed and fixed code, handled some pull requests and conflicts, and supported final cleanup with the Team Lead.",
    ],

    keyFeatures: [
      "Location discovery",
      "Real API-driven location data",
      "Filtering and show-more behavior",
      "Reviews and ratings",
      "User profiles with user-specific locations",
      "Create and edit location flows",
      "Cloudinary image upload handling",
      "Frontend-backend API integration",
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
      "Postman",
      "Cloudinary",
      "Vercel",
      "Render",
    ],

    image: "/relax-map-locations.webp",
    imageAlt: "Relax Map project preview",

    gallery: [
      {
        src: "/relax-map-home.webp",
        alt: "Relax Map project home page preview",
      },

      {
        src: "/relax-map-mobile.webp",
        alt: "Relax Map project mobile pages preview",
      },
    ],

    sliderGallery: [
      {
        src: "/relax-map-preview-1.webp",
        alt: "Relax Map project advantages and popular locations",
      },

      {
        src: "/relax-map-preview-2.webp",
        alt: "Relax Map project reviews",
      },

      {
        src: "/relax-map-preview-3.webp",
        alt: "Relax Map project edit location",
      },

      {
        src: "/relax-map-preview-4.webp",
        alt: "Relax Map project add location",
      },

      {
        src: "/relax-map-preview-5.webp",
        alt: "Relax Map project leave review",
      },
    ],

    links: {
      live: "https://chillscape-frontend.vercel.app/",
      frontend: "https://github.com/AlisaPagan/chillscape-frontend",
      backend: "https://github.com/AlisaPagan/chillscape-backend",
    },
  },

  {
    id: "go-raiding",
    title: "GoRaiding",
    year: "2026",
    type: "Full-stack app",
    status: "in progress",
    categories: ["dev", "ux", "ongoing"],
    featured: false,

    shortDescription:
      "Mobile-first raid organization platform for World of Warcraft players.",

    description:
      "GoRaiding is an in-progress full-stack product for World of Warcraft players who need a better way to organize, browse, join, and manage raids outside the game. I created the product idea, designed the full mobile-first experience in Figma, and started the frontend implementation with reusable UI components, layout patterns, and raid browsing interactions. The planned full-stack build includes user accounts, Blizzard account connection, character import, raid applications, reviews, ratings, and approval-based raid participation.",

    role: [
      "Created the product idea, feature direction, and full project scope",
      "Designed the full mobile-first UX/UI experience in Figma",
      "Researched OpenRaid, current World of Warcraft raid organization workflows, and player needs",
      "Interviewed an experienced World of Warcraft player to define core use cases, pain points, and missing features",
      "Designed user flows for authentication, Blizzard account connection, character management, raid browsing, raid creation, raid applications, approvals, reviews, and user profiles",
      "Planned user flows for authentication, Blizzard account connection, character import, raid browsing, raid creation, raid applications, approvals, reviews, user profiles, settings, and character management",
      "Planned the full-stack architecture for users, raids, characters, applications, reviews, ratings, and Blizzard account integration",
      "Built the pre-auth landing page and started the frontend application structure",
      "Built a reusable bottom sheet component for mobile modal-style interactions",
      "Worked on reusable UI patterns for inputs, search, text areas, buttons, and raid browsing components",
      "Collaborated with two developers while owning the product concept, UX direction, and main design system",
    ],
    mainRole: "Product Designer / Full-Stack Developer",

    featuredRole: [
      "Created the product idea and full app scope",
      "Designed the mobile-first UX/UI and core user flows",
      "Built the landing page and reusable bottom sheet component",
      "Planned full-stack raid, character, review, and Blizzard integration logic",
    ],

    problem:
      "World of Warcraft players often need to organize raids outside the game, but raid leaders still need reliable context before accepting participants. In-game tools do not provide enough information about a player’s item level, role fit, raid history, reputation, or reliability, and older community tools like OpenRaid are no longer available.",
    solution:
      "GoRaiding gives players a dedicated place to create, browse, join, and manage raids with stronger player context. Raid leaders can review applicants, check character details, see ratings, and approve or reject requests. Players can browse available raids, select eligible characters, request to join groups, and build reputation through raid history and reviews.",
    uxPlanning:
      "The UX planning started with research into old OpenRaid-style workflows, current World of Warcraft raid organization problems, and feedback from an experienced player. The main product decisions focused on mobile-first raid discovery, clear raid requirements, player reputation, character-aware joining, approval-based participation, and reducing navigation friction through bottom sheets and inline actions.",
    designProcess:
      "I designed the full mobile-first flow in Figma, including authentication, Blizzard account connection, dashboard states, raid browsing, filters, raid details, raid creation, raid management, approval requests, reviews, user profiles, settings, and character management. The interface uses bottom navigation for core app areas and bottom sheets for previews, filters, creation steps, and confirmations so players can act without losing context.",

    uxDecisions: [
      "Designed mobile-first so players can browse raids, check requests, and manage raid activity quickly from anywhere.",
      "Used bottom navigation for the main app areas because raid browsing, dashboard access, and profiles need to stay reachable on mobile.",
      "Planned gated raid joining so players can only request to join when their selected character meets role, item level, and raid status requirements.",
      "Used bottom sheets for raid previews, filters, join requests, creation steps, and management actions to reduce page-hopping.",
      "Added inline confirmations for actions like leaving or deleting a raid to avoid stacking multiple modal layers.",
      "Prioritized dashboard previews for raids created by the user, raids joined by the user, and pending raid activity.",
      "Included ratings and reviews so raid leaders can evaluate player reliability before approving requests.",
    ],

    currentDevProcess: [
      "Built the pre-auth landing page.",
      "Built a reusable bottom sheet component for modal-like mobile interactions.",
      "Started the reusable frontend UI system for buttons, inputs, search, text areas, and raid browsing components.",
      "Using mock raid data while the backend and database are still planned.",
      "Collaborating with two developers on reusable components and frontend structure.",
      "Next step is building login and sign-up pages, then moving into core raid browsing and account flows.",
    ],

    nextSteps: [
      "Finish reusable UI components used across forms, raid cards, filters, and bottom sheets.",
      "Build login and sign-up screens.",
      "Implement raid browsing, raid cards, filters, and raid details flows.",
      "Build raid creation and raid management flows.",
      "Create backend models and API routes for users, raids, characters, applications, reviews, and ratings.",
      "Add Blizzard account connection and character import.",
      "Connect item level, role availability, character selection, and raid status to gated join logic.",
    ],

    keyFeatures: [
      "Mobile-first raid browsing",
      "Raid creation and management planning",
      "Approval-based raid joining",
      "Character-aware raid applications",
      "Minimum item level and role checks",
      "Player reviews and ratings",
      "Raid history and reputation planning",
      "Blizzard account connection planning",
      "Reusable bottom sheet interactions",
      "Dashboard previews for created and joined raids",
    ],

    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Axios",
      "Figma",
    ],

    image: "/go-raiding-hero.webp",
    imageAlt: "GoRaiding mobile app screens preview",

    wireframes: [
      {
        src: "/goraiding-create-acc-dashboard-wireframe.webp",
        alt: "GoRaiding create account and dashboard wireframe",
      },

      {
        src: "/goraiding-raid-browsing-and-filters-wireframe.webp",
        alt: "GoRaiding raid browsing with filters wireframe",
      },

      {
        src: "/goraiding-join-raid-wireframe.webp",
        alt: "GoRaiding join raid wireframe",
      },

      {
        src: "/goraiding-create-raid-wireframe.webp",
        alt: "GoRaiding create raid wireframe",
      },

      {
        src: "/goraiding-manage-raid-wireframe.webp",
        alt: "GoRaiding raid management wireframe",
      },

      {
        src: "/goraiding-user-profile-wireframe.webp",
        alt: "GoRaiding user profile wireframe",
      },

      {
        src: "/goraiding-reviews-wireframe.webp",
        alt: "GoRaiding reviews wireframe",
      },
    ],

    gallery: [
      {
        src: "/go-raiding-landing-raid.webp",
        alt: "GoRaiding landing page and raid browsing",
      },

      {
        src: "/go-raiding-live-landing-page.webp",
        alt: "GoRaiding landing page live",
      },

      {
        src: "/go-raiding-live-raid-browsing.webp",
        alt: "GoRaiding raid browsing live",
      },

      {
        src: "/go-raiding-bottom-sheet.webp",
        alt: "GoRaiding raid bottom sheet",
      },

      {
        src: "/go-raiding-live-code-1.webp",
        alt: "GoRaiding bottom sheet code snippet",
      },

      {
        src: "/go-raiding-live-code-2.webp",
        alt: "GoRaiding input code snippet",
      },
    ],

    sliderGallery: [
      {
        src: "/goraiding-dashboard.png",
        alt: "GoRaiding dashboard screen",
      },

      {
        src: "/goraiding-raid-browsing.png",
        alt: "GoRaiding raid browsing screen",
      },

      {
        src: "/goraiding-raid-browsing-filters.png",
        alt: "GoRaiding raid browsing filters screen",
      },

      {
        src: "/goraiding-join-raid.png",
        alt: "GoRaiding join raid screen",
      },

      {
        src: "/goraiding-create-raid.png",
        alt: "GoRaiding create raid screen",
      },

      {
        src: "/goraiding-completed-raid.png",
        alt: "GoRaiding completed raid screen",
      },

      {
        src: "/goraiding-raid-management.png",
        alt: "GoRaiding manage raid requests screen",
      },

      {
        src: "/goraiding-user-profile.png",
        alt: "GoRaiding user profile screen",
      },

      {
        src: "/goraiding-user-reviews.png",
        alt: "GoRaiding user reviews screen",
      },

      {
        src: "/goraiding-leave-review.png",
        alt: "GoRaiding leave review screen",
      },

      {
        src: "/goraiding-user-settings.png",
        alt: "GoRaiding user settings screen",
      },

      {
        src: "/goraiding-characters-management.png",
        alt: "GoRaiding character management screen",
      },
    ],

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
    featured: false,

    shortDescription:
      "Responsive furniture store web app built as a JavaScript team project.",
    description:
      "Mebleria is a responsive furniture store web app built by a team using vanilla JavaScript, a provided Furniture Store API, and interactive UI libraries. My main contributions were building the responsive header and navigation, supporting team coordination as Scrum Master, helping with final UI polish, and assisting with visual and interaction fixes before deployment.",
    role: [
      "Frontend Developer",
      "Scrum Master",
      "Built the responsive header and navigation across breakpoints",
      "Implemented burger menu and anchor navigation behavior",
      "Handled responsive styling for the header, including tablet layout adjustments",
      "Helped fix visual layout issues in sections like reviews and popular products",
      "Supported final UI polish and small CSS/JavaScript fixes before deployment",
      "Organized team calls, standups, task division, and Trello workflow",
      "Helped teammates stay on track and supported debugging during final cleanup",
      "Prepared the project presentation",
    ],

    mainRole: "Frontend Developer / Scrum Master",

    problem:
      "Furniture shoppers need a responsive storefront where they can browse products, view store content, and interact with key sections without layout issues or confusing navigation.",
    solution:
      "A responsive furniture store interface with clear navigation, product sections, interactive UI components, reviews, FAQ behavior, notifications, and API-powered product content.",

    devFocus: [
      "Mebleria was built as a JavaScript team project for a furniture store interface. My main development contribution was the responsive header and navigation, including the burger menu, anchor navigation behavior, and tablet-specific layout adjustments.",
      "As Scrum Master, I helped organize calls, standups, task division, and Trello workflow for a team of about 10–11 people. Near the end of the project, I also helped with final polish, visual fixes, and small CSS/JavaScript debugging, including layout issues around the reviews and popular products sections.",
    ],

    keyFeatures: [
      "Responsive header and navigation",
      "Burger menu",
      "Anchor navigation",
      "Product browsing",
      "API-powered product content",
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
      "Vite",
      "Axios",
      "Swiper.js",
      "iziToast",
      "Accordion.js",
      "Raty.js",
    ],

    image: "/mebleria-featured.webp",
    imageAlt: "Mebleria furniture store project preview",

    gallery: [
      {
        src: "/mebleria-popular.webp",
        alt: "Mebleria furniture store popular products preview",
      },

      {
        src: "/mebleria-devices.webp",
        alt: "Mebleria furniture store preview on different devices",
      },
    ],

    sliderGallery: [
      {
        src: "/mebleria-preview-1.webp",
        alt: "Mebleria project home and categories",
      },

      {
        src: "/mebleria-preview-2.webp",
        alt: "Mebleria project filtered products",
      },

      {
        src: "/mebleria-preview-3.webp",
        alt: "Mebleria project about and popular products",
      },

      {
        src: "/mebleria-preview-4.webp",
        alt: "Mebleria project FAQs and reviews",
      },
    ],

    links: {
      github: "https://github.com/AlisaPagan/QuantumJS",
      live: "https://alisapagan.github.io/QuantumJS/",
    },
  },

  {
    id: "yogaloom",
    title: "YogaBloom",
    year: "2025",
    type: "Landing page",
    status: "completed",
    categories: ["dev"],
    featured: false,

    shortDescription:
      "Responsive yoga studio landing page built as a team HTML/CSS project.",
    description:
      "YogaBloom is a responsive one-page landing page for a yoga studio. The project focused on semantic HTML, adaptive CSS layout, optimized assets, SVG sprite usage, and structured landing page sections for classes, team, gallery, testimonials, pricing, and footer content.",
    role: [
      "Frontend Developer",
      "Team Lead",
      "Set up the project repository and supported the team Git workflow",
      "Built the modal window layout and related open/close interaction styling",
      "Implemented responsive HTML/CSS for assigned sections",
      "Reviewed pull requests before merging into the main branch",
      "Helped teammates debug layout issues and understand Git workflow",
      "Fixed layout and styling issues across teammate sections when needed",
      "Helped optimize image assets for the project",
      "Checked final implementation against technical requirements before submission",
    ],

    mainRole: "Frontend Developer / Team Lead",

    problem:
      "A yoga studio needs a clear landing page that explains the offer, presents classes and trainers, builds trust, and guides visitors toward joining a pricing plan.",
    solution:
      "A structured one-page website with responsive sections, anchor navigation, class and team content, gallery, testimonials, pricing plans, modal interaction, and footer subscription/contact areas.",
    devFocus: [
      "YogaBloom was built as a responsive HTML/CSS team project focused on semantic markup, adaptive layout, optimized assets, SVG sprite usage, and accurate implementation from the design brief. My direct development work included the modal window layout, related styling, responsive section work, and final visual fixes.",
      "As Team Lead, I set up the repository, reviewed pull requests, helped teammates with Git and layout issues, and checked the implementation against project requirements before merging. This project strengthened my HTML/CSS fundamentals, responsive layout skills, and ability to coordinate code quality in a team workflow.",
    ],

    keyFeatures: [
      "One-page landing page",
      "Responsive layout",
      "Semantic HTML5 structure",
      "Modal window interaction",
      "Anchor navigation",
      "Optimized images",
      "SVG sprite icons",
      "Retina image support",
      "Gallery section",
      "Testimonials section",
      "Pricing section",
      "Footer subscription form",
    ],

    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vite",
      "modern-normalize",
      "Prettier",
      "SVG Sprite",
      "Responsive Design",
    ],

    image: "/yoga-bloom-main.webp",
    imageAlt: "YogaBloom yoga studio landing page preview",

    gallery: [
      {
        src: "/yoga-bloom-programs.webp",
        alt: "YogaBloom yoga studio programs list preview",
      },

      {
        src: "/yoga-bloom-team.webp",
        alt: "YogaBloom yoga studio team section preview",
      },
    ],

    sliderGallery: [
      {
        src: "/yogabloom-preview-1.webp",
        alt: "YogaBloom hero section and about",
      },

      {
        src: "/yogabloom-preview-2.webp",
        alt: "YogaBloom classes section",
      },

      {
        src: "/yogabloom-preview-3.webp",
        alt: "YogaBloom team section",
      },

      {
        src: "/yogabloom-preview-4.webp",
        alt: "YogaBloom gallery section",
      },

      {
        src: "/yogabloom-preview-5.webp",
        alt: "YogaBloom advantages and testimonials sections",
      },

      {
        src: "/yogabloom-preview-6.webp",
        alt: "YogaBloom pricing plans and footer section",
      },

      {
        src: "/yogabloom-preview-7.webp",
        alt: "YogaBloom join now modal window",
      },
    ],

    links: {
      live: "https://alisapagan.github.io/FlowBloom/",
      github: "https://github.com/AlisaPagan/FlowBloom",
    },
  },

  {
    id: "artisan-shop",
    title: "Artisan Home Decor Shop",
    year: "2024",
    type: "UX case study",
    status: "completed",
    categories: ["ux"],
    featured: false,

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

    mainRole: "UX/UI Designer",

    problem:
      "Small artisan shops need to present products in a way that feels trustworthy, curated, and personal without looking like a generic marketplace.",
    solution:
      "A boutique-style e-commerce concept with editorial layouts, product-focused pages, brand storytelling, and clear shopping paths.",

    designProcess:
      "I designed this concept around the needs of a small artisan home decor brand: strong visual identity, product discovery, brand storytelling, and a calm boutique-style shopping experience. The design focuses on presenting products as curated pieces rather than generic catalog items.",
    uxDecisions: [
      "Used an editorial-style layout to make the shop feel more curated and premium.",
      "Separated product, category, story, FAQ, and contact screens to keep browsing clear and focused.",
      "Added brand storytelling sections to make the shop feel personal and trustworthy.",
      "Kept the visual direction warm, minimal, and product-focused so the handmade/decor items remain the main focus.",
      "Designed desktop screens first as a polished concept, with responsive development planned as a future step.",
    ],

    nextSteps: [
      "Create responsive tablet and mobile layouts.",
      "Build the concept as a frontend e-commerce demo.",
      "Add product data structure and filtering.",
      "Connect product pages to dynamic routing.",
      "Explore cart and checkout flow as a later phase.",
    ],

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

    image: "/artisan-shop-main.webp",
    imageAlt: "Artisan shop website design preview",

    wireframes: [
      {
        src: "/artisan-shop-landing-hero-wireframe.webp",
        alt: "Artisan shop landing page hero wireframe",
      },

      {
        src: "/artisan-shop-featured-products-wireframe.webp",
        alt: "Artisan shop featured products wireframe",
      },

      {
        src: "/artisan-shop-product-page-wireframe.webp",
        alt: "Artisan shop product page wireframe",
      },

      {
        src: "/artisan-shop-product-wireframe.webp",
        alt: "Artisan shop product wireframe",
      },

      {
        src: "/artisan-shop-contact-wireframe.webp",
        alt: "Artisan shop contact page wireframe",
      },

      {
        src: "/artisan-shop-review-newsletter-wireframe.webp",
        alt: "Artisan shop reviews and newsletter wireframe",
      },

      {
        src: "/artisan-shop-FAQs-wireframe.webp",
        alt: "Artisan shop FAQs wireframe",
      },
    ],

    gallery: [
      {
        src: "/artisan-shop-about-us.webp",
        alt: "Artisan shop about us design preview",
      },

      {
        src: "/artisan-shop-product-preview.webp",
        alt: "Artisan shop product design preview",
      },
    ],

    sliderGallery: [
      {
        src: "/artisan-shop-homepage.webp",
        alt: "Artisan shop homepage design preview",
      },

      {
        src: "/artisan-shop-products-list.webp",
        alt: "Artisan shop products list design preview",
      },

      {
        src: "/artisan-shop-product-page.webp",
        alt: "Artisan shop product page design preview",
      },

      {
        src: "/artisan-shop-story.webp",
        alt: "Artisan shop our story page design preview",
      },

      {
        src: "/artisan-shop-contact-page.webp",
        alt: "Artisan shop contact page design preview",
      },

      {
        src: "/artisan-shop-about-us-faqs-page.webp",
        alt: "Artisan shop FAQs page design preview",
      },

      {
        src: "/artisan-shop-nav-menu-open.webp",
        alt: "Artisan shop navigation menu design preview",
      },
    ],
  },

  {
    id: "wildcatworks",
    title: "WildcatWorks",
    year: "2023",
    type: "Concept app",
    status: "planned",
    categories: ["ux", "ongoing"],
    featured: false,

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

    mainRole: "UX/UI Designer",

    problem:
      "Oilfield calculations can be scattered across spreadsheets, notes, and manuals, which slows down field workflows and increases the chance of input mistakes.",
    solution:
      "A structured calculator app with formula categories, guided inputs, unit conversion, saved history, and learning/reference content.",
    designProcess:
      "I planned WildcatWorks as a practical field-focused calculator app for oilfield workflows. The design direction started from organizing complex formulas into clearer categories, reducing manual lookup, and making calculations easier to access during real work situations.",
    uxDecisions: [
      "Grouped formulas by asset type and workflow context to make lookup faster.",
      "Planned guided calculation flows to reduce input mistakes.",
      "Included saved history planning so users can review previous calculations.",
      "Added unit conversion as a core feature because field data often uses mixed units.",
      "Planned offline and online usage because field conditions may not always have reliable connection.",
    ],

    nextSteps: [
      "Refine formula categories and calculation flows.",
      "Validate formulas and edge cases before development.",
      "Create updated mobile UI screens.",
      "Build a first MVP with core calculators and unit conversion.",
      "Add saved history, reference content, and offline support later.",
    ],

    uxPlanning:
      "The app is planned around formula discovery, guided inputs, unit conversion, calculation history, and reference material. The goal is to make technical oilfield calculations easier to find, repeat, and understand without relying on scattered notes or spreadsheets.",
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

    image: "/wildcatworks-hero.webp",
    imageAlt: "WildcatWorks app dashboard preview",

    wireframes: [
      {
        src: "/wildcatworks-dashboard-wireframe.webp",
        alt: "WildcatWorks app dashboard wireframe",
      },

      {
        src: "/wildcatworks-formula-calculation-wireframe.webp",
        alt: "WildcatWorks app formula calculation wireframe",
      },

      {
        src: "/wildcatworks-unit-conversion-wireframe.webp",
        alt: "WildcatWorks app unit conversion wireframe",
      },

      {
        src: "/wildcatworks-saved-results-wireframe.webp",
        alt: "WildcatWorks app saved calculation results wireframe",
      },

      {
        src: "/wildcatworks-assets-wireframe.webp",
        alt: "WildcatWorks app assets wireframe",
      },

      {
        src: "/wildcatworks-account-wireframe.webp",
        alt: "WildcatWorks app user account wireframe",
      },

      {
        src: "/wildcatworks-interactive-unit-wireframe.webp",
        alt: "WildcatWorks app interactive unit conversions wireframe",
      },
    ],

    sliderGallery: [
      {
        src: "/wildcatworks-dashboard-logged-in-user-online-screen.png",
        alt: "WildcatWorks dashboard for logged-in online user screen",
      },

      {
        src: "/wildcatworks-formula-calculation-logged-in-user-online-screen.png",
        alt: "WildcatWorks formula calculation for logged-in online user screen",
      },

      {
        src: "/wildcatworks-save-calculation-result-logged-in-online-screen.png",
        alt: "WildcatWorks save calculation result for logged-in online user screen",
      },

      {
        src: "/wildcatworks-saved-calculation-result-logged-in-online-screen.png",
        alt: "WildcatWorks saved calculation result for logged-in online user screen",
      },

      {
        src: "/wildcatworks-single-unit-conversion-logged-in-online-screen.png",
        alt: "WildcatWorks single unit conversion for logged-in online user screen",
      },

      {
        src: "/wildcatworks-batch-units-conversion-logged-in-online-screen.png",
        alt: "WildcatWorks batch unit conversion for logged-in online user screen",
      },

      {
        src: "/wildcatworks-multiple-units-conversion-logged-in-online-screen.png",
        alt: "WildcatWorks multiple unit conversion for logged-in online user screen",
      },

      {
        src: "/wildcatworks-account-management-logged-in-online-screen.png",
        alt: "WildcatWorks account management for logged-in online user screen",
      },

      {
        src: "/wildcatworks-recent-calculation-result-logged-in-online-screen.png",
        alt: "WildcatWorks recent calculations for logged-in online user screen",
      },

      {
        src: "/wildcatworks-interactive-unit-conversion-dashboard-logged-in-online-screen.png",
        alt: "WildcatWorks interactive unit conversion dashboard for logged-in online user screen",
      },

      {
        src: "/wildcatworks-interactive-unit-conversion-tool-logged-in-online-screen.png",
        alt: "WildcatWorks interactive unit conversion tool for logged-in online user screen",
      },

      {
        src: "/wildcatworks-assets-logged-in-online-screen.png",
        alt: "WildcatWorks assets for logged-in online user screen",
      },

      {
        src: "/wildcatworks-formula-list-logged-in-online-screen.png",
        alt: "WildcatWorks formula list for logged-in online user screen",
      },
    ],

    gallery: [
      {
        src: "/wildcatworks-formula-calculation-mockup.webp",
        alt: "WildcatWorks formula calculation screen mockup",
      },

      {
        src: "/wildcatworks-dashboard-mockup.webp",
        alt: "WildcatWorks dashboard screen mockup",
      },
    ],
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

export default projects;
