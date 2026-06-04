"use client";

import {
  Box,
  Button,
  Divider,
  Stack,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Education, Experience, Skills, TextHeadings } from ".";

type InfoCardProps = {
  name: string;
  onClick: () => void;
};

type DisplayButtonComponentProps = {
  type: "education" | "skills" | "experience";
};

const DisplayButtonComponent = ({ type }: DisplayButtonComponentProps) => {
  let component;

  switch (type) {
    case "education":
      component = <Education />;
      break;
    case "skills":
      component = <Skills />;
      break;
    case "experience":
      component = <Experience />;
      break;
    default:
      component = <Education />;
  }

  return component;
};

const ResumeButton: {
  placeHolder: string;
  name: "education" | "skills" | "experience";
}[] = [
  { placeHolder: "Education", name: "education" },
  { placeHolder: "Professional Skill", name: "skills" },
  { placeHolder: "Experience", name: "experience" },
];

export const Resume = () => {
  const [buttonType, setButtonType] = useState<
    "education" | "skills" | "experience"
  >("education");

  const isMobile = useBreakpointValue(
    { base: true, lg: false },
    { ssr: true }
  );

  const InfoCard = ({ name, onClick }: InfoCardProps) => {
    const buttonBackground = useColorModeValue("white", "gray.700");
    const buttonHover = useColorModeValue("green.50", "gray.600");

    return (
      <Button
        size="md"
        height="5rem"
        width="400px"
        border="2px"
        borderColor="green.500"
        borderRadius={".5rem"}
        bg={buttonBackground}
        _hover={{ bg: buttonHover }}
        onClick={onClick}
      >
        {name}
      </Button>
    );
  };
  return (
    <>
        <Divider my={10} id="resume" />
      <Box 
      mt={"100px"}
       position={"relative"}>
        <TextHeadings name="My Resume" />
        <Box maxW="5xl" mx="auto" my={"20px"} mb={"100px"}>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {ResumeButton.map((x, i) => (
              <InfoCard
                key={i}
                name={x.placeHolder}
                onClick={() => setButtonType(x.name)}
              />
            ))}
          </Stack>

          <DisplayButtonComponent type={buttonType} />
        </Box>
      </Box>
    </>
  );
};
