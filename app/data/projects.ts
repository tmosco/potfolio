import type { StaticImageData } from "next/image";
import BotTrader from "../../public/bot-trader.png";
import TstoryBook from "../../public/react-storybook.png";
import Tuteria from "../../public/tuteria.png";
import TuteriaVTwo from "../../public/tuteriatwo.png";

export type Project = {
  slug: string;
  name: string;
  image: StaticImageData;
  summary: string;
  website: string;
  repositoryUrl?: string;
  stack: string[];
  role: string;
  problem: string;
  solution: string;
  challenge: string;
  outcome: string[];
  nextStep: string;
};

export const projects: Project[] = [
  {
    slug: "tuteria-design-page",
    name: "Tuteria Design Page",
    image: TstoryBook,
    website: "https://design-system.tuteria.com/",
    summary:
      "A Storybook-powered design system used to document and standardize reusable UI patterns for Tuteria teams.",
    stack: ["React", "TypeScript", "Storybook", "Design Systems"],
    role: "Software developer contributing to reusable component standards.",
    problem:
      "Product teams needed a reliable shared reference for interface patterns, component states, and implementation guidelines.",
    solution:
      "Organized and maintained reusable UI patterns in a browsable system that helped improve consistency across product work.",
    challenge:
      "The challenge was keeping design documentation useful for both engineers and designers while supporting real product delivery.",
    outcome: [
      "Improved discoverability of shared UI patterns.",
      "Supported faster frontend delivery through reuse.",
      "Created a cleaner source of truth for product consistency.",
    ],
    nextStep:
      "Add screenshots and contribution notes that show how the system improved implementation quality.",
  },
  {
    slug: "tuteria",
    name: "Tuteria",
    image: Tuteria,
    website: "https://tutors.tuteria.com/",
    summary:
      "An EdTech platform serving 50,000+ registered users, where I contributed to reusable frontend features and delivery workflows.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    role: "Software developer working across product features, CI/CD, and production support.",
    problem:
      "A growing education marketplace needed reliable release workflows, reusable components, and stable user-facing features.",
    solution:
      "Built and maintained platform features, reusable component libraries, and engineering workflows that improved release quality and team efficiency.",
    challenge:
      "The hardest part was balancing ongoing product delivery with production incident response and continuous improvement across CI/CD and platform stability.",
    outcome: [
      "Supported a platform serving 50,000+ users.",
      "Reduced deployment friction with better CI/CD workflows.",
      "Resolved 30+ production incidents across an 18-month period.",
    ],
    nextStep:
      "Expand this case study with screenshots and more specific examples of feature ownership.",
  },
  {
    slug: "bot-trader-design-system",
    name: "Bot Trader Design System",
    image: TstoryBook,
    website: "https://design-system.beeola.me/",
    summary:
      "A component and design reference for the BotTrader product, used to support faster and more consistent trading UI development.",
    stack: ["React", "Storybook", "TypeScript", "Design Systems"],
    role: "Full-stack developer shaping reusable frontend patterns.",
    problem:
      "The product needed a central source of truth for UI components to reduce duplication and improve consistency.",
    solution:
      "Structured a browsable design-system reference that documented the core UI building blocks and patterns used across the app.",
    challenge:
      "Trading products often have dense interfaces, so the challenge was keeping component patterns consistent without slowing product delivery.",
    outcome: [
      "Reduced ambiguity around component usage.",
      "Created a reusable reference for faster UI delivery.",
      "Improved consistency across trading experiences.",
    ],
    nextStep:
      "Add examples showing how design-system decisions mapped to production screens.",
  },
  {
    slug: "tuteria-version-2",
    name: "Tuteria Version 2",
    image: TuteriaVTwo,
    website: "https://v2.tuteria.com/",
    summary:
      "A refreshed tutoring experience focused on clearer navigation, stronger usability, and a more modern product presentation.",
    stack: ["React", "TypeScript", "Responsive Design", "Frontend Architecture"],
    role: "Frontend developer contributing to a more modern product experience.",
    problem:
      "A newer platform version needed a cleaner, more intuitive experience for both exploration and engagement.",
    solution:
      "Helped shape a refreshed interface focused on usability, modern frontend structure, and a better content flow.",
    challenge:
      "Refreshing a product experience without losing familiarity for existing users meant being careful about information hierarchy and navigation.",
    outcome: [
      "Delivered a more modern presentation layer.",
      "Improved the overall experience for discovering platform value.",
      "Supported a stronger foundation for future product changes.",
    ],
    nextStep:
      "Add performance notes and implementation specifics to strengthen the case study.",
  },
  {
    slug: "bot-trader",
    name: "Bot Trader",
    image: BotTrader,
    website: "https://app-dev.beeola.me/#/home",
    summary:
      "A real-time trading dashboard serving 500+ active users, built across React frontend and Python-backed services.",
    stack: ["React", "Python", "TypeScript", "Financial APIs"],
    role: "Full-stack developer working across frontend, backend integrations, and technical documentation.",
    problem:
      "Users needed timely access to trading data and a UI that could support high-context, fast-moving financial workflows.",
    solution:
      "Built and maintained dashboard experiences, integrated external financial APIs, and documented the data flow architecture supporting the product.",
    challenge:
      "The main challenge was reducing cross-service bugs and latency while keeping the trading experience usable and reliable.",
    outcome: [
      "Supported 500+ active users with real-time dashboard functionality.",
      "Integrated 3 external financial APIs.",
      "Reduced latency on important dashboard views through bug fixes and integration improvements.",
    ],
    nextStep:
      "Add architecture visuals and more detail on backend service coordination.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
