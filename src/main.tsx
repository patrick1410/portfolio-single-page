import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Root } from "./components/root/Root.tsx";
import { Home } from "./pages/home/Home.tsx";
import { About } from "./pages/About.tsx";
import { Skills } from "./pages/Skills.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Contact } from "./pages/Contact.tsx";

const theme = extendTheme({
  styles: {
    global: {
      "*": { margin: 0, padding: 0, boxSizing: "border-box" },
      p: { color: "#FFF" },
      html: { height: "100%" },
      body: { height: "100%", overflow: "hidden" },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
