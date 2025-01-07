import profilePicture from "../../assets/pf.jpg";
import "./Home.css";
import { useState } from "react";
import {
  Box,
  VStack,
  Avatar,
  Text,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import SplitText from "../../components/split-text/SplitText";
import { Link } from "react-router";

export const Home = () => {
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
    <Box gridArea="main" className="home">
      <Center height="100%">
        <HStack>
          <VStack alignItems="flex-start">
            <Text className="animate__animated animate__backInDown">
              Hello World!
            </Text>
            <Text
              className="animate__animated animate__backInRight"
              onAnimationEnd={handleStartSplitText}
            >
              My name is Patrick Mankaryous
            </Text>
            <div style={{ height: 24 }}>
              {startSplitText && (
                <SplitText
                  text="And I'm a Developer"
                  delay={100}
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
                  <Link to={"/contact"}>Contact Me</Link>
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
      </Center>
    </Box>
  );
};
