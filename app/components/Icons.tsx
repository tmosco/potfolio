"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ReactNode } from "react";
import { FaFacebook } from "react-icons/fa6";

export const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const IconDetails = [
  {
    name: "Twitter",
    link: "https://twitter.com/tmosco",
    icon: <FaTwitter />,
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/Tmosco",
    icon: <FaFacebook />,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCiQvAscaPPPTtfNymEuLzFQ",
    icon: <FaYoutube />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tmosco5/",
    icon: <FaInstagram />,
  },
];

export const Icons = () => {
  return (
    <Stack direction={"row"} spacing={6}>
      {IconDetails.map((x, i) => (
        <SocialButton label={x.name} href={x.link}>
          {x.icon}
        </SocialButton>
      ))}
    </Stack>
  );
};
