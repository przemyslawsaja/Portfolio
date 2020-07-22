import React, {useRef} from 'react';
import './App.css';
import styled from "styled-components";
import Navigation from "./components/Organisms/navigation";
import Background from "./components/Molecules/background";
import StartView from "./Views/StartView";
import About from "./Views/About";
import Stars from "./components/Molecules/Stars";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import BackgroundOverlay from "./components/Atoms/BackgroundOverlay";

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`
//TODO: Make fixed icons on right sight to linkedin,github, and cv download
//TODO: Animate loading
//TODO: Animate appearing elements on page + onscroll

function App() {
    return (
      <>
          <Navigation />
          <Stars />
          <Slide> <StartView /> </Slide>
          <Slide> <About /> </Slide>
          <Slide> <Projects /> </Slide>
          <Slide> <Contact /> </Slide>
          <Background />
      </>
  );
}

export default App;

