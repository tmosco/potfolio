"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
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
  useToast,
} from "@chakra-ui/react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
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

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type FieldsErrors = Partial<Record<"name" | "email" | "message", boolean>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export const Contact = () => {
  const [inputField, setInputField] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldsErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateFields = () => {
    const nextErrors: FieldsErrors = {};
    const fieldsToValidate: ("name" | "email" | "message")[] = [
      "name",
      "email",
      "message",
    ];

    fieldsToValidate.forEach((field) => {
      nextErrors[field] = inputField[field].trim() === "";
    });

    setFieldErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFields()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputField),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ??
            "Something went wrong while sending your message."
        );
      }

      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I’ll get back to you soon.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setInputField(initialValues);
      setFieldErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.";

      toast({
        title: "Unable to send message",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormValues
  ) => {
    setInputField((prevInputField) => ({
      ...prevInputField,
      [field]: event.target.value,
    }));

    if (field !== "company") {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [field]: false,
      }));
    }
  };

  const InputField = ({ field }: { field: "name" | "email" | "message" }) => {
    const isMessage = field === "message";

    return (
      <FormControl id={field} isRequired isInvalid={fieldErrors[field]}>
        <FormLabel textTransform="capitalize">{field}</FormLabel>
        {isMessage ? (
          <Textarea
            borderColor="gray.300"
            _hover={{
              borderColor: "gray.400",
            }}
            placeholder="Tell me a bit about your project or opportunity"
            value={inputField[field]}
            onChange={(event) => handleInputChange(event, field)}
          />
        ) : (
          <InputGroup borderColor="#E0E1E7">
            <InputLeftElement pointerEvents="none">
              {field === "name" ? (
                <BsPerson color="gray.800" />
              ) : (
                <MdOutlineEmail color="gray.800" />
              )}
            </InputLeftElement>
            <Input
              value={inputField[field]}
              type={field === "email" ? "email" : "text"}
              onChange={(event) => handleInputChange(event, field)}
              size="md"
            />
          </InputGroup>
        )}
        {fieldErrors[field] ? (
          <FormErrorMessage>{`${field} is required.`}</FormErrorMessage>
        ) : null}
      </FormControl>
    );
  };

  return (
    <>
      <Divider my={5} id="contact" />
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
            <Image
              src={ContactPic}
              alt="Omotayo Oyeniyi portrait"
              height={400}
              width={400}
            />

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
                I build thoughtful web experiences with a strong focus on
                usability, maintainable code, and polished interfaces. Let’s
                build something meaningful together.
              </Text>
              <Text>
                Phone:{" "}
                <Box
                  as="a"
                  href="tel:+2349060998169"
                  color="blue.500"
                  textDecoration="underline"
                >
                  +234 906 099 8169
                </Box>
              </Text>
              <Text>
                Email:{" "}
                <Box
                  as="a"
                  href="mailto:tayotomioyeniyi@gmail.com"
                  color="blue.500"
                  textDecoration="underline"
                >
                  tayotomioyeniyi@gmail.com
                </Box>
              </Text>
              <Box>
                <Text>Find me on</Text>
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
            <Box as={"form"} mt={10} onSubmit={onSubmit}>
              <Box m={8} color="#0B0E3F">
                <VStack spacing={5}>
                  <InputField field="name" />
                  <InputField field="email" />
                  <Input
                    type="text"
                    value={inputField.company}
                    onChange={(event) => handleInputChange(event, "company")}
                    autoComplete="off"
                    tabIndex={-1}
                    position="absolute"
                    opacity={0}
                    pointerEvents="none"
                    aria-hidden="true"
                  />
                  <InputField field="message" />

                  <FormControl id="submit" float="right">
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Sending"
                      color="#DCE2FF"
                      variant="solid"
                      bg="#0D74FF"
                      _hover={{}}
                    >
                      Send Message
                    </Button>
                  </FormControl>
                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    Messages are submitted to a server endpoint. If email
                    delivery is not configured yet, you’ll get a direct email
                    fallback message.
                  </Text>
                </VStack>
              </Box>
            </Box>
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
