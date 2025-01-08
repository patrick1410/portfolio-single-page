import profilePicture from "../../assets/pf.jpg";
import "./Intro.css";
import { useState } from "react";
import {
  Box,
  VStack,
  Avatar,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import SplitText from "../split-text/SplitText";
import { Header } from "../header/Header";

// CHECK THESE ANIMATIONS LATER !

export const Intro = ({ introRef }) => {
  const [startSplitText, setStartSplitText] = useState(false);
  const [startContactBtn, setStartContactBtn] = useState(false);

  const handleStartSplitText = () => {
    // After the last Text element is done, trigger the SplitText component
    setStartSplitText(true);
  };

  const handleStartContactBtn = () => {
    // After SplitText is done, trigger the ContactBtn
    setStartContactBtn(true);
  };

  return (
    <Box ref={introRef} className="intro" py={20} w="100%">
      <Box w="60%" m="auto">
        <HStack
          className="animate__animated animate__fadeInLeft"
          display="flex"
          onAnimationEnd={handleStartSplitText}
        >
          <VStack alignItems="flex-start" w="50%">
            <Header text="Intro" />
            <Text>Hello World!</Text>
            <Text>My name is Patrick Mankaryous</Text>
            <div style={{ height: 24 }}>
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
            <div style={{ height: 40 }}>
              {startContactBtn && (
                <Button className="animate__animated animate__backInUp contact-btn">
                  <Link>Contact Me</Link>
                </Button>
              )}
            </div>
          </VStack>
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
