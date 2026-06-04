"use client";

import { Box } from "@chakra-ui/react";
import { ResumeCard } from ".";

const JobExperienceDetails = [
  {
    title: "Software Developer",
    company: "Self-Employed (Freelance)",
    date: "June 2017 - Present",
    description: [
      "Containerized 8+ client applications with Docker to create reproducible development, staging, and production environments.",
      "Delivered 15+ full-stack web applications across education, retail, and service businesses while consistently meeting delivery milestones.",
      "Wrote setup guides, API references, and deployment runbooks for major client projects.",
      "Integrated Paystack, Flutterwave, and notification systems across multiple products to improve transaction reliability and user trust.",
    ],
  },
  {
    title: "Software Developer",
    company: "Tuteria Limited",
    date: "September 2022 - May 2024",
    description: [
      "Managed and optimized CI/CD pipelines using Jenkins and GitLab, reducing deployment time and improving release frequency.",
      "Worked extensively in Linux-based environments across backend Node.js and PostgreSQL services.",
      "Built reusable component libraries and platform features serving 50,000+ registered users.",
      "Resolved 30+ production incidents across containerized services while maintaining strong platform availability.",
    ],
  },
  {
    title: "Mobile & Full-Stack Developer",
    company: "Pennytots",
    date: "September 2024 - May 2025",
    description: [
      "Delivered mobile features in a fully remote, async environment with minimal supervision.",
      "Built 12+ reusable React Native UI components to improve consistency and reduce future build time.",
      "Integrated payment and push notification flows to improve checkout completion and re-engagement.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "BotTrader",
    date: "February 2025 - July 2025",
    description: [
      "Built and maintained a real-time trading dashboard for 500+ active users across Python backend services and React frontend.",
      "Integrated 3 external financial data APIs and resolved cross-service bugs to reduce data latency on key views.",
      "Maintained technical documentation for data flow architecture and API integration patterns.",
    ],
  },
  {
    title: "Software Developer",
    company: "GCL Hub",
    date: "August 2018 - June 2019",
    description: [
      "Developed and maintained 20+ reusable React.js components, improving UI consistency and reducing interface-related bug reports.",
      "Improved website structure and navigation, contributing to stronger session engagement after launch.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Tuteria Limited",
    date: "June 2017 - August 2018",
    description: [
      "Supported development and testing of 5 platform features, contributing to 3 successful production releases in the first 6 months.",
      "Resolved 40+ reported bugs across the web platform, improving resolution speed and reducing open backlog.",
      "Participated in code reviews and improved code quality with cleaner implementation and better documentation.",
    ],
  },
];

const ExperienceCard = () => {
  return (
    <>
      <Box mt={"50px"}>
        <ResumeCard title={"Job Experience"} details={JobExperienceDetails} />
      </Box>
    </>
  );
};

export const Experience = () => {
  return <ExperienceCard />;
};
