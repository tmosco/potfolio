"use client";
import {
  Box,
  Container,
  HStack,
  Heading,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const EducationDetails = [
  {
    title: "MSc, Information Technology for the Oil and Gas Industry",
    school: "Robert Gordon University",
    date: "February 2015 - June 2016",
  },
  {
    title: "BSc, Petroleum Engineering",
    school: "University of Ibadan",
    date: "November 2007 - December 2012",
  },
];
const CertificateDetails = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    school: "Udemy",
    date: "2023",
  },
  {
    title: "Hands-on Production Experience with CI/CD, Docker, and Linux",
    school: "Professional Practice",
    date: "2017 - Present",
  },
];

type ResumeCardProps = {
  title: string;
  details: {
    title: string;
    school?: string;
    date: string;
    company?: string;
    description?: string[];
  }[];
};

export const ResumeCard = ({ title, details }: ResumeCardProps) => {
  const cardBackground = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const secondaryText = useColorModeValue("gray.600", "gray.200");

  return (
    <>
      <Heading textAlign={"center"}> {title}</Heading>
      {details?.map((x, i) => (
        <Box
          key={`${x.title}-${i}`}
          my="20px"
          boxShadow="lg"
          borderRadius=".5rem"
          borderWidth="1px"
          borderColor={cardBorder}
        >
          <Stack spacing={2} backgroundColor={cardBackground} py={3} px={8}>
            <Heading as="h4" size="md">
              {x.title}
            </Heading>
            <HStack>
              <Text color={secondaryText}>{x.school || x.company}</Text>
              <Text color={secondaryText}>{`(${x.date})`}</Text>
            </HStack>
            {x.description && (
              <VStack align="start" w="full">
                {x.description.map((desc, i) => (
                  <UnorderedList key={i}>
                    <ListItem color={secondaryText}>{desc}</ListItem>
                  </UnorderedList>
                ))}
              </VStack>
            )}
          </Stack>
        </Box>
      ))}
    </>
  );
};

export const Education = () => {
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
          <ResumeCard title={"Education"} details={EducationDetails} />
        </Box>
        <Box>
          <ResumeCard title={"Certificate"} details={CertificateDetails} />
        </Box>
      </Container>
    </>
  );
};
