import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Project Case Study`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container maxW="4xl" py={32}>
      <Stack spacing={8}>
        <Stack
          spacing={6}
          borderWidth="1px"
          borderColor="chakra-border-color"
          borderRadius="2xl"
          overflow="hidden"
          bg="chakra-subtle-bg"
        >
          <Box position="relative" minH={{ base: "240px", md: "360px" }}>
            <Image
              src={project.image}
              alt={`${project.name} case study preview`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          <Stack spacing={4} px={{ base: 6, md: 8 }} pb={{ base: 6, md: 8 }}>
            <Text color="green.500" fontWeight="semibold" letterSpacing="wide">
              Project Case Study
            </Text>
            <Heading>{project.name}</Heading>
            <Text color="chakra-subtle-text" fontSize="lg">
              {project.summary}
            </Text>
            <HStack spacing={3} flexWrap="wrap">
              {project.stack.map((item) => (
                <Box
                  key={item}
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="whiteAlpha.700"
                  _dark={{ bg: "whiteAlpha.200" }}
                  fontSize="sm"
                >
                  {item}
                </Box>
              ))}
            </HStack>
          </Stack>
        </Stack>

        <HStack spacing={4} flexWrap="wrap">
          <Button as={Link} href="/" variant="outline">
            Back to Portfolio
          </Button>
          <Button
            as="a"
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="green"
          >
            View Live Project
          </Button>
          {project.repositoryUrl ? (
            <Button
              as="a"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              View Repository
            </Button>
          ) : null}
        </HStack>

        <Divider />

        <Stack spacing={6}>
          <Box>
            <Heading size="md" mb={2}>
              Role
            </Heading>
            <Text color="chakra-subtle-text">{project.role}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Problem
            </Heading>
            <Text color="chakra-subtle-text">{project.problem}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              What I Built
            </Heading>
            <Text color="chakra-subtle-text">{project.solution}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Technical Challenge
            </Heading>
            <Text color="chakra-subtle-text">{project.challenge}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Outcome
            </Heading>
            <UnorderedList color="chakra-subtle-text" spacing={2}>
              {project.outcome.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              What I’d Improve Next
            </Heading>
            <Text color="chakra-subtle-text">{project.nextStep}</Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
