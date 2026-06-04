"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Progress,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

const skills = [
  { name: "React", percent: 95, type: "front-end" },
  { name: "TypeScript", percent: 92, type: "front-end" },
  { name: "JavaScript", percent: 90, type: "front-end" },
  { name: "React Native", percent: 82, type: "front-end" },
  { name: "Tailwind CSS", percent: 84, type: "front-end" },
  { name: "Storybook", percent: 85, type: "front-end" },
  { name: "Python", percent: 88, type: "back-end" },
  { name: "Node.js", percent: 90, type: "back-end" },
  { name: "Django", percent: 82, type: "back-end" },
  { name: "Express.js", percent: 86, type: "back-end" },
  { name: "PostgreSQL", percent: 85, type: "back-end" },
  { name: "MongoDB", percent: 80, type: "back-end" },
  { name: "Docker", percent: 90, type: "systems" },
  { name: "Linux / Unix", percent: 88, type: "systems" },
  { name: "Jenkins / GitLab CI", percent: 84, type: "systems" },
  { name: "Bash Scripting", percent: 78, type: "systems" },
];

export const SkillProgress = ({
  name,
  percent,
}: {
  name: string;
  percent: number;
}) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Text py={3} fontSize={"small"}>
          {name}
        </Text>
        <Text py={3} fontSize={"small"}>
          {percent}%
        </Text>
      </Flex>
      <Progress value={percent} size="md" colorScheme="green" hasStripe />
    </>
  );
};

export const Skills = () => {
  const renderSkills = (type: string) => {
    return skills.map((skill, i) => {
      if (skill.type === type) {
        return (
          <SkillProgress key={i} name={skill.name} percent={skill.percent} />
        );
      }
      return null;
    });
  };

  return (
    <>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        spacing={10}
        columns={{ base: 1, md: 2 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Box>
          <Text>Frontend</Text>
          <Heading>UI & Client-Side</Heading>
          {renderSkills("front-end")}
        </Box>
        <Box>
          <Text>Backend</Text>
          <Heading>API & Services</Heading>
          {renderSkills("back-end")}
        </Box>
        <Box gridColumn={{ md: "1 / span 2" }}>
          <Text>Systems</Text>
          <Heading>DevOps & Tooling</Heading>
          {renderSkills("systems")}
        </Box>
      </Container>
    </>
  );
};
