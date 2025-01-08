import { Box, SimpleGrid, Flex, Text, Image } from "@chakra-ui/react";
import { Header } from "../header/Header";
import "./Skills.css";
import { skills } from "./skillsList";

export const Skills = ({ skillsRef }) => {
  return (
    <Box
      ref={skillsRef}
      className="skills animate__animated animate__fadeInLeft"
    >
      <Box w="60%" m="auto">
        <Header text="Skills" />
        <SimpleGrid gap={10} columns={4} className="skills-grid">
          {skills.map(({ name, icon }) => (
            <Flex
              alignItems="center"
              bg="#EDF2F7"
              height="80px"
              px="1rem"
              py="0.5rem"
              key={name}
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
