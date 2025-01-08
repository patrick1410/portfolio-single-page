import { UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";
import "./Navigation.css";

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
        {refs.map(({ name, ref }) => (
          <ListItem key={name}>
            <Link onClick={() => handleScroll(ref)}>{name}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};
