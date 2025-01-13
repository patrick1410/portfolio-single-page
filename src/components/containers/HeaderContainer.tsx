import { Box } from "@chakra-ui/react";

type HeaderContainerProps = {
  children: React.ReactNode;
};

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return (
    <Box
      as="header"
      position="sticky"
      zIndex={20}
      pointerEvents="none"
      top={0}
      paddingTop={"1.5rem"}
    >
      {children}
    </Box>
  );
};
