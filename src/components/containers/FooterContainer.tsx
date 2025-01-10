import { Box } from "@chakra-ui/react";

type FooterContainerProps = {
  children: React.ReactNode;
};

export const FooterContainer = ({ children }: FooterContainerProps) => {
  return <Box as="footer">{children}</Box>;
};
