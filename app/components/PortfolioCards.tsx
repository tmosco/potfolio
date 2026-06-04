"use client";

import {
  Box,
  Button,
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
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SocialButton } from ".";
import { projects } from "../data/projects";

type SingleCard = {
  slug: string;
  name: string;
  image: StaticImageData;
  description: string;
  website: string;
  stack: string[];
};

export function SingleCard({
  slug,
  name,
  image,
  description,
  website,
  stack,
}: SingleCard) {
  return (
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
        <Stack spacing={4}>
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

          <HStack flexWrap="wrap" spacing={2}>
            {stack.slice(0, 3).map((item) => (
              <Text
                key={item}
                fontSize="xs"
                color="green.600"
                bg="green.50"
                px={2}
                py={1}
                borderRadius="md"
              >
                {item}
              </Text>
            ))}
          </HStack>

          <HStack justifyContent="space-between">
            <Button as={Link} href={`/projects/${slug}`} variant="outline" size="sm">
              Case Study
            </Button>
            <chakra.a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              color="blue.500"
            >
              Live Demo
            </chakra.a>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}

export const TextHeadings = ({ name = "Heading" }) => {
  return (
    <Center>
      <Heading>{name}</Heading>
    </Center>
  );
};

export const PortfolioCards = () => {
  return (
    <>
      <Divider id="projects" my={10} />
      <Box maxW="5xl" mx="auto" position={"relative"} mt={"100px"}>
        <TextHeadings name={"My Projects"} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {projects.map((card, i) => (
            <SingleCard
              key={`${card.name}-${i}`}
              slug={card.slug}
              name={card.name}
              image={card.image}
              description={card.summary}
              website={card.website}
              stack={card.stack}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
