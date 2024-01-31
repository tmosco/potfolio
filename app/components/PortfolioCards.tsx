"use client";

import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SocialButton } from ".";
import BotTrader from "../../public/bot Trader.png";
import TstoryBook from "../../public/reactstorybook .png";
import Tuteria from "../../public/tuteria.png";
import TuteriaVTwo from "../../public/tuteriatwo.png";

type SingleCard = {
  name: string;
  image: string;
  description: string;
  website: string;
};

export function SingleCard({ name, image, description, website }: SingleCard) {
  return (
    <>
      <Center py={6}>
        <Box
          // maxW={"450px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"180px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={image} fill alt="Example" />
          </Box>
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
    website: " https://design-system.tuteria.com/",
    description: "A page that show all the design used for the Tuteria app",
    images: TstoryBook,
  },
  {
    name: "Tuteria",
    website: " https://tutors.tuteria.com/",
    description: "A page that show all the design used for the Bot Trader app",
    images: Tuteria,
  },
  {
    name: "Bot Trader Design System",
    website: "https://design-system.beeola.me/",
    description:
      "An Page that shows the design used in building the Bot Trader app.",
    images: TstoryBook,
  },
  {
    name: "Tuteria Version 2",
    website: " https://v2.tuteria.com/",
    description:
      "A Tutorial site that brings tutor and teachers together to imporve",
    images: TuteriaVTwo,
  },
  {
    name: "Bot Trader",
    website: " https://app-dev.beeola.me/#/home",
    description:
      "An Application that helps trade futures for BTC and other coins",
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
