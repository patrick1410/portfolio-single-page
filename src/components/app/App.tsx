import { Box } from "@chakra-ui/react";
import Crosshair from "../crosshair/Crosshair";
import Squares from "../squares-bg/Squares";
import { Navigation } from "../navigation/Navigation";
import { Intro } from "../intro/Intro";
import { Footer } from "../footer/Footer";
import { useRef } from "react";
import { Skills } from "../skills/Skills";

export const App = () => {
  const containerRef = useRef(null);

  // Navigation refs
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section: string) => {
    const refMap = {
      introRef,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
    };

    const targetRef = refMap[section];

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="app" ref={containerRef}>
      <Crosshair containerRef={containerRef} color="#DC143C" />
      <Box className="squares-bg">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down"
          borderColor="#008000"
          hoverFillColor="rgba(34,34,34,0.7)"
        />
      </Box>
      <Navigation handleScroll={handleScroll} />
      <Intro introRef={introRef} />
      <Skills skillsRef={skillsRef} />
      <Footer />
    </Box>
  );
};
