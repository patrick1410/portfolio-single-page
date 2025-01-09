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
