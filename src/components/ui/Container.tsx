import { Box } from "@chakra-ui/react";

type ContainerProps = {
  paddingY?: number;
  paddingX?: number;
  children: React.ReactNode;
};

export const Container = ({
  paddingY = 4,
  paddingX = 4,
  children,
}: ContainerProps) => {
  return (
    <Box px={paddingX} py={paddingY}>
      {children}
    </Box>
  );
};
