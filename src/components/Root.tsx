import { Navigation } from "./Navigation";
import { Outlet } from "react-router";

export const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
