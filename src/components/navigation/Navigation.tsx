import { UnorderedList, ListItem, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import "./Navigation.css";

export const Navigation = () => {
  const name = "<PM/>";

  return (
    <Flex
      as="nav"
      gridArea="nav"
      justifyContent="space-around"
      alignItems="center"
    >
      <Text fontSize={32}>{name}</Text>

      <UnorderedList listStyleType="none" display="flex" flexDir="row">
        <ListItem>
          <Link to={"/"}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={"/about"}>About</Link>
        </ListItem>
        <ListItem>
          <Link to={"/skills"}>Skills</Link>
        </ListItem>
        <ListItem>
          <Link to={"/projects"}>Projects</Link>
        </ListItem>
        <ListItem>
          <Link to={"/contact"}>Contact</Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};
