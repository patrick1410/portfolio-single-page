import "./Footer.css";
import { Box, Text, Link, Icon, Center, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Center
      className="footer animate__animated animate__fadeInUp"
      pt={20}
      pb={10}
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
            <Icon className="github-icon" as={FaGithub} boxSize={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrick-mankaryous/"
            isExternal
          >
            <Icon className="linkedin-icon" as={FaLinkedin} boxSize={16} />
          </Link>
        </Flex>
      </Box>
    </Center>
  );
};
