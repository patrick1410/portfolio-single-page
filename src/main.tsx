import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { App } from "./components/app/App";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Poppins, Arial, Helvetica, Verdana, sans-serif",
        fontWeight: 300,
      },
      p: { color: "#EDF2F2" },
      html: { minHeight: "100%" },
      body: { minHeight: "100%", overflowX: "hidden" },
    },
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "769px",
    lg: "960px",
    laptop: "1024",
    xl: "1200px",
    "2xl": "1536px",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
