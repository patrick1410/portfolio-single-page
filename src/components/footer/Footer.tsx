import "./Footer.css";
import { Box, Text, Link, Icon, Flex, useMediaQuery } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

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
          <Icon
            color={{ base: "#6b7280 !important", laptop: "#edf2f2 !important" }}
            _hover={{
              color: isLargerThan1024 ? "#6b7280 !important" : "inherit", // Apply color only if screen is larger than 1024px
            }}
            className="github-icon"
            as={FaGithub}
            boxSize={16}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/patrick-mankaryous/" isExternal>
          <Icon
            color={{ base: "#0a66c2 !important", laptop: "#edf2f2 !important" }}
            _hover={{
              color: isLargerThan1024 ? "#0a66c2 !important" : "inherit", // Apply color only if screen is larger than 1024px
            }}
            className="linkedin-icon"
            as={FaLinkedin}
            boxSize={16}
          />
        </Link>
      </Flex>
    </Box>
  );
};
