import { useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
// import ContactMe from "./components/ContactMe";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Menu from "./components/Shared/Menu";
import "./styles/main.css";

function App() {
  return (
    <>
      <Menu />

      <main>
        <Home />
        <AboutMe />
      </main>

      {/* 
      <Skills />
      <Projects />
      <ContactMe /> */}
    </>
  );
}

export default App;
