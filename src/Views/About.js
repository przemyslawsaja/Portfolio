import React from 'react';
import styled from "styled-components";
import BottomWave from '../assets/waves/aboutWave_1.svg'
import TopWave from '../assets/waves/aboutWave_2.svg'
import Title from '../components/Title/Title'
import Wave from "../components/Wave/Wave";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 1;
  text-align: center;
  font-size: 1.2em;
  width: 40em;
  margin: 2em auto;
`
const TechList = styled.ul`

  list-style-type: none;
`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
`
const About = () => {
    return (
        <Wrapper>
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
                <ContextWrapper>
                    <Title> About me </Title>
                    I study computer science in a
                    non-stationary system and
                    I'm willing to take on a full-time
                    job. I am motivated and willing
                    to learn. I am an independent
                    person and very creative, which
                    will certainly result in new
                    technological solutions in the
                    realized projects.
                    Here are a few technologies I've been working with recently:
                    <TechList>
                        <li> HTML & CSS </li>
                        <li> SASS </li>
                        <li> BOOTSTRAP </li>
                        <li> Javascript(ES6+) </li>
                        <li> React </li>
                        <li> Redux </li>
                    </TechList>
                </ContextWrapper>
            </Wrapper>
    );
};

export default About;