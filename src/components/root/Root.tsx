import Squares from "../squares-bg/Squares";
import { Navigation } from "../navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Box } from "@chakra-ui/react";
import "./Root.css";

import { useRef } from "react";
import Crosshair from "../crosshair/Crosshair";

export const Root = () => {
  const containerRef = useRef(null);

  return (
    <Box className="root" ref={containerRef}>
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
      <Outlet />
      <Footer />
    </Box>
  );
};
