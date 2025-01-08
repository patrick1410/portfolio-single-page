import { UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <Flex
      as="nav"
      className="navigation animate__animated animate__fadeInDown"
      py={10}
      justifyContent="center"
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="60%"
        m={0}
      >
        <ListItem>
          <Link>Intro</Link>
        </ListItem>
        <ListItem>
          <Link>About</Link>
        </ListItem>
        <ListItem>
          <Link>Skills</Link>
        </ListItem>
        <ListItem>
          <Link>Projects</Link>
        </ListItem>
        <ListItem>
          <Link>Contact</Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
