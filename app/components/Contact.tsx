"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
  Toast,
  VStack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


import ContactPic from "../../public/contact.jpg";
import { useEffect, useState } from "react";
import { Icons, TextHeadings } from ".";

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

type FieldsErrors = {
  [key: string]: boolean;
};
type inputFieldProps = {
  [key: string]: string;
};

export const Contact = () => {
  const [inputField, setInputField] = useState<inputFieldProps>({});
  const [fieldErrors, setFieldErrors] = useState<FieldsErrors>({});

  console.log(fieldErrors);
  console.log(inputField);
  const toast = useToast();

  const onSubmit = () => {
    const fieldsErrors: FieldsErrors = {};
    let hasError = false;

    const fieldsToValidate = ["name", "email", "message"];

    fieldsToValidate.forEach((field) => {
      const value = inputField[field];
      const isEmpty = !value || value.trim() === "";
      fieldsErrors[field] = isEmpty;

      if (isEmpty) {
        hasError = true;
      }
    });

    setFieldErrors(fieldsErrors);

    if (hasError) {
      console.log("Form has errors. Submission aborted.");
    } else {
      toast({
        title: "Message Sent",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setInputField({ name: "", email: "", message: "" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ): void => {
    e.preventDefault();
    setInputField((prevInputField) => ({
      ...prevInputField,
      [field]: e.target.value,
    }));
  };

  function InputField({ field }: { field: string }) {
    return (
      <FormControl id={field} isRequired isInvalid={fieldErrors[field]}>
        <FormLabel>{field}</FormLabel>
        {field !== "message" ? (
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
              type={field}
              onChange={(e) => handleInputChange(e, field)}
              size="md"
            />
            {fieldErrors[inputField.name] && (
              <FormErrorMessage>{`${field} is required.`}</FormErrorMessage>
            )}
          </InputGroup>
        ) : (
          <>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: "gray.300",
              }}
              placeholder="Message"
              value={inputField[field]}
              onChange={(e) => handleInputChange(e, field)}
            />
            {fieldErrors[inputField.name] && (
              <FormErrorMessage>{`${field} is required.`}</FormErrorMessage>
            )}
          </>
        )}
      </FormControl>
    );
  }

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
                  {InputField({ field: "name" })}
                  {InputField({ field: "email" })}
                  {InputField({ field: "message" })}

                  <FormControl id="submit" float="right">
                    <Button
                      color="#DCE2FF"
                      variant="solid"
                      bg="#0D74FF"
                      _hover={{}}
                      onClick={() => {
                        onSubmit();
                      }}
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
