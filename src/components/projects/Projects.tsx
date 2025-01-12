import "./Projects.css";
import { useObserver } from "../../hooks/useObserver";
import { Box, SimpleGrid, Text, Image, Link } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { projects } from "./projectsList";

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

export const Projects = ({ projectsRef }: ProjectsProps) => {
  const inView = useObserver(projectsRef);

  return (
    <Box
      ref={projectsRef}
      className={`projects animate__animated ${
        inView && "animate__fadeInRight"
      }`}
      visibility={inView ? "visible" : "hidden"}
      pt={{ base: 3, laptop: 20 }}
      mb={{ base: 10, laptop: 0 }}
    >
      <Box w={{ base: "80%", md: "60%" }} m="auto">
        <Header text="Projects" />
        <SimpleGrid gap={10} columns={{ base: 1, xl: 2 }}>
          {projects.map(({ image, title, description, link }) => (
            <Box
              bg="#EDF2F7"
              maxWidth={600}
              minH={400}
              display="flex"
              flexDir="column"
              borderRadius={15}
              boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
              p={4}
              key={title}
            >
              <Text className="text" textAlign="center">
                {title}
              </Text>
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Link href={link} pointerEvents="auto">
                  <Image
                    src={image}
                    alt={title}
                    w={title === "BuddyApp" ? 175 : 500}
                    h={title === "BuddyApp" ? 400 : 300}
                    borderRadius={15}
                    className="project-image"
                  />
                </Link>
              </Box>
              <Text className="text">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
