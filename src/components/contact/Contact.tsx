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
} from "@chakra-ui/react";
import { Header } from "../header/Header";

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
      <Box w="25%" m="auto" ref={contactRef}>
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
            w="50%"
            className="submit"
            type="submit"
            fontWeight={300}
            boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
          >
            Send
          </Button>
        </Center>
      </Box>
    </FormControl>
  );
};
