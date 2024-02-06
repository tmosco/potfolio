import {
  Contact,
  Footer,
  HeroSection,
  PortfolioCards,
  Resume,
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
