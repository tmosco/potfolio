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
      "A design system showcase for Tuteria with reusable UI patterns and component documentation.",
    stack: ["React", "TypeScript", "Storybook", "Design Systems"],
    role: "Frontend developer contributing to shared UI consistency.",
    problem:
      "Product teams needed a clearer shared reference for interface patterns and reusable components.",
    solution:
      "Built and organized a design-system experience that made components, states, and usage patterns easier to browse and reuse.",
    challenge:
      "The main challenge was keeping documentation useful for both designers and developers while maintaining consistency across components.",
    outcome: [
      "Improved discoverability of shared UI patterns.",
      "Made component reuse easier across product work.",
      "Created a cleaner reference point for visual consistency.",
    ],
    nextStep:
      "Expand the case study with contribution screenshots and examples of component decisions.",
  },
  {
    slug: "tuteria",
    name: "Tuteria",
    image: Tuteria,
    website: "https://tutors.tuteria.com/",
    summary:
      "A tutoring platform experience focused on helping learners discover and connect with qualified tutors.",
    stack: ["React", "TypeScript", "Responsive UI", "Product Design"],
    role: "Frontend engineer improving learner-facing experiences.",
    problem:
      "Users needed a smoother way to explore tutoring options and move through the platform with confidence.",
    solution:
      "Delivered interface improvements that focused on clarity, navigation, and a more approachable learning marketplace experience.",
    challenge:
      "Balancing usability improvements with the realities of an existing product and live user experience required careful iteration.",
    outcome: [
      "Improved clarity across the tutor discovery flow.",
      "Supported a more polished and approachable user experience.",
      "Contributed to a more maintainable frontend surface.",
    ],
    nextStep:
      "Document concrete metrics, UI decisions, and before-and-after screens for stronger hiring proof.",
  },
  {
    slug: "bot-trader-design-system",
    name: "Bot Trader Design System",
    image: TstoryBook,
    website: "https://design-system.beeola.me/",
    summary:
      "A design system reference for the Bot Trader product, highlighting the UI components and patterns used across the app.",
    stack: ["React", "Storybook", "Component Libraries", "Design Systems"],
    role: "Frontend developer shaping reusable product UI patterns.",
    problem:
      "The product needed a central source of truth for UI components to reduce duplication and improve consistency.",
    solution:
      "Structured a browsable design-system reference that documented core UI building blocks and usage patterns.",
    challenge:
      "Trading products often have dense interfaces, so the challenge was keeping component patterns consistent without slowing product delivery.",
    outcome: [
      "Reduced ambiguity around component usage.",
      "Created a reusable reference for faster frontend work.",
      "Improved consistency across the product experience.",
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
      "A refreshed tutoring platform built to improve discovery, usability, and the overall learning experience.",
    stack: ["Next.js", "TypeScript", "Responsive Design", "Frontend Architecture"],
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
      "A trading application for managing futures activity across BTC and other digital assets.",
    stack: ["React", "TypeScript", "Trading UI", "State Management"],
    role: "Frontend developer working on product interface and usability.",
    problem:
      "Users needed a focused interface for interacting with complex trading flows and high-signal data.",
    solution:
      "Built and refined product screens with an emphasis on clarity, UI reuse, and smoother interaction design.",
    challenge:
      "Financial interfaces can become visually dense very quickly, so the challenge was making critical information easier to scan and act on.",
    outcome: [
      "Improved UI consistency across trading flows.",
      "Supported a more usable product experience for high-context actions.",
      "Strengthened reusable frontend patterns within the app.",
    ],
    nextStep:
      "Add more concrete technical details around data handling, interaction patterns, and component structure.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
