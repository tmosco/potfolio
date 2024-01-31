import { Flex } from "@chakra-ui/react";
import {
  HeroSection,
  Resume,
  Footer,
  PortfolioCards,
  Contact,
} from "./components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioCards />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
