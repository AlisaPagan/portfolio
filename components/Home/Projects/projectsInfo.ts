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
      "Full-stack platform for discovering, reviewing, creating, and editing relaxation locations.",
    description:
      "Relax Map is a full-stack web platform where users can discover relaxation locations, read reviews, share their own places, and manage public user profiles. The project includes location browsing, filtering, content creation, editing flows, and profile-related functionality.",

    role: [
      "Full-Stack Developer",
      "Scrum Master",
      "Developed backend user endpoints for current user data and profile updates",
      "Built frontend API utilities and proxy setup for frontend-backend communication",
      "Worked on the frontend user profile experience",
      "Organized team calls, workflow, and sprint communication",
      "Collaborated with the Team Lead on code review, debugging, and final cleanup",
    ],

    mainRole: "Full-Stack Developer",

    featuredRole: [
      "Developed backend user endpoints for current user data and profile updates",
      "Built frontend API utilities and proxy setup for frontend-backend communication",
      "Worked on the frontend user profile experience",
    ],

    problem:
      "Users need a simple way to find relaxing places, compare options, read real feedback, and share their own recommendations.",
    solution:
      "A searchable relaxation location platform with reviews, profiles, and tools for creating and editing user-generated content.",

    devFocus: [
      "Relax Map was built as a full-stack team project with a Next.js frontend and an Express/MongoDB backend. My development work focused on connecting frontend features to backend data, including API utilities, proxy setup, user-related backend endpoints, and the profile update flow. I also worked on frontend UI fixes, debugging, and cleanup across location and profile-related sections.",
      "Since this was a collaborative project, part of the technical process involved keeping implementation organized across frontend and backend tasks. I helped coordinate team workflow as Scrum Master, supported code review and debugging with the Team Lead, and made sure the final user-facing experience was more consistent before deployment.",
    ],

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
      "GoRaiding is an in-progress full-stack platform for World of Warcraft players who want a better way to organize, browse, join, and manage raids outside the game. The project is inspired by OpenRaid and focuses on raid requirements, player reputation, character information, and approval-based raid participation.",

    role: [
      "Created the product idea, feature direction, and full project scope",
      "Led the mobile-first UX planning and product design for the full app experience",
      "Researched OpenRaid, World of Warcraft raid organization, and player needs",
      "Interviewed an experienced World of Warcraft player to define core use cases, pain points, and missing features",
      "Designed user flows for authentication, Blizzard account connection, character management, raid browsing, raid creation, raid applications, approvals, reviews, and user profiles",
      "Planned the full-stack architecture for users, raids, characters, raid applications, reviews, ratings, and Blizzard account integration",
      "Built the main frontend application structure with reusable UI components, layout patterns, modals, and bottom sheets",
      "Implemented mobile-first raid browsing, raid details, creation, management, and user profile interfaces",
      "Developed backend API functionality for raid organization, user data, character data, applications, reviews, and profile-related features",
      "Integrated frontend data flows with the backend using Axios and TanStack Query",
      "Implemented gated raid joining logic based on role availability, character requirements, item level, and raid status",
      "Planned and integrated Blizzard OAuth and character import functionality",
      "Coordinated project direction with two collaborators while owning the main product concept, UX direction, and core development work",
    ],
    mainRole: "UX/UI Designer / Full-Stack Developer",

    featuredRole: [
      "Product owner and main developer",
      "Designed the mobile-first UX and core user flows",
      "Built the main frontend structure and reusable UI system",
      "Planned and implemented raid organization logic",
    ],

    problem:
      "World of Warcraft players need a convenient way to organize raids outside the game while still being able to understand who is joining. In-game tools do not give raid organizers enough context about players, and older community tools like OpenRaid are no longer available. Raid leaders need clearer information about item level, role fit, raid history, and player reputation before approving participants.",

    solution:
      "GoRaiding gives players a dedicated place to create, browse, join, and manage raids with stronger player context. Raid leaders can set minimum item level requirements, review applicants, approve or reject join requests, and see player ratings. Players can connect their Blizzard account, import character information, apply for raids that match their characters, and build reputation through reviews and raid history.",

    uxPlanning:
      "The UX planning started with research into how OpenRaid worked, how World of Warcraft raiding is organized, and what information raid leaders need before accepting players. I also interviewed an experienced World of Warcraft player to understand missing features, common frustrations, and useful improvements. The planning focused on mobile-first raid discovery, fast raid previews, approval-based joining, character-aware requirements, and reducing unnecessary navigation through bottom sheets and inline confirmations.",

    designProcess:
      "I designed the mobile version first, including the sign-up flow, dashboard states with and without a connected Blizzard account, user profile, raid browsing, raid creation, raid management, character management, review flow, and gated join interactions. The interface uses bottom navigation for the main app areas and bottom sheets for raid previews, filters, creation steps, and confirmations so users can complete actions without losing their place.",

    uxDecisions: [
      "Designed mobile-first so players can browse, manage, or check raid activity quickly from anywhere.",
      "Used bottom navigation for the main app sections because it is easier to reach on mobile screens.",
      "Planned gated raid joining so users can only apply when their character, role, and item level match the raid requirements.",
      "Used bottom sheets for raid previews, filters, raid creation, and management actions to avoid sending users through too many separate pages.",
      "Added inline confirmations for actions like leaving or deleting a raid to avoid stacking modals on top of bottom sheets.",
      "Prioritized at-a-glance dashboard information for raids created by the user and raids the user joined.",
      "Included ratings and reviews so raid leaders can evaluate players even when full review details are hidden.",
    ],

    currentDevProcess: [
      "Built most of the core UI components.",
      "Built a reusable bottom sheet component for modal-like mobile interactions.",
      "Set up infinite query logic for paginated list loading.",
      "Built the pre-auth landing page.",
      "Paused active development while finishing course projects and the portfolio.",
      "Next step is finishing reusable UI components, then building login, sign-up, and core raid browsing flows.",
    ],

    nextSteps: [
      "Finish reusable UI components used across raid cards, profiles, forms, and bottom sheets.",
      "Build login and sign-up UI with basic authentication logic.",
      "Implement raid browsing and raid card components.",
      "Build raid creation and raid management flows.",
      "Create backend models and API routes for users, raids, characters, applications, and reviews.",
      "Add Blizzard OAuth and character import later in the development process.",
      "Connect item level and character requirements to raid application logic.",
    ],

    keyFeatures: [
      "Raid creation and management",
      "Approval-based raid joining",
      "Minimum item level requirements",
      "Player reviews and ratings",
      "Raid history",
      "Character previews for applicants",
      "Raid browsing filters",
      "Dashboard previews for created and joined raids",
      "Blizzard account connection and character import",
    ],

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Axios",
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

    mainRole: "Frontend Developer",

    problem:
      "Furniture shoppers need a fast, mobile-friendly way to browse products, filter options, compare details, and interact with store content without unnecessary friction.",
    solution:
      "A responsive furniture storefront with API-powered product data, interactive UI elements, notifications, ratings, and user-friendly browsing behavior.",

    devFocus: [
      "Mebleria was built as a JavaScript team project using a REST API to render product data, handle filtering, pagination, modals, and interactive page behavior. My work focused on frontend logic, responsive layout, styling fixes, and improving the user experience across product browsing and navigation interactions.",
      "The project required combining UI structure with API-driven data, so a big part of the process was making sure dynamic content worked smoothly with the visual layout. I also helped coordinate the team as Scrum Master, debug issues, and polish the final implementation before deployment.",
    ],

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
      "YogaBloom is a one-page yoga studio landing page focused on clean semantic markup, adaptive layout, optimized assets, SVG sprite icons, and structured landing page sections. The project includes sections for classes, team, gallery, about, testimonials, pricing, and footer content.",

    role: [
      "Team Lead",
      "Frontend Developer",
      "Helped organize team implementation",
      "Worked on HTML/CSS layout and responsive structure",
      "Followed project technical requirements and code quality standards",
    ],

    mainRole: "Frontend Developer",

    problem:
      "A yoga studio needs a simple landing page that explains the offer, presents classes and trainers, builds trust, and drives users toward joining a pricing package.",
    solution:
      "A structured one-page website with anchor navigation, service sections, team content, gallery, testimonials, pricing, and footer subscription/contact areas.",

    devFocus: [
      "YogaBloom was built as a responsive HTML/CSS landing page focused on clean structure, semantic markup, and accurate implementation from the design brief. The project included anchor navigation, section-based page layout, optimized images, SVG sprite icons, and responsive styling across common screen sizes.",
      "As Team Lead, I helped organize the implementation process, divide work between team members, and keep the layout consistent with the technical requirements. The main development focus was building a polished static page with reliable responsive behavior and clean front-end structure.",
    ],

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
