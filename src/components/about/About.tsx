import "./About.css";
import { Box, Text } from "@chakra-ui/react";
import { Header } from "../header/Header";

type AboutProps = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

export const About = ({ aboutRef }: AboutProps) => {
  return (
    <Box
      ref={aboutRef}
      className="about animate__animated animate__fadeInRight"
      pt={20}
    >
      <Box w="60%" m="auto">
        <Header text="About" />
        <Box w="75%" mb={10}>
          <Text mb={2}>
            Hi, I'm Patrick, a dedicated software developer from Amsterdam 💻📍.
            I have a passion for creating innovative and efficient solutions
            through code, and I love to continuously learn and improve my skills
            in the ever-evolving field of technology.
          </Text>
          <Text mb={2}>
            When I'm not <span style={{ fontWeight: "bold" }}>!coding</span> 🤣,
            you can find me indulging in my other passions—gaming 🎮 and cooking
            👨‍🍳. Gaming allows me to unwind while also honing my problem-solving
            and strategic thinking skills. On the other hand, cooking lets me
            get creative in the kitchen, experimenting with new recipes and
            flavors.
          </Text>
          <Text mb={2}>
            Whether I'm writing code, conquering virtual worlds, or whipping up
            a delicious meal, I always strive for excellence and enjoy
            challenging myself to learn something new every day.
          </Text>
          <Text>
            Feel free to reach out if you'd like to collaborate, chat, or share
            ideas 🚀!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
