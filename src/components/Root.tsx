import Squares from "./squares-bg/Squares";
import { Navigation } from "./Navigation";
import { Outlet } from "react-router";
import { Container } from "./ui/Container";

export const Root = () => {
  return (
    <Container>
      <div className="squares-bg">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="down"
          borderColor="#008000"
          hoverFillColor="rgba(34,34,34,0.7)"
        />
      </div>
      <Navigation />
      <Outlet />
    </Container>
  );
};
