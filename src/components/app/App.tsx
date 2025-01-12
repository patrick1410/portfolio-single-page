import "./App.css";
import { useRef } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Crosshair from "../crosshair/Crosshair";
import Squares from "../squares-bg/Squares";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Navigation } from "../navigation/Navigation";
import { MainContainer } from "../containers/MainContainer";
import { Intro } from "../intro/Intro";
import { About } from "../about/About";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { FooterContainer } from "../containers/FooterContainer";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";

export const App = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const containerRef = useRef(null);

  // Navigation refs
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
      introRef,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
    };

    const targetRef = refMap[section];

    if (targetRef && targetRef.current) {
      const { top } = targetRef.current.getBoundingClientRect();
      const offset = 20; // Adjust this value to match the height of your fixed element (like a nav bar)

      window.scrollTo({
        top: top + window.scrollY - offset, // Add the offset to scroll above the element
        behavior: "smooth",
      });

      if (section === "introRef") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Box className="app" ref={containerRef}>
      {/* Disable Crosshair on smaller screens */}
      {isLargerThan1024 && (
        <Crosshair containerRef={containerRef} color="#DC143C" />
      )}

      {/* Canvas */}
      <Box className="squares-bg">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down"
          borderColor="#008000"
          hoverFillColor="rgba(34,34,34,0.7)"
        />
      </Box>

      {/* Header Section*/}
      <HeaderContainer>
        <Navigation handleScroll={handleScroll} />
      </HeaderContainer>

      {/* Main Section */}
      <MainContainer>
        <Intro introRef={introRef} />
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
      </MainContainer>

      {/* Footer Section */}
      <FooterContainer>
        <Contact contactRef={contactRef} />
        <Footer />
      </FooterContainer>
    </Box>
  );
};
