import "./Navigation.css";
import {
  UnorderedList,
  ListItem,
  Link,
  Flex,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Squares from "../squares-bg/Squares";

type NavigationProps = {
  handleScroll: (section: string) => void;
};

export const Navigation = ({ handleScroll }: NavigationProps) => {
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
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      className="animate__animated animate__fadeInDown"
      py={10}
      justifyContent={{ base: "flex-end", md: "center" }}
    >
      {/* Mobile Menu */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        mr={8}
        pointerEvents="auto"
        w="100%"
      >
        <HamburgerIcon
          color="#008000"
          boxSize={8}
          cursor="pointer"
          onClick={onOpen}
        />
      </Box>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* Canvas BG */}
          <Box className="squares-bg">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="down"
              borderColor="#008000"
              hoverFillColor="rgba(34,34,34,0.7)"
            />
          </Box>
          <DrawerBody position="relative" zIndex={20} pointerEvents="none">
            <UnorderedList
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="flex-end"
              height="100%"
              style={{
                listStyle: "none",
              }}
            >
              {refs.map(({ name, ref }) => (
                <ListItem
                  className="list-item"
                  transition={" 0.3s ease-in-out"}
                  _hover={{ transform: "scale(1.2) rotate(5deg)" }}
                  key={name}
                  onClick={() => handleMobileClick(ref)}
                >
                  <Link className="link">{name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
          <DrawerCloseButton
            _hover={{ backgroundColor: "none" }}
            _active={{ backgroundColor: "none" }}
            as="div"
          >
            <CloseIcon
              boxSize={6}
              color="#008000"
              cursor="pointer"
              onClick={onOpen}
            />
          </DrawerCloseButton>
        </DrawerContent>
      </Drawer>

      {/* Desktop Menu */}
      <UnorderedList
        display={{ base: "none", md: "flex" }}
        listStyleType="none"
        justifyContent="space-between"
        alignItems="center"
        w="60%"
        m={0}
      >
        {refs.map(({ name, ref }) => (
          <ListItem
            className="list-item"
            transition={" 0.3s ease-in-out"}
            _hover={{ transform: "scale(1.2) rotate(-5deg)" }}
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
