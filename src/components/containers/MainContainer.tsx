import { Box } from "@chakra-ui/react";

type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <Box as="main">{children}</Box>;
};
