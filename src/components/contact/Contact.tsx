import "./Contact.css";
import { useRef, useState } from "react";
import { useObserver } from "../../hooks/useObserver";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Center,
  Icon,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import { SendHorizonal } from "lucide-react";
import ShinyText from "../shiny-text/ShinyText";

type ContactProps = {
  contactRef: React.RefObject<HTMLDivElement>;
};

export const Contact = ({ contactRef }: ContactProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const inView = useObserver(contactRef);

  const handleExpand = () => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto"; // Reset height
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`; // Set height based on content
    }
  };

  const changeFn = (
    set: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    set(value);
  };

  console.log("Full name:", fullName);
  console.log("Email:", email);
  console.log("Message:", message);

  return (
    <FormControl
      as="form"
      ref={contactRef}
      position="relative"
      zIndex={10}
      pointerEvents="none"
      className={`animate__animated ${inView && "animate__fadeInLeft"}`}
      visibility={inView ? "visible" : "hidden"}
      pt={20}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        w={{ base: "80%", sm: "60%", md: "40%", lg: "30%", xl: "25%" }}
        m="auto"
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
          value={fullName}
          onChange={(e) => changeFn(setFullName, e.target.value)}
        />
        <FormLabel className="label" htmlFor="email">
          Email address:
        </FormLabel>
        <Input
          autoComplete="off"
          id="email"
          className="input"
          type="email"
          placeholder="johndoe@example.com"
          required
          value={email}
          onChange={(e) => changeFn(setEmail, e.target.value)}
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
          value={message}
          onChange={(e) => changeFn(setMessage, e.target.value)}
        />
        <Center>
          <Button
            w={{ sm: "100%", md: "80%", lg: "60%", xl: "50%" }}
            className="submit-btn"
            type="submit"
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
              transform: {
                laptop: "translateY(-5px)",
              },
            }}
            display="flex"
            alignItems="center"
            background={"transparent"}
          >
            <Box>
              <ShinyText className="submit-text" text="Send" speed={2} />
            </Box>
            <Box className="icon" ml={4}>
              <Icon color="#EDF2F2" as={SendHorizonal} boxSize={6} />
            </Box>
          </Button>
        </Center>
      </Box>
    </FormControl>
  );
};
