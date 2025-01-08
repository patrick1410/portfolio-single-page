import { Box } from "@chakra-ui/react";
import Crosshair from "../crosshair/Crosshair";
import Squares from "../squares-bg/Squares";
import { Navigation } from "../navigation/Navigation";
import { Intro } from "../intro/Intro";
import { Footer } from "../footer/Footer";
import "./App.css";
import "../squares-bg/Squares.css";
import "../navigation/Navigation.css";
import "../footer/Footer.css";
import "../intro/Intro.css";
import { useRef } from "react";
import { Test } from "../test/Test";

export const App = () => {
  const containerRef = useRef(null);
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
      <Navigation />
      <Intro />
      <Test />
      <Footer />
    </Box>
  );
};
