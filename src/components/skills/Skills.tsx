import { useObserver } from "../../hooks/useObserver";
import { Box, SimpleGrid, Flex, Text, Image } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { skills } from "./skillsList";

type SkillsProps = {
  skillsRef: React.RefObject<HTMLDivElement>;
};

export const Skills = ({ skillsRef }: SkillsProps) => {
  const inView = useObserver(skillsRef);

  return (
    <Box
      ref={skillsRef}
      position="relative"
      zIndex={10}
      pointerEvents="none"
      className={`skills animate__animated ${inView && "animate__fadeInLeft"}`}
      visibility={inView ? "visible" : "hidden"}
      pt={20}
      mb={10}
    >
      <Box w={{ base: "80%", md: "60%" }} m="auto">
        <Header text="Skills" />
        <SimpleGrid
          gap={10}
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          className="skills-grid"
        >
          {skills.map(({ name, icon }) => (
            <Flex
              alignItems="center"
              bg="#EDF2F7"
              height="80px"
              px="1rem"
              py="0.5rem"
              key={name}
              boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
              borderRadius="0.5rem"
            >
              <Box>
                <Image h="48px" w="48px" src={icon} alt={name} />
              </Box>
              <Box ml="1rem">
                <Text color="#1A202C">{name}</Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
