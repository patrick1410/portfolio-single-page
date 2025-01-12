import "./Projects.css";
import { Box, SimpleGrid, Text, Image, Link } from "@chakra-ui/react";
import { Header } from "../header/Header";
import weatherAppSS from "../../assets/weather-app.png";
import eventAppSS from "../../assets/event-app.png";
import bookingAppSS from "../../assets/booking-management-app.png";
import buddyAppSS from "../../assets/buddy-app.png";

type ProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

const exampleProjects = [
  {
    image: weatherAppSS,
    title: "Weather App",
    description:
      "This app uses the Weather Forecast API and Geocoding API from Open-Meteo. It provides: Current weather conditions, Weekly weather forecast, Local time based on your GPS location. You can also search for and set different locations to see weather and time information for those places.",
    link: "https://weather-app-rts.netlify.app/",
  },
  {
    image: eventAppSS,
    title: "Event App",
    description:
      "The app allows users to login and create an account. Registered users can create, view, update, and delete events, they can also search for events by title and sort them by category. Guests can view events, search by title and sort events by category, but they cannot create, update, or delete events.",
    link: "https://event-app-v1.netlify.app/",
  },
  {
    image: bookingAppSS,
    title: "Booking Management System",
    description:
      "The app allows users to login and create new user accounts. Logged-in users can perform CRUD operations on resources and search them. Guests can view resources, search resources, but they cannot create, update, or delete resources.",
    link: "https://booking-management-system.netlify.app/",
  },
  {
    image: buddyAppSS,
    title: "BuddyApp",
    description:
      "Chat App (In Progress): A professional self-help chat application built with React Native as a volunteer project. It will soon launch on the App Store.",
    link: "TBA",
  },
];

export const Projects = ({ projectsRef }: ProjectsProps) => {
  return (
    <Box
      ref={projectsRef}
      className="projects animate__animated animate__fadeInRight"
      pt={{ base: 3, laptop: 20 }}
      mb={{ base: 10, laptop: 0 }}
    >
      <Box w={{ base: "80%", md: "60%" }} m="auto">
        <Header text="Projects" />
        <SimpleGrid gap={10} columns={{ base: 1, xl: 2 }}>
          {exampleProjects.map(({ image, title, description, link }) => (
            <Box
              bg="#EDF2F7"
              maxWidth={600}
              minH={400}
              display="flex"
              flexDir="column"
              borderRadius={15}
              boxShadow="-4px 6px 15px rgba(255, 255, 255, 0.5)"
              p={4}
              key={title}
            >
              <Text className="text" textAlign="center">
                {title}
              </Text>
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Link href={link} pointerEvents="auto">
                  <Image
                    src={image}
                    alt={title}
                    w={title === "BuddyApp" ? 175 : 500}
                    h={title === "BuddyApp" ? 400 : 300}
                    borderRadius={15}
                    className="project-image"
                  />
                </Link>
              </Box>
              <Text className="text">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
