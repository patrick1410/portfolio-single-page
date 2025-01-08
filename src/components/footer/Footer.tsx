import { Box, Text, Link, Icon, Center, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Center
      gridArea="footer"
      className="footer animate__animated animate__fadeInUp"
      as="footer"
      py={10}
    >
      <Box>
        <Box>
          <Text>
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
            <Icon className="github-icon" as={FaGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrick-mankaryous/"
            isExternal
          >
            <Icon className="linkedin-icon" as={FaLinkedin} />
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};
