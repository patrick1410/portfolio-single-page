import "./Navigation.css";
import { useState } from "react";
import {
  UnorderedList,
  ListItem,
  Link,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type NavigationProps = {
  handleScroll: (section: string) => void;
};

export const Navigation = ({ handleScroll }: NavigationProps) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Handle when the fade-out animation ends
  const handleAnimationEnd = () => {
    if (!isOpen) {
      setAnimating(false); // Hide the component once fade-out is done
    }
  };

  // If the menu is opening, set animating to true
  if (isOpen && !animating) {
    setAnimating(true);
  }

  type Section = {
    name: string;
    ref: string;
  };

  const refs: Section[] = [
    { name: "Intro", ref: "introRef" },
    { name: "About", ref: "aboutRef" },
    { name: "Skills", ref: "skillsRef" },
    { name: "Projects", ref: "projectsRef" },
    { name: "Contact", ref: "contactRef" },
  ];

  const handleMobileClick = (ref: string) => {
    handleScroll(ref);
    setIsOpen(false);
  };

  return (
    <Flex
      as="nav"
      className="animate__animated animate__fadeInDown"
      py={{ base: 0, laptop: 10 }}
      justifyContent={{ base: "flex-end", laptop: "center" }}
    >
      {/* Mobile Icons */}
      <Box
        display={{ base: "flex", laptop: "none" }}
        mr={8}
        cursor="pointer"
        pointerEvents="auto"
        position="relative"
        width="40px"
        mt={10}
      >
        <Box
          position="absolute"
          transition="opacity 1.5s ease-in-out"
          opacity={isOpen ? 0 : 1} // Fade out when isOpen
          visibility={isOpen ? "hidden" : "visible"}
        >
          <HamburgerIcon
            onClick={() => setIsOpen(!isOpen)}
            color="#008000"
            boxSize={8}
          />
        </Box>

        <Box
          position="absolute"
          transition="opacity 1.5s ease-in-out"
          opacity={isOpen ? 1 : 0} // Fade in when isOpen
          visibility={isOpen ? "visible" : "hidden"}
        >
          <CloseIcon
            onClick={() => setIsOpen(!isOpen)}
            color="#008000"
            boxSize={8}
          />
        </Box>
      </Box>

      {/* Mobile Menu */}
      {animating && (
        <Box
          className={`animate__animated ${
            isOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
          }`}
          position="absolute"
          display={{ base: "flex", laptop: "none" }}
          p={8}
          mt={14}
          onAnimationEnd={handleAnimationEnd} // Trigger when animation ends
        >
          <UnorderedList
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            height="100%"
            style={{
              listStyle: "none",
            }}
          >
            {refs.map(({ name, ref }) => (
              <ListItem
                className="list-item"
                key={name}
                onClick={() => handleMobileClick(ref)}
                mb={4}
                mr={2}
              >
                <Link className="link">{name}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}

      {/* Desktop Menu */}
      <UnorderedList
        display={{ base: "none", laptop: "flex" }}
        listStyleType="none"
        justifyContent="space-between"
        alignItems="center"
        w="60%"
        m={0}
      >
        {refs.map(({ name, ref }) => (
          <ListItem
            className="list-item"
            transition={isLargerThan1024 ? "0.3s ease-in-out" : "none"}
            _hover={{
              transform: isLargerThan1024 ? "scale(1.2) rotate(-5deg)" : "none",
            }}
            key={name}
            onClick={() => handleScroll(ref)}
          >
            <Link className="link">{name}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};
