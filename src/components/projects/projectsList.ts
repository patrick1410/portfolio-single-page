import weatherAppSS from "../../assets/weather-app.png";
import eventAppSS from "../../assets/event-app.png";
import bookingAppSS from "../../assets/booking-management-app.png";
import buddyAppSS from "../../assets/buddy-app.png";

type projectsProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export const projects: projectsProps[] = [
  {
    image: weatherAppSS,
    title: "Weather App",
    description:
      "A weather app powered by the Weather Forecast API and Geocoding API from Open-Meteo. It provides real-time weather updates, a weekly forecast, and local time based on your GPS location. Users can also search for and set different locations to view weather and time details for those places.",
    link: "https://weather-app-rts.netlify.app/",
  },
  {
    image: eventAppSS,
    title: "Event App",
    description:
      "A CRUD app where registered users can sign in, create accounts, and manage events by creating, updating, deleting, and viewing them. Registered users can also search for events by title and sort them by category. Guests can view events, search by title and sort events by category, but they cannot perform CRUD operations.",
    link: "https://event-app-v1.netlify.app/",
  },
  {
    image: bookingAppSS,
    title: "Booking Management System",
    description:
      "A CRUD app where registered users can sign in, create accounts, search for resources and manage resources by creating, updating, deleting, and viewing them. Guests can view and search resources, but they cannot perfrom CRUD operations",
    link: "https://booking-management-system.netlify.app/",
  },
  {
    image: buddyAppSS,
    title: "BuddyApp",
    description:
      "BuddyApp (In Progress): A professional self-help chat application built with React Native as a volunteer project. It will soon launch on the App Store.",
    link: "",
  },
];
