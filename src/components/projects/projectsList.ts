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
