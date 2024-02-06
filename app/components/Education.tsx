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
  VStack,
} from "@chakra-ui/react";

const EducationDetails = [
  {
    title: "Masters in Information Technology",
    school: "Robert Gordon University",
    date: "2015 - 2016",
  },
  {
    title: "B.Sc in Petroleum Engineering",
    school: "University of Ibadan",
    date: "2007 - 2012",
  },
  {
    title: "Secondary School Education",
    school: "Lighthouse International School",
    date: "2000 - 2006",
  },
];
const CertificateDetails = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    school: "Udemy",
    date: "2023",
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
  return (
    <>
      <Heading textAlign={"center"}> {title}</Heading>
      {details?.map((x, i) => (
        <Box
          key={i}
          my="20px"
          // _hover={{ backgroundColor: "blue", color: "red" }}
          boxShadow="lg"
          borderRadius=".5rem"
          cursor={"pointer"}
        >
          <Stack spacing={2} backgroundColor="grey.200" py={3} px={8}>
            <Heading as="h4" size="md">
              {x.title}
            </Heading>
            <HStack>
              <Text>{x.school || x.company}</Text>
              <Text>{`(${x.date})`}</Text>
            </HStack>
            {x.description && (
              <VStack align="start" w="full">
                {x.description.map((desc, i) => (
                  <UnorderedList key={i}>
                    <ListItem>{desc}</ListItem>
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
