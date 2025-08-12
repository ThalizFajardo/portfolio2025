import { useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Menu from "./components/Shared/Menu";
import "./styles/main.css";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Home />
        <AboutMe />
        <Skills/>
        <Projects/>
        <ContactMe />
      </main>

    </>
  );
}

export default App;
