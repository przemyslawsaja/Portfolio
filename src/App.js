import React, {useEffect, useRef} from 'react';
import './App.css';
import styled from "styled-components";
import Navigation from "./components/Molecules/Navigation";
import Background from "./components/Organisms/Background";
import StartView from "./Views/StartView";
import About from "./Views/About";
import Stars from "./components/Atoms/SpaceUnits/Stars";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";
import Aos from "aos";
import 'aos/dist/aos.css';

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`
const Wrapper = styled.div`
 position: absolute;
`
function App() {
    const about = useRef();

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (

      <Wrapper>
          <Navigation />
          <Stars />
          <Slide >
              <StartView aboutRef={about}/>
          </Slide>
          <Slide ref={about}>
              <About />
          </Slide>
          <Slide>
              <Projects />
          </Slide>
          <Slide>
              <Contact />
          </Slide>
          <Background />
      </Wrapper>
  );
}

export default App;


