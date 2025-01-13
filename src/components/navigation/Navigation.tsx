import "./Navigation.css";
import { Box, UnorderedList, ListItem, Link, Icon } from "@chakra-ui/react";
import { House, Folder, Wrench, Info, Mail } from "lucide-react";

type NavigationProps = {
  handleScroll: (section: string) => void;
};

type Section = {
  ref: string;
  icon: React.ElementType;
};

export const Navigation = ({ handleScroll }: NavigationProps) => {
  const refs: Section[] = [
    { ref: "introRef", icon: House },
    { ref: "aboutRef", icon: Info },
    { ref: "skillsRef", icon: Wrench },
    { ref: "projectsRef", icon: Folder },
    { ref: "contactRef", icon: Mail },
  ];

  return (
    <Box
      as="nav"
      className="navbar"
      w={{
        base: "90%",
        sm: "80%",
        mobile: "65%",
        md: "50%",
        lg: "40%",
        laptop: "35%",
        xl: "27.5%",
        "2xl": "20%",
      }}
      m="auto"
    >
      <UnorderedList className="list">
        {refs.map(({ ref, icon }) => (
          <ListItem
            key={ref}
            className="list-item"
            color={{ base: "#008000", laptop: "#6b7280" }}
            transition={"0.2s ease-in-out"}
            _hover={{
              transform: { laptop: "scale(1.2)" },
              color: { laptop: "#008000" },
            }}
          >
            <Link className="link" onClick={() => handleScroll(ref)}>
              <Icon as={icon} boxSize={6} />
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
