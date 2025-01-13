import "./Footer.css";
import { useRef } from "react";
import { useObserver } from "../../hooks/useObserver";
import { Box, Text, Link, Icon, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);
  const inView = useObserver(footerRef);

  return (
    <Box
      ref={footerRef}
      position="relative"
      zIndex={10}
      pointerEvents="none"
      w={{ base: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" }}
      m="auto"
      className={`animate__animated ${inView && " animate__fadeInRight"}`}
      visibility={inView ? "visible" : "hidden"}
      py={10}
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
              color: { base: "inherit", laptop: "#6b7280 !important" },
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
              color: { base: "inherit", laptop: "#0a66c2 !important" },
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
