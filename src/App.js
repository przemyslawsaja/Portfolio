import React, {useRef} from 'react';
import './App.css';
import styled from "styled-components";
import Navigation from "./components/Molecules/navigation";
import Background from "./components/Molecules/background";
import StartView from "./Views/StartView";
import About from "./Views/About";
import Stars from "./components/Molecules/Stars";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`

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

