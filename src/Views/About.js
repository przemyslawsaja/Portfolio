import React from 'react';
import styled from "styled-components";
import BottomWave from '../assets/waves/aboutWave_1.svg'
import TopWave from '../assets/waves/aboutWave_2.svg'
import Title from '../components/Atoms/Title'
import Wave from "../components/Atoms/Wave";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const ContextWrapper = styled.section`
  position: absolute;
  bottom: 15%;
  left: 20%;
  transform: translateX(-20%);
  z-index: 1;
  text-align: center;
  font-size: 1.2em;
  width: 42em;
  margin: 2em auto;
`
const Description = styled.article`
  background-color: rgba(26, 24, 47, 0);
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px;
`
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25vw;
  margin: auto;
`
const ListTitle = styled.p`
  margin-bottom: 15px;
  font-size: 1.1em;
  color: #8838ff;
`
const StyledList = styled.ul`
  margin-top: 20px;
  list-style-type: circle;
  text-align: left;
`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
`
const About = () => {
    return (
        <Wrapper id="about">
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
                <ContextWrapper>
                    <Title> About me </Title>
                    <Description>
                        Hi! I'm a 22-year-old student of computer science living in Cracow.
                        I am an independent and very creative person.
                        From the beginning of high school I started to be interested in computer graphics.
                        I created logos, posters, business cards, 3d models etc. With time, I found out that
                        I was not fully satisfied and it was time to get to the next level. I'll admit that the
                        graphic designer background is really helpful, and I have a great deal of pleasure in creating
                        application and website designs.
                        <p>Here are a few technologies I've been working with recently:</p>
                    </Description>
                    <ListWrapper>
                        <StyledList>
                            <ListTitle> FRONT-END</ListTitle>
                            <li> HTML5 </li>
                            <li> CSS3 </li>
                            <li> SASS </li>
                            <li> FLEXBOX & GRID </li>
                            <li> BOOTSTRAP </li>
                            <li> Javascript(ES6+) </li>
                            <li> React & Redux</li>
                            <li> Hooks & Context</li>
                        </StyledList>
                        <StyledList>
                            <ListTitle> DESIGN</ListTitle>
                            <li> Adobe Photoshop</li>
                            <li> Adobe Illustrator</li>
                            <li> Adobe Xd </li>
                        </StyledList>
                    </ListWrapper>

                </ContextWrapper>
            </Wrapper>
    );
};

export default About;