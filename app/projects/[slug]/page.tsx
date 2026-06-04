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
        <Box>
          <Text color="green.500" fontWeight="semibold">
            Project Case Study
          </Text>
          <Heading mt={2}>{project.name}</Heading>
          <Text mt={4} color="gray.600">
            {project.summary}
          </Text>
        </Box>

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
            <Text color="gray.600">{project.role}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Problem
            </Heading>
            <Text color="gray.600">{project.problem}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              What I Built
            </Heading>
            <Text color="gray.600">{project.solution}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Technical Challenge
            </Heading>
            <Text color="gray.600">{project.challenge}</Text>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Stack
            </Heading>
            <HStack spacing={3} flexWrap="wrap">
              {project.stack.map((item) => (
                <Box
                  key={item}
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="gray.100"
                  fontSize="sm"
                >
                  {item}
                </Box>
              ))}
            </HStack>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              Outcome
            </Heading>
            <UnorderedList color="gray.600" spacing={2}>
              {project.outcome.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Heading size="md" mb={2}>
              What I’d Improve Next
            </Heading>
            <Text color="gray.600">{project.nextStep}</Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
