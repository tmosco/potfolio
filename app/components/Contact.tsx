"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconProps,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";
import {
  MdOutlineEmail
} from "react-icons/md";

import { Icons, TextHeadings } from ".";
import ContactPic from "../../public/contact.jpg";

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export const Contact = () => {
  return (
    <>
      <Divider my={5} id="contact"/>
      <Box position={"relative"}>
        <TextHeadings name="Contact" />

        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          spacing={10}
          columns={{ base: 1, md: 2 }}
          py={{ base: 10, sm: 20, lg: 10 }}
        >
          <Box>
            <Image src={ContactPic} alt="contact" height={400} width={400} />

            <VStack
              w="400px"
              spacing={3}
              alignItems={"flex-start"}
              boxShadow={"base"}
              pl={"20px"}
            >
              <Heading lineHeight={1.1} fontSize={"4xl"}>
                Omotayo Oyeniyi
              </Heading>
              <Text>Full stack Developer</Text>
              <Text>
                Full-stack developer with a keen interest in the latest
                technology and a passion for coding. Let's collaborate to build
                innovative solutions!
              </Text>
              <Text>Phone : +2349060998169</Text>
              <Text>Email : Tayotomioyeniyi@gmail.com</Text>
              <Box>
                <Text> Find me in</Text>
              </Box>
              <Icons />
            </VStack>
          </Box>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
            boxShadow={"base"}
          >
            <Box as={"form"} mt={10}>
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <BsPerson color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineEmail color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      color="#DCE2FF"
                      variant="solid"
                      bg="#0D74FF"
                      _hover={{}}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    </>
  );
};
