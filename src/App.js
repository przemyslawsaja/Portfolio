import React from 'react';
import './App.css';
import styled from "styled-components";
import Navigation from "./components/navbar/navigation";
import Background from "./components/background/background";
import StartView from "./Views/StartView";
import About from "./Views/About";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact";

const Slide = styled.div`
  transform: rotate(0deg);
  width: 100vw;
  height: 100vh;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
`
const OuterWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms0verflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
      <>
          {/* //TODO:MAKE NAV DARKER */}
          <Navigation />
          <OuterWrapper>
              <Wrapper>
                  <Slide>
                      <StartView />
                  </Slide>
                  <Slide>
                      <About />
                  </Slide>
                  <Slide>
                      <Projects />
                  </Slide>
                  <Slide>
                      <Contact />
                  </Slide>
              </Wrapper>

          </OuterWrapper>

          <Background />

      </>
  );
}

export default App;



/*
              <OuterWrapper>
                      <Wrapper>
                          <Slide>
                              <StartView />
                          </Slide>
                          <Slide>
                              <About />
                          </Slide>
                          <Slide>
                              <Projects />
                          </Slide>
                      </Wrapper>

              </OuterWrapper>
 */