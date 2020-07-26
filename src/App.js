import React, {useEffect, useRef} from 'react';
import './App.css';
import styled from "styled-components";
import Navigation from "./components/Organisms/navigation";
import Background from "./components/Molecules/background";
import StartView from "./Views/StartView";
import About from "./Views/About";
import Stars from "./components/Molecules/Stars";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import Aos from "aos";
import 'aos/dist/aos.css';

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`
//TODO: Make fixed icons on right sight to linkedin,github, and cv download
//TODO: Animate loading
//TODO: Animate appearing elements on page + onscroll
//TODO:

function App() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
      <>
          <Navigation />
          <Stars />
          <Slide> <StartView /> </Slide>
          <Slide> <About aos="fade-right"/> </Slide>
          <Slide> <Projects aos="fade-left"/> </Slide>
          <Slide> <Contact aos="fade-down"/> </Slide>
          <Background />
      </>
  );
}

export default App;
