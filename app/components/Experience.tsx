"use client";

import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { ResumeCard } from ".";

const JobExperienceDetails = [
  {
    title: "Software Developer",
    company: "Freelance",
    date: "2018 - Present",
    description: [
      " Develop end-to-end applications, integrating front-end and back-end technologies.",
      " Collaborate with cross-functional teams to deliver responsive and dynamic web solutions.",
      " Utilize TypeScript, React, Node.js, MongoDB, and other technologies for efficient development.",
    ],
  },
  {
    title: "Software Developer",
    company: "Tuteria Limited",
    date: "2022 - 2023",
    description: [
      " Collaborating with cross-functional teams, including designers, project managers, and other developers, to ensure timely project delivery.",
      "Staying up-to-date with the latest industry trends and technologies, and implementing them in projects as appropriate.",
      " Writing efficient and maintainable code, and conducting code reviews to ensure code quality.",
      " Testing and debugging code to ensure optimal performance and functionality.",
      " Providing technical support to end-users, and addressing any issues that arise.",
      "  Continuously improving and optimising website performance, speed, and security.",
    ],
  },
  {
    title: "Software Developer",
    company: "GCL Hub",
    date: "2018 - 2019",
    description: [
      " Built reusable components which align with requirements specifications with React.js.",
      "Organizing website pages to ensure user-friendly navigation and optimized functionality.",
      " Designing and developing tools to improve operational efficiency and enhance user experience.",
      " Providing comprehensive documentation for all developed code to facilitate maintenance and troubleshooting.",
      " Conducting performance tuning and optimization to improve website speed, reliability, and scalability.",
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
