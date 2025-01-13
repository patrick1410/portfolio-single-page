import "./Intro.css";
import profilePicture from "../../assets/pf.jpg";
import { useState } from "react";
import {
  Box,
  Avatar,
  Text,
  HStack,
  Button,
  Flex,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import SplitText from "../split-text/SplitText";
import resume from "../../assets/resume.pdf";
import { Download } from "lucide-react";
import ShinyText from "../shiny-text/ShinyText";
import { useObserver } from "../../hooks/useObserver";

type IntroProps = {
  introRef: React.RefObject<HTMLDivElement>;
};

export const Intro = ({ introRef }: IntroProps) => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const [startSplitText, setStartSplitText] = useState(false);

  const inView = useObserver(introRef);

  // Trigger the SplitText component after HStack animation
  const handleStartSplitText = () => {
    setStartSplitText(true);
  };

  return (
    <Box
      ref={introRef}
      position="relative"
      zIndex={10}
      pointerEvents="none"
      className={`animate__animated ${inView && "animate__fadeInLeft"}`}
      visibility={inView ? "visible" : "hidden"}
      pt={{ base: 10, laptop: 20 }}
    >
      <Box w={{ base: "80%", md: "60%" }} m="auto">
        <HStack
          className="animate__animated animate__fadeInLeft"
          display="flex"
          flexDir={{ base: "column", md: "row" }}
          onAnimationEnd={handleStartSplitText}
        >
          <Flex
            flexDir="column"
            alignItems="flex-start"
            w={{ base: "100%", md: "50%" }}
          >
            <Header text="Intro" />
            <Text>Hello World!</Text>
            <Text>My name is Patrick Mankaryous</Text>

            <Box height="24px" marginBottom={4}>
              {startSplitText && (
                <SplitText
                  text="And I'm a Developer"
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                  }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              )}
            </Box>

            <Box>
              <Button
                as="a"
                download
                href={resume}
                className="resume-btn"
                fontWeight={500}
                boxShadow={{
                  base: "0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(255, 255, 255, 0.8)",
                  laptop:
                    "0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(255, 255, 255, 0.4)",
                }}
                _hover={{
                  boxShadow: {
                    laptop:
                      "0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(255, 255, 255, 0.6)",
                  },
                  transform: { laptop: " translateY(-5px)" },
                }}
                letterSpacing={0.3}
                background={"transparent"}
              >
                <ShinyText
                  className="resume-text"
                  text={"Download resume"}
                  speed={isLargerThan1024 ? 5 : 2}
                />

                <Box ml={4} className="icon">
                  <Icon color="#EDF2F2" as={Download} boxSize={6} />
                </Box>
              </Button>
            </Box>
          </Flex>
          <Avatar
            mt={{ base: 20, md: 10, laptop: 0 }}
            mb={10}
            className="image"
            w={250}
            h={250}
            name="Patrick Mankaryous"
            src={profilePicture}
          />
        </HStack>
      </Box>
    </Box>
  );
};
