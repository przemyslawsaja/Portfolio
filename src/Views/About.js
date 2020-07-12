import React from 'react';
import styled from "styled-components";
import BottomWave from '../assets/waves/aboutWave_1.svg'
import TopWave from '../assets/waves/aboutWave_2.svg'
import Title from '../components/Title/Title'
import Wave from "../components/Wave/Wave";

const AboutContext = styled.div`
  text-align: center;
  font-size: 1.8em;
  width: 40em;
  margin: 2em auto;
`
const About = () => {
    return (
        <>
            <Wave src={TopWave} position="top" />
            <Wave src={BottomWave} />

        <Title> About me </Title>
            <AboutContext>
                I study computer science in a
                non-stationary system and
                I'm willing to take on a full-time
                job. I am motivated and willing
                to learn. I am an independent
                person and very creative, which
                will certainly result in new
                technological solutions in the
                realized projects. I'm willing to take on a full-time
                job. I am motivated and willing
                to learn. I am an independent
                person and very creative, which
                will certainly result in new
                technological solutions in the
                realized projects.
                Here are a few technologies I've been working with recently:
                <ul>
                    <li> HTML & CSS </li>
                    <li> SASS </li>
                    <li> BOOTSTRAP </li>
                    <li> Javascript(ES6+) </li>
                    <li> React </li>
                    <li> Redux </li>
                </ul>
            </AboutContext>


        </>
    );
};

export default About;