"use client";

import {
  Box,
  Center,
  chakra,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SocialButton } from ".";
import BotTrader from "../../public/bot-trader.png";
import TstoryBook from "../../public/react-storybook.png";
import Tuteria from "../../public/tuteria.png";
import TuteriaVTwo from "../../public/tuteriatwo.png";

type SingleCard = {
  name: string;
  image: StaticImageData;
  description: string;
  website: string;
};

export function SingleCard({ name, image, description, website }: SingleCard) {
  return (
    <>
      <Center py={6}>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <chakra.a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            display={"block"}
          >
            <Box
              bg={"gray.100"}
              mt={-6}
              mx={[-6, "auto", -6]}
              mb={7}
              pos={"relative"}
            >
              <Image src={image} alt={`${name} project preview`} />
            </Box>
          </chakra.a>
          <Stack>
            <HStack justifyContent={"space-between"}>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {name}
              </Heading>

              <SocialButton label={"Sites"} href={website}>
                <FaExternalLinkAlt />
              </SocialButton>
            </HStack>
            <Text color={"gray.500"}>{description}</Text>
          </Stack>
        </Box>
      </Center>
    </>
  );
}

export const TextHeadings = ({ name = "Heading" }) => {
  return (
    <>
      <Center>
        <Heading>{name}</Heading>
      </Center>
    </>
  );
};

const PortfolioDetails = [
  {
    name: "Tuteria Design Page",
    website: "https://design-system.tuteria.com/",
    description:
      "A design system showcase for Tuteria with reusable UI patterns and component documentation.",
    images: TstoryBook,
  },
  {
    name: "Tuteria",
    website: "https://tutors.tuteria.com/",
    description:
      "A tutoring platform experience focused on helping learners discover and connect with qualified tutors.",
    images: Tuteria,
  },
  {
    name: "Bot Trader Design System",
    website: "https://design-system.beeola.me/",
    description:
      "A design system reference for the Bot Trader product, highlighting the UI components and patterns used across the app.",
    images: TstoryBook,
  },
  {
    name: "Tuteria Version 2",
    website: "https://v2.tuteria.com/",
    description:
      "A refreshed tutoring platform built to improve discovery, usability, and the overall learning experience.",
    images: TuteriaVTwo,
  },
  {
    name: "Bot Trader",
    website: "https://app-dev.beeola.me/#/home",
    description:
      "A trading application for managing futures activity across BTC and other digital assets.",
    images: BotTrader,
  },
];

export const PortfolioCards = () => {
  return (
    <>
      <Divider id="projects" my={10} />
      <Box maxW="5xl" mx="auto" position={"relative"} mt={"100px"}>
        <TextHeadings name={"My Projects"} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {PortfolioDetails.map((card, i) => (
            <SingleCard
              key={`${card.name}-${i}`}
              name={card.name}
              image={card.images}
              description={card.description}
              website={card.website}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
