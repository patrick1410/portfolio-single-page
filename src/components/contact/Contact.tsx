import "./Contact.css";
import { useRef } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Center,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import { LuSendHorizontal } from "react-icons/lu";

type ContactProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export const Contact = ({ contactRef }: ContactProps) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleExpand = () => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto"; // Reset height
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`; // Set height based on content
    }
  };

  return (
    <FormControl
      as="form"
      className="contact animate__animated animate__fadeInLeft"
      pt={20}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        w={{ base: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" }}
        m="auto"
        ref={contactRef}
      >
        <Header text="Contact" />
        <FormLabel className="label" htmlFor="fullName">
          Full name:
        </FormLabel>
        <Input
          className="input"
          id="fullName"
          type="text"
          placeholder="John Doe"
          required
        />
        <FormLabel className="label" htmlFor="email">
          Email address:
        </FormLabel>
        <Input
          id="email"
          className="input"
          type="email"
          placeholder="johndoe@example.com"
          required
        />
        <FormLabel className="label" htmlFor="message">
          Message:
        </FormLabel>
        <Textarea
          id="message"
          className="input"
          overflow="hidden"
          required
          placeholder="Type your message here..."
          ref={messageRef}
          onInput={handleExpand}
          resize="none"
        />
        <Center>
          <Button
            w={{ sm: "100%", md: "80%", lg: "60%", xl: "50%" }}
            className="submit"
            type="submit"
            boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
            display="flex"
            alignItems="center"
          >
            <Box mr={4}>
              <Text
                fontWeight={500}
                letterSpacing={0.3}
                textTransform="uppercase"
                color="#1a202c"
              >
                Send
              </Text>
            </Box>
            <Box>
              <Icon color="#1a202c" as={LuSendHorizontal} boxSize={6} />
            </Box>
          </Button>
        </Center>
      </Box>
    </FormControl>
  );
};
