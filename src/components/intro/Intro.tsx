import profilePicture from "../../assets/pf.jpg";
import "./Intro.css";
import { useState } from "react";
import { Box, Avatar, Text, HStack, Button, Flex } from "@chakra-ui/react";
import SplitText from "../split-text/SplitText";
import { Header } from "../header/Header";
import resume from "../../assets/resume.pdf";

// CHECK THESE ANIMATIONS LATER !

type IntroProps = {
  introRef: React.RefObject<HTMLDivElement>;
};

export const Intro = ({ introRef }: IntroProps) => {
  const [startSplitText, setStartSplitText] = useState(false);
  const [startResumeBtn, setStartResumeBtn] = useState(false);

  const handleStartSplitText = () => {
    // After the last Text element is done, trigger the SplitText component
    setStartSplitText(true);
  };

  const handleStartContactBtn = () => {
    // After SplitText is done, trigger the ContactBtn
    setStartResumeBtn(true);
  };

  return (
    <Box ref={introRef} className="intro" pt={20}>
      <Box w="60%" m="auto">
        <HStack
          className="animate__animated animate__fadeInLeft"
          display="flex"
          onAnimationEnd={handleStartSplitText}
        >
          <Flex flexDir="column" alignItems="flex-start" w="50%">
            <Header text="Intro" />
            <Text>Hello World!</Text>
            <Text>My name is Patrick Mankaryous</Text>
            <div style={{ height: 24, marginBottom: 8 }}>
              {startSplitText && (
                <SplitText
                  text="And I'm a Developer"
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleStartContactBtn}
                />
              )}
            </div>
            <div style={{ height: 40 }} className="resume-wrapper">
              {startResumeBtn && (
                <Button
                  as="a"
                  download
                  href={resume}
                  className="animate__animated animate__backInUp resume-btn"
                  fontWeight={300}
                  boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
                >
                  Download resume
                </Button>
              )}
            </div>
          </Flex>
          <Avatar
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
