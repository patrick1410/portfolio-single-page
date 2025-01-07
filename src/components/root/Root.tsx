import Squares from "../squares-bg/Squares";
import { Navigation } from "../navigation/Navigation";
import { Outlet } from "react-router";
import { Footer } from "../footer/Footer";
import { Box } from "@chakra-ui/react";
import "./Root.css";

export const Root = () => {
  return (
    <Box className="root">
      <Box className="squares-bg">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down"
          borderColor="#008000"
          hoverFillColor="red" //rgba(34,34,34,0.7) // fix this problem later
        />
      </Box>
      <Navigation />
      <Outlet />
      <Footer />
    </Box>
  );
};
