import "./Footer.css";
import { Box, Text, Link, Icon, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      w={{ base: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" }}
      m="auto"
      className="footer animate__animated animate__fadeInUp"
      pt={20}
      pb={10}
    >
      <Box>
        <Text textAlign="center">
          &copy;{year} Made by{" "}
          <Link
            _hover={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/patrick-mankaryous/"
            isExternal
            pointerEvents="auto"
          >
            Patrick Mankaryous{" "}
          </Link>
          with passion and fun!
        </Text>
      </Box>
      <Flex justifyContent="space-evenly">
        <Link href="https://github.com/patrick1410" isExternal>
          <Icon className="github-icon" as={FaGithub} boxSize={16} />
        </Link>
        <Link href="https://www.linkedin.com/in/patrick-mankaryous/" isExternal>
          <Icon className="linkedin-icon" as={FaLinkedin} boxSize={16} />
        </Link>
      </Flex>
    </Box>
  );
};
