"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { TextHeadings } from ".";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const skills = [
  { name: "HTML", percent: 97, type: "front-end" },
  { name: "CSS", percent: 97, type: "front-end" },
  { name: "JAVASCRIPT", percent: 97, type: "front-end" },
  { name: "REACT", percent: 97, type: "front-end" },
  { name: "TYPESCRIPT", percent: 97, type: "front-end" },
  { name: "SASS/ SCSS", percent: 97, type: "front-end" },
  { name: "TAILWIND CSS", percent: 97, type: "front-end" },
  { name: "NEXT JS", percent: 97, type: "front-end" },
  { name: "NODE JS", percent: 97, type: "back-end" },
  { name: "MONGODB", percent: 97, type: "back-end" },
  { name: "PYTHON", percent: 97, type: "back-end" },
];

export const SkillProgress = ({ name, percent }) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Text py={3} fontSize={"small"}>
          {name}
        </Text>
        <Text py={3} fontSize={"small"}>
          {percent}
        </Text>
      </Flex>
      <Progress value={percent} size="md" colorScheme="green" />
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
          <Text> Features</Text>
          <Heading> Front-end Skills</Heading>
          {renderSkills("front-end")}
        </Box>
        <Box>
          <Text> Features</Text>
          <Heading> Back-end Skills</Heading>
          {renderSkills("back-end")}
        </Box>
      </Container>
    </>
  );
};
