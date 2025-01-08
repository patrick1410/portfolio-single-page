import { Heading } from "@chakra-ui/react";

type HeaderProps = {
  text: string;
  mb?: number;
  size?: string;
  fontWeight?: number;
};

export const Header = ({
  text,
  mb = 10,
  size = "2xl",
  fontWeight = 400,
}: HeaderProps) => {
  return (
    <Heading
      fontFamily="Poppins, Arial, Helvetica, Verdana, sans-serif"
      fontWeight={fontWeight}
      mb={mb}
      color="#6b7280"
      size={size}
    >
      {text}
    </Heading>
  );
};
